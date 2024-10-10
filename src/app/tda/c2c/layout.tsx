import AuthCheckWrapper from "@/components/c2c/auth-check-wrapper";
import Navbar from "@/components/c2c/navbar";
import Sidebar from "@/components/c2c/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthCheckWrapper>
      <main className="pt-12 h-[calc(100vh-40px)]">
        <div className="h-full">
          <Navbar />
          <div className="flex min-h-full">
            <div className="w-full max-w-48">
              <Sidebar />
            </div>
            {children}
          </div>
        </div>
      </main>
    </AuthCheckWrapper>
  );
};

export default layout;
