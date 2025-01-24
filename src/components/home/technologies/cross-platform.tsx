import Seperator from "@/components/utils/seperator";
import TechCard from "@/components/utils/tech-card";
import { cn } from "@/lib/utils";
import React from "react";

const CrossPlatform = () => {
  const crossPlatformData = [
    {
      name: "Flutter",
      src: "https://i.imgur.com/mIoPzU1.png",
      children: (
        <p>
          Flutter is my go-to for building cross-platform mobile apps with a
          single codebase. It&apos;s fast and has great community support. But
          sometimes, its performance on native-level tasks can be a bit
          limiting.
        </p>
      ),
    },
    {
      name: "Tauri",
      src: "/logo/tauri.svg",
      children: (
        <p>
          Tauri is amazing for building lightweight desktop apps with a minimal
          footprint. It uses Rust under the hood, which ensures top-notch
          performance. However, it&apos;s still evolving, and certain features
          can be challenging to implement.
        </p>
      ),
    },
    {
      name: "Qt",
      src: "https://i.imgur.com/rN8MnCL.png",
      children: (
        <p>
          Qt is fantastic for building powerful desktop applications, especially
          with its extensive tools for UI. However, it can feel heavy at times,
          and setting up cross-platform builds can get tricky.
        </p>
      ),
    },
  ];

  return (
    <Seperator
      text="For better or worse..."
      className="text-cyan-400 border-cyan-600/80 font-bold"
      classWrapper={cn(
        "hover:bg-cyan-600/10 py-4 px-2 rounded-xl",
        "border border-transparent hover:border-cyan-600/20",
        "hover:dark:bg-grid-lg-cyan-600/5"
      )}
    >
      <div className="flex flex-col sm:flex-row-reverse justify-evenly items-center gap-4 mb-10">
        <section className="space-y-2 max-w-lg">
          <h1 className="font-black text-2xl sm:text-4xl text-center my-4 text-cyan-600">
            What Else, You Need
          </h1>
          <p className="text-center md:text-left text-sm md:text-base">
            vital tools for versatile application development. Flutter allows
            for the creation of beautiful, natively compiled apps across mobile,
            web, and desktop from a single codebase. Tauri enables lightweight
            desktop applications using web technologies, integrating seamlessly
            with existing web apps. Qt provides a robust framework for
            developing cross-platform applications with a rich feature set.
            Together, these tools offer a comprehensive solution for building
            high-quality applications across multiple platforms.
          </p>
        </section>
        <div className="w-full flex flex-wrap justify-evenly items-center gap-4 mt-6">
          {crossPlatformData.map((data, index) => (
            <TechCard key={index} name={data.name} src={data.src}>
              {data.children}
            </TechCard>
          ))}
        </div>
      </div>
    </Seperator>
  );
};

export default CrossPlatform;
