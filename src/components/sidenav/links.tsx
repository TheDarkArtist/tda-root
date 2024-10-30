"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SheetTrigger } from "../ui/sheet";

const Links = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Portfolio",
      href: "https://thedarkartist.in",
      isActive: false,
    },
    {
      name: "Explore",
      href: "/explore",
      isActive: pathname.includes("/explore") ? true : false,
    },
    {
      name: "Projects",
      href: "/projects",
      isActive: pathname.includes("/projects") ? true : false,
    },
    {
      name: "Blogs",
      href: "/blogs",
      isActive: pathname.includes("/posts") ? true : false,
    },
    {
      name: "Info",
      href: "/info",
      isActive: pathname.includes("/info") ? true : false,
    },
  ];

  return (
    <section className="flex flex-col space-y-4 mt-20">
      {links.map(({ name, href, isActive }) => (
        <SheetTrigger asChild key={name}>
          <Link
            className={cn(
              "dark:hover:bg-stone-900 hover:bg-zinc-100 px-2 py-1",
              "text-[1rem] text-zinc-800 dark:text-zinc-300",
              isActive && "dark:text-red-600 text-red-600 font-bold"
            )}
            href={href}
          >
            {name}
          </Link>
        </SheetTrigger>
      ))}
    </section>
  );
};

export default Links;
