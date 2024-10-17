"use server";

import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function incrementView(postId: string, userId?: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/tda/publicip`,
    );

    const session = await auth();
    let data = await response.json();

    await db.view.create({
      data: {
        identifier: userId || "unknown",
        ip: data.ip || "unknown",
        username: (session?.user.username as string) || "unknown",
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
