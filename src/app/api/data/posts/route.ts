import { getPosts } from "@/lib/actions/posts/get-posts";
import { NextResponse } from "next/server";

export const GET = async () => {
  const posts = await getPosts();
  return NextResponse.json(posts);
};
