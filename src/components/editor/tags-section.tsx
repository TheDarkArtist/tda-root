"use client";

import { Input } from "@/components/ui/input";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import { Cross2Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { toast } from "sonner";

const TagsSection = () => {
  const { data, setData } = useEditorDataContext();
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      const newTag = inputValue.trim();

      if (newTag === "") {
        toast.error("Tag cannot be empty or spaces only");
        return;
      }

      if (data?.tags?.includes(newTag)) {
        toast.error("Tag already exists");
        return;
      }

      const newTags = [...(data?.tags || []), newTag];
      setData((prev: any) => ({
        ...prev,
        tags: newTags,
      }));

      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = data?.tags.filter((tag) => tag !== tagToRemove);
    setData((prev: any) => ({
      ...prev,
      tags: updatedTags,
    }));
  };

  return (
    <div className="border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-950 bg-zinc-100 p-4 rounded-sm">
      <div className="flex justify-between">
        <h2 className="text-2xl mb-6 font-bold">🏷️ Add Tags</h2>
        <p>Added tags: {data?.tags?.length || 0}</p>
      </div>
      <ul className="flex flex-wrap">
        {data?.tags && data.tags.length > 0 ? (
          data.tags.map((tag, index) => (
            <li
              className="dark:bg-zinc-800 bg-white h-min rounded-sm px-2 pb-1 m-1 flex items-center justify-between"
              key={index}
            >
              <p>{tag}</p>
              <button
                className="ml-2 text-red-500"
                onClick={() => handleRemoveTag(tag)}
              >
                <Cross2Icon />
              </button>
            </li>
          ))
        ) : (
          <div className="p-4">No tags added yet.</div>
        )}
      </ul>
      <Input
        className="bg-white dark:bg-black mt-6"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Press 'Enter' or 'Space' to add a tag"
      />
    </div>
  );
};

export default TagsSection;
