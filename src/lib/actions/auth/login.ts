"use server";

import { signIn } from "@/lib/auth";
import { LoginSchema } from "@/lib/zod";
import { AuthError } from "next-auth";
import * as z from "zod";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "./generate-token";
import { sendTwoFactorTokenEmail, sendVerificationEmail } from "./mail";
import { getTwoFactorTokenByEmail } from "./two-factor-token";
import { db } from "@/lib/db";
import { getTwoFactorConfirmationByUserId } from "./two-factor-confirmation";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";
import { verifyPassword } from "@/lib/hashing";
import { getUserByEmail, getUserByUsername } from "../users/get-user";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null,
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { identifier, password, code } = validatedFields.data;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmail = emailRegex.test(identifier);

  let existingUser;

  if (isEmail) {
    existingUser = await getUserByEmail(identifier);
  } else {
    existingUser = await getUserByUsername(identifier);
  }

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Invalid credentials!" };
  }

  const passwordMatch = verifyPassword(
    existingUser.password,
    existingUser.salt as string,
    password,
  );

  if (!passwordMatch) {
    return { error: "Invalid password!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email,
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return { success: "Confirmation email sent!" };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);

      if (!twoFactorToken) {
        return { error: "Invalid code!" };
      }

      if (twoFactorToken.token !== code) {
        return { error: "Invalid code!" };
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date();

      if (hasExpired) {
        return { etdarror: "Code expired!" };
      }

      await db.twoFactorToken.delete({
        where: {
          id: twoFactorToken.id,
        },
      });

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id,
      );

      if (existingConfirmation) {
        await db.twoFactorToken.delete({
          where: {
            id: twoFactorToken.id,
          },
        });
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);

      return { twoFactor: true };
    }
  }

  try {
    await signIn("credentials", {
      identifier,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
