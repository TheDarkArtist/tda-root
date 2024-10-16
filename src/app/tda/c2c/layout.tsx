import AuthCheckWrapper from "@/components/c2c/auth-check-wrapper";
import Navbar from "@/components/c2c/navbar";
import Sidebar from "@/components/c2c/sidebar";
import Search from "@/components/utils/search";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthCheckWrapper>
      <main className="flex w-screen flex-col h-screen">
        <div className="w-full sticky top-12 z-10"></div>

        <div className="flex w-screen mt-12 h-screen">
          <div className="w-48 fixed top-22 h-full">
            <Sidebar />
          </div>

          <div className="flex pl-48 flex-col w-full">
            <div className="bg-white dark:bg-zinc-900 p-2 space-y-2">
              <h2 className="text-center text-sm font-semibold text-zinc-300">
                <span className="hidden md:block">
                  TDA Comamnd & Control Center
                </span>
                <span className="md:hidden">TDA C2C</span>
              </h2>
              <Search />
              <Navbar />
            </div>
            <div className="m-4">{children}</div>
          </div>
        </div>
      </main>
    </AuthCheckWrapper>
  );
};

export default Layout;
