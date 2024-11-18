import React from "react";

import NewVerificationForm from "@/components/auth/new-verification-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New verification",
};


const NewVerificationPage = () => {
  return <NewVerificationForm />;
};

export default NewVerificationPage;
