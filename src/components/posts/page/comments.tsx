import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { LuThumbsUp } from "react-icons/lu";
import { Comment as CommentInterface, User } from "@prisma/client";
import { getComments } from "@/lib/actions/posts/get-comments";

interface CommentWithUser extends CommentInterface {
  user: User;
}

const Comments = async ({ postId }: { postId: string }) => {
  if (!postId) return;

  const comments = (await getComments(postId)) as CommentWithUser[];

  if (!Array.isArray(comments) || comments.length === 0) {
    return (
      <div className="text-center text-gray-500">No comments available.</div>
    );
  }

  return (
    <div className="w-full dark:text-gray-300 my-4 p-4 overflow-hidden bg-dot-stone-600/20 rounded-md">
      <div className="mx-4 space-y-4">
        {comments.map((comment: CommentWithUser) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
};

const Comment = ({ data }: { data: CommentWithUser }) => {
  return (
    <div className="flex flex-col rounded-md ">
      <div className="flex items-center">
        <div className="flex gap-2 items-center">
          <Image
            src={data.user.image || "/logo/rust.png"}
            className="rounded-full"
            alt="comment user"
            height={32}
            width={32}
          />
          <p className="text-sm font-bold">{data.user.username}</p>
          <p className="text-xs dark:text-stone-400 text-stone-600 min-w-32">
            {formatDistanceToNow(data.createdAt, { addSuffix: true })}
          </p>
        </div>
        <div className="border border-dashed dark:border-stone-800 border-stone-400 w-full mx-4" />
        <div className="text-sm w-min whitespace-nowrap flex gap-2">
          <p>26</p>
          <LuThumbsUp />
        </div>
      </div>
      <p className="ml-10 text-sm">{data.text}</p>
    </div>
  );
};

export default Comments;
