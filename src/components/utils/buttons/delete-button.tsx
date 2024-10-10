"use client";

import { Button } from "@/components/ui/button";
import { deleteProject } from "@/lib/actions/projects/delete-project";
import { deletePost } from "@/lib/actions/posts/delete-post";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "sonner";
import { RotatingLines } from "react-loader-spinner";

const DeleteButton = ({
  id,
  type,
  className,
}: {
  id: string;
  type: "project" | "post";
  className?: string;
}) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      let response;

      if (type === "project") {
        response = await deleteProject(id);
      } else if (type === "post") {
        response = await deletePost(id);
      }

      if (response) {
        console.log(
          `NOTE: ${type.charAt(0).toUpperCase() + type.slice(1)} Deleted!`
        );
        toast.success(
          `${type.charAt(0).toUpperCase() + type.slice(1)} deleted!`
        );
      } else {
        toast.error(`Failed to delete ${type}.`);
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
      toast.error(`An error occurred while deleting the ${type}.`);
    } finally {
      setLoading(false);
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

export default DeleteButton;
