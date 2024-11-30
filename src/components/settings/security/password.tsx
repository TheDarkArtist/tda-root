import { getUserByUsername } from "@/lib/actions/users/get-user";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";
import React from "react";
import PasswordForm from "./password-form";
import { hashPassword, verifyPassword } from "@/lib/hashing";
import { updateUserByUsername } from "@/lib/actions/users/update-user";

const Password = async () => {
  const session = await auth();

  if (!session) {
    return notFound();
  }

  const user = await getUserByUsername(session?.user.username as string);

  if (!user) {
    return notFound();
  }

  const handlePasswordChange = async ({
    password,
  }: {
    password: string;
  }): Promise<{ error: string | null }> => {
    "use server";

    if (!password) {
      return { error: "Password cannot be empty" };
    }

    if (password.length < 6) {
      return { error: "Password must be at least 6 characters long" };
    }

    const passwordMatch = verifyPassword(
      user.password as string,
      user.salt as string,
      password
    );

    if (passwordMatch) {
      return { error: "New password cannot be the same as the current one." };
    }

    const { hash, salt } = hashPassword(password);

    await updateUserByUsername(user?.username as string, {
      ...user,
      password: hash,
      salt,
    });

    return { error: null };
  };

  return <PasswordForm handlePasswordChange={handlePasswordChange} />;
};

export default Password;
