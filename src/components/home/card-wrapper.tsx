"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";
import { os } from "@/utils/fonts";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel?: string;
  className?: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  headerLabel,
  className,
}) => {
  return (
    <Card
      className={cn(
        "rounded-sm w-full dark:bg-gradient-to-bl dark:via-cyan-950/50 hover:z-10",
        "bg-gradient-to-bl via-white transition-all duration-300 delay-200 md:hover:scale-110 cursor-default",
        className
      )}
    >
      <CardHeader
        className={cn(
          "text-2xl font-black py-2 my-2 dark:bg-grid-sm-cyan-900 bg-grid-sm-gray-300 dark:text-gray-300 text-gray-700",
          os.className
        )}
      >
        {headerLabel}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
