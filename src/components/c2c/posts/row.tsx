import { PostWithCommentsUserViewsId } from "@/lib/types";
import DeleteButton from "@/components/utils/buttons/delete-button";
import PublishButton from "@/components/utils/buttons/publish-button";
import UpdateButton from "@/components/utils/buttons/update-button";
import ViewButton from "@/components/utils/buttons/view-button";

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
      <td className="border-2 border-zinc-800 align-top text-center px-2 py-1">
        {post.createdAt.toDateString()}
      </td>
      <td className="border-2 border-zinc-800 align-top text-center px-2 py-1">
        {post.updatedAt.toDateString()}
      </td>
      <td className="border-2 border-zinc-800 align-top text-center px-2 py-1">
        {post.user?.username}
      </td>
      <td className="border-2 border-zinc-800 min-w-60 align-top px-2 py-1">
        {post.title}
      </td>
      <td className="border-2 min-w-60 border-zinc-800 px-2 py-1 align-top">
        {post.description?.substring(0, 100)}
      </td>
      <td className="border-2 border-zinc-800 px-2 py-1 align-top">
        {post.views.length}
      </td>
      <td className="border-2 border-zinc-800 px-2 py-1 align-top">
        {post.upVotes.length}
      </td>
      <td className="flex gap-1 p-2 align-top">
        <PublishButton type="post" id={post.id} published={post.published} />
        <ViewButton text="View" type="post" slug={post.slug} />
        <UpdateButton type="post" slug={post.slug} />
        <DeleteButton type="post" id={post.id} />
      </td>
    </tr>
  );
};

export default Row;
