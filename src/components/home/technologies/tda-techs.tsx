import React from "react";
import Web from "./web";
import Languages from "./languages";
import CrossPlatform from "./cross-platform";
import { montserrat } from "@/utils/fonts";
import Note from "@/components/utils/note";

const TdaTechs = () => {
  return (
    <div className="border border-gray-300 dark:border-zinc-800 bg-white dark:bg-black rounded-xl p-2 m-2 lg:m-0 sm:p-4">
      <h1
        className={`${montserrat.className} font-thin mb-6 text-center text-lg md:text-2xl`}
      >
        My Stack @ TDAFullStack
      </h1>
      <Languages />
      <Web />
      <CrossPlatform />
      <Note
        title="Everybody has their own stack."
        description="Before you let that fleeting thought cross your mind—judging this tech stack and conjuring up your own delusions of what you think should be used—remember this: it’s tailored to my preferences, forged by what I like. It may not align with your mediocre standards, and that’s just fine. Peace."
      />
    </div>
  );
};

export default TdaTechs;
