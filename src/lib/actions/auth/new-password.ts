"use server";

import { NewPasswordSchema } from "@/lib/zod";
import * as z from "zod";
import { getPasswordResetTokenByToken } from "./password-reset-token";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/hashing";
import { getUserByEmail } from "../users/get-user";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null,
) => {
  if (!token) return { error: "Missing Token!" };

  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) return { error: "Invalid token!" };

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) return { error: "Token has expired!" };

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) return { error: "Email does not exist!" };

  const { salt, hash } = hashPassword(password);

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      password: hash,
      salt: salt,
    },
  });

  await db.passwordResetToken.delete({ where: { id: existingToken.id } });

  return { success: "Password updated!" };
};
