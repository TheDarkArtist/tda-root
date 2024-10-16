import React from "react";
import PostCard from "./card/post-card";
import { getPosts } from "@/lib/actions/posts/get-posts";

interface PostListProps {
  query?: string;
  currentPage?: number;
  published?: boolean;
  limit?: number;
}

const PostList: React.FC<PostListProps> = async ({
  query,
  published,
  currentPage,
  limit,
}) => {
  const posts = await getPosts(published, query, limit);

  return (
    <section className="grid grid-cols-1 gap-4">
      {posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </section>
  );
};

export default PostList;
