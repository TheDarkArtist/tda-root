import { auth } from "@/lib/auth";
import React from "react";
import { LuAlertTriangle } from "react-icons/lu";

const AuthCheckWrapper = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();

  if (!session || session.user.access !== "ROOT")
    return (
      <div className="flex flex-col items-center pt-20 text-red-400">
        <LuAlertTriangle className="h-10 w-10" />
        <p className="text-center font-black text-xl animate-ping repeat-1">
          You don&apos;t have the authorization to access this area.
        </p>
        <p>root access is required!</p>
      </div>
    );

  return <>{children}</>;
};

export default AuthCheckWrapper;
