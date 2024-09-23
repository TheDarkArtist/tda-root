import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { extractFirstHeading } from "@/utils/get-heading";
import { extractFirstParagraph } from "@/utils/get-paragraph";
import { updatePost } from "@/lib/actions/posts/update-post";
import { updateProject } from "@/lib/actions/projects/update-project";
import { Post, Project } from "@prisma/client";

interface SaveButtonProps {
  content: Project | Post;
  type: "Project" | "Post";
}

const SaveButton: React.FC<SaveButtonProps> = ({ content, type }) => {
  const router = useRouter();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "Project") {
      if (content.body.trim().length < 1) {
        toast("You can't save an empty project!");
        return;
      }

      const response = await updateProject({
        ...content,
        title: extractFirstHeading(content.body)?.text as string,
        description: extractFirstParagraph(content.body),
      });

      if (response) {
        toast("Project saved!");
        router.refresh();
        router.push(`/projects/${content.slug}`);
      } else {
        toast("Something went wrong!");
      }
    } else if (type === "Post") {
      if (content.body.trim().length < 1) {
        toast("You can't save an empty post!");
        return;
      }

      const response = await updatePost({
        ...content,
        title: extractFirstHeading(content.body)?.text as string,
        description: extractFirstParagraph(content.body),
      });

      if (response) {
        toast("Post saved!");
        router.refresh();
        router.push(`/posts/${content.slug}`);
      } else {
        toast("Something went wrong!");
      }
    }
  };

  return (
    <form onSubmit={handleSave}>
      <Button className="h-min py-1" variant="secondary">
        Save
      </Button>
    </form>
  );
};

export default SaveButton;
