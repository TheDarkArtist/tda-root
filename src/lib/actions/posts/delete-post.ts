"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export const deletePost = async (postId: string) => {
  const session = await auth();

  if (!session?.user) {
    return { error: "Not authenticated" };
  }

  console.log(postId)

  try {
    const response = await db.post.delete({
      where: {
        id: postId,
      },
    });

    return response;
  } catch (error) {
    console.error("Error deleting post, ", error);
    return null;
  }
};
