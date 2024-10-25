import { CardDescription, CardHeader } from "@/components/ui/card";
import { Post } from "@prisma/client";
import React from "react";

const Body = ({ post }: { post: Post }) => {
  return (
    <>
      <CardHeader className="text-sky-600 text-sm sm:text-xl font-black p-0">
        <span className="hidden sm:block break-all">
          {post.title?.substring(0, 62)}
          {post.title?.substring(60) && <span>...</span>}
        </span>
        <span className="sm:hidden text-base break-all">
          {post.description?.substring(0, 80)}
          {post.description?.substring(80) && <span>...</span>}
        </span>
      </CardHeader>
      <CardDescription>
        <span className="hidden sm:block break-all">
          {post.description?.substring(0, 300)}
          {post.description?.substring(300) && <span>...</span>}
        </span>
        <span className="sm:hidden text-xs break-all">
          {post.description?.substring(0, 150)}
          {post.description?.substring(150) && <span>...</span>}
        </span>
      </CardDescription>
    </>
  );
};

export default Body;
