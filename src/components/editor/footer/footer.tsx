import React from "react";
import Bytes from "./bytes";
import Lines from "./lines";
import Words from "./words";

const Footer = () => {
  return (
    <div className="sticky bottom-0 flex text-sm justify-between h-6 dark:bg-sky-800 bg-sky-600 text-white py-0.5 px-2">
      <div className="flex gap-2">
        <Bytes />
        <Words />
        <Lines />
      </div>
      <p className="hidden sm:block">Way down we go.</p>
    </div>
  );
};

export default Footer;
