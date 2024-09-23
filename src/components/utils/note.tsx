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
        "border border-l-4 shadow my-2 rounded-md text-sm",
        "text-gray-700 dark:text-gray-400",
        "bg-white border-zinc-200",
        "dark:bg-zinc-950 dark:border-zinc-900",
        className
      )}
    >
      <h1 className="text-xs m-1">{title}</h1>
      <p className="my-2 mx-1">{description}</p>
    </section>
  );
};

export default Note;
