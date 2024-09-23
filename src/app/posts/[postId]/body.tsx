import { getPost, getPostBySlug } from "@/lib/actions/posts/get-post";
import MarkdownRenderer from "@/utils/markdown-provider";
import React from "react";

const Body = async ({ postId }: { postId: string }) => {
  const post = await getPostBySlug(postId);
  return (
    <section className="p-6">
      <MarkdownRenderer content={post?.body as string} />
    </section>
  );
};

export default Body;
