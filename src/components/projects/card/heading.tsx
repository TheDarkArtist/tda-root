import { CardHeader } from "@/components/ui/card";
import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <CardHeader
      className={[
        "absolute",
        "group-hover:hidden",
        "text-green-600 text-2xl font-black text-center",
        "py-0 px-2 mb-10",
      ].join(" ")}
    >
      <h2>{title}</h2>
    </CardHeader>
  );
};

export default Heading;
