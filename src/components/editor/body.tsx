"use client";

import { cn } from "@/lib/utils";
import { Post, Project } from "@prisma/client";
import React, { Dispatch, SetStateAction } from "react";
import TextAreaAutosize from "react-textarea-autosize";

const Body = ({
  content,
  setContent,
}: {
  content: Project | Post;
  setContent: Dispatch<SetStateAction<Project | Post>>;
}) => {
  return (
    <TextAreaAutosize
      className={cn(
        "min-h-full w-full ",
        "bg-grid-sm-black bg-gray-50 dark:bg-grid-sm-red-900 dark:bg-zinc-950",
        " focus:outline-none pb-20 p-4 resize-none",
        " placeholder:font-black placeholder:font-sans placeholder:text-2xl placeholder:dark:text-zinc-800"
      )}
      placeholder="Write an awesome post!"
      onChange={(e) =>
        setContent((prev) => ({
          ...prev,
          body: e.target.value,
        }))
      }
      defaultValue={content.body}
    />
  );
};

export default Body;
