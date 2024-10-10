import React from "react";
import CurrentTime from "../utils/current-time";
import { rslab } from "@/utils/fonts";

const Navbar = () => {
  return (
    <nav className="flex border-b bg-white dark:bg-zinc-900 dark:border-zinc-800">
      <div className="w-full max-w-48 border-r dark:border-r-zinc-800">
        <p className="text-center p-1 font-bold text-xl">Tabs</p>
      </div>
      <div className="grid grid-cols-3 w-full items-center px-4">
        <div>Logged in as: thedarkartist</div>
        <p className={`text-stone-400 text-xl font-bold ${rslab.className}`}>
          TDA Command & Control Center
        </p>
        <div>
          <CurrentTime />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
