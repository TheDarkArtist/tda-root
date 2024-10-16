import { PostWithUserViews } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { FaEye } from "react-icons/fa";

const MetaBar = ({ post }: { post: PostWithUserViews }) => {
  return (
    <div className="flex justify-between w-full text-gray-400">
      <div className="flex items-center gap-2">
        <span className="flex gap-1 text-sm items-center">
          <FaEye />
          {post.views.length}
        </span>
        <span className="text-xs">
          {formatDistanceToNow(post.createdAt, { addSuffix: true })}
        </span>
      </div>
      <span className="text-xs sm:text-sm">by {post.user?.username}</span>
    </div>
  );
};

export default MetaBar;
