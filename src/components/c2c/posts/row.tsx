import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/utils/buttons/delete-button";
import { Post } from "@prisma/client";
import React from "react";

const Row = ({ post, index }: { post: Post; index: number }) => {
  return (
    <tr className="border-2 border-zinc-800">
      <td className="border-2 border-zinc-800 align-top text-center px-4 py-2">
        {index + 1}.
      </td>
      <td className="border-2 border-zinc-800 align-top px-4 py-2">
        {post.title}
      </td>
      <td className="border-2 max-w-screen-md border-zinc-800 px-4 py-2">
        {post.description?.substring(0, 1000)}
      </td>
      <td className="border-2 border-zinc-800 align-top px-4 py-2">0</td>
      <td className="flex items-center min-w-48 space-x-1 space-y-1 p-2">
        <Button variant="outline" size="sm">
          View
        </Button>
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <DeleteButton type="post" id={post.id} />
      </td>
    </tr>
  );
};

export default Row;
