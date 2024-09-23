"use server";

import { db } from "@/lib/db";
import { Project } from "@prisma/client";
import { revalidateTag } from "next/cache";

export const updatePost = async (data: Project) => {
  try {
    const response = await db.post.update({
      where: {
        id: data.id,
      },
      data: { ...data },
    });

    revalidateTag(data.id);

    return response;
  } catch (error) {
    console.log("Error updating post, ", error);
    return null;
  }
};
