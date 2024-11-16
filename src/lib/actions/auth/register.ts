"use server";

import * as z from "zod";
import { RegisterSchema } from "@/lib/zod";
import { db } from "@/lib/db";
import { generateVerificationToken } from "./generate-token";
import { sendVerificationEmail } from "./mail";
import { hashPassword } from "@/lib/hashing";
import { getUserByEmail, getUserByUsername } from "../users/get-user";

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

  const { hash, salt } = hashPassword(password);

  await db.user.create({
    data: {
      name,
      username,
      email,
      password: hash,
      salt: salt,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent" };
};
