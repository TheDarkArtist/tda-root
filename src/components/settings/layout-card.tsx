import { auth } from "@/lib/auth";
import Image from "next/image";
import React from "react";
import ProfileAvatar from "../utils/profile-avatar";

const LayoutCard = async () => {
  const session = await auth();

  return (
    <div className="flex gap-2 items-center w-full p-4">
      <div className="border border-zinc-600 rounded-full size-14">
        {session?.user.image ? (
          <Image
            src={session?.user.image as string | ""}
            className=""
            alt={`${session?.user.username}'s profile picture`}
          />
        ) : (
          <ProfileAvatar />
        )}
      </div>
      <div className="flex flex-col h-full">
        <div className="flex flex-col sm:flex-row sm:items-center text-base sm:text-2xl sm:gap-2">
          <span className="font-bold">{session?.user.name}</span>
          <span className="text-sm sm:text-xl text-zinc-400">
            ({session?.user.username})
          </span>
        </div>
        <span className="text-sm text-zinc-400">Your account settings</span>
      </div>
    </div>
  );
};

export default LayoutCard;
