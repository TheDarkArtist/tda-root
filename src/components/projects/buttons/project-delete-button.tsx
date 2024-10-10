"use client";

import { Button } from "@/components/ui/button";
import { deleteProject } from "@/lib/actions/projects/delete-project";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "sonner";

const ProjectDeleteButton = ({
  projectId,
  className,
}: {
  projectId: string;
  className?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await deleteProject(projectId);
      if (response) {
        console.log("NOTE: Project Deleted!");
        toast.success("Project deleted!");
      } else {
        toast.error("Failed to delete project.");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("An error occurred while deleting the project.");
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

export default ProjectDeleteButton;
