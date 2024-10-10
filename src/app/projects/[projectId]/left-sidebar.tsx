import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import ContentIndex from "@/utils/content-index";
import React from "react";

const LeftSidebar = async ({ id }: { id: string }) => {
  const content = await getProjectBySlug(id);
  return (
    <div className="sticky top-12 bg-white dark:bg-black m-2 text-sm rounded-sm">
      <ContentIndex content={content?.body as string} navbarHeight={16} />
    </div>
  );
};

export default LeftSidebar;
