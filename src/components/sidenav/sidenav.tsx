import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LuMenu } from "react-icons/lu";
import Links from "./links";

const Sidenav = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <LuMenu className="h-6 w-6 text-red-600" />
        </SheetTrigger>
        <SheetContent>
          <Links />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidenav;
