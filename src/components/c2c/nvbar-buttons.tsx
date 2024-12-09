"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateCuid } from "@/lib/utils";

const NvbarButtons = () => {
  const pathname = usePathname();

  const slug = generateCuid();

  if (pathname.includes("users")) {
    // TODO: implement this functionality kinda like a modal
    return <Button size="sm">Add User</Button>;
  }

  if (pathname.includes("post")) {
    return (
      <Button asChild size="sm">
        <Link href={`/posts/${slug}/edit`}>Add Post</Link>
      </Button>
    );
  }

  if (pathname.includes("projects")) {
    return (
      <Button asChild size="sm">
        <Link href={`/projects/${slug}/edit`}>Add Project</Link>
      </Button>
    );
  }

  return <div>NvbarButtons</div>;
};

export default NvbarButtons;
