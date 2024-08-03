import { cn } from "@/lib/utils";
import { poppins } from "@/utils/fonts";
import React from "react";

const Header = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col items-center gap-y-4 w-full text-zinc-800 dark:text-zinc-300">
      <h1 className={cn("text-4xl font-semibold", poppins.className)}>
        Authentication
      </h1>
      <p className="text-sm">{label}</p>
    </div>
  );
};

export default Header;
