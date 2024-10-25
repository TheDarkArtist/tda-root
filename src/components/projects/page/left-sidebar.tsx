import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import ContentIndex from "@/utils/content-index";
import React from "react";

const LeftSidebar = async ({ id }: { id: string }) => {
  const content = await getProjectBySlug(id);
  return (
    <div className="sticky top-14 bg-white w-72 dark:bg-black m-1 p-1 text-sm rounded-sm">
      <ContentIndex content={content?.body as string} />
    </div>
  );
};

export default LeftSidebar;
