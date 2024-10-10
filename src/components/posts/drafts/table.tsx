import React from "react";
import TableRow from "./table-row";
import { auth } from "@/lib/auth";
import { getPosts } from "@/lib/actions/posts/get-posts";

const Table = async () => {
  const tableHeads = ["Title", "Views", "Status", "Actions"];
  const session = await auth();
  const posts = await getPosts(false, undefined, undefined, session?.user.id);

  return (
    <table className="min-w-full table-auto text-left text-sm">
      <thead className="dark:bg-zinc-900">
        {tableHeads.map((head) => (
          <th key={head} className="px-6 py-4">
            {head}
          </th>
        ))}
      </thead>
      <tbody>
        {posts?.map((post, index) => <TableRow key={index} post={post} />)}
      </tbody>
    </table>
  );
};

export default Table;
