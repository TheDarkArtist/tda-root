import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import { getUserById } from "@/lib/actions/utils/user";
import React, { Suspense } from "react";
import AddComment from "./add-comment";
import Comments from "./comments";
import { CommentsSkeleton } from "@/components/skeletons/comment";

const Footer = async ({ projectId }: { projectId: string }) => {
  const project = await getProjectBySlug(projectId);
  const user = await getUserById(project?.id as string);

  return (
    <div className="flex flex-col mb-10">
      <AddComment projectId={projectId} />
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments projectId={projectId} />
      </Suspense>
    </div>
  );
};

export default Footer;
