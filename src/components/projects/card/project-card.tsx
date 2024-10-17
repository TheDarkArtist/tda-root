"use client";

import { Card } from "@/components/ui/card";
import MetaBar from "./meta-bar";
import Link from "next/link";
import CardImage from "./card-image";
import Body from "./body";
import Tags from "./tags";
import { useSession } from "next-auth/react";
import { incrementView } from "@/lib/actions/projects/increment-view";
import { ProjectWithUserViews } from "@/lib/types";
import { useEffect, useState } from "react";

const ProjectCard = ({ project }: { project: ProjectWithUserViews }) => {
  const session = useSession();
  const [ip, setIp] = useState<string | null>();

  const fetchIP = async () => {
    try {
      const res = await fetch("/api/tda/publicip");
      const data = await res.json();

      setIp(data.ip);
    } catch (error) {
      console.error("Error fetching IP:", error);
      setIp("unknown");
    }
  };

  useEffect(() => {
    fetchIP();
  }, [ip]);

  const handleClick = async () => {
    await incrementView(
      project.id,
      session.data?.user.username as string,
      ip as string,
      session.data?.user.id
    );
  };

  return (
    <Card
      className={[
        "relative group",
        "transition-shadow rounded-md",
        "hover:shadow-lg dark:hover:shadow-emerald-950",
      ].join(" ")}
    >
      <MetaBar project={project} />
      <Link onClick={handleClick} href={`/projects/${project.slug}`}>
        <CardImage project={project} />
        <Body project={project} />
        <Tags tags={project.tags} />
      </Link>
    </Card>
  );
};

export default ProjectCard;
