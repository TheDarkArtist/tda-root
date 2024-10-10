import { getViews } from "@/lib/actions/projects/get-views";
import { LuEye } from "react-icons/lu";

const Views = async ({ projectId }: { projectId: string }) => {
  const views = await getViews(projectId);

  return (
    <span className="flex text-sm gap-1 items-center">
      <LuEye className="h-4 w-4 text-stone-300" />
      <p>{views}</p>
    </span>
  );
};

export default Views;
