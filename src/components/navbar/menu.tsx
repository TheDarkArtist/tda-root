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
import { LuSettings, LuLogIn, LuLogOut, LuUser } from "react-icons/lu";
import { GiWolfHead } from "react-icons/gi";
import { Button } from "../ui/button";

const Menu = async () => {
  const session = await auth();

  if (!session?.user) {
    return (
      <Link
        className="text-sm p-2 dark:text-cyan-600 text-blue-600"
        href="/auth/login"
      >
        Login/SignUp
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex px-2 dark:hover:bg-stone-900 items-center rounded-none gap-2"
        >
          {session.user.image ? (
            <Image
              src={session.user.image || "/img/me.jpg"}
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
        <DropdownMenuItem>
          <LuUser className="mr-2" />
          <Link href="">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LuSettings className="mr-2" />
          <Link href="">Settings</Link>
        </DropdownMenuItem>
        <div className="border-b dark:border-zinc-090 mt-1" />
        {!session?.user ? (
          <DropdownMenuItem>
            <LuLogIn className="mr-2" />
            <Link href="/auth/login">Login</Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <form
              className="flex items-center"
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <LuLogOut className="mr-2" />
              <button type="submit">Log Out</button>
            </form>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
