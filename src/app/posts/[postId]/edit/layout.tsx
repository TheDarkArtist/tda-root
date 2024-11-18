import EditorWrapper from "@/components/editor/editor-wrapper";
import { Metadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

export const metadata: Metadata = {
  title: "Edit post",
};

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) => {
  return (
    <EditorWrapper type="post" params={params}>
      <div className="h-full">{children}</div>
    </EditorWrapper>
  );
};

export default layout;
