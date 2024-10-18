"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";
import { os } from "@/utils/fonts";

interface D2CBoxProps {
  children: React.ReactNode;
  headerLabel?: string;
  bodyClassName?: string;
  headerClassName?: string;
  className?: string;
}

const D2CBox: React.FC<D2CBoxProps> = ({
  children,
  headerLabel,
  headerClassName,
  bodyClassName,
  className,
}) => {
  return (
    <Card
      className={cn(
        "border rounded-sm w-full shadow-none bg-zinc-50",
        "transition-all duration-300 cursor-pointer",
        "rounded-lg p-0 h-16 overflow-hidden hover:h-full",
        className
      )}
    >
      <CardHeader
        className={cn(
          "text-xl sm:text-4xl py-2 mb-2 text-center font-bold",
          os.className,
          headerClassName
        )}
      >
        {headerLabel}
        <div className="border-t border-zinc-800 mt-4" />
      </CardHeader>
      <CardContent className={cn("text-sm sm:text-base", bodyClassName)}>
        {children}
      </CardContent>
    </Card>
  );
};

export default D2CBox;
