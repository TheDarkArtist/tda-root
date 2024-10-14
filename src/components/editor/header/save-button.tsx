"use client";

import { Button } from "@/components/ui/button";
import { upsertProject } from "@/lib/actions/projects/upsert-project";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import { extractFirstHeading } from "@/utils/get-heading";
import { extractFirstParagraph } from "@/utils/get-paragraph";
import React, { useTransition } from "react";
import { toast } from "sonner";

const SaveButton = ({ slug }: { slug: string }) => {
  const { data } = useEditorDataContext();
  const [isPending, startTransition] = useTransition();

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!data) {
      toast.error("No data available to save.");
      return;
    }

    startTransition(async () => {
      try {
        const updatedData = {
          ...data,
          title: extractFirstHeading(data.body as string)?.text as string,
          description: extractFirstParagraph(data.body as string),
          updatedAt: new Date(),
        };

        const response = await upsertProject(slug, updatedData);

        if (response) {
          toast.success("Project Saved!");
        }
      } catch (error) {
        console.error("Error saving project:", error);
        toast.error("Failed to save the project. Please try again.");
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
