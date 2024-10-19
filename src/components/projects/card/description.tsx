import { CardContent } from "@/components/ui/card";
import React from "react";
import Tags from "./tags";
import { ProjectWithUserViews } from "@/lib/types";

const Description = ({ project }: { project: ProjectWithUserViews }) => {
  return (
    <CardContent
      className={[
        "hidden absolute group-hover:block rounded-lg",
        "px-4 py-2 overflow-hidden h-full w-full text-sm",
        "backdrop-filter backdrop-blur-2xl text-zinc-500",
      ].join(" ")}
    >
      <h2 className="text-green-600 font-semibold">{project.title}</h2>
      <p>
        {
          project.description
            ?.substring(0, 200)
            .concat(project.description?.substring(200) && "...") as string
        }
      </p>
      <div className="mt-2">
        <Tags tags={project.tags} />
      </div>
    </CardContent>
  );
};

export default Description;
