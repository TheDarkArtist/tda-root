"use server";

import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function incrementView(projectId: string, userId?: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/tda/publicip`,
    );
    const data = await response.json();

    const session = await auth();

    await db.view.create({
      data: {
        identifier: userId || "unknown",
        ip: data.ip || "unknown",
        username: (session?.user.username as string) || "unknown",
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
