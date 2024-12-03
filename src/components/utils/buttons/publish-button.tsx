"use client";

import { Button } from "@/components/ui/button";
import { updatePost } from "@/lib/actions/posts/update-post";
import { updateProject } from "@/lib/actions/projects/update-project";
import { PostWithUserViews, ProjectWithUserViews } from "@/lib/types";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "sonner";

interface PublishButtonProps<T extends "project" | "post"> {
  type: T;
  post: T extends "project" ? ProjectWithUserViews : PostWithUserViews;
  className?: string;
}

const PublishButton: React.FC<PublishButtonProps<"project" | "post">> = ({
  type,
  post,
  className,
}) => {
  const [isPending, setIsPending] = useState(false);
  const { views, user, ...postWithoutUser } = post;
  const [localPost, setLocalPost] = useState(postWithoutUser);

  const { status } = useSession();

  if (status !== "authenticated") {
    return null;
  }

  const handlePublishToggle = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!localPost) {
      toast.error("No data available.");
      return;
    }

    setIsPending(true);

    try {
      const updatedData = { ...localPost, published: !localPost.published };

      setLocalPost(updatedData);

      if (type === "project") {
        await updateProject(updatedData.id, updatedData);
      } else if (type === "post") {
        await updatePost(updatedData.id, updatedData);
      }

      const message = `${type.charAt(0).toUpperCase() + type.slice(1)} ${
        updatedData.published ? "Published!" : "Unpublished!"
      }`;
      toast.success(message);
    } catch (error) {
      console.error("Error toggling publish status:", error);
      toast.error("Failed to update publish status. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handlePublishToggle}>
      <Button
        className={className}
        variant="outline"
        size="sm"
        disabled={isPending}
      >
        {isPending
          ? "Updating..."
          : localPost.published
            ? "Unpublish"
            : "Publish"}
      </Button>
    </form>
  );
};

export default PublishButton;
