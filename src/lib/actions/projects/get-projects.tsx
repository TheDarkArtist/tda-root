"use server";

import { db } from "@/lib/db";

export const getProjects = async (
  published?: boolean,
  query?: string,
  limit?: number
) => {
  try {
    const projects = await db.project.findMany({
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
      },
      orderBy: {
        createdAt: "desc",
      },
      take: limit || 200,
    });

    return projects;
  } catch (error) {
    console.error("Error fetching projects, ", error);
    return null;
  }
};
