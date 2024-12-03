import { cn } from "@/lib/utils";
import React from "react";

const Note = ({
  title,
  description,
  className,
}: {
  title?: string;
  description: string;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "border-2 border-l-[10px] shadow my-4 rounded-r-md text-sm",
        "text-gray-700 dark:text-gray-400",
        "bg-white border-zinc-200 mx-2 lg:mx-0",
        "dark:bg-zinc-950 dark:border-zinc-800",
        className
      )}
    >
      <h1 className="text-xs mx-1.5 my-1 font-semibold text-red-400">
        {title}
      </h1>
      <p className="mb-2 mx-1 px-1.5">{description}</p>
    </section>
  );
};

export default Note;
