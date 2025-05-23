"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { incrementView } from "@/lib/actions/posts/increment-view";
import { useSession } from "next-auth/react";
import Tags from "./tags";
import Body from "./body";
import MetaBar from "./meta-bar";
import { PostWithUserViews } from "@/lib/types";

const PostCard = ({ post }: { post: PostWithUserViews }) => {
  const session = useSession();

  const handleClick = async () => {
    await incrementView(
      post.id,
      session.data?.user.username as string,
      "unknown",
      session.data?.user.id
    );
  };

  return (
    <Card
      className={[
        "group rounded-sm p-0",
        "transition-shadow shadow hover:shadow-lg",
        "dark:hover:shadow-emerald-950",
        "border border-gray-300 dark:border-zinc-700",
        "dark:active:border-sky-600",
      ].join(" ")}
    >
      <Link
        className="relative sm:flex items-center"
        href={`/posts/${post.slug}`}
        onClick={handleClick}
      >
        <div className="relative h-0 sm:h-40 min-w-64 overflow-hidden rounded-l-sm">
          <Image
            className="rounded-l-sm"
            src={post.image || "/img/yellow-headphones.png"}
            alt="card image"
            fill
          />
          <span className="absolute h-48 w-full top-0 left-0" />
        </div>
        <div className="p-2 w-full px-4 space-y-1 sm:h-40">
          <MetaBar post={post} />
          <Body post={post} />
          <Tags tags={post.tags} />
        </div>
      </Link>
    </Card>
  );
};

export default PostCard;
