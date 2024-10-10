import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import MarkdownRenderer from "@/utils/markdown-provider";
import React from "react";

const Body = async ({ projectId }: { projectId: string }) => {
  const project = await getProjectBySlug(projectId);
  return (
    <section className="p-6  mt-10 text-zinc-800 dark:text-zinc-200 dark:bg-black/50 bg-white/50">
      <MarkdownRenderer content={project?.body as string} />
    </section>
  );
};

export default Body;
