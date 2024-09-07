"use client";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { os } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const scrollY = useScroll();

  return (
    <Link
      className={cn(
        "text-2xl text-red-600 font-black",
        os.className,
        scrollY > 110 && "text-sky-600"
      )}
      href="/"
    >
      <span className="hidden sm:block">TheDarkArtist</span>
      <span className="sm:hidden">TDA</span>
    </Link>
  );
};

export default Logo;
