import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import MyLottieAnimation from "./lottie-animation";
import LottieAnimation from "./lottie-animation";

interface SeperatorProps {
  text?: string;
  className?: string;
  classWrapper?: string;
  children: ReactNode;
}

const Seperator: FC<SeperatorProps> = ({
  children,
  className,
  classWrapper,
  text = "TheDarkArtist",
}) => {
  return (
    <div
      className={cn(
        "group/seperator hover:backdrop-blur transition-all duration-300",
        classWrapper
      )}
    >
      <div className="flex items-center h-2">
        <div
          className={cn(
            "hidden text-sm group-hover/seperator:inline",
            className
          )}
        >
          &lt;&lt;
        </div>
        <div
          className={cn(
            "border-b w-full group-hover/seperator:w-4 transition-all duration-300",
            className
          )}
        />
        <p
          className={cn(
            "hidden text-sm group-hover/seperator:inline transition-all duration-300 text-nowrap",
            className
          )}
        >
          {text}
        </p>
        <div
          className={cn(
            "border-b w-full group-hover/seperator:w-4 transition-all duration-300",
            className
          )}
        />
        <div
          className={cn(
            "group-hover/seperator:block text-2xl -rotate-90 hidden text-center border-double",
            className
          )}
        >
          <LottieAnimation
            className="opacity-50"
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif"
          />
        </div>
        <div
          className={cn(
            "border-b group-hover/seperator:border-dashed w-full",
            className
          )}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Seperator;
