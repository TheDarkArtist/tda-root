"use server";

import { db } from "@/lib/db";
import { Project } from "@prisma/client";

export const upsertProject = async (
  projectSlug: string,
  projectData: Partial<Project>,
): Promise<Project | null> => {
  if (!projectSlug) {
    console.error("Project slug is required");
    return null;
  }

  try {
    const validatedSlug = projectData.slug
      ?.trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    const project = await db.project.upsert({
      where: { slug: projectSlug },
      update: { ...(projectData as Project), slug: validatedSlug },
      create: { ...(projectData as Project), slug: validatedSlug },
    });

    return project;
  } catch (error) {
    console.error("Error upserting project:", error);
    return null;
  }
};
