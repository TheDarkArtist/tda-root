import Tags from "@/components/posts/card/tags";
import AvgReadingTime from "@/components/utils/avg-read-time";
import { getPostBySlug } from "@/lib/actions/posts/get-post";
import React from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { FaComments, FaTags } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const RightSidebar = async ({ id }: { id: string }) => {
  const post = await getPostBySlug(id);

  return (
    <div className="sticky top-12 space-y-6">
      <div className="overflow-y-auto">
        <section className="flex flex-col gap-2 justify-center items-center border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white rounded-sm m-2 text-xs">
          <div className="py-2 border-b border-gray-200 dark:border-gray-800 w-full">
            <p className="px-2 font-semibold text-gray-800 dark:text-gray-300 text-base">
              Author
            </p>
          </div>
          <Link href={`/${post?.user?.username}`}>
            <Image
              className="border border-gray-800 hover:border-red-600 mx-auto h-24 w-24 rounded-full"
              src={post?.user?.image || ""}
              alt={post?.user?.username as string}
              height={128}
              width={128}
            />
          </Link>
          <div className="pb-4">
            <p className="text-lg font-semibold dark:text-gray-400">
              {post?.user?.name}
            </p>
            <h2 className="text-center">{post?.user?.username}</h2>
          </div>
        </section>
        <section className="border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-xs">
          <h2>Avg. Reading Time</h2>
          <AvgReadingTime content={post?.body as string} />
        </section>
        <section className="border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-xs">
          <h4>Last updated At</h4>
          <p className="opacity-80">
            <strong>
              {post?.updatedAt.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              {post?.updatedAt
                .toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
                })
                .replace("am", "AM")
                .replace("pm", "PM")}
            </strong>
          </p>
          <hr className="dark:border-zinc-800 border-zinc-300 mt-3 mb-2" />
          <h4>Created At</h4>
          <p className="opacity-80">
            <strong>
              {post?.createdAt.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              {post?.createdAt
                .toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
                })
                .replace("am", "AM")
                .replace("pm", "PM")}
            </strong>
          </p>
        </section>

        <div className="flex flex-wrap justify-evenly border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white p-2 m-2 gap-4 sm:text-xs overflow-hidden">
          <section className="text-center">
            <p className="flex items-center gap-1 text-sm">
              <LuEye />
              <strong>{post?.views.length}</strong>
            </p>
          </section>
          <section className="text-center">
            <p className="flex items-center gap-1 text-sm">
              <BiSolidUpvote />
              <strong>0</strong>
            </p>
          </section>
          <section className="text-center">
            <p className="flex items-center gap-1 text-sm">
              <FaComments />
              <strong>{post?.commnets.length}</strong>
            </p>
          </section>
        </div>

        <section className="border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-sm space-y-2">
          <h3 className="ndent-2 font-bold">
            <span className="flex items-center gap-1">
              <FaTags />
              <span>Tags</span>
            </span>
          </h3>
          <Tags tags={post?.tags as string[]} limit={20} />
        </section>
      </div>
    </div>
  );
};

export default RightSidebar;
