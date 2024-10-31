"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SheetTrigger } from "../ui/sheet";
import { FaDraftingCompass, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import AuthButtons from "./auth-buttons";
import { useSession } from "next-auth/react";

const Footer = () => {
  const pathname = usePathname();
  const { data } = useSession();

  const links = [
    {
      name: "Profile",
      icon: <FaUser />,
      href: `/u/${data?.user.username}`,
      isActive: pathname.includes("/profile") ? true : false,
    },
    {
      name: "Drafts",
      icon: <FaDraftingCompass className="h-4 w-4" />,
      href: "/drafts",
      isActive: pathname.includes("/drafts") ? true : false,
    },
    {
      name: "Settings",
      icon: <FaGear className="h-4 w-4" />,
      href: `/u/${data?.user.username}/settings`,
      isActive: pathname.includes("/settings") ? true : false,
    },
  ];

  return (
    <section className="border-t dark:border-zinc-800 pt-2 flex flex-col m-2">
      <AuthButtons />

      {data?.user &&
        links.map(({ name, icon, href, isActive }) => (
          <SheetTrigger asChild key={name}>
            <div>
              <Link
                className={cn(
                  "flex gap-4 items-center rounded m-1",
                  "dark:hover:bg-stone-900 hover:bg-zinc-100 px-2 py-1",
                  "text-[1rem] text-zinc-800 dark:text-zinc-300",
                  isActive && "dark:text-red-600 text-red-600 font-bold",
                  isActive && "dark:bg-zinc-900 bg-zinc-200"
                )}
                href={href}
              >
                {icon}
                <span>{name}</span>
              </Link>
            </div>
          </SheetTrigger>
        ))}
    </section>
  );
};

export default Footer;
