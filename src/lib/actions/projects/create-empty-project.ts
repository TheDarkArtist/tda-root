"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Project } from "@prisma/client";

export const createEmptyProject = async (): Promise<
  Project | { error: string } | null
> => {
  const session = await auth();

  if (!session?.user) {
    return { error: "Not authenticated" };
  }

  try {
    const project = await db.project.create({
      data: {
        title: "",
        description: "",
        body: "",
        userId: session.user.id,
      },
    });
    return project;
  } catch (error) {
    console.error("Error creating project:", error);
    return null;
  }
};
