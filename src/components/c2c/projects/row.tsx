import DeleteButton from "@/components/utils/buttons/delete-button";
import PublishButton from "@/components/utils/buttons/publish-button";
import UpdateButton from "@/components/utils/buttons/update-button";
import ViewButton from "@/components/utils/buttons/view-button";
import { ProjectWithCommentsUserViewsId } from "@/lib/types";
import React from "react";

const Row = ({
  project,
  index,
}: {
  project: ProjectWithCommentsUserViewsId;
  index: number;
}) => {
  return (
    <tr className="border-2 text-sm border-zinc-800">
      <td className="border-2 border-zinc-800 align-top text-center px-2 py-1">
        {index + 1}.
      </td>
      <td className="border-2 border-zinc-800 align-top text-center px-2 py-1">
        {project.createdAt.toDateString()}
      </td>
      <td className="border-2 border-zinc-800 align-top text-center px-2 py-1">
        {project.updatedAt.toDateString()}
      </td>
      <td className="border-2 border-zinc-800 min-w-60 align-top px-2 py-1">
        {project.title}
      </td>
      <td className="border-2 min-w-60 border-zinc-800 px-2 py-1">
        {project.description?.substring(0, 100)}
      </td>
      <td className="border-2 border-zinc-800 px-2 py-1 align-top">
        {project.views.length}
      </td>
      <td className="border-2 border-zinc-800 px-2 py-1 align-top">
        {project.comments.length}
      </td>
      <td className="border-2 border-zinc-800 px-2 py-1 align-top">
        {project.upVotes.length}
      </td>
      <td className="border-2 border-zinc-800 px-2 py-1 align-top">
        {project.link}
      </td>
      <td className="border-2 border-zinc-800 px-2 py-1 align-top">
        {project.repo}
      </td>
      <td className="flex space-x-1 p-2 align-top">
        <PublishButton
          type="project"
          id={project.id}
          published={project.published}
        />
        <ViewButton text="View" type="project" slug={project.slug} />
        <UpdateButton type="project" slug={project.slug} />
        <DeleteButton type="project" id={project.id} />
      </td>
    </tr>
  );
};

export default Row;
