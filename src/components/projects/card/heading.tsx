import { CardHeader } from "@/components/ui/card";
import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <CardHeader
      className={[
        "absolute top-14",
        "group-hover:hidden rounded-t-sm",
        "text-green-600 text-3xl font-black text-center",
        "py-0 px-2",
      ].join(" ")}
    >
      <h2 style={{ textShadow: "darkred 3px 2px 1px" }}>{title}</h2>
    </CardHeader>
  );
};

export default Heading;
