import { CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <CardFooter className="p-2 pt-3 space-x-2">
      {tags.map((tag, index) => (
        <span
          className={cn(
            "border dark:border-zinc-600 border-gray-400",
            "px-2 pb-0.5 text-xs rounded-full",
            "dark:bg-black bg-white text-gray-800 dark:text-gray-400"
          )}
          key={index}
        >
          {tag}
        </span>
      ))}
    </CardFooter>
  );
};

export default Tags;
