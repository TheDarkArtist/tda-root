import React from "react";

const BgImg = ({ img }: { img?: string }) => {
  const myrobo =
    "https://cdn.pixabay.com/photo/2023/08/05/19/57/ai-generated-8171717_960_720.png";
  return (
    <div
      className="border h-full w-full absolute opacity-5 invert -z-10"
      style={{
        backgroundImage: `url('${img || myrobo}')`,
        backgroundPosition: "center",
      }}
    />
  );
};

export default BgImg;
