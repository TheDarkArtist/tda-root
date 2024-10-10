import Views from "@/components/projects/card/views";
import DeleteButton from "@/components/utils/buttons/delete-button";
import UpdateButton from "@/components/utils/buttons/update-button";
import ViewButton from "@/components/utils/buttons/view-button";
import { Project } from "@prisma/client";
import React from "react";

const Row = ({ project, index }: { project: Project; index: number }) => {
  return (
    <tr className="border-2 border-zinc-800">
      <td className="border-2 border-zinc-800 align-top text-center px-4 py-2">
        {index + 1}.
      </td>
      <td className="border-2 border-zinc-800 align-top px-4 py-2">
        {project.title}
      </td>
      <td className="border-2 max-w-screen-md border-zinc-800 px-4 py-2">
        {project.description?.substring(0, 1000)}
      </td>
      <td className="border-2 border-zinc-800 align-top px-4 py-2">
        <Views projectId={project.id} />
      </td>
      <td className="flex items-center min-w-48 space-x-1 space-y-1 p-2">
        <ViewButton type="project" slug={project.slug} />
        <UpdateButton type="project" slug={project.slug} />
        <DeleteButton type="project" id={project.id} />
      </td>
    </tr>
  );
};

export default Row;
