"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Link from "next/link";
import { RotatingLines } from "react-loader-spinner";

const ViewButton = ({
  slug,
  type,
  className,
}: {
  slug: string;
  type: "project" | "post";
  className?: string;
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Link href={`/${type}s/${slug}`} onClick={handleClick}>
      <Button
        variant="outline"
        size="sm"
        disabled={loading}
      >
        {loading ? <RotatingLines width="12" strokeColor="white" /> : "View"}
      </Button>
    </Link>
  );
};

export default ViewButton;

