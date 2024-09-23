import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface WordPictureProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  text: string;
  className?: string;
}

const HoverImage: FC<WordPictureProps> = ({ src, alt, text, className }) => {
  return (
    <div
      className={cn(
        "relative group flex flex-col h-10 items-center",
        className
      )}
    >
      <Image
        className={cn(
          "absolute opacity-0 transition-all duration-300 group-hover:opacity-100",
          "bottom-10 h-0 group-hover:h-fit"
        )}
        src={src}
        alt={alt}
        height={400}
        width={400}
      />

      <span className="relative z-10">{text}</span>
    </div>
  );
};

export default HoverImage;
