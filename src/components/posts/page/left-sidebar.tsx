import { getPostBySlug } from "@/lib/actions/posts/get-post";
import ContentIndex from "@/utils/content-index";
import React from "react";

const LeftSidebar = async ({ id }: { id: string }) => {
  const content = await getPostBySlug(id);
  return (
    <div className="sticky top-14 bg-white dark:bg-black m-4 p-2 text-sm rounded-sm">
      <ContentIndex content={content?.body as string} />
    </div>
  );
};

export default LeftSidebar;
