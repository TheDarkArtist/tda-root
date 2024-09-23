"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Post } from "@prisma/client";

export const createPost = async (
  data: Post,
): Promise<Post | { error: string } | null> => {
  const session = await auth();

  if (!session?.user) {
    return { error: "Not authenticated" };
  }

  try {
    const post = await db.post.create({
      data: data,
    });
    return post;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
};
