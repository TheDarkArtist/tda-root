import React, { ReactNode } from "react";

const ImageFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-60 w-60 border-[4px] border-cyan-950">
      <div className="absolute top-0 left-0 border-l-[4px] border-t-[4px] p-4 m-2 border-cyan-600 h-6 w-6" />
      <div className="absolute top-0 right-0 border-r-[4px] border-t-[4px] p-4 m-2 border-cyan-600 h-6 w-6" />
      <div className="absolute bottom-0 left-0 border-l-[4px] border-b-[4px] p-4 m-2 border-cyan-600 h-6 w-6" />
      <div className="absolute bottom-0 right-0 border-r-[4px] border-b-[4px] p-4 m-2 border-cyan-600 h-6 w-6" />
      <div>{children}</div>
    </div>
  );
};

export default ImageFrame;
