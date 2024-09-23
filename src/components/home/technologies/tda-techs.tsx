import React from "react";
import Web from "./web";
import Languages from "./languages";
import CrossPlatform from "./cross-platform";
import { montserrat } from "@/utils/fonts";
import Note from "@/components/utils/note";

const TdaTechs = () => {
  return (
    <div className="border border-dotted border-stone-600 bg-white dark:bg-black rounded-xl p-2 m-2 sm:m-0 sm:p-4">
      <h1
        className={`${montserrat.className} font-thin mb-6 text-center text-2xl`}
      >
        My Stack @ TDAFullStack
      </h1>
      <Languages />
      <Web />
      <CrossPlatform />
      <Note
        title="Everybody has their own opinion."
        description="Before you begin to think what the shit is this"
      />
    </div>
  );
};

export default TdaTechs;
