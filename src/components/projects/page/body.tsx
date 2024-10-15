import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import MarkdownRenderer from "@/utils/markdown-provider";

const Body = async ({ projectId }: { projectId: string }) => {
  const project = await getProjectBySlug(projectId);
  return <MarkdownRenderer content={project?.body as string} />;
};

export default Body;
