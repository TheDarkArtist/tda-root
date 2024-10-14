"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ slug }: { slug: string }) => {
  const pathname = usePathname();

  const sidebarLinks = [
    {
      name: "Editor",
      href: `/projects/${slug}/edit/editor`,
      isActive: pathname === `/projects/${slug}/edit/editor`,
      icon: "✏️",
    },
    {
      name: "Preview",
      href: `/projects/${slug}/edit/preview`,
      isActive: pathname.includes("/edit/preview") ? true : false,
      icon: "📜",
    },
    {
      name: "Links & Tags",
      href: `/projects/${slug}/edit/meta`,
      isActive: pathname.includes("/edit/meta") ? true : false,
      icon: "🖇️",
    },
    {
      name: "Settings",
      href: `/projects/${slug}/edit/settings`,
      isActive: pathname.includes("/edit/settings") ? true : false,
      icon: "⚙️",
    },
    {
      name: "Help",
      href: `/projects/${slug}/edit`,
      isActive: pathname === `/projects/${slug}/edit`,
      icon: "💁",
    },
  ];

  return (
    <div className="sticky top-0 h-full w-10 md:min-w-56 overflow-hidden">
      <div className="flex flex-col justify-between dark:bg-zinc-900 bg-zinc-100 border-r dark:border-zinc-800 border-zinc-200 h-full">
        <div>
          <h2 className="flex gap-2 border-b border-zinc-800 items-center h-10 text-xl font-semibold px-2 text-zinc-400">
            <span>🚀</span>
            <span className="hidden md:block">Manage Post</span>
          </h2>
          {sidebarLinks.map(({ name, href, isActive, icon }) => (
            <Button
              className={cn(
                "flex items-center md:px-4 py-2 md:m-1.5 w-full",
                "hover:bg-zinc-200 justify-center md:justify-start",
                isActive && "dark:bg-zinc-800 bg-zinc-200"
              )}
              variant="ghost"
              asChild
              key={name}
            >
              <Link className={cn("flex items-center gap-4")} href={href}>
                <span className="text-lg">{icon}</span>
                <span className="hidden md:block">{name}</span>
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex flex-col p-2"></div>
      </div>
    </div>
  );
};

export default Sidebar;
