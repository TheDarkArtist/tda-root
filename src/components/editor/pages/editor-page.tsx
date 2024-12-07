"use client";

import AnimatedEmoji from "@/components/utils/lottie-animation";
import { cn } from "@/lib/utils";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import MarkdownRenderer from "@/utils/markdown-provider";
import React from "react";

const EditorPage = () => {
  const { data, setData } = useEditorDataContext();

  return (
    <div className="grid h-full grid-cols-1 xl:grid-cols-2">
      <textarea
        className={cn(
          "bg-transparent min-h-full w-full p-6 focus:outline-none resize-none",
          "border-r dark:border-zinc-800 border-zinc-200"
        )}
        placeholder={`🚀  To Infinity  & Beyond...`}
        autoFocus
        defaultValue={data?.body}
        onChange={(e) => {
          setData((prev: any) => ({
            ...prev,
            body: e.target.value,
          }));
        }}
      />
      <div className="md:p-6 w-full h-full hidden xl:block bg-transparent overflow-y-auto mx-auto max-w-screen-md">
        {data?.body?.length === 0 || !data?.body ? (
          <div className="h-full w-full flex justify-center items-center opacity-20">
            <AnimatedEmoji
              className="h-60 w-60"
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f941/512.gif"
            />
          </div>
        ) : (
          <MarkdownRenderer content={data?.body as string} />
        )}
      </div>
    </div>
  );
};

export default EditorPage;
