import Seperator from "@/components/utils/seperator";
import TechCard from "@/components/utils/tech-card";
import { cn } from "@/lib/utils";
import React from "react";

const CrossPlatform = () => {
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
          <h1 className="font-black text-4xl text-center my-4 text-cyan-600">
            What Else Do You Need
          </h1>
          <p>
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
        <div className="w-full flex flex-wrap justify-evenly items-center gap-4 mt-6">
          <TechCard name="Flutter" src="/logo/flutter.png"></TechCard>
          <TechCard name="Tauri" src="/logo/tauri.svg"></TechCard>
          <TechCard name="Qt" src="/logo/qt.png"></TechCard>
        </div>
      </div>
    </Seperator>
  );
};

export default CrossPlatform;
