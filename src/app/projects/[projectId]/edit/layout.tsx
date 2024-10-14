import EditorWrapper from "@/components/editor/editor-wrapper";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) => {
  return (
    <EditorWrapper type="project" params={params}>
      <div className="h-full">{children}</div>
    </EditorWrapper>
  );
};

export default layout;
