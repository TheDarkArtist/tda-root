"use server";

import { db } from "@/lib/db";
import { Comment } from "@prisma/client";

export const addComment = async (
  text: string,
  userId: string,
  postId: string
): Promise<Comment | null> => {
  try {
    const comment = await db.comment.create({
      data: {
        text,
        userId,
        parentId: postId,
        parentType: "post",
      },
    });
    return comment;
  } catch (error) {
    console.error("Error creating comment:", error);
    return null;
  }
};
