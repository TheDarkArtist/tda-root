"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      name: "Posts",
      href: "/posts",
      isActive: pathname.includes("/posts") ? true : false,
    },
    {
      name: "Info",
      href: "/info",
      isActive: pathname.includes("/info") ? true : false,
    },
  ];

  return (
    <section className="hidden sm:flex">
      {links.map(({ name, href, isActive }) => (
        <Link
          className={cn(
            "dark:hover:bg-red-900/50 hover:bg-red-600/20 px-2 py-1",
            "text-[1rem] text-zinc-800 dark:text-zinc-300",
            isActive && "dark:text-red-600 text-red-600 font-bold"
          )}
          key={name}
          href={href}
        >
          {name}
        </Link>
      ))}
    </section>
  );
};

export default Links;
