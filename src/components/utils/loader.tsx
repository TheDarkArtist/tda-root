"use client";

import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = ({ color = "gray" }: { color?: string }) => {
  return <RotatingLines width="24" strokeColor={color} strokeWidth="4" />;
};

export default Loader;
