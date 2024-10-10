"use server";

import { db } from "@/lib/db";
import { Post } from "@prisma/client";

export const upsertPost = async (
  postId: string,
  postData: Post,
): Promise<Post | null> => {
  try {
    const post = await db.post.upsert({
      where: { id: postId },
      update: { ...postData },
      create: { ...postData },
    });

    return post;
  } catch (error) {
    console.error("Error upserting post:", error);
    return null;
  }
};
