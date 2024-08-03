"use server";

import * as z from "zod";
import { ResetSchema } from "@/lib/zod";
import { getUserByEmail } from "../utils/user";
import { generatePasswordResetToken } from "./generate-token";
import { sendPasswordResetToken } from "./mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  const passwordResetToekn = await generatePasswordResetToken(email);

  await sendPasswordResetToken(
    passwordResetToekn.email,
    passwordResetToekn.token,
  );

  return { success: "Reset Email Sent!" };
};
