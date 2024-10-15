"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { rslab } from "@/utils/fonts";

const UsefulLinks = () => {
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
    {
      name: "Profile",
      href: "/info",
      isActive: pathname.includes("/info") ? true : false,
    },
    {
      name: "Settings",
      href: "/info",
      isActive: pathname.includes("/info") ? true : false,
    },
    {
      name: "Your Draft Posts",
      href: "/info",
      isActive: pathname.includes("/info") ? true : false,
    },
    {
      name: "My Portfolio",
      href: "/info",
      isActive: pathname.includes("/info") ? true : false,
    },
  ];

  return (
    <section className="md:space-y-4 text-left py-4 border-y border-zinc-900">
      <h1
        className={`font-black text-2xl text-zinc-800 text-center md:text-left dark:text-zinc-400 indent-2 ${rslab.className}`}
      >
        Useful Links
      </h1>
      <div className="grid grid-cols-3 text-xs md:text-sm">
        {links.map(({ name, href }) => (
          <Link
            className={cn(
              "px-2 py-1",
              "text-zinc-800 dark:text-zinc-200",
              "hover:text-blue-600 dark:hover:text-blue-600",
              "text-center md:text-left"
            )}
            key={name}
            href={href}
          >
            {name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UsefulLinks;
