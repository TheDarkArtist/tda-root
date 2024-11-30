import { getUserByUsername } from "@/lib/actions/users/get-user";
import { updateUserByUsername } from "@/lib/actions/users/update-user";
import { auth } from "@/lib/auth";
import { User } from "@prisma/client";
import { notFound, redirect } from "next/navigation";
import ChangeBioForm from "./change-bio-form";

const Bio = async () => {
  const session = await auth();

  if (!session) {
    return notFound();
  }

  const user = await getUserByUsername(session?.user.username as string);

  if (!user) {
    return notFound();
  }

  const handleBioChange = async (formData: FormData) => {
    "use server";

    const newBio = formData.get("bio")?.toString().trim();

    if (user?.bio === newBio) {
      return { error: "New bio cannot be the same as the current one." };
    }

    const existingUser = await getUserByUsername(newBio as string);

    if (existingUser?.id !== user?.id && existingUser) {
      return { error: "Bio already exists" };
    }

    await updateUserByUsername(
      user?.username as string,
      {
        ...user,
        bio: newBio,
      } as User
    );

    redirect("/settings/profile");
  };

  return <ChangeBioForm user={user} handleBioChange={handleBioChange} />;
};

export default Bio;
