import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import Header from "./header";
import Body from "./body";
import Contents from "./contents";
import Footer from "./footer";

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
      <div className="sm:grid grid-cols-10 max-w-screen-lg w-full mx-auto">
        <article className="col-span-7 dark:bg-grid-sm-zinc-600 bg-grid-sm-gray-200">
          <Header projectId={params.projectId} />
          <Body projectId={params.projectId} />
        </article>
        <aside className="border-l-4 dark:border-zinc-800 col-span-3 hidden sm:block">
          <Contents id={params.projectId} />
        </aside>
      </div>
      <div className="max-w-screen-lg w-full mx-auto">
        <Footer projectId={params.projectId} />
      </div>
    </main>
  );
};

export default ProjectPage;
