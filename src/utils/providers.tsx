"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import ProgressBarProvider from "@/providers/progress-bar-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
