import { getProjects } from "@/lib/actions/projects/get-projects";
import React from "react";
import Row from "./row";

const Table = async () => {
  const projects = await getProjects();

  const headings = ["Index", "Title", "Description", "Views", "Actions"];

  return (
    <div className="overflow-x-scroll">
      <table className="border-collapse mx-4">
        <thead>
          <tr className="bg-zinc-800 border-2 border-zinc-800">
            {headings.map((heading, index) => (
              <th
                key={index}
                className="border-2 border-stone-700/50 px-4 py-2"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-zinc-900">
          {projects?.map((project, index) => (
            <Row key={index} project={project} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
