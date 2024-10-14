"use client";

import { Input } from "@/components/ui/input";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import { Project } from "@prisma/client";
import React from "react";

const LivePreviewSection = () => {
  const { data, setData } = useEditorDataContext();

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data && setData) {
      setData({
        ...data,
        link: e.target.value,
      });
    }
  };

  return (
    <div className="border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-950 bg-zinc-100 p-4 rounded-sm">
      <div className="flex justify-between">
        <h2 className="text-2xl mb-6 font-bold">🖇️ Add Live Preview Link</h2>
      </div>
      <Input
        className="bg-white dark:bg-black mt-6"
        placeholder="Enter live preview link (e.g., https://thedarkartist.in/)"
        value={(data as Project)?.link || ""}
        onChange={handleLinkChange}
      />
    </div>
  );
};

export default LivePreviewSection;
