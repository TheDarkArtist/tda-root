import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import Header from "./header";
import Body from "./body";
import Contents from "./contents";
import Footer from "./footer";

interface PostPageParams {
  params: Params;
}

const PostPage: React.FC<PostPageParams> = ({ params }) => {
  return (
    <main className="mt-10">
      <div className="sm:grid grid-cols-10 max-w-screen-lg w-full mx-auto">
        <article className="col-span-7 dark:bg-grid-sm-zinc-600 bg-grid-sm-gray-200">
          <Header postId={params.postId} />
          <Body postId={params.postId} />
        </article>
        <aside className="border-l-4 dark:border-zinc-800 col-span-3 hidden sm:block">
          <Contents id={params.postId} />
        </aside>
      </div>
      <div className="max-w-screen-lg w-full mx-auto">
        <Footer postId={params.postId} />
      </div>
    </main>
  );
};

export default PostPage;
