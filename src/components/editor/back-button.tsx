import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { deletePost } from "@/lib/actions/posts/delete-post";
import { deleteProject } from "@/lib/actions/projects/delete-project";
import { Post, Project } from "@prisma/client";

interface BackButtonProps {
  type: "Project" | "Post";
  content: Project | Post;
}

const BackButton: React.FC<BackButtonProps> = ({ type, content }) => {
  const router = useRouter();

  const handleBack = async (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "Project" && content.body.trim().length < 1) {
      await deleteProject(content.id);
    } else if (type === "Post" && content.body.trim().length < 1) {
      await deletePost(content.id);
    }

    router.back();
  };

  return (
    <form onSubmit={handleBack}>
      <Button className="h-min py-1" variant="secondary">
        Back
      </Button>
    </form>
  );
};

export default BackButton;
