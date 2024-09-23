import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Project } from "@prisma/client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import MarkdownRenderer from "@/utils/markdown-provider";
import { LuEye } from "react-icons/lu";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="relative transition-shadow hover:shadow-lg dark:hover:shadow-emerald-950 group">
      <section
        className={cn(
          "absolute flex items-center justify-between",
          "dark:bg-black bg-white dark:text-white text-white",
          "dark:backdrop-blur-sm backdrop-blur-sm transition-all",
          "w-full py-1 px-2 top-[10rem] right-0 z-10",
          "dark:backdrop-filter backdrop-filter dark:bg-opacity-50 bg-opacity-20",
          "group-hover:bg-opacity-100 dark:group-hover:bg-opacity-100"
        )}
      >
        <div className="flex items-center gap-4">
          <span className="flex text-sm gap-1 items-center">
            <LuEye className="h-4 w-4 text-stone-300" />
            <p>{project.views.length}</p>
          </span>
          <span className="text-sm">
            {formatDistanceToNow(project.createdAt, { addSuffix: true })}
          </span>
        </div>
        <span className="flex gap-2">
          <Link
            className="transition-all duration-200 hover:scale-110"
            href={project.repo || ""}
          >
            <GitHubLogoIcon className="h-6 w-6 dark:text-white text-white" />
          </Link>
          <Link
            className="transition-all duration-200 hover:scale-110"
            href={project.link || ""}
          >
            <ExternalLinkIcon className="h-6 w-6 dark:text-white text-white" />
          </Link>
        </span>
      </section>
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-48 overflow-hidden rounded-t-sm">
          <Image src={project.image || "/img/tda.png"} alt="card image" fill />
          <span className="absolute h-48 w-full top-0 left-0" />
        </div>
        <CardHeader className="text-green-600 text-2xl font-black py-0 px-2">
          <h2>{project.title}</h2>
        </CardHeader>
        <CardContent className="px-2 py-0 text-sm">
          <MarkdownRenderer
            content={
              project.description
                ?.substring(0, 130)
                .concat(project.description?.substring(130) && "...") as string
            }
          />
        </CardContent>
        <CardFooter className="p-2 pt-3 space-x-2">
          {project.tags.map((tag, index) => (
            <span
              className={cn(
                "border dark:border-zinc-600 border-gray-400",
                "px-2 pb-0.5 text-xs rounded-full",
                "dark:bg-black bg-white text-gray-800 dark:text-gray-400"
              )}
              key={index}
            >
              {tag}
            </span>
          ))}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProjectCard;
