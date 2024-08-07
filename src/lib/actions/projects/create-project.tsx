"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Project } from "@prisma/client";

export const createProject = async (data: Project) => {
  const session = await auth();

  if (!session?.user) {
    return { error: "Not authenticated" };
  }

  // TODO: In production uncomment the following code

  // if (session.user.access !== "ADMIN" || "ROOT") {
  //   return { error: "Not authorized" };
  // }

  try {
    const project = await db.project.create({ data });
    return project;
  } catch (error) {
    console.error("Error creating project:", error);
    return null;
  }
};
