import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
  <div className="h-full flex justify-center items-center dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-slate-950 dark:to-black bg-grid-lg-gray-200">
      {children}
    </div>
  );
};

export default AuthLayout;
