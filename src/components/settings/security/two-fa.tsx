import { getUserByUsername } from "@/lib/actions/users/get-user";
import { updateUserByUsername } from "@/lib/actions/users/update-user";
import { auth } from "@/lib/auth";
import { User } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import TwoFAForm from "./two-fa-form";

const TwoFA = async () => {
  const session = await auth();

  if (!session) {
    return notFound();
  }

  const user = await getUserByUsername(session?.user.username as string);

  if (!user) {
    return notFound();
  }

  const handleTwoFAChange = async (formData: FormData) => {
    "use server";

    const isTwoFactorEnabled =
      formData.get("isTwoFactorEnabled")?.toString() === "On";

    if (user?.isTwoFactorEnabled === isTwoFactorEnabled) {
      return { error: "No changes made." };
    }

    await updateUserByUsername(
      user?.username as string,
      {
        ...user,
        isTwoFactorEnabled,
      } as User
    );

    return { success: "Two-factor authentication status updated." };
  };

  return <TwoFAForm user={user} handleTwoFAChange={handleTwoFAChange} />;
};

export default TwoFA;
