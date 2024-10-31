import React, { Suspense } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LuMenu } from "react-icons/lu";
import Links from "./links";
import Header from "./header";
import Footer from "./footer";

const Sidenav = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <LuMenu className="h-8 w-8 mt-2 text-zinc-600" />
        </SheetTrigger>
        <SheetContent className="flex flex-col p-0">
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
          </Suspense>
          <Links />
          <Footer />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidenav;
