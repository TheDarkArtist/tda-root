import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";
import LeftSidebar from "@/components/projects/page/left-sidebar";
import Header from "@/components/projects/page/header";
import Body from "@/components/projects/page/body";
import RightSidebar from "@/components/projects/page/right-sidebar";
import Footer from "@/components/projects/page/footer";
import {
  BodySkeleton,
  HeaderSkeleton,
  RightSidebarSkeleton,
} from "@/components/skeletons/project";
import { Metadata } from "next";
import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import Loader from "@/components/utils/loader";

interface PostPageParams {
  params: Params;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.projectId);

  return {
    title: project?.title,
    description: project?.description,
    keywords: project?.tags,
    authors: [{ name: "Kushagra Sharma", url: "https://www.thedarkartist.in" }],
    robots: "index, follow",
    publisher: "Kushagra Sharma",
    twitter: {
      card: "summary_large_image",
      title: project?.title,
      description: project?.description as string,
      site: "@TheDarkArtist",
      creator: "@TheDarkArtist",
    },
    openGraph: {
      title: project?.title,
      type: "website",
      url: `https://thedarkartist.in/projects/${project?.slug}`,
      description: project?.description as string,
      images: project?.image as string,
    },
  };
}

const ProjectPage: React.FC<PostPageParams> = ({ params }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-full">
      <div className="hidden md:flex justify-center overflow-y-auto col-span-3">
        <div className="max-w-sm">
          <Suspense fallback={<RightSidebarSkeleton />}>
            <LeftSidebar id={params.projectId} />
          </Suspense>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-950 overflow-y-auto scroll-smooth col-span-6 md:col-span-9 lg:col-span-6">
        <Suspense fallback={<HeaderSkeleton />}>
          <Header projectId={params.projectId} />
        </Suspense>
        <div className="max-w-screen-md mx-auto mt-12 p-4">
          <Suspense fallback={<BodySkeleton />}>
            <Body projectId={params.projectId} />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Footer projectId={params.projectId} />
          </Suspense>
        </div>
      </div>
      <div className="hidden lg:flex justify-center overflow-y-auto col-span-3">
        <div className="max-w-sm w-full">
          <Suspense fallback={<RightSidebarSkeleton />}>
            <RightSidebar id={params.projectId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
