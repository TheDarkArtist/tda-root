"use server";

import { db } from "@/lib/db";

export const getUsers = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

/**
 * Get all of the user's data < only returns id not whole object>
 * projects, posts, comments
 ***/
export const getUsersWithData = async () => {
  try {
    const users = await db.user.findMany({
      include: {
        Post: { select: { id: true } },
        projects: { select: { id: true } },
        comments: { select: { id: true } },
      },
    });
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};
