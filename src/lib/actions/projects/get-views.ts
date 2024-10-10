"use server";

import { db } from "@/lib/db";

export async function getViews(projectId: string) {
  try {
    const views = await db.view.count({
      where: {
        projectId,
      },
    });

    return views;
  } catch (error) {
    console.error("Error fetching views:", error);
    return null;
  }
}
