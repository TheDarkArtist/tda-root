import { cn } from "@/lib/utils";
import React from "react";

const BgImg = ({ className, img }: { className?: string; img?: string }) => {
  const myrobo =
    "https://cdn.pixabay.com/photo/2023/08/05/19/57/ai-generated-8171717_960_720.png";
  return (
    <div
      className={cn("absolute opacity-5 h-40 w-40 invert -z-10", className)}
      style={{
        backgroundImage: `url('${img || myrobo}')`,
        backgroundPosition: "center",
      }}
    />
  );
};

export default BgImg;
