"use server";

import { auth } from "@/lib/auth";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentAccess = async () => {
  const session = await auth();

  return session?.user.access;
};
