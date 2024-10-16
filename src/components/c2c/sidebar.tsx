"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const items = [
    {
      name: "Dashboard",
      icons: "",
      href: "/tda/c2c",
      isActive: pathname === "/tda/c2c" ? true : false,
    },
    {
      name: "Settings",
      icon: "",
      href: "/tda/c2c/settings",
      isActive: pathname.includes("/settings") ? true : false,
    },
    {
      name: "Users",
      icon: "",
      href: "/tda/c2c/users",
      isActive: pathname.includes("/users") ? true : false,
    },
    {
      name: "Projects",
      icon: "",
      href: "/tda/c2c/projects",
      isActive: pathname.includes("/projects") ? true : false,
    },
    {
      name: "Posts",
      icon: "",
      href: "/tda/c2c/posts",
      isActive: pathname.includes("/posts") ? true : false,
    },
  ];
  return (
    <aside className="sticky top-0 border-r bg-white dark:bg-zinc-900 dark:border-zinc-800 h-full w-48">
      <ul className="flex flex-col">
        {items.map((item) => (
          <Link
            href={item.href}
            className={cn(
              "border-b border-l-[6px] dark:border-l-zinc-900 dark:border-b-zinc-800",
              "w-full p-2",
              item.isActive &&
                "border-l-[6px] dark:border-l-red-900 border-l-red-300 bg-gray-100 dark:bg-zinc-800"
            )}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
