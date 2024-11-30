import Username from "@/components/settings/account/username";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Account",
};

const AccountPage = () => {
  return (
    <div className="w-full p-4 space-y-8">
      <h1 className="text-2xl">Account settings</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Username />
      </Suspense>
    </div>
  );
};

export default AccountPage;
