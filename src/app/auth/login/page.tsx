import LoginForm from "@/components/auth/login-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
