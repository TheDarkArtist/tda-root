import { Project } from "@prisma/client";
import Image from "next/image";
import React from "react";

const CardImage = ({ project }: { project: Project }) => {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-sm">
      <Image src={project.image || "/img/tda.png"} alt="card image" fill />
      <span className="absolute h-48 w-full top-0 left-0" />
    </div>
  );
};

export default CardImage;
