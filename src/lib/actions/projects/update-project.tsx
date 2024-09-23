"use server";

import { db } from "@/lib/db";
import { Project } from "@prisma/client";
import { revalidateTag } from "next/cache";

export const updateProject = async (data: Project) => {
  try {
    const response = await db.project.update({
      where: {
        id: data.id,
      },
      data: { ...data },
    });

    revalidateTag(data.id)

    return response;
  } catch (error) {
    console.log("Error updating project, ", error);
    return null;
  }
};
