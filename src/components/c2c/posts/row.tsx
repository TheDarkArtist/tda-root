import { Button } from "@/components/ui/button";
import { PostWithCommentsUserViewsId } from "@/lib/types";
import React from "react";

const Row = ({
  post,
  index,
}: {
  post: PostWithCommentsUserViewsId;
  index: number;
}) => {
  return (
    <tr className="border-2 text-sm border-zinc-800">
      <td className="border-2 border-zinc-800 align-top text-center px-2 py-1">
        {index + 1}.
      </td>
      <td className="border-2 max-w-screen-md border-zinc-800 px-2 py-1 align-top">
        {post.user?.username}
      </td>
      <td className="border-2 border-zinc-800 min-w-60 align-top px-2 py-1">
        {post.title}
      </td>
      <td className="border-2 min-w-60 border-zinc-800 px-2 py-1">
        {post.description?.substring(0, 200)}
      </td>
      <td className="border-2 border-zinc-800 px-2 py-1 align-top">
        {post.views.length}
      </td>
      <td className="min-w-48 space-x-1 p-2 align-top">
        <Button variant="outline" size="sm">
          View
        </Button>
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Row;
