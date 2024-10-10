"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import MetaBar from "./meta-bar";
import Link from "next/link";
import CardImage from "./card-image";
import Body from "./body";
import Tags from "./tags";
import { Project } from "@prisma/client";
import { useSession } from "next-auth/react";
import { incrementView } from "@/lib/actions/projects/increment-view";

const ProjectCard = ({ project }: { project: Project }) => {
  const session = useSession();
  return (
    <Card className="relative transition-shadow hover:shadow-lg rounded-md dark:hover:shadow-emerald-950 group">
      <MetaBar project={project} />
      <Link
        onClick={() => {
          incrementView(project.id, session.data?.user.id as string);
        }}
        href={`/projects/${project.slug}`}
      >
        <CardImage project={project} />
        <Body project={project} />
        <Tags tags={project.tags} />
      </Link>
    </Card>
  );
};

export default ProjectCard;
