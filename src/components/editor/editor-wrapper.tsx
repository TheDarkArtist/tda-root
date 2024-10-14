import { auth } from "@/lib/auth";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";
import React, { FC } from "react";
import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import { getPostBySlug } from "@/lib/actions/posts/get-post";
import Editor from "./editor";

interface EditorWrapperProps {
  children?: React.ReactNode;
  type: "project" | "post";
  params: Params;
}

const EditorWrapper: FC<EditorWrapperProps> = async ({
  children,
  params,
  type,
}) => {
  const session = await auth();

  // if no session show a 404
  if (!session) return notFound();

  // get the id conditionly for projet or post
  let id;
  let response;

  if (type === "project") {
    id = params.projectId;
    response = await getProjectBySlug(id);
  } else if (type === "post") {
    id = params.postId;
    response = await getPostBySlug(id);
  } else {
    id = null;
    response = null;
  }

  return (
    <Editor type={type} response={response}>
      {children}
    </Editor>
  );
};

export default EditorWrapper;
