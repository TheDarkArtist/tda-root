import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";
import LeftSidebar from "@/components/posts/page/left-sidebar";
import Header from "@/components/posts/page/header";
import Body from "@/components/posts/page/body";
import RightSidebar from "@/components/posts/page/right-sidebar";
import Footer from "@/components/posts/page/footer";
import {
  BodySkeleton,
  HeaderSkeleton,
  RightSidebarSkeleton,
} from "@/components/skeletons/project";
import { Metadata } from "next";
import { getPostBySlug } from "@/lib/actions/posts/get-post";
import Loader from "@/components/utils/loader";

interface PostPageParams {
  params: Params;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = await getPostBySlug(params.postId);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post?.title,
    description: post?.description,
    keywords: post?.tags,
    authors: [{ name: "Kushagra Sharma", url: "https://www.thedarkartist.in" }],
    robots: "index, follow",
    publisher: "Kushagra Sharma",
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.description as string,
      site: "@TheDarkArtist",
      creator: "@TheDarkArtist",
    },
    openGraph: {
      title: post?.title,
      description: post?.description as string,
      images: post?.image as string,
      siteName: "Kushagra Sharma - Full Stack Developer",
      url: `https://thedarkartist.in/posts/${post?.slug}`,
      type: "article",
      publishedTime: post?.createdAt.toISOString(),
      modifiedTime: post?.updatedAt.toISOString(),
      authors: [post.user?.username as string],
    },
  };
}

const ProjectPage: React.FC<PostPageParams> = ({ params }) => {
  return (
    <div className="relative flex flex-col overflow-y-auto scroll-smooth md:grid grid-cols-1 md:grid-cols-12 h-full">
      <div className="md:flex justify-center md:overflow-y-auto col-span-3">
        <div className="md:max-w-sm">
          <Suspense fallback={<RightSidebarSkeleton />}>
            <LeftSidebar id={params.postId} />
          </Suspense>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-950 md:overflow-y-auto scroll-smooth col-span-6 md:col-span-9 lg:col-span-6">
        <Suspense fallback={<HeaderSkeleton />}>
          <Header postId={params.postId} />
        </Suspense>
        <div className="max-w-screen-md mx-auto md:mt-12 p-4">
          <Suspense fallback={<BodySkeleton />}>
            <Body postId={params.postId} />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Footer postId={params.postId} />
          </Suspense>
        </div>
      </div>

      <div className="hidden lg:flex justify-center overflow-y-auto col-span-3">
        <div className="max-w-sm w-full">
          <Suspense fallback={<RightSidebarSkeleton />}>
            <RightSidebar id={params.postId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
