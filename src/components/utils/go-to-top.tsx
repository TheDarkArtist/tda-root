"use client";

import React from "react";
import { Button } from "../ui/button";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import useScroll from "@/hooks/use-scroll";

const GoToTop = () => {
  const pos = useScroll();
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  const scrollToOppositePosition = () => {
    const isNearBottom = pos + windowHeight > documentHeight - 100;

    if (isNearBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: documentHeight, behavior: "smooth" });
    }
  };

  return (
    <Button variant="outline" onClick={scrollToOppositePosition}>
      {pos + windowHeight > documentHeight - 100 ? (
        <LuArrowUp />
      ) : (
        <LuArrowDown />
      )}
    </Button>
  );
};

export default GoToTop;
