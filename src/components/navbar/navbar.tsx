import React from "react";

import Menu from "./menu";
import Links from "./links";
import Logo from "./logo";
import ModeToggle from "@/utils/mode-toggle";
import Sidenav from "../sidenav/sidenav";

const Navbar = () => {
  return (
    <header className="fixed top-0 bg-white dark:bg-black backdrop-filter backdrop-blur-md bg-opacity-60 dark:bg-opacity-60 px-4 lg:px-0 border-b dark:border-zinc-900 w-full z-40">
      <nav className="flex justify-between items-center h-12 max-w-screen-lg mx-auto">
        <section className="flex items-center gap-6">
          <Logo />
          <Links />
        </section>
        <section className="flex items-center gap-2">
          <ModeToggle />
          <Menu />
          <Sidenav />
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
