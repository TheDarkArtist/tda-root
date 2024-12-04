import { CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <CardHeader className={cn("text-green-600 text-xl font-black", "p-2")}>
      <h2>{title}</h2>
    </CardHeader>
  );
};

export default Heading;
