"use client";

import { Button } from "@/components/ui/button";
import { deletePost } from "@/lib/actions/posts/delete-post";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "sonner";

const PostDeleteButton = ({
  postId,
  className,
}: {
  postId: string;
  className?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await deletePost(postId);
      if (response) {
        console.log("NOTE: Post Deleted!");
        toast.success("Post deleted!");
      } else {
        toast.error("Failed to delete post.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("An error occurred while deleting the post.");
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <Button
        variant="outline"
        type="submit"
        size="sm"
        className={cn("dark:bg-red-800", className)}
        disabled={loading}
      >
        {loading ? <RotatingLines width="12" strokeColor="white" /> : "Delete"}
      </Button>
    </form>
  );
};

export default PostDeleteButton;
