import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import { auth, signOut } from "@/lib/auth";
import { LuSettings, LuLogIn, LuLogOut, LuCommand } from "react-icons/lu";
import { GiWolfHead } from "react-icons/gi";
import { Button } from "../ui/button";

const Menu = async () => {
  const session = await auth();

  if (!session?.user) {
    return (
      <Link
        className="hidden sm:block text-sm p-2 dark:text-cyan-600 text-blue-600"
        href="/auth/login"
      >
        Login/SignUp
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hidden sm:flex" asChild>
        <Button
          variant="ghost"
          className="flex px-2 dark:hover:bg-stone-900 items-center rounded-sm gap-1.5"
        >
          {session.user.image ? (
            <Image
              src={session.user.image || "/img/me.jpg"}
              className="border dark:border-zinc-900 border-gray-200 rounded-full size-7"
              alt="user image"
              height={28}
              width={28}
            />
          ) : (
            <GiWolfHead className="h-5 w-5" />
          )}
          <h2>{session.user.username}</h2>
          <FaCaretDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-40" align="end">
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href={`/${session.user.username}`}>
            <LuSettings className="mr-2" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href={`/settings`}>
            <LuSettings className="mr-2" />
            Settings
          </Link>
        </DropdownMenuItem>
        {session.user.access === "ROOT" && (
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href={`/tda/c2c`}>
              <LuCommand className="mr-2" />
              C2C
            </Link>
          </DropdownMenuItem>
        )}
        <div className="border-b dark:border-zinc-900 mt-1" />
        {!session?.user ? (
          <DropdownMenuItem>
            <LuLogIn className="mr-2" />
            <Link href="/auth/login">Login</Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <form
              className="w-full"
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className="flex items-center w-full" type="submit">
                <LuLogOut className="mr-2" />
                Log Out
              </button>
            </form>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
