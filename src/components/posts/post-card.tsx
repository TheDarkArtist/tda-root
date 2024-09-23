import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Post } from "@prisma/client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import PostUsername from "./post-username";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="relative transition-shadow hover:shadow-lg dark:hover:shadow-emerald-950 group">
      <section
        className={cn(
          "absolute flex items-center justify-between",
          "w-full py-1 px-2 top-[12.24rem] right-0 z-10 transition-all",
          "bg-white text-black dark:bg-black dark:text-white",
          "backdrop-filter backdrop-blur-0 bg-opacity-60",
          "dark:backdrop-filter dark:bg-opacity-50 dark:backdrop-blur-sm",
          "group-hover:bg-opacity-100 dark:group-hover:bg-opacity-100"
        )}
      >
        <span className="text-sm">
          {formatDistanceToNow(post.createdAt, { addSuffix: true })}
        </span>
        <PostUsername userId={post.userId as string} />
      </section>
      <Link href={`/posts/${post.slug}`}>
        <div className="relative h-56 overflow-hidden rounded-t-sm">
          <Image
            src={post.image || "/img/yellow-headphones.png"}
            alt="card image"
            fill
          />
          <span className="absolute h-48 w-full top-0 left-0" />
        </div>
        <CardHeader className="text-sky-600 text-2xl font-black py-0 px-2">
          <h2 className="leading-6 py-2">{post.title}</h2>
        </CardHeader>
        <CardContent className="px-2 py-0 text-sm">
          <p className="break-all">
            {post.description?.substring(0, 130)}
            {post.description?.substring(130) && <span>...</span>}
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
      </Link>
    </Card>
  );
};

export default PostCard;
