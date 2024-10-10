import React from "react";
import D2CBox from "./d2c-box";
import Seperator from "../utils/seperator";
import { cn } from "@/lib/utils";

const D2CBoxexWrapper = () => {
  return (
    <div className="my-10 border border-white/10 p-4 rounded-xl bg-white dark:bg-black shadow">
      <Seperator
        text="We live by a philosophy, Die by a philosophy"
        className="text-sky-400 border-sky-600/80 font-bold"
        classWrapper={cn(
          "hover:bg-sky-600/10 py-4 px-2 rounded-xl",
          " border border-transparent hover:border-sky-600/20",
          "dark:hover:bg-grid-lg-sky-600/5"
        )}
      >
        <section className="grid md:grid-cols-3 gap-2 my-4">
          <D2CBox headerClassName="text-sky-600" headerLabel="Architect">
            <p className="text-center">
              Architecting a project is like painting a masterpiece, crafting a
              vision where creativity meets structure. It&apos;s about sketching
              the blueprint, choosing the right tools, and crafting the user
              experience that resonates. This is where innovation truly begins!
            </p>
          </D2CBox>
          <D2CBox headerClassName="text-green-600" headerLabel="Implement">
            <p className="text-center">
              Now comes the fun part—bringing that vision to life!
              Implementation is the exhilarating process of writing code,
              creating features, and piecing everything together. Each line of
              code adds color and texture, transforming ideas into a vibrant
              reality.
            </p>
          </D2CBox>
          <D2CBox headerClassName="text-orange-600" headerLabel="Optimize">
            <p className="text-center">
              This is where the magic happens—taking something good and making
              it extraordinary! Optimization is the art of refinement, digging
              into performance metrics, and enhancing the user experience. It’s
              a relentless pursuit of perfection, ensuring the project evolves
              into its best version.
            </p>
          </D2CBox>
        </section>
      </Seperator>
    </div>
  );
};

export default D2CBoxexWrapper;
