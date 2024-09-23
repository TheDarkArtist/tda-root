import { cn } from "@/lib/utils";
import { os } from "@/utils/fonts";
import MarkdownRenderer from "@/utils/markdown-provider";
import React from "react";

const Preview = ({ content }: { content: string }) => {
  return (
    <code
      className={cn(
        "border-l-4 border-gray-200 bg-gray-100 bg-grid-sm-gray-300 dark:border-zinc-800 p-4 dark:bg-zinc-950 dark:bg-grid-sm-zinc-600"
      )}
    >
      <MarkdownRenderer content={content} />
    </code>
  );
};

export default Preview;
