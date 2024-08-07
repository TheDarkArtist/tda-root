"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export const deleteProject = async (projectId: string) => {
  const session = await auth();

  if (!session?.user) {
    return { error: "Not authenticated" };
  }

  try {
    const response = await db.project.delete({
      where: {
        id: projectId,
      },
    });

    return response;
  } catch (error) {
    console.error("Error deleting project, ", error);
    return null;
  }
};
