import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import MarkdownRenderer from "@/utils/markdown-provider";
import React from "react";

const Body = async ({ projectId }: { projectId: string }) => {
  const project = await getProjectBySlug(projectId);
  return (
    <section className="p-6 mt-6">
      <MarkdownRenderer content={project?.body as string} />
    </section>
  );
};

export default Body;
