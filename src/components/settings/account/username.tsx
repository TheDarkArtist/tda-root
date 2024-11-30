import { getUserByUsername } from "@/lib/actions/users/get-user";
import { updateUserByUsername } from "@/lib/actions/users/update-user";
import { auth } from "@/lib/auth";
import { User } from "@prisma/client";
import { notFound, redirect } from "next/navigation";
import ChangeUsernameForm from "./change-username-form";

const Username = async () => {
  const session = await auth();

  if (!session) {
    return notFound();
  }

  const user = await getUserByUsername(session?.user.username as string);

  if (!user) {
    return notFound();
  }

  const handleUsernameChange = async (formData: FormData) => {
    "use server";

    const newUsername = formData.get("username")?.toString().trim();

    if (!newUsername) {
      return { error: "Username cannot be empty" };
    }

    if (newUsername.length < 3) {
      return { error: "Username must be at least 3 characters long" };
    }

    if (user?.username === newUsername) {
      return { error: "New username cannot be the same as the current one." };
    }

    const existingUser = await getUserByUsername(newUsername);

    if (existingUser?.id !== user?.id && existingUser) {
      return { error: "Username already exists" };
    }

    await updateUserByUsername(
      user?.username as string,
      {
        ...user,
        username: newUsername,
      } as User
    );

    redirect("/settings/account");
  };

  return (
    <ChangeUsernameForm
      user={user}
      handleUsernameChange={handleUsernameChange}
    />
  );
};

export default Username;
