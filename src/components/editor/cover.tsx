import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { Project, Post } from "@prisma/client";
import { useRouter } from "next/navigation";

interface CoverProps {
  content: Project | Post;
  setContent: Dispatch<SetStateAction<Project | Post>>;
}

const Cover: React.FC<CoverProps> = ({ content, setContent }) => {
  const router = useRouter();
  return (
    <main>
      <div className="h-full bg-grid-sm-gray-200 p-6 dark:bg-grid-sm-red-800 space-y-6 max-w-screen-lg mx-auto w-full">
        <section className="h-min w-full border dark:border-zinc-800 border-gray-200 dark:bg-black bg-white rounded-md p-4 shadow">
          <Image
            className="border border-dotted border-cyan-600 mx-auto"
            src={content.image as string}
            alt="Post cover image"
            height={400}
            width={600}
          />
        </section>
        <section className="grid grid-rows-2 gap-4 h-min w-full border dark:border-zinc-800 border-gray-200 dark:bg-black bg-white rounded-md p-4 shadow">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-sky-600">Cover Image</h1>
            <p className="text-sm text-zinc-400">
              This image shows on your post and is the first thing that user
              sees
            </p>
          </div>
          <input
            className="dark:bg-black border dark:border-zinc-800 border-zinc-300 rounded-sm h-min px-4 py-2 placeholder:text-zinc-600"
            placeholder="create a meaningfull slug"
            defaultValue={content.image as string}
            onChange={(e) => {
              setContent((prev) => ({
                ...prev,
                image: e.target.value,
              }));
            }}
            type="text"
          />
        </section>
      </div>
    </main>
  );
};

export default Cover;
