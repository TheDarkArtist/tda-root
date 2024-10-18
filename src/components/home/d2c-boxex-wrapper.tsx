import React from "react";
import D2CBox from "./d2c-box";
import Seperator from "../utils/seperator";
import { cn } from "@/lib/utils";

const D2CBoxexWrapper = () => {
  const boxes = [
    {
      label: "Architect",
      paragraph:
        "Architecting a project feels like laying the foundation of a story, where imagination meets structure. It’s about drawing the blueprints, picking the right tools, and shaping an experience that truly connects with people. This is where the journey of innovation begins!",
    },
    {
      label: "Implement",
      paragraph:
        "Implementation is where dreams take shape. It’s the careful act of turning plans into real software, ensuring every line of code has a purpose. This is the moment when ideas become tangible, transforming concepts into solutions that make a difference.",
    },
    {
      label: "Optimize",
      paragraph:
        "Optimization is where good becomes great. It’s the quest to refine and enhance, focusing on performance and user experience. This journey is about relentless improvement, making sure the project reaches its fullest potential.",
    },
  ];

  return (
    <div className="my-4 md:my-10 border border-gray-300 dark:border-zinc-800 p-2 m-2 md:m-0 rounded-lg bg-white dark:bg-black shadow">
      <Seperator
        text="We live by a philosophy, Die by a philosophy ?"
        className="text-sky-400 border-sky-600/80 font-bold"
        classWrapper={cn(
          "hover:bg-sky-600/10 p-2 md:p-4 rounded-xl",
          " border border-transparent hover:border-sky-600/20",
          "dark:hover:bg-grid-lg-sky-600/5"
        )}
      >
        <section className="grid items-center min-h-80 md:grid-cols-3 gap-4 my-4">
          {boxes.map((box, index) => (
            <D2CBox
              key={index}
              headerClassName="text-sky-600"
              headerLabel={box.label}
            >
              <p className="text-center">{box.paragraph}</p>
            </D2CBox>
          ))}
        </section>
      </Seperator>
    </div>
  );
};

export default D2CBoxexWrapper;
