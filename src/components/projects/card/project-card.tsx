"use client";

import { Card } from "@/components/ui/card";
import MetaBar from "./meta-bar";
import Link from "next/link";
import CardImage from "./card-image";
import { useSession } from "next-auth/react";
import { incrementView } from "@/lib/actions/projects/increment-view";
import { ProjectWithUserViews } from "@/lib/types";
import Heading from "./heading";
import Description from "./description";
import Tags from "./tags";

const ProjectCard = ({ project }: { project: ProjectWithUserViews }) => {
  const session = useSession();

  const handleClick = async () => {
    await incrementView(
      project.id,
      session.data?.user.username as string,
      "unknown",
      session.data?.user.id
    );
  };

  return (
    <Card
      className={[
        "p-2",
        "dark:active:border-green-600 active:border-green-600",
        "sm:hover:shaodw-xl hover:shadow-emerald-600 sm:hover:scale-105",
        "transform transition-all duration-200 ease-in-out",
        "border dark:border-zinc-700 ",
        "bg-gray-200/50 dark:bg-zinc-950",
      ].join(" ")}
    >
      <MetaBar project={project} />
      <Link onClick={handleClick} href={`/projects/${project.slug}`}>
        <Heading title={project.title} />
        <Tags tags={project.tags} />
        <CardImage src={project.image as string} />
        <Description project={project} />
      </Link>
    </Card>
  );
};

export default ProjectCard;
