import React from "react";
import Row from "./row";
import { getPosts } from "@/lib/actions/posts/get-posts";
import { currentUser } from "@/lib/actions/utils/auth";

const Table = async ({ query }: { query: string }) => {
  const user = await currentUser();
  const posts = await getPosts(false, query, undefined, user?.id);

  const headings = ["Index", "Created", "Title", "Description", "Actions"];

  if (posts?.length === 0 && query) {
    return (
      <div className="flex items-center justify-center dark:bg-zinc-950 bg-blue-100 p-8 mt-6 rounded-lg shadow-lg text-center">
        <div>
          <h3 className="mt-4 text-xl font-semibold dark:text-gray-300 text-gray-800">
            No Drafts Found!
          </h3>
          <p className="dark:text-gray-400 text-gray-600 mt-2">
            It looks like there are no drafts matching your search results.
          </p>
        </div>
      </div>
    );
  }

  if (posts?.length === 0)
    return (
      <div className="flex items-center justify-center dark:bg-zinc-950 bg-blue-100 p-8 mt-6 rounded-lg shadow-lg text-center">
        <div>
          <h3 className="mt-4 text-xl font-semibold dark:text-gray-300 text-gray-800">
            No Drafts Yet!
          </h3>
          <p className="dark:text-gray-400 text-gray-600 mt-2">
            It looks like you haven’t saved any drafts. Start creating your
            first post!
          </p>
        </div>
      </div>
    );

  return (
    <div className="max-w-full w-full mx-auto overflow-x-auto">
      <table className="border-collapse mx-auto">
        <thead>
          <tr className="bg-gray-200 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            {headings.map((heading, index) => (
              <th
                key={index}
                className="text-start border-2 border-stone-300 dark:border-stone-800/50 px-4 py-2"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-100 dark:bg-zinc-950 overflow-x-auto">
          {posts?.map((post, index) => (
            <Row key={index} post={post} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
