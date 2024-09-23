import EditorWrapper from "@/components/editor/editor-wrapper";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const EditPage = ({ params }: { params: Params }) => {
  return <EditorWrapper id={params.projectId} type="Project" />;
};

export default EditPage;
