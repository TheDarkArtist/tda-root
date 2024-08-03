"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Links = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Explore",
      href: "/",
      isActive: pathname === "/" ? true : false,
    },
    {
      name: "Login",
      href: "/auth/login",
      isActive: pathname.includes("/auth/login") ? true : false,
    },
    {
      name: "Register",
      href: "/auth/register",
      isActive: pathname.includes("/auth/register") ? true : false,
    },
  ];

  return (
    <section className="hidden md:flex gap-1">
      {links.map(({ name, href, isActive }) => (
        <Link
          className={cn(
            "dark:hover:bg-stone-900 hover:bg-zinc-100 px-2 py-1",
            "text-[0.9rem] text-zinc-800 dark:text-zinc-300",
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
