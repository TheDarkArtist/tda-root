import { getPosts } from "@/lib/actions/posts/get-posts";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);

    const publishedParam = searchParams.get("published");
    const isPublished =
      publishedParam === null ? undefined : publishedParam === "true";

    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const posts = await getPosts(isPublished, undefined, limit);

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
