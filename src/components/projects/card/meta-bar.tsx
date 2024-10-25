import { ProjectWithUserViews } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import React, { Suspense } from "react";
import { LuEye } from "react-icons/lu";

const MetaBar = ({ project }: { project: ProjectWithUserViews }) => {
  return (
    <section
      className={cn(
        "absolute flex items-center justify-between dark:group-hover:text-white",
        "dark:bg-black bg-white dark:text-white text-white group-hover:text-black",
        "dark:backdrop-blur-sm backdrop-blur-sm transition-all",
        "w-full py-1 px-2 top-[10rem] right-0 z-10 rounded-b-md",
        "dark:backdrop-filter backdrop-filter dark:bg-opacity-50 bg-opacity-20",
        "group-hover:bg-opacity-100 dark:group-hover:bg-opacity-100"
      )}
    >
      <div className="flex items-center gap-2 text-xs">
        <Suspense fallback={<LuEye />}></Suspense>
        <span>
          {formatDistanceToNow(project.createdAt, { addSuffix: true })}
        </span>
      </div>
      <span className="flex gap-2">
        <Link
          className="transition-all duration-200 hover:scale-110"
          href={project.repo || ""}
        >
          <GitHubLogoIcon className="h-6 w-6 dark:text-white text-white group-hover:text-black dark:group-hover:text-white" />
        </Link>
        <Link
          className="transition-all duration-200 hover:scale-110"
          href={project.link || ""}
        >
          <ExternalLinkIcon className="h-6 w-6 dark:text-white text-white group-hover:text-black dark:group-hover:text-white" />
        </Link>
      </span>
    </section>
  );
};

export default MetaBar;
