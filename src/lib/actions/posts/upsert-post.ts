"use server";

import { db } from "@/lib/db";
import { Post } from "@prisma/client";

export const upsertPost = async (
  postSlug: string,
  postData: Partial<Post>,
): Promise<Post | null> => {
  if (!postSlug) {
    console.error("Post slug is required");
    return null;
  }

  try {
    const validatedSlug = postData.slug
      ?.trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    const post = await db.post.upsert({
      where: { slug: postSlug },
      update: { ...(postData as Post), slug: validatedSlug },
      create: { ...(postData as Post), slug: validatedSlug },
    });

    return post;
  } catch (error) {
    console.error("Error upserting post:", error);
    return null;
  }
};
