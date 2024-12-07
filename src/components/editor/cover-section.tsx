"use client";

import { Input } from "@/components/ui/input";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import { Project } from "@prisma/client";
import Image from "next/image";
import React from "react";
import Note from "../utils/note";

const CoverSection = () => {
  const { data, setData } = useEditorDataContext();

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data && setData) {
      setData({
        ...data,
        image: e.target.value,
      });
    }
  };

  return (
    <div className="border dark:border-zinc-800 h-min border-zinc-200 dark:bg-zinc-950 bg-zinc-100 p-4 rounded-sm">
      <div className="flex justify-between">
        <h2 className="text-2xl mb-6 font-bold">✨ Add Post Cover</h2>
      </div>
      <div>
        <Image
          className="border border-zinc-800 mx-auto"
          src={(data?.image as string) || ""}
          alt={(data?.title as string) + " cover image"}
          height={400}
          width={600}
        />
      </div>
      <Input
        className="bg-white dark:bg-black mt-10"
        placeholder="Enter cover image link (e.g., https://example.com/cover.jpg)"
        value={(data as Project)?.image || ""}
        onChange={handleLinkChange}
      />
      <div className="ml-2 text-sm text-yellow-600">Tip: Save the project first to use the cover functionality</div>
      <Note
        title="NOTE"
        description="For now only image links are supported, I'll add support for uploading images later"
      />
    </div>
  );
};

export default CoverSection;
