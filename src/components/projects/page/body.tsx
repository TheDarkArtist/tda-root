import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import MarkdownRenderer from "@/utils/markdown-provider";

const Body = async ({ projectId }: { projectId: string }) => {
  const project = await getProjectBySlug(projectId);
  return (
    <section className="scroll-smooth p-6 mt-10 text-zinc-800 dark:text-zinc-200 dark:bg-zinc-950 bg-white">
      <MarkdownRenderer content={project?.body as string} />
    </section>
  );
};

export default Body;
