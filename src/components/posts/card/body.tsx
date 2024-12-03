import { CardDescription, CardHeader } from "@/components/ui/card";
import { Md2Text } from "@/lib/utils";
import { Post } from "@prisma/client";
import React from "react";

const Body = ({ post }: { post: Post }) => {
  return (
    <>
      <CardHeader className="text-sky-600 text-sm sm:text-base md:text-xl font-black p-0">
        <span className="hidden sm:block break-all leading-none">
          {post.title?.substring(0, 62)}
          {post.title?.substring(60) && <span>...</span>}
        </span>
        <span className="sm:hidden text-base break-all leading-none">
          {Md2Text(post.description?.substring(0, 80) as string)}
          {post.description?.substring(80) && <span>...</span>}
        </span>
      </CardHeader>
      <CardDescription>
        <span className="sm:hidden text-xs break-all">
          {post.description?.substring(0, 150)}
          {post.description?.substring(150) && <span>...</span>}
        </span>
        <span className="hidden sm:text-xs lg:hidden sm:block break-all">
          {Md2Text(post.description?.substring(0, 115) as string)}
          {post.description?.substring(300) && <span>...</span>}
        </span>
        <span className="hidden text-xs lg:block break-all">
          {Md2Text(post.description?.substring(0, 480) as string)}
          {post.description?.substring(480) && <span>...</span>}
        </span>
      </CardDescription>
    </>
  );
};

export default Body;
