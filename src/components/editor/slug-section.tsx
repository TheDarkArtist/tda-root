"use client";

import { Input } from "@/components/ui/input";
import { isSlugUnique } from "@/lib/actions/utils/utils";
import { slugify } from "@/lib/utils";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Note from "../utils/note";

const SlugSection = ({ type }: { type: "project" | "post" }) => {
  const { data, setData } = useEditorDataContext();
  const [feedback, setFeedback] = useState<string | null>(null);
  const [currentSlug, setCurrentSlug] = useState(data?.slug || "");
  const originalSlug = data?.slug || "";

  const validateSlug = useDebouncedCallback(
    async (slug: string) => {
      if (!data || !data.id || !setData) return;

      try {
        const { success, message } = await isSlugUnique(data.id, slug, type);

        if (success) {
          setFeedback("Slug is available.");
          setData({ ...data, slug });
        } else {
          setFeedback(message);
          setData({ ...data, slug: originalSlug });
        }
      } catch {
        setFeedback("An unexpected error occurred. Please try again.");
      }
    },
    300 // debounce delay
  );

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const slug = e.target.value;
    setCurrentSlug(slug);
    validateSlug(slug);
  };

  return (
    <div className="border dark:border-zinc-800 border-zinc-200 h-min dark:bg-zinc-950 bg-zinc-100 p-4 rounded-sm">
      <div className="flex justify-between">
        <h2 className="text-2xl mb-6 font-bold">🧭 Change {type} Slug</h2>
      </div>
      <div className="flex flex-wrap items-center">
        <p className="font-bold dark:text-zinc-300">{type} slug:</p>
        <p className="dark:bg-gray-800 bg-white px-2 mx-1">
          {slugify(currentSlug) || originalSlug}
        </p>
      </div>
      <Input
        className="bg-white dark:bg-black mt-6"
        placeholder="Enter new slug"
        value={currentSlug}
        onChange={handleLinkChange}
      />
      {feedback && (
        <p
          className={`mt-2 text-sm ${
            feedback === "Slug is available."
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {feedback}
        </p>
      )}
      <Note
        title="💀 DANGER"
        description={`Changing the slug of this ${type} will affect its URL. This may break existing links to this page, including those shared on external websites or social media. If this slug has been shared or indexed, i recommend using caution.`}
      />
    </div>
  );
};

export default SlugSection;
