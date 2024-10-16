import React, { Suspense } from "react";
import AddComment from "./add-comment";
import Comments from "./comments";
import { CommentsSkeleton } from "@/components/skeletons/comment";

const Footer = ({ postId }: { postId: string }) => {
  return (
    <div className="flex flex-col pb-10">
      <AddComment postId={postId} />
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments postId={postId} />
      </Suspense>
    </div>
  );
};

export default Footer;
