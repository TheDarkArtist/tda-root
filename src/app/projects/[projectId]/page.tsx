import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import LeftSidebar from "./left-sidebar";
import RightSidebar from "./right-sidebar";
import GoToTop from "@/components/utils/go-to-top";

interface PostPageParams {
  params: Params;
}

const ProjectPage: React.FC<PostPageParams> = ({ params }) => {
  return (
    <main className="relative">
      <div
        className="w-full h-full bg-white bg-cover bg-center"
        style={{ backgroundImage: "url('/bg/codewithcoffee.jpeg')" }}
      />
      <div className="sm:grid grid-cols-12 max-w-screen-xl w-full mx-auto">
        <aside className="border-r dark:border-zinc-900 col-span-2 hidden md:block">
          <LeftSidebar id={params.projectId} />
        </aside>
        <article className="col-span-8 md:col-span-7 dark:bg-grid-sm-zinc-600 bg-grid-sm-gray-200">
          <Header projectId={params.projectId} />
          <Body projectId={params.projectId} />
        </article>
        <aside className="border-l m-2 dark:border-zinc-900 col-span-4 md:col-span-3 hidden sm:block">
          <RightSidebar id={params.projectId} />
        </aside>
      </div>
      <div className="max-w-screen-lg w-full mx-auto">
        <Footer projectId={params.projectId} />
      </div>
      <div className="fixed right-4 bottom-4">
        <GoToTop />
      </div>
    </main>
  );
};

export default ProjectPage;
