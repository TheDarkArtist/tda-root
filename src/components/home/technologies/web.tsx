import Seperator from "@/components/utils/seperator";
import TechCard from "@/components/utils/tech-card";
import { cn } from "@/lib/utils";
import React from "react";

const Web = () => {
  return (
    <div className="my-10">
      <Seperator
        text="Nothing is permanent in this ever evolving world!"
        className="text-red-400 border-red-600/80 font-bold"
        classWrapper={cn(
          "hover:bg-red-600/10 py-4 px-2 rounded-xl",
          "border border-transparent hover:border-red-600/20",
          "hover:dark:bg-grid-lg-red-600/5"
        )}
      >
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-4 mb-10">
          <section className="space-y-2 max-w-sm">
            <h1 className="text-center  my-6 font-black text-4xl text-red-600">
              Tool For The Web
            </h1>
            <p>
              In the world of web development, I am a lord of my craft,
              commanding the mightiest frameworks like warriors sworn to my
              cause. With Next.js at my side, I forge powerful, fast-loading
              realms, while Svelte whispers the secrets of real-time, reactive
              magic. Django stands as my towering fortress, unbreakable and
              steadfast, protecting the heart of every project. Each framework
              serves as a loyal banner in my quest to build scalable, legendary
              applications that dominate the digital landscape.
            </p>
          </section>
          <div className="w-full flex flex-wrap justify-evenly items-center mt-4 gap-4">
            <TechCard name="Next.js" src="/logo/nextjs-icon.svg">
              <p>next</p>
              <p>
                In the world of web development, I am a lord of my craft,
                commanding the mightiest frameworks like warriors sworn to my
                cause. With Next.js at my side, I forge powerful, fast-loading
                realms, while Svelte whispers the secrets of real-time, reactive
                magic. Django stands as my towering fortress, unbreakable and
                steadfast, protecting the heart of every project. Each framework
                serves as a loyal banner in my quest to build scalable,
                legendary applications that dominate the digital landscape.
              </p>
            </TechCard>
            <TechCard name="Django" src="/logo/django.png">
              <p>django</p>
              <p>
                In the world of web development, I am a lord of my craft,
                commanding the mightiest frameworks like warriors sworn to my
                cause. With Next.js at my side, I forge powerful, fast-loading
                realms, while Svelte whispers the secrets of real-time, reactive
                magic. Django stands as my towering fortress, unbreakable and
                steadfast, protecting the heart of every project. Each framework
                serves as a loyal banner in my quest to build scalable,
                legendary applications that dominate the digital landscape.
              </p>
            </TechCard>
            <TechCard name="Svelte" src="/logo/svelte.svg">
              <p>svelte</p>
              <p>
                In the world of web development, I am a lord of my craft,
                commanding the mightiest frameworks like warriors sworn to my
                cause. With Next.js at my side, I forge powerful, fast-loading
                realms, while Svelte whispers the secrets of real-time, reactive
                magic. Django stands as my towering fortress, unbreakable and
                steadfast, protecting the heart of every project. Each framework
                serves as a loyal banner in my quest to build scalable,
                legendary applications that dominate the digital landscape.
              </p>
            </TechCard>
            <TechCard name="htmx" src="/logo/htmx.svg">
              <p>
                It&apos;s something i found recelntly &lt;sept 2, 2024&gt;, i
                thought it was just some shitty html ripoff, it&apos;s only
                untill after i came to know how good this this was, really
                great! cause. With Next.js at my side, I forge powerful,
                fast-loading realms, while Svelte whispers the secrets of
                real-time, reactive magic. Django stands as my towering
                fortress, unbreakable and steadfast, protecting the heart of
                every project. Each framework serves as a loyal banner in my
                quest to build scalable, legendary applications that dominate
                the digital landscape.
              </p>
            </TechCard>
          </div>
        </div>
      </Seperator>
    </div>
  );
};

export default Web;
