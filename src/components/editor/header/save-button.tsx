"use client";

import { Button } from "@/components/ui/button";
import { upsertProject } from "@/lib/actions/projects/upsert-project";
import { upsertPost } from "@/lib/actions/posts/upsert-post";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import { extractFirstHeading } from "@/utils/get-heading";
import { extractFirstParagraph } from "@/utils/get-paragraph";
import React, { useTransition } from "react";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SaveButton = ({
  type,
  slug,
}: {
  type: "project" | "post";
  slug: string;
}) => {
  const { data } = useEditorDataContext();
  const [isPending, startTransition] = useTransition();
  const session = useSession();
  const router = useRouter();

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!data) {
      toast.error("No data available to save.");
      return;
    }

    // FIX: Not a big issue just need to fix the types here
    // @ts-ignore
    const { views, comments, ...rest } = data;

    const heading = extractFirstHeading(data.body as string)?.text as string;
    const description = extractFirstParagraph(data.body as string);

    if (type === "post") {
      if (!heading) {
        toast.error("Post must have a heading.");
        return;
      }

      if (!description || description.trim().length === 0) {
        toast.error(
          "Can&apos;t save an empty post, must have at least one paragraph. Check Help"
        );
        return;
      }
    }

    startTransition(async () => {
      try {
        let updatedData;

        if (type === "project") {
          updatedData = {
            ...rest,
            title: heading,
            description,
            body: data.body,
            slug: data.slug,
            updatedAt: new Date(),
          };

          const response = await upsertProject(slug, updatedData);
          if (response) {
            router.replace(`/${type}s/${response.slug}/edit/preview`);
            toast.success("Project Saved!");
          }
        } else if (type === "post") {
          updatedData = {
            title: heading,
            description: description,
            body: data.body,
            tags: data.tags,
            image: data.image,
            slug: data.slug,
            updatedAt: new Date(),
            userId: session.data?.user.id,
            published: data.published,
          };

          const response = await upsertPost(slug, updatedData);

          if (response) {
            router.replace(`/${type}s/${response.slug}/edit/preview`);
            toast.success("Post Saved!");
          }
        }
      } catch (error) {
        console.error("Error saving:", error);
        toast.error("Failed to save. Please try again.");
      }
    });
  };

  return (
    <form onSubmit={handleSave}>
      <Button variant="outline" size="sm" disabled={isPending}>
        {isPending ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

export default SaveButton;
