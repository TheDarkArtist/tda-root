import React, { Suspense } from "react";
import AddComment from "./add-comment";
import Comments from "./comments";
import { CommentsSkeleton } from "@/components/skeletons/comment";

const Footer = ({ projectId }: { projectId: string }) => {
  return (
    <div className="flex flex-col pb-10">
      <AddComment projectId={projectId} />
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments projectId={projectId} />
      </Suspense>
    </div>
  );
};

export default Footer;
