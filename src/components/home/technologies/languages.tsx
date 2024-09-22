import Seperator from "@/components/utils/seperator";
import TechCard from "@/components/utils/tech-card";
import { cn } from "@/lib/utils";
import React from "react";

const Languages = () => {
  return (
    <Seperator
      text="What can't you do with these three!"
      className="text-green-400 border-green-600/80 font-bold"
      classWrapper={cn(
        "hover:bg-green-600/10 py-4 px-2 rounded-xl",
        "border border-transparent hover:border-green-600/20",
        "hover:dark:bg-grid-lg-green-600/5"
      )}
    >
      <div className="flex flex-col sm:flex-row-reverse justify-evenly items-center gap-4 mb-10">
        <section className="space-y-2 max-w-lg">
          <h1 className="font-black text-4xl my-4 text-center text-green-600">
            A Reliable Set
          </h1>
          <p className="text">
            In the world of web development, I am a lord of my craft, commanding
            the mightiest frameworks like warriors sworn to my cause. With
            Next.js at my side, I forge powerful, fast-loading realms, while
            Svelte whispers the secrets of real-time, reactive magic. Django
            stands as my towering fortress, unbreakable and steadfast,
            protecting the heart of every project. Each framework serves as a
            loyal banner in my quest to build scalable, legendary applications
            that dominate the digital landscape.
          </p>
        </section>
        <div className="w-full flex flex-col flex-shrink flex-grow flex-wrap sm:flex-row justify-evenly items-center gap-4 mt-6">
          <TechCard name="Python" src="/logo/python.png"></TechCard>
          <TechCard name="TypeScript" src="/logo/typescript.png"></TechCard>
          <TechCard name="Rust" src="/logo/rust.png"></TechCard>
        </div>
      </div>
    </Seperator>
  );
};

export default Languages;
