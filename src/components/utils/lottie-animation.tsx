import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const AnimatedEmoji = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <Image
      className={cn(className)}
      src={src}
      alt="tda"
      height={128}
      width={128}
    />
  );
};

export default AnimatedEmoji;
