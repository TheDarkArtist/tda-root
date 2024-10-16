import React from "react";
import Row from "./row";
import { getPosts } from "@/lib/actions/posts/get-posts";

const Table = async () => {
  const posts = await getPosts();

  const headings = [
    "Index",
    "Username",
    "Ttitle",
    "Description",
    "Views",
    "Actions",
  ];
  return (
    <div className="max-w-full w-full mx-auto overflow-x-auto">
      <table className="border-collapse mx-auto">
        <thead>
          <tr className="bg-gray-200 dark:bg-zinc-800 border-2 border-gray-300 dark:border-zinc-800">
            {headings.map((heading, index) => (
              <th
                key={index}
                className="border-2 border-stone-700/50 px-4 py-2"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-100 dark:bg-zinc-900 overflow-x-auto">
          {posts?.map((post, index) => (
            <Row key={index} post={post} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
