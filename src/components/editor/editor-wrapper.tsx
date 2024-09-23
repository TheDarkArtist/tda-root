import React from "react";
import Editor from "./editor";
import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import { getPostBySlug } from "@/lib/actions/posts/get-post";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

interface EditorWrapperProps {
  id: string;
  type: "Project" | "Post";
}

const EditorWrapper: React.FC<EditorWrapperProps> = async ({
  id,
  type,
}): Promise<React.JSX.Element> => {
  let data;

  const session = await auth();

  if (!session) {
    notFound();
  }

  if (type === "Project") data = await getProjectBySlug(id);
  else if (type === "Post") data = await getPostBySlug(id);
  else data = null;

  if (!data?.id) {
    return <div className="text-red-600">Error: Something went wrong</div>;
  }

  return <Editor data={data} type={type} />;
};

export default EditorWrapper;
