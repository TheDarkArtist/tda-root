"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  mode = "redirect",
}) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  // TODO: Implement modal view for button

  return (
    <span
      onClick={onClick}
      className="cursor-pointer bg-red-900 hover:bg-red-950 transition-all duration-300 px-4 py-1.5 text-red-200 rounded-sm"
    >
      {children}
    </span>
  );
};

export default LoginButton;
