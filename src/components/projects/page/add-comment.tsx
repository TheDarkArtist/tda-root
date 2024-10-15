"use client";
import { addComment } from "@/lib/actions/projects/add-comment";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";

const AddComment = ({ projectId }: { projectId: string }) => {
  const [comment, setComment] = useState<string>("");
  const [viewComment, setViewComment] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (viewComment && commentInputRef.current) {
      commentInputRef.current.focus();
    }
  }, [viewComment]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!comment.trim()) return;

    if (!projectId) return;

    try {
      await addComment(comment, session?.user?.id ?? "", projectId);
      setComment("");
      setViewComment(false);
      router.refresh();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const toggleCommentInput = () => {
    if (status !== "authenticated") {
      signIn("google");
    } else {
      setViewComment((prev) => !prev);
    }
  };

  return (
    <div className="my-4">
      <div
        onClick={toggleCommentInput}
        className={`px-4 py-2 my-4 w-[90%] text-stone-400 mx-auto text-left rounded-full border dark:border-stone-800 border-stone-400 bg-white dark:bg-zinc-950 ${viewComment ? "hidden" : ""} cursor-pointer`}
      >
        {session ? (
          <span>Add a comment</span>
        ) : (
          <Link href="/auth/login">Login to Comment</Link>
        )}
      </div>
      {viewComment && (
        <form
          onSubmit={handleSubmit}
          className="my-4 space-y-4 w-[90%] mx-auto border bg-white dark:bg-zinc-950 dark:border-stone-800 border-stone-400 rounded-2xl p-4"
        >
          <TextareaAutosize
            className="dark:bg-stone-800/80 bg-stone-800/20 px-4 py-2 resize-none rounded-md w-full focus:outline-none"
            ref={commentInputRef}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            minRows={3}
            maxRows={6}
            placeholder="Write your comment here..."
          />
          <div className="flex gap-4 justify-between w-full">
            <div className="flex flex-col md:flex-row md:gap-4 text-xs md:text-sm">
              <span>{comment.length} chars</span>
              <span>{comment.split(/\s+/).filter(Boolean).length} words</span>
            </div>
            <span className="space-x-4">
              <button
                type="button"
                onClick={() => setViewComment(false)}
                className="border border-stone-600 py-1 px-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-900 py-1 px-2 rounded-md text-white"
              >
                Comment
              </button>
            </span>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddComment;
