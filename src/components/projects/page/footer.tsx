import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import { getUserById } from "@/lib/actions/utils/user";
import React, { Suspense } from "react";
import AddComment from "./add-comment";
import Comments from "./comments";

const Footer = async ({ projectId }: { projectId: string }) => {
  const project = await getProjectBySlug(projectId);
  const user = await getUserById(project?.id as string);

  // TODO: Implement footer component for project
  // PERF: Needs improvement on data fetching

  return (
    <div className="flex flex-col mb-10">
      <AddComment projectId={projectId} />
      <Suspense
        fallback={<div className="flex w-full my-10 justify-center">...</div>}
      >
        <Comments projectId={projectId} />
      </Suspense>
    </div>
  );
};

export default Footer;
