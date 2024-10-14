import React from "react";
import D2CBox from "./d2c-box";
import Seperator from "../utils/seperator";
import { cn } from "@/lib/utils";

const D2CBoxexWrapper = () => {
  const boxes = [
    {
      label: "Architect",
      paragraph:
        "Architecting a project is like painting a masterpiece, crafting vision where creativity meets structure. It&apos;s about the blueprint, choosing the right tools, and crafting the experience that resonates. This is where innovation truly begins!",
    },
    {
      label: "Implement",
      paragraph:
        "Architecting a project is like painting a masterpiece, crafting vision where creativity meets structure. It&apos;s about the blueprint, choosing the right tools, and crafting the experience that resonates. This is where innovation truly begins!",
    },
    {
      label: "Optimize",
      paragraph:
        "This is where the magic happens—taking something good and it extraordinary! Optimization is the art of refinement, into performance metrics, and enhancing the user experience. It’a relentless pursuit of perfection, ensuring the project into its best version.",
    },
  ];

  return (
    <div className="my-4 md:my-10 border border-zinc-900 p-2 m-2 md:m-0 rounded-lg bg-white dark:bg-black shadow">
      <Seperator
        text="We live by a philosophy, Die by a philosophy ?"
        className="text-sky-400 border-sky-600/80 font-bold"
        classWrapper={cn(
          "hover:bg-sky-600/10 p-2 md:p-4 rounded-xl",
          " border border-transparent hover:border-sky-600/20",
          "dark:hover:bg-grid-lg-sky-600/5"
        )}
      >
        <section className="grid md:grid-cols-3 gap-4 my-4">
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
