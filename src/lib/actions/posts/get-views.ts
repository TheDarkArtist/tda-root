"use server";

import { db } from "@/lib/db";

export async function getViews(postId: string) {
  try {
    const views = await db.view.count({
      where: {
        postId,
      },
    });

    return views;
  } catch (error) {
    console.error("Error fetching views:", error);
    return null;
  }
}
