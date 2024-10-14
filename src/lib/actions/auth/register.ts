"use server";

import * as z from "zod";
import bcryptjs from "bcryptjs";

import { RegisterSchema } from "@/lib/zod";
import { db } from "@/lib/db";
import { getUserByEmail, getUserByUsername } from "../utils/user";
import { generateVerificationToken } from "./generate-token";
import { sendVerificationEmail } from "./mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { email, password, name, username } = validatedFields.data;

  const existingUserUsername = await getUserByUsername(username);

  if (existingUserUsername) {
    return {
      error: "Username already in use",
    };
  }

  const existingUserEmail = await getUserByEmail(email);

  if (existingUserEmail) {
    return {
      error: "Email already in use",
    };
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  await db.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent" };
};
