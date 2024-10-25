"use client";

import React from "react";
import { RotatingLines } from "react-loader-spinner";

interface LoaderProps {
  color?: string;
  width?: string;
  strokeWidth?: string;
}

const Loader: React.FC<LoaderProps> = ({
  color = "gray",
  width = "24",
  strokeWidth = "4",
}) => {
  return (
    <RotatingLines
      width={width}
      strokeColor={color}
      strokeWidth={strokeWidth}
    />
  );
};

export default Loader;
