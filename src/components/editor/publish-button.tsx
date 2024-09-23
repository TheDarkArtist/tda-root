import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Post, Project } from "@prisma/client";

interface PublishButtonProps {
  content: Project | Post;
  setContent: Dispatch<SetStateAction<Project | Post>>;
  type: "Project" | "Post";
}

const PublishButton: React.FC<PublishButtonProps> = ({
  content,
  setContent,
  type,
}) => {
  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "Project") {
      if (content.body.trim().length < 1) {
        toast("You can't publish an empty project!");
        return;
      }
    } else if (type === "Post") {
      if (content.body.trim().length < 1) {
        toast("You can't publish an empty post!");
        return;
      }
    }

    setContent((prev) => ({
      ...prev,
      published: !content.published,
    }));

    toast(`published: ${!content.published}`);
  };

  return (
    <form onSubmit={handlePublish}>
      <Button className="h-min py-1" variant="secondary">
        Publish
      </Button>
    </form>
  );
};

export default PublishButton;
