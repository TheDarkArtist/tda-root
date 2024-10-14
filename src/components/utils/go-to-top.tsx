"use client";

import React from "react";
import { Button } from "../ui/button";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import useScroll from "@/hooks/use-scroll";

const GoToTop = () => {
  const pos = useScroll();

  if (typeof document === "undefined") return null;

  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  const scrollToOppositePosition = () => {
    const isNearBottom = pos + windowHeight > documentHeight - 100;

    window.scrollTo({
      top: isNearBottom ? 0 : documentHeight,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="outline"
      onClick={scrollToOppositePosition}
      className="fixed bottom-4 right-4 z-50"
      aria-label={
        pos + windowHeight > documentHeight - 100
          ? "Scroll to top"
          : "Scroll to bottom"
      }
    >
      {pos + windowHeight > documentHeight - 100 ? (
        <LuArrowUp />
      ) : (
        <LuArrowDown />
      )}
    </Button>
  );
};

export default GoToTop;
