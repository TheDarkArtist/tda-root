import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { montserrat } from "@/utils/fonts";
import React from "react";

const ProfileAvatar = async () => {
  const session = await auth();
  return (
    <div
      className={cn(
        montserrat.className,
        "h-full w-full",
        "flex justify-center items-center",
        "font-black text-4xl text-sky-600"
      )}
    >
      {session?.user.name
        ? session?.user.name.trim().slice(0, 1)
        : session?.user.username.trim().slice(0, 1)}
    </div>
  );
};

export default ProfileAvatar;
