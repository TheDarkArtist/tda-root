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

interface PostPageParams {
  params: Params;
}

const ProjectPage: React.FC<PostPageParams> = ({ params }) => {
  return (
    <main className="relative overflow-hidden h-full">
      <div className="sm:grid grid-cols-12 max-w-screen-2xl mx-auto w-full">
        <div className="h-screen pb-40 hidden sm:block col-span-4 sm:col-span-3">
          <div className="border-r sm:flex justify-end w-full dark:border-zinc-900 col-span-3 hidden sticky top-14 h-[80%]">
            <LeftSidebar id={params.projectId} />
          </div>
        </div>

        <article className="scroll-smooth col-span-9 lg:col-span-6 dark:bg-grid-sm-zinc-600 bg-grid-sm-gray-200 overflow-y-auto max-h-screen pb-20">
          <Suspense fallback={<HeaderSkeleton />}>
            <Header projectId={params.projectId} />
          </Suspense>
          <div className="p-4 mt-10 bg-white dark:bg-zinc-950 dark:text-gray-200">
            <Suspense fallback={<BodySkeleton />}>
              <Body projectId={params.projectId} />
            </Suspense>
          </div>
          <Footer projectId={params.projectId} />
        </article>

        <aside className="border-l p-2 dark:border-zinc-900 col-span-3 hidden md:block sticky top-0 h-screen">
          <Suspense fallback={<RightSidebarSkeleton />}>
            <RightSidebar id={params.projectId} />
          </Suspense>
        </aside>
      </div>
      <div className="fixed right-4 bottom-4"></div>
    </main>
  );
};

export default ProjectPage;
