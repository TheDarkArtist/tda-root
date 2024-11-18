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

interface PostPageParams {
  params: Params;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = await getPostBySlug(params.postId);

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
      type: "website",
      url: `https://thedarkartist.in/posts/${post?.slug}`,
      description: post?.description as string,
      images: post?.image as string,
    },
  };
}

const ProjectPage: React.FC<PostPageParams> = ({ params }) => {
  return (
    <main className="relative overflow-hidden h-full w-full">
      <div className="sm:grid grid-cols-12 max-w-screen-2xl mx-auto w-full">
        <div className="h-screen pb-40 hidden lg:block col-span-3">
          <div className="border-r w-full dark:border-zinc-900 col-span-3 hidden lg:block sticky top-14 h-[80%]">
            <LeftSidebar id={params.postId} />
          </div>
        </div>

        <article className="scroll-smooth col-span-8 lg:col-span-6 dark:bg-grid-sm-zinc-600 bg-grid-sm-gray-200 overflow-y-auto max-h-screen pb-20">
          <Suspense fallback={<HeaderSkeleton />}>
            <Header postId={params.postId} />
          </Suspense>
          <div className="p-4 mt-10 bg-white dark:bg-zinc-950">
            <Suspense fallback={<BodySkeleton />}>
              <Body postId={params.postId} />
            </Suspense>
          </div>
          <Footer postId={params.postId} />
        </article>

        <aside className="border-l p-2 dark:border-zinc-900 col-span-4 lg:col-span-3 hidden sm:block sticky top-0 h-screen">
          <Suspense fallback={<RightSidebarSkeleton />}>
            <RightSidebar id={params.postId} />
          </Suspense>
        </aside>
      </div>
      <div className="fixed right-4 bottom-4"></div>
    </main>
  );
};

export default ProjectPage;
