"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SheetTrigger } from "../ui/sheet";
import { FaBug, FaGlobe, FaInfoCircle, FaRocket } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";

const Links = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Portfolio",
      href: "https://thedarkartist.in",
      icon: <FaRocket className="h-4 w-4" />,
      isActive: false,
    },
    {
      name: "Explore",
      href: "/explore",
      icon: <FaGlobe className="h-4 w-4" />,
      isActive: pathname.includes("/explore") ? true : false,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <FaBug className="h-4 w-4" />,
      isActive: pathname.includes("/projects") ? true : false,
    },
    {
      name: "Posts",
      href: "/posts",
      icon: <RiArticleFill className="h-4 w-4" />,
      isActive: pathname.includes("/posts") ? true : false,
    },
    {
      name: "Info",
      href: "/info",
      icon: <FaInfoCircle className="h-4 w-4" />,
      isActive: pathname.includes("/info") ? true : false,
    },
  ];

  return (
    <section className="flex flex-col h-full m-2">
      {links.map(({ name, icon, href, isActive }) => (
        <SheetTrigger asChild key={name}>
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
        </SheetTrigger>
      ))}
    </section>
  );
};

export default Links;
