"use server";

import { db } from "@/lib/db";
import { Project } from "@prisma/client";

export const upsertProject = async (
  projectId: string,
  projectData: Project,
): Promise<Project | null> => {
  try {
    const project = await db.project.upsert({
      where: { id: projectId },
      update: { ...projectData },
      create: { ...projectData },
    });

    return project;
  } catch (error) {
    console.error("Error upserting project:", error);
    return null;
  }
};
