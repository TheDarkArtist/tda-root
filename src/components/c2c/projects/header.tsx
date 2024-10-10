import { Button } from "@/components/ui/button";
import Search from "@/components/utils/search";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-2 sm:gap-4 m-4 rounded-sm px-4 py-1 w-full max-w-screen-2xl">
      <Search className="max-w-screen-md" />
      <Button variant="secondary">
        <span className="hidden sm:block">New Project</span>
        <span className="sm:hidden text-2xl text-zinc-400">+</span>
      </Button>
    </div>
  );
};

export default Header;
