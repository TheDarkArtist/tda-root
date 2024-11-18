import Username from "@/components/settings/account/username";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Account",
};

const AccountPage = () => {
  return (
    <div className="p-4 w-full">
      <Username />
    </div>
  );
};

export default AccountPage;
