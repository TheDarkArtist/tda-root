import { cn } from "@/lib/utils";
import React from "react";
import { LuInfo } from "react-icons/lu";

const Info = () => {
  return (
    <section
      className={cn(
        "flex gap-2 items-center text-xs sm:text-sm",
        "rounded-sm shadow-md m-4 sm:mx-0 p-2 sm:px-4",
        "dark:border border-green-950",
        "dark:bg-zinc-950 bg-white"
      )}
    >
      <div>
        <LuInfo className="h-6 w-6 text-green-900" />
      </div>
      <p>
        This is just a side project, i work on it when i want to, though i plan
        to turn it into a cool project, eventually.
      </p>
    </section>
  );
};

export default Info;
