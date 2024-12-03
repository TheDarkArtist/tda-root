import { Button } from "@/components/ui/button";
import LotteryTextAnimation from "@/components/utils/lottery-text-animation";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section
      className="
        flex flex-col min-h-40 items-center justify-center p-6 gap-y-2 my-40"
    >
      <h1 className="text-6xl font-extrabold text-red-400">
        <LotteryTextAnimation text="404" />
      </h1>
      <h2 className="text-xl font-extrabold">Not Found</h2>
      <p className="text-sm mt-2 max-w-md text-center">
        The resource you’re looking for is unavailable at this URL. It may have
        been moved, deleted, or you might lack the necessary permissions to
        access it.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 my-4 items-center">
        <Button variant="secondary">
          <Link href={"mailto:sparrow.kushagra@gmail.com"}>Contact Me</Link>
        </Button>
        <Button variant="secondary">
          <Link href={"/"}>Navigate Back To Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
