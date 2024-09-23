"use client";

import React, { useCallback, useTransition } from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import clsx from "clsx";
import { createProject } from "@/lib/actions/projects/create-project";
import { UserAccess } from "@prisma/client";

const ProjectCreateButton: React.FC = () => {
  const { data } = useSession();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = useCallback(async () => {
    if (!data?.user) return;

    try {
      const project = await createProject({
        title: "",
        description: "",
        body: "",
        published: false,
        userId: data.user.id as string,
      });

      if (project) {
        startTransition(() => {
          router.push(`/projects/new/${project.slug}?tab=Edit`);
        });
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create a project. Please try again.");
    }
  }, [data?.user, router, startTransition]);

  if (
    !data?.user ||
    ![UserAccess.ROOT, UserAccess.ADMIN].includes(data.user.access)
  ) {
    return null;
  }

  return (
    <Button
      className={clsx("h-10 px-4", {
        "opacity-50 cursor-not-allowed": isPending,
      })}
      variant={"secondary"}
      onClick={handleClick}
      disabled={isPending}
      aria-disabled={isPending}
      aria-busy={isPending}
    >
      {isPending ? "Creating..." : "New Project"}
    </Button>
  );
};

export default ProjectCreateButton;
