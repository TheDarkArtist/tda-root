"use client";

import { Input } from "@/components/ui/input";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import { Project } from "@prisma/client";
import React from "react";

const SlugSection = () => {
  const { data, setData } = useEditorDataContext();

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data && setData) {
      setData({
        ...data,
        slug: e.target.value,
      });
    }
  };

  return (
    <div className="border dark:border-zinc-800 border-zinc-200 h-min dark:bg-zinc-950 bg-zinc-100 p-4 rounded-sm">
      <div className="flex justify-between">
        <h2 className="text-2xl mb-6 font-bold">🧭 Change Post Slug</h2>
      </div>
      <p>
        Post slug:
        {data?.slug && data?.slug.trim().toLowerCase().replace(/\s+/g, "-")}
      </p>
      <Input
        className="bg-white dark:bg-black mt-6"
        value={(data as Project)?.slug || ""}
        onChange={handleLinkChange}
      />
    </div>
  );
};

export default SlugSection;
