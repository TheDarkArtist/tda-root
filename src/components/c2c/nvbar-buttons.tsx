"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const NvbarButtons = () => {
  const pathname = usePathname();

  if (pathname.includes("users")) {
    return <Button size="sm">Add User</Button>;
  }

  if (pathname.includes("posts")) {
    return <Button size="sm">Add Post</Button>;
  }

  if (pathname.includes("projects")) {
    return <Button size="sm">Add Project</Button>;
  }

  return null;
};

export default NvbarButtons;
