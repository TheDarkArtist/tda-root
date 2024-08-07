import { cn } from "@/lib/utils";
import { os } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      className={cn("text-2xl text-red-600 font-black", os.className)}
      href="/"
    >
      TheDarkArtist
    </Link>
  );
};

export default Logo;
