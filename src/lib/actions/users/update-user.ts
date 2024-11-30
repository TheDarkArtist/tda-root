"use server";

import { db } from "@/lib/db";
import { User } from "@prisma/client";

export const updateUserById = async (id: string, userData: User) => {
  try {
    const user = await db.user.update({
      where: { id },
      data: userData,
    });
    return user;
  } catch (error) {
    console.error("Error updating user by id:", error);
    return null;
  }
};

export const updateUserByUsername = async (
  username: string,
  userData: User,
) => {
  try {
    const user = await db.user.update({
      where: { username },
      data: userData,
    });
    return user;
  } catch (error) {
    console.error("Error updating user by username:", error);
    return null;
  }
};

export const updateUserByEmail = async (email: string, userData: User) => {
  try {
    const user = await db.user.update({
      where: { email },
      data: userData,
    });
    return user;
  } catch (error) {
    console.error("Error updating user by email:", error);
    return null;
  }
};
