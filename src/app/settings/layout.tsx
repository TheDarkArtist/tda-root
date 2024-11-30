import GoToPublicProfile from "@/components/settings/go-to-public-profile";
import LayoutCard from "@/components/settings/layout-card";
import Sidebar from "@/components/settings/sidebar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s Settings",
    default: "Settings",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex pt-14 max-w-screen-xl w-full mx-auto">
      <div className="w-full">
        <div className="flex justify-between items-center px-4">
          <LayoutCard />
          <GoToPublicProfile />
        </div>
        <div className="flex h-full w-full">
          <div className="h-full w-full max-w-10 md:max-w-sm">
            <Sidebar />
          </div>
          <div className="overflow-hidden w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
