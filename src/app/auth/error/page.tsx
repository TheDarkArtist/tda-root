import ErrorCard from "@/components/auth/error-card";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Error occured",
};

const ErrorPage = () => {
  return <ErrorCard />;
};

export default ErrorPage;
