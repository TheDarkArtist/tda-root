"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuActivity, LuShield, LuUser } from "react-icons/lu";

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarLinks = [
    {
      label: "Public profile",
      href: "/settings/profile",
      icon: <LuUser className="size-6 sm:size-5" />,
      isActive: pathname.includes("profile"),
    },
    {
      label: "Account",
      href: "/settings/account",
      icon: <LuActivity className="size-6 sm:size-5" />,
      isActive: pathname.includes("account"),
    },
    {
      label: "Password and authorization",
      icon: <LuShield className="size-6 sm:size-5" />,
      href: "/settings/security",
      isActive: pathname.includes("security"),
    },
  ];
  return (
    <div className="sticky top-12 h-full overflow-hidden">
      <ul className="flex flex-col gap-1 sm:p-4 text-sm h-full">
        {sidebarLinks.map(({ icon, label, href, isActive }, index) => (
          <Link key={index} href={href}>
            <li
              className={cn(
                "flex gap-2 justify-center sm:justify-start items-center",
                "border-l-4 border-transparent w-full rounded-r-sm px-4 py-1",
                isActive && "border-l-4 border-sky-600 bg-zinc-900 "
              )}
            >
              <span>{icon}</span>
              <span className="hidden sm:block">{label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
