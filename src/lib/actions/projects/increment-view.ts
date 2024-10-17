"use server";

import { db } from "@/lib/db";

export async function incrementView(
  projectId: string,
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
        project: {
          connect: { id: projectId },
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error incrementing views:", error);
    throw error;
  }
}
