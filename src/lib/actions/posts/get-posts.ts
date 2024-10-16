"use server";

import { db } from "@/lib/db";

export const getPosts = async (
  published?: boolean,
  query?: string,
  limit?: number,
  userId?: string,
) => {
  try {
    const posts = await db.post.findMany({
      where: {
        ...(published !== undefined && { published }),
        ...(query && {
          OR: [
            {
              title: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
        }),
        ...(userId && { userId }),
      },
      orderBy: {
        createdAt: "desc",
      },
      take: limit || 200,
      include: {
        user: true,
        views: true,
      },
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts, ", error);
    return null;
  }
};
