"use server";

import { db } from "@/lib/db";
import { Post } from "@prisma/client";
import { revalidateTag } from "next/cache";

export const updatePost = async (id: string, data: Partial<Post>) => {
  try {
    const response = await db.post.update({
      where: {
        id: data.id,
      },
      data: { ...data },
    });

    revalidateTag(id);

    return response;
  } catch (error) {
    console.log("Error updating post, ", error);
    return null;
  }
};
