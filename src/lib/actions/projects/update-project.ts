"use server";

import { db } from "@/lib/db";
import { Project } from "@prisma/client";
import { revalidateTag } from "next/cache";

export const updateProject = async (id: string, data: Partial<Project>) => {
  try {
    const response = await db.project.update({
      where: {
        id: id,
      },
      data: { ...data },
    });

    revalidateTag(id);

    return response;
  } catch (error) {
    console.log("Error updating project, ", error);
    return null;
  }
};
