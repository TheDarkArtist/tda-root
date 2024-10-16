"use client";

import { Button } from "@/components/ui/button";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import React, { useTransition } from "react";
import { toast } from "sonner";

const PublishButton = () => {
  const { data, setData } = useEditorDataContext();
  const [isPending, startTransition] = useTransition();

  const handlePublishToggle = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!data) {
      toast.error("No project data available.");
      return;
    }

    startTransition(async () => {
      try {
        setData((prev: any) => ({ ...prev, published: !data.published }));
        const message = !data.published
          ? "Project Published!"
          : "Project Unpublished!";
        toast.success(message);
      } catch (error) {
        console.error("Error toggling publish status:", error);
        toast.error("Failed to update publish status. Please try again.");
      }
    });
  };

  return (
    <form onSubmit={handlePublishToggle}>
      <Button variant="outline" size="sm" disabled={isPending}>
        {isPending ? "Updating..." : data?.published ? "Unpublish" : "Publish"}
      </Button>
    </form>
  );
};

export default PublishButton;
