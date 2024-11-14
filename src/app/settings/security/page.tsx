import Password from "@/components/settings/security/password";
import TwoFA from "@/components/settings/security/two-fa";
import React from "react";

const SecurityPage = () => {
  return (
    <div className="p-4 space-y-8 w-full">
      <Password />
      <TwoFA />
    </div>
  );
};

export default SecurityPage;
