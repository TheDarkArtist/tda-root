import { cn } from "@/lib/utils";
import React from "react";

const Footer = ({ content }: { content: string }) => {
  return (
    <footer
      className={cn(`flex w-full bg-sky-400 justify-between items-center sticky bottom-0, dark:bg-sky-800 py-1 px-4`)}
    >
      <section className="flex text-sm gap-4">
        <p>{content.length} bytes</p>
        <p>{content.split(" ").length} words</p>
        <p>{content.split("\n").length} lines</p>
      </section>
      <section></section>
    </footer>
  );
};

export default Footer;
