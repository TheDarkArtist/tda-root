import { CardHeader } from "@/components/ui/card";
import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <CardHeader
      className={[
        "absolute top-0 left-0",
        "bg-black rounded-br-md",
        "text-green-600 font-black",
        "py-0 px-2",
      ].join(" ")}
    >
      <h2 style={{ textShadow: "darkred 2px 1px 1px" }}>{title}</h2>
    </CardHeader>
  );
};

export default Heading;
