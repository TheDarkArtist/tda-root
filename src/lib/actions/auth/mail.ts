"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const URL = process.env.AUTH_URL

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@thedarkartist.in",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token} </p>`,
  });
};

export const sendPasswordResetToken = async (email: string, token: string) => {
  const resetLink = `${URL}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@thedarkartist.in",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your passowrd.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confimLink = `${URL}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@thedarkartist.in",
    to: email,
    subject: "Confim your email",
    html: `<p>Click here to <a href="${confimLink}">confirm</a> your email.</p>`,
  });
};
