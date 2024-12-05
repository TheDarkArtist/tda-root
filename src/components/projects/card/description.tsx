import React from "react";
import { CardContent } from "@/components/ui/card";
import { ProjectWithUserViews } from "@/lib/types";
import { Md2Text } from "@/lib/utils";

const Description = ({ project }: { project: ProjectWithUserViews }) => {
  return (
    <CardContent
      className={[
        "px-4 py-2 overflow-hidden w-full text-sm",
        "backdrop-filter backdrop-blur-2xl dark:text-zinc-400 text-zinc-600",
      ].join(" ")}
    >
      <p>
        {Md2Text(
          project.description
            ?.substring(0, 184)
            .concat(project.description?.substring(200) && "...") as string
        )}
      </p>
    </CardContent>
  );
};

export default Description;
