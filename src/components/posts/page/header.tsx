import React from "react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { UserAccess } from "@prisma/client";
import { getPostBySlug } from "@/lib/actions/posts/get-post";
import { FaEdit } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import { notFound } from "next/navigation";

const Header = async ({ postId }: { postId: string }) => {
  const post = await getPostBySlug(postId);

  if (!post) return notFound();

  const session = await auth();

  return (
    <section
      className={[
        "fixed w-full md:sticky top-12",
        "flex justify-between items-center p-2.5",
        "bg-gray-50 dark:bg-zinc-950",
        "backdrop-filter backdrop-blur-md bg-opacity-50",
        "dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-50",
        "border-b dark:border-zinc-800",
      ].join(" ")}
    >
      <div className="flex items-center text-sm">
        <Link className="opacity-80 hover:opacity-100" href="/posts">
          Posts
        </Link>
        <LuChevronRight className="h-5 w-5 text-zinc-600" />
        <div>
          {post?.slug.substring(0, 24)}
          {post?.slug.length > 24 && "..."}
        </div>
      </div>

      {session &&
        (session.user.access === UserAccess.ROOT ||
          session.user.id === post?.userId) && (
          <Link
            className="flex gap-1 items-center text-cyan-600 dark:text-cyan-600"
            href={`/posts/${postId}/edit/editor`}
          >
            <FaEdit />
            <span>Edit</span>
          </Link>
        )}
    </section>
  );
};

export default Header;
