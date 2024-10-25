import { getMinProjectBySlug } from "@/lib/actions/projects/get-project";
import MarkdownRenderer from "@/utils/markdown-provider";

const Body = async ({ projectId }: { projectId: string }) => {
  const project = await getMinProjectBySlug(projectId);
  return <MarkdownRenderer content={project?.body as string} />;
};

export default Body;
