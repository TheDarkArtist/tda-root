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

  const handlePasswordChange = async (formData: FormData) => {
    "use server";

    const newPassword = formData.get("password")?.toString().trim();

    if (!newPassword) {
      return { error: "Password cannot be empty" };
    }

    if (newPassword.length < 6) {
      return { error: "Password must be at least 6 characters long" };
    }

    const passwordMatch = verifyPassword(
      user.password as string,
      user.salt as string,
      newPassword
    );

    if (passwordMatch) {
      return { error: "New password cannot be the same as the current one." };
    }

    const { hash, salt } = hashPassword(newPassword);

    await updateUserByUsername(user?.username as string, {
      ...user,
      password: hash,
      salt,
    });
  };

  return <PasswordForm handlePasswordChange={handlePasswordChange} />;
};

export default Password;
