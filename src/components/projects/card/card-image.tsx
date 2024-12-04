import Image from "next/image";
import React from "react";

const CardImage = ({ src }: { src: string }) => {
  return (
    <div className="relative border border-zinc-700 m-2 overflow-hidden rounded-md">
      <Image
        className="rounded-md"
        src={src || "/img/tda.png"}
        alt="card image"
        height={400}
        width={600}
      />
      <span className="absolute h-48 w-full top-0 left-0" />
    </div>
  );
};

export default CardImage;
