import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import ContentIndex from "@/utils/content-index";
import React from "react";

const LeftSidebar = async ({ id }: { id: string }) => {
  const content = await getProjectBySlug(id);
  return (
    <div className="bg-white dark:bg-black pt-14">
      <div className="sticky top-12 px-2 backdrop-filter backdrop-blur-lg">
        <h2 className="text-xl font-semibold px-2 text-cyan-600">
          ON THIS PAGE
        </h2>
        <hr className="border-cyan-600" />
      </div>
      <ContentIndex content={content?.body as string} />
    </div>
  );
};

export default LeftSidebar;
