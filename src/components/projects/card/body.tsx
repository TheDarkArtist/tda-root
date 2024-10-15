import { CardContent, CardHeader } from "@/components/ui/card";
import MarkdownRenderer from "@/utils/markdown-provider";
import { Project } from "@prisma/client";
import React, { Suspense } from "react";

const Body = ({ project }: { project: Project }) => {
  return (
    <div className="py-1.5">
      <CardHeader className="text-green-600 text-2xl font-black py-0 px-2">
        <h2>{project.title}</h2>
      </CardHeader>
      <CardContent className="px-2 py-0 text-sm overflow-hidden">
        <MarkdownRenderer
          content={
            project.description
              ?.substring(0, 130)
              .concat(project.description?.substring(130) && "...") as string
          }
        />
      </CardContent>
    </div>
  );
};

export default Body;
