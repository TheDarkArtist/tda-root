"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Post } from "@prisma/client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import PostUsername from "./post-username";
import { incrementView } from "@/lib/actions/posts/increment-view";
import { useSession } from "next-auth/react";

const PostCard = ({ post }: { post: Post }) => {
  const session = useSession();
  return (
    <Card className="relative transition-shadow hover:shadow-lg dark:hover:shadow-emerald-950 group">
      <Link
        onClick={() => {
          incrementView(post.id, session.data?.user.id as string);
        }}
        className="flex"
        href={`/posts/${post.slug}`}
      >
        <div className="relative h-56 min-w-[24rem] overflow-hidden rounded-t-sm">
          <Image
            unoptimized
            src={post.image || "/img/yellow-headphones.png"}
            alt="card image"
            fill
          />
          <span className="absolute h-48 w-full top-0 left-0" />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex justify-between w-full">
            {formatDistanceToNow(post.createdAt, { addSuffix: true })}
            <PostUsername userId={post.userId as string} />
          </div>
          <CardHeader className="text-sky-600 text-2xl font-black py-0 px-2">
            <h2 className="leading-6 py-2">{post.title}</h2>
          </CardHeader>
          <CardContent className="px-2 py-0 text-sm">
            <p className="break-all">
              {post.description?.substring(0, 300)}
              {post.description?.substring(300) && <span>...</span>}
            </p>
          </CardContent>
          <CardFooter className="p-2 pt-3 space-x-2">
            {post.tags.map((tag, index) => (
              <span
                className={cn(
                  "border dark:border-zinc-600 border-gray-400",
                  "px-2 pb-0.5 text-xs rounded-full",
                  "dark:bg-black bg-white text-gray-800 dark:text-gray-400"
                )}
                key={index}
              >
                {tag}
              </span>
            ))}
          </CardFooter>
        </div>
      </Link>
    </Card>
  );
};

export default PostCard;
