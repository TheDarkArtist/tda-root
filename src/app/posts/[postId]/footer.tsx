import { getPostBySlug } from "@/lib/actions/posts/get-post";
import { getUserById } from "@/lib/actions/utils/user";
import React from "react";

const Footer = async ({ postId }: { postId: string }) => {
  const post = await getPostBySlug(postId);
  const user = await getUserById(post?.id as string);

  // TODO: Implement footer component for post
  // PERF: Needs improvement on data fetching

  return (
    <div className={["grid grid-cols-6 w-full p-4"].join(" ")}>
      <section className="col-span-2"></section>
      <section className="col-span-4"></section>
    </div>
  );
};

export default Footer;
