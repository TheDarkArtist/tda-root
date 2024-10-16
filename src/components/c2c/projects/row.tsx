import { Button } from "@/components/ui/button";
import { ProjectWithUserViews } from "@/lib/types";
import React from "react";

const Row = ({
  project,
  index,
}: {
  project: ProjectWithUserViews;
  index: number;
}) => {
  return (
    <tr className="border-2 text-sm border-zinc-800">
      <td className="border-2 border-zinc-800 align-top text-center px-2 py-1">
        {index + 1}.
      </td>
      <td className="border-2 border-zinc-800 min-w-60 align-top px-2 py-1">
        {project.title}
      </td>
      <td className="border-2 min-w-60 border-zinc-800 px-2 py-1">
        {project.description?.substring(0, 200)}
      </td>
      <td className="border-2 border-zinc-800 px-2 py-1 align-top">
        {project.views.length}
      </td>
      <td className="min-w-48 space-x-1 p-2 align-top">
        <Button variant="outline" size="sm">
          View
        </Button>
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Row;
