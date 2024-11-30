import { getUserByUsername } from "@/lib/actions/users/get-user";
import { updateUserByUsername } from "@/lib/actions/users/update-user";
import { auth } from "@/lib/auth";
import { User } from "@prisma/client";
import { notFound, redirect } from "next/navigation";
import ChangeNameForm from "./name-change-form";

const Name = async () => {
  const session = await auth();

  if (!session) {
    return notFound();
  }

  const user = await getUserByUsername(session?.user.username as string);

  if (!user) {
    return notFound();
  }

  const handleNameChange = async (formData: FormData) => {
    "use server";

    const newName = formData.get("name")?.toString().trim();

    if (!newName) {
      return { error: "Name cannot be empty" };
    }

    if (newName.length < 3) {
      return { error: "Name must be at least 3 characters long" };
    }

    if (user?.name === newName) {
      return { error: "New name cannot be the same as the current one." };
    }

    await updateUserByUsername(
      user?.name as string,
      {
        ...user,
        name: newName,
      } as User
    );

    redirect("/settings/profile");
  };

  return <ChangeNameForm user={user} handleNameChange={handleNameChange} />;
};

export default Name;
