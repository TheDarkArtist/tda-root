"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Link from "next/link";
import { RotatingLines } from "react-loader-spinner";
import { cn } from "@/lib/utils";

const ViewButton = ({
  text,
  slug,
  type,
  className,
}: {
  text?: string;
  slug: string;
  type: "project" | "post" | "user";
  className?: string;
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Button
      className={cn(className, "w-min")}
      variant="outline"
      size="sm"
      disabled={loading}
      asChild
    >
      <Link
        href={`/${type === "user" ? `${slug}` : `${type}s/${slug}`}`}
        onClick={handleClick}
      >
        {loading ? (
          <RotatingLines width="12" strokeColor="white" />
        ) : (
          <span>{text ? text : "View"}</span>
        )}
      </Link>
    </Button>
  );
};

export default ViewButton;
