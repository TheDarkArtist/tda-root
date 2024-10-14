"use server";

import { db } from "@/lib/db";
import { Comment } from "@prisma/client";

export const addComment = async (
  text: string,
  userId: string,
  projectId: string
): Promise<Comment | null> => {
  try {
    const comment = await db.comment.create({
      data: {
        text,
        userId,
        parentId: projectId,
        parentType: "project",
      },
    });
    return comment;
  } catch (error) {
    console.error("Error creating comment:", error);
    return null;
  }
};
