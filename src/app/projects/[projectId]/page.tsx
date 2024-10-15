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
    <main className="relative overflow-hidden h-full md:border-4 border-t-transparent border-zinc-900">
      <div className="sm:grid grid-cols-12 max-w-screen-2xl w-full mx-auto">
        <div className="border-r dark:border-zinc-900 col-span-3 hidden lg:block sticky top-14 h-screen">
          <LeftSidebar id={params.projectId} />
        </div>

        <article className="scroll-smooth col-span-8 lg:col-span-7 dark:bg-grid-sm-zinc-600 bg-grid-sm-gray-200 overflow-y-auto max-h-screen">
          <Suspense fallback={<HeaderSkeleton />}>
            <Header projectId={params.projectId} />
          </Suspense>
          <Suspense fallback={<BodySkeleton />}>
            <Body projectId={params.projectId} />
          </Suspense>
          <Footer projectId={params.projectId} />
        </article>

        <aside className="border-l dark:border-zinc-900 col-span-4 lg:col-span-2 hidden sm:block sticky top-0 h-screen">
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
