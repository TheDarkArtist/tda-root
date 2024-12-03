import { getPostBySlug } from "@/lib/actions/posts/get-post";
import MarkdownRenderer from "@/utils/markdown-provider";
import { notFound } from "next/navigation";

const Body = async ({ postId }: { postId: string }) => {
  const post = await getPostBySlug(postId);

  if (!post) {
    return notFound();
  }

  return <MarkdownRenderer content={post?.body as string} />;
};

export default Body;
