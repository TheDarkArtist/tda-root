import DeleteButton from "@/components/utils/buttons/delete-button";
import PublishButton from "@/components/utils/buttons/publish-button";
import UpdateButton from "@/components/utils/buttons/update-button";
import { PostWithUserViews } from "@/lib/types";
import { Md2Text } from "@/lib/utils";
import React from "react";

const Row = ({ post, index }: { post: PostWithUserViews; index: number }) => {
  return (
    <tr className="border-2 text-sm border-stone-300 dark:border-zinc-800">
      <td className="border-2 dark:border-zinc-800 align-top text-center px-2 py-1">
        {index + 1}.
      </td>

      <td className="border-2 dark:border-zinc-800 align-top text-center px-2 py-1">
        {post.createdAt.toDateString()}
      </td>
      <td className="border-2 dark:border-zinc-800 min-w-60 align-top px-2 py-1">
        {Md2Text(post.title)}
      </td>
      <td className="border-2 min-w-60 dark:border-zinc-800 px-2 py-1">
        {post.description?.substring(0, 200)}
      </td>
      <td className="flex gap-2 p-2 align-top">
        <PublishButton type="post" post={post} />
        <UpdateButton slug={post.slug} type="post" />
        <DeleteButton type="post" id={post.id} />
      </td>
    </tr>
  );
};

export default Row;
