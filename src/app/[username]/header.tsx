import { Button } from "@/components/ui/button";
import { getUserByUsername } from "@/lib/actions/users/get-user";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Header = async ({ username }: { username: string }) => {
  const session = await auth();

  const user = await getUserByUsername(username);
  if (!user) {
    notFound();
  }

  return (
    <div className="relative bg-sky-600 dark:bg-red-950 text-white bg-grid-md-sky-500/30 dark:bg-grid-md-red-900/30">
      <div className="flex justify-between gap-2 items-center py-2 px-4">
        <div className="text-xs">
          <div>User ID: {user.id}</div>
          <div>Access Level: {user.access}</div>
        </div>
        {session && user.id === session?.user?.id && (
          <div className="flex gap-x-4">
            <Button
            variant="secondary"
              size="sm"
              asChild
            >
              <Link href={user.resumeUrl as string}>Resume</Link>
            </Button>
            <Button
              size="sm"
              asChild
            >
              <Link href={`/settings`}>Edit</Link>
            </Button>
          </div>
        )}
      </div>

      <div className="flex sm:items-end gap-x-2 p-2">
        {user.image ? (
          <Image
            className="sm:absolute size-24 sm:size-32 sm:-bottom-12 sm:left-3 border-4 border-sky-400 dark:border-red-900 dark:bg-red-900 rounded-sm"
            src={(user.image as string) || ""}
            alt={user.name as string}
            width={92}
            height={92}
          />
        ) : (
          <div className="sm:absolute size-24 sm:size-32 sm:-bottom-12 sm:left-3 flex justify-center items-center border-4 border-sky-400 dark:border-red-900 bg-sky-500 dark:bg-red-800">
            <span className="text-6xl font-black dark:text-red-400">
              {user.username?.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div className="sm:pl-36">
          <h1 className="text-lg sm:text-2xl font-semibold">{user.name}</h1>
          <h2 className="text-xs font-semibold">{user.username}</h2>
          <p className="text-xs">{user.email}</p>
        </div>
      </div>
      <div className="sm:hidden text-xs px-2 pb-2 sm:pl-32">
        {user?.bio ? (
          <span className="text-zinc-300">{user?.bio}</span>
        ) : (
          <>
            {user?.id === session?.user?.id && (
              <Link
                className="text-cyan-600 mt-2 hover:underline"
                href={`/settings`}
              >
                Add bio
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
