import { getPosts } from "@/lib/actions/posts/get-posts";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

type PostCountsProps = {
  total: number;
  published: number;
  drafts: number;
  isLoggedIn: boolean;
};

const fetchPostCounts = async (): Promise<PostCountsProps> => {
  const allPosts = await getPosts();

  if (!allPosts) {
    return {
      total: 0,
      published: 0,
      drafts: 0,
      isLoggedIn: false,
    };
  }

  const session = await auth();
  const userId = session?.user?.id;
  const isLoggedIn = !!userId;

  const userPosts = allPosts.filter((post) => post.userId === userId);
  const publishedPosts = userPosts.filter((post) => post.published === true);
  const draftPosts = userPosts.filter((post) => post.published === false);

  return {
    total: allPosts.length,
    published: publishedPosts.length,
    drafts: draftPosts.length,
    isLoggedIn,
  };
};

export const TotalPostCount = async () => {
  const postCounts = await fetchPostCounts();
  return <p>{postCounts.total}</p>;
};

export const PublishedPostCount = async () => {
  const { published, isLoggedIn } = await fetchPostCounts();
  return (
    <p>
      {isLoggedIn ? (
        published
      ) : (
        <Link className="text-sm hover:underline" href="/auth/login">Log in to see your published posts</Link>
      )}
    </p>
  );
};

export const DraftPostCount = async () => {
  const { drafts, isLoggedIn } = await fetchPostCounts();
  return (
    <p>
      {isLoggedIn ? (
        drafts
      ) : (
        <Link className="text-sm hover:underline" href="/auth/login">Log in to see your draft posts</Link>
      )}
    </p>
  );
};
