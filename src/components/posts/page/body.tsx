import { getPostBySlug } from "@/lib/actions/posts/get-post";
import MarkdownRenderer from "@/utils/markdown-provider";

const Body = async ({ postId }: { postId: string }) => {
  const post = await getPostBySlug(postId);
  return <MarkdownRenderer content={post?.body as string} />;
};

export default Body;
