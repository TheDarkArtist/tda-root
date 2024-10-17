"use server";

import { db } from "@/lib/db";

export async function incrementView(
  postId: string,
  username: string,
  ip: string,
  userId?: string,
) {
  try {
    await db.view.create({
      data: {
        identifier: userId || "unknown",
        ip: ip || "unknown",
        username: username || "unknown",
        post: {
          connect: { id: postId },
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error incrementing views:", error);
    throw error;
  }
}
