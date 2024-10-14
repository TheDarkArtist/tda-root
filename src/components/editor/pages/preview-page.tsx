"use client";

import AnimatedEmoji from "@/components/utils/lottie-animation";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import MarkdownRenderer from "@/utils/markdown-provider";
import React from "react";

const PreviewPage = () => {
  const { data } = useEditorDataContext();

  return (
    <p className="grid grid-cols-1 h-full p-6 w-full overflow-y-auto">
      {data?.body?.length === 0 || !data?.body ? (
        <div className="h-full w-full flex flex-col justify-center items-center opacity-20">
          <AnimatedEmoji
            className="h-60 w-60"
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f43e/512.webp"
          />
          <p>Nothing to preview yet! work on some stuff</p>
        </div>
      ) : (
        <MarkdownRenderer content={data?.body as string} />
      )}
    </p>
  );
};

export default PreviewPage;
