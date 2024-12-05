import { ProjectWithUserViews } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import React, { Suspense } from "react";
import { LuEye } from "react-icons/lu";

const MetaBar = ({ project }: { project: ProjectWithUserViews }) => {
  return (
    <section className={cn("flex items-center justify-between ", " px-2 pt-1")}>
      <div className="flex justify-between w-full items-center gap-2 text-sm font-semibold dark:text-zinc-400">
        <div className="flex items-center gap-0.5">
          <Suspense fallback={<LuEye />}>
            <LuEye className="h-4 w-4 mt-0.5" />
            <span>{project.views.length}</span>
          </Suspense>
        </div>
        <span className="text-xs mr-2">
          {formatDistanceToNow(project.createdAt, { addSuffix: true })}
          {}
        </span>
      </div>
      <span className="flex gap-2">
        {project.repo && (
          <Link
            className="transition-all duration-200 hover:scale-110"
            href={project.repo || ""}
          >
            <GitHubLogoIcon className="h-5 w-5 mt-0.5 dark:text-zinc-400 text-zinc-600" />
          </Link>
        )}
        {project.link && (
          <Link
            className="transition-all duration-200 hover:scale-110"
            href={project.link || ""}
          >
            <ExternalLinkIcon className="h-6 w-6 dark:text-zinc-400 text-zinc-600" />
          </Link>
        )}
      </span>
    </section>
  );
};

export default MetaBar;
