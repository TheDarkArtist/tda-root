import React from "react";
import {
  DraftPostCount,
  PublishedPostCount,
  TotalPostCount,
} from "./post-stats";
import Link from "next/link";
import { auth } from "@/lib/auth";

const PostWidget = async () => {
  const session = await auth();
  return (
    <section className="h-full pl-6 py-6">
      <ul className="flex flex-col gap-4 border bg-gray-100 dark:bg-zinc-950 h-full dark:border-zinc-800 rounded-md p-4">
        <li className="border dark:border-zinc-800 p-4 bg-white dark:bg-zinc-950 hover:rotate-12 transition-all duration-300">
          <h4 className="text-sm my-2">Total Posts</h4>
          <span className="text-4xl font-extrabold text-zinc-400">
            <TotalPostCount />
          </span>
        </li>

        {session ? (
          <>
            <Link href="/posts/published">
              <li className="border dark:border-zinc-800 hover:border-gray-400 dark:hover:border-gray-600 p-4 bg-white dark:bg-zinc-950 hover:-rotate-12 transition-all duration-300">
                <h4 className="text-sm my-2"> Your Published Posts</h4>
                <span className="text-4xl font-extrabold text-zinc-400">
                  <PublishedPostCount />
                </span>
              </li>
            </Link>
            <Link href="/posts/drafts">
              <li className="border dark:border-zinc-800 hover:border-gray-400 dark:hover:border-gray-600 p-4 bg-white dark:bg-zinc-950 hover:-rotate-12 transition-all duration-300">
                <h4 className="text-sm my-2">Your Draft Posts</h4>
                <span className="text-4xl font-extrabold text-zinc-400">
                  <DraftPostCount />
                </span>
              </li>
            </Link>
          </>
        ) : (
          <>
            <li className="border dark:border-zinc-800 p-4 bg-white dark:bg-zinc-950">
              <h4 className="text-sm my-2"> Your Published Posts</h4>
              <span className="text-4xl font-extrabold text-zinc-400">
                <PublishedPostCount />
              </span>
            </li>
            <li className="border dark:border-zinc-800 p-4 bg-white dark:bg-zinc-950">
              <h4 className="text-sm my-2">Your Draft Posts</h4>
              <span className="text-4xl font-extrabold text-zinc-400">
                <DraftPostCount />
              </span>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};

export default PostWidget;
