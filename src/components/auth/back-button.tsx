"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton: React.FC<BackButtonProps> = ({ label, href }) => {
  return (
    <Button variant="link" className="dark:text-zinc-400 text-gray-600 text-sm mx-auto">
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
