import Password from "@/components/settings/security/password";
import TwoFA from "@/components/settings/security/two-fa";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Security",
};

const SecurityPage = () => {
  return (
    // TODO: Add Fallback UI
    <div className="w-full p-4 space-y-8">
      <h1 className="text-2xl">Security settings</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Password />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TwoFA />
      </Suspense>
    </div>
  );
};

export default SecurityPage;
