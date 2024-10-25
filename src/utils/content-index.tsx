"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface ContentIndexProps {
  content: string;
}

const ContentIndex: React.FC<ContentIndexProps> = ({ content }) => {
  const router = useRouter();

  const [headings, setHeadings] = useState<
    { text: string; id: string; level: number }[]
  >([]);

  const extractHeadings = (content: string) => {
    if (!content) return [];

    const regex = /^(#+)\s(.+)/gm;
    const headingsArray: { text: string; id: string; level: number }[] = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
      const headingText = match[2];
      const level = match[1].length;
      const id = headingText
        .toLowerCase()
        .replace(/[\s:]+/g, "-")
        .replace(/[^a-z0-9\-]+/g, "");

      headingsArray.push({ text: headingText, id, level });
    }

    return headingsArray;
  };

  useEffect(() => {
    setHeadings(extractHeadings(content));
  }, [content]);

  if (!headings.length) return null;

  return (
    <nav className="rounded-sm">
      <h1 className="border-b border-gray-200 dark:border-cyan-950 pb-2 text-center text-xl font-bold dark:text-sky-600 text-blue-600">
        On this page
      </h1>
      <ul className="overflow-y-auto max-h-screen space-y-1 pt-4 pb-40">
        {headings.map((heading, index) => (
          <li
            key={index}
            style={{ marginLeft: `${(heading.level - 1) * 16}px` }}
          >
            <p
              onClick={() => {
                router.push(`#${heading.id}`);
              }}
              className={cn(
                "block cursor-pointer py-1 rounded ",
                "hover:bg-blue-100 dark:hover:bg-cyan-700/30 ",
                "dark:text-cyan-600 text-blue-800"
              )}
            >
              {heading.text}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContentIndex;
