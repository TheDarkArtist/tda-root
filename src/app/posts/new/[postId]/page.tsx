import EditorWrapper from "@/components/editor/editor-wrapper";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const NewPage = ({ params }: { params: Params }) => {
  return <EditorWrapper id={params.postId} type="Post" />;
};

export default NewPage;
