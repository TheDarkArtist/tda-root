"use server";

import { db } from "@/lib/db";
import { Comment } from "@prisma/client";

export const getComments = async (
  projectId: string
): Promise<Comment[] | null> => {
  try {
    const comments = await db.comment.findMany({
      where: {
        parentId: projectId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });

    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return null;
  }
};
