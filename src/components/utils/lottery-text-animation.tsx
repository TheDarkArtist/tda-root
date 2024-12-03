"use client";

import { useState } from "react";

interface LotteryTextAnimationProps {
  text?: string;
}

export default function LotteryTextAnimation({
  text = "tda",
}: LotteryTextAnimationProps) {
  const [chars, setChars] = useState(text);

  return (
    <ul className="flex">
      {chars.split("").map((char, index) => (
        <li key={index}>{char}</li>
      ))}
    </ul>
  );
}
