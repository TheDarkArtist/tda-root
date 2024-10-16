import { CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const Tags = ({ tags, limit = 6 }: { tags: string[]; limit?: number }) => {
  if (!tags) {
    return null;
  }

  return (
    <CardFooter className="py-1 px-0 flex flex-wrap gap-2">
      {tags.slice(0, limit).map((tag, index) => (
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
