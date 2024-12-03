"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Link from "next/link";
import { RotatingLines } from "react-loader-spinner";
import { useSession } from "next-auth/react";

const UpdateButton = ({
  slug,
  type,
  className,
}: {
  slug: string;
  type: "project" | "post";
  className?: string;
}) => {
  const { status } = useSession();
  const [loading, setLoading] = useState(false);

  if (status !== "authenticated") {
    return null;
  }

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Link href={`/${type}s/${slug}/edit?tab=Edit`} onClick={handleClick}>
      <Button
        className={cn(className, "flex gap-2")}
        variant="outline"
        size="sm"
        disabled={loading}
      >
        <span>Edit</span>
        {loading && <RotatingLines width="12" strokeColor="white" />}
      </Button>
    </Link>
  );
};

export default UpdateButton;
