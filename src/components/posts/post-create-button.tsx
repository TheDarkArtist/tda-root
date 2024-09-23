"use client";

import React, { useCallback, useTransition } from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { createPost } from "@/lib/actions/posts/create-post";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // Assuming you're using a toast library
import clsx from "clsx"; // For class name management

const PostCreateButton: React.FC = () => {
  const { data } = useSession();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (!data?.user) {
      return;
    }

    const createAndNavigate = async () => {
      try {
        const post = await createPost({
          title: "",
          description: "",
          body: "",
          published: false,
          userId: data.user.id as string,
        });

        if (!post) {
          return null;
        }

        startTransition(() => {
          router.push(`/posts/new/${post.slug}?tab=Edit`);
        });
      } catch (error) {
        console.error("Error creating post:", error);
        toast.error("Failed to create a post. Please try again.");
      }
    };

    createAndNavigate();
  }, [data?.user, router]);

  if (!data?.user) return null;

  return (
    <Button
      className={clsx("h-10", "px-4", {
        "opacity-50 cursor-not-allowed": isPending,
      })}
      variant="secondary"
      onClick={handleClick}
      disabled={isPending}
      aria-disabled={isPending}
      aria-busy={isPending}
    >
      {isPending ? "Creating..." : "New Post"}
    </Button>
  );
};

export default PostCreateButton;
