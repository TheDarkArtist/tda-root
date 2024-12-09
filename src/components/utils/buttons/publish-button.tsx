"use client";

import { Button } from "@/components/ui/button";
import { updatePost } from "@/lib/actions/posts/update-post";
import { updateProject } from "@/lib/actions/projects/update-project";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "sonner";

interface PublishButtonProps<T extends "project" | "post"> {
  type: T;
  id: string;
  published: boolean;
  className?: string;
}

const PublishButton: React.FC<PublishButtonProps<"project" | "post">> = ({
  type,
  published,
  id,
  className,
}) => {
  const [isPending, setIsPending] = useState(false);

  const { status } = useSession();

  if (status !== "authenticated") {
    return null;
  }

  const handlePublishToggle = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!id) {
      toast.error("No data available.");
      return;
    }

    setIsPending(true);

    try {
      if (type === "project") {
        await updateProject(id, { published: !published });
      } else if (type === "post") {
        await updatePost(id, { published: !published });
      }

      const message = `${type.charAt(0).toUpperCase() + type.slice(1)} ${
        published ? "Published!" : "Unpublished!"
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
        {isPending ? "Updating..." : published ? "Unpublish" : "Publish"}
      </Button>
    </form>
  );
};

export default PublishButton;
