"use server";

import { db } from "@/lib/db";

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = db.passwordResetToken.findFirst({
      where: { email },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = db.passwordResetToken.findFirst({
      where: { token },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};
