import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import { getUserById } from "@/lib/actions/utils/user";
import React from "react";

const Footer = async ({ projectId }: { projectId: string }) => {
  const project = await getProjectBySlug(projectId);
  const user = await getUserById(project?.id as string);

  // TODO: Implement footer component for project
  // PERF: Needs improvement on data fetching

  return (
    <div className={["grid grid-cols-6 w-full p-4"].join(" ")}>
      <section className="col-span-2"></section>
      <section className="col-span-4"></section>
    </div>
  );
};

export default Footer;
