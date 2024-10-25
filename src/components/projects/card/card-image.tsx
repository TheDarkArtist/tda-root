import Image from "next/image";
import React from "react";

const CardImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-t-sm">
      <Image
        className="rounded-sm brightness-200 darkbrightness-100"
        src={src || "/img/tda.png"}
        alt="card image"
        fill
      />
      <span className="absolute h-48 w-full top-0 left-0" />
    </div>
  );
};

export default CardImage;
