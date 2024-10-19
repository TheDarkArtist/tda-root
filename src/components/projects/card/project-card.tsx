"use client";

import { Card } from "@/components/ui/card";
import MetaBar from "./meta-bar";
import Link from "next/link";
import CardImage from "./card-image";
import { useSession } from "next-auth/react";
import { incrementView } from "@/lib/actions/projects/increment-view";
import { ProjectWithUserViews } from "@/lib/types";
import { useEffect, useState } from "react";
import Heading from "./heading";
import Description from "./description";

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
        "relative group rounded-md",
        "dark:border-zinc-800",
        "transition-all duration-300 dark:active:border-green-600",
        "hover:shadow-lg dark:hover:shadow-emerald-950",
      ].join(" ")}
    >
      <MetaBar project={project} />
      <Link
        className="relative flex justify-center items-center"
        onClick={handleClick}
        href={`/projects/${project.slug}`}
      >
        <CardImage src={project.image} />
        <Heading title={project.title} />
        <Description project={project} />
      </Link>
    </Card>
  );
};

export default ProjectCard;
