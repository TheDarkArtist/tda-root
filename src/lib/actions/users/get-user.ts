"use server";

import { db } from "@/lib/db";

export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.user.findUnique({ where: { username } });
    return user;
  } catch (error) {
    console.error("Error fetching user by username:", error);
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
};
