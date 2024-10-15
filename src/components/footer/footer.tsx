import React from "react";
import SocialLinks from "./social-links";
import UsefulLinks from "./useful-links";
import TDAContact from "./tda-contact";
import ContactInfo from "./contact-info";
import BgImg from "./bg-img";
import { cn } from "@/lib/utils";

const MainFooter = () => {
  return (
    <>
      <div className="relative flex flex-col justify-between dark:bg-black bg-white border-y dark:border-zinc-900 border-gray-200  backdrop-filter backdrop-opacity-5 mt-6">
        <BgImg />
        <div className="flex flex-col max-w-screen-2xl mx-auto mt-4">
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6",
              "text-center row-span-5 h-full space-y-0 md:space-y-0 p-4 md:pr-20"
            )}
          >
            <SocialLinks />
            <UsefulLinks />
            <ContactInfo />
            <TDAContact />
          </div>
        </div>
      </div>
      <p className="text-zinc-600 bg-black p-2 text-center text-xs sm:text-sm">
        © 2024 Kushagra Sharma. All rights reserved.
      </p>
    </>
  );
};

export default MainFooter;
