"use client";

import { Button } from "@/components/ui/button";
import { deleteProject } from "@/lib/actions/projects/delete-project";
import { deletePost } from "@/lib/actions/posts/delete-post";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "sonner";
import { RotatingLines } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const DeleteButton = ({
  id,
  type,
  route,
  className,
}: {
  id: string;
  type: "project" | "post";
  route?: string;
  className?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  if (status !== "authenticated") {
    return null;
  }

  if (!id) {
    return null;
  }

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
        route && router.push(route);
        router.refresh();
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
        variant="destructive"
        type="submit"
        size="sm"
        className={cn(
          "flex gap-2 bg-red-500 text-white dark:bg-red-800",
          className
        )}
        disabled={loading}
      >
        <span>Delete</span>
        {loading && <RotatingLines width="12" strokeColor="white" />}
      </Button>
    </form>
  );
};

export default DeleteButton;
