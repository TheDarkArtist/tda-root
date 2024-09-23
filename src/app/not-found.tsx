import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section
      className="
        flex flex-col min-h-40 bg-grid-sm-sky-400/50 items-center justify-center dark:bg-grid-sm-red-600 p-6 space-y-4 my-10"
    >
      <h1 className="text-6xl font-extrabold">404</h1>
      <h2 className="text-xl font-extrabold">Not Found</h2>
      <p className="text-sm mt-2 max-w-md text-center">
        The Resource you&apos; looking for does not exist on the current url, It
        has either moved or you don&apos;t have the authorizaton to access it.
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
