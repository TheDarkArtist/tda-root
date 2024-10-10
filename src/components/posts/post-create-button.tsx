"use client";

import React, { useCallback, useTransition } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import clsx from "clsx";
import { createEmptyPost } from "@/lib/actions/posts/create-empty-post";

const PostCreateButton: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = useCallback(async () => {
    try {
      const post = await createEmptyPost();

      // FIX: Need to fix this thing
      // for some reason post doesn't seem to have slug in it why i don't kwno
      // the whole component, even the approach of handling autosave needs to be changed
      // @ts-ignore
      const slug = post.slug;

      if (post && !(post as { error: string }).error) {
        startTransition(() => {
          router.push(`/posts/new/${slug}?tab=Edit`);
        });
      } else {
        toast.error(
          (post as { error: string }).error || "Failed to create post"
        );
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create a post. Please try again.");
    }
  }, [router]);

  return (
    <Button
      className={clsx("h-10 px-4", {
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
