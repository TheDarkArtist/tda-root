import React from "react";

import Menu from "./menu";
import Links from "./links";
import Logo from "./logo";
import ModeToggle from "@/utils/mode-toggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white dark:bg-black backdrop-filter backdrop-blur-sm bg-opacity-50 px-4 lg:px-0 border-b dark:border-zinc-900 ">
      <nav className="flex justify-between items-center h-12 max-w-screen-lg mx-auto">
        <section className="flex items-center gap-10">
          <Logo />
          <Links />
        </section>
        <section className="flex items-center gap-2">
          <ModeToggle />
          <Menu />
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
