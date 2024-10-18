import Seperator from "@/components/utils/seperator";
import TechCard from "@/components/utils/tech-card";
import { cn } from "@/lib/utils";
import React from "react";

const Web = () => {
  const webData = [
    {
      name: "Next.js",
      src: "/logo/nextjs-icon.svg",
      children: (
        <p>
          Next.js gives me the power of server-side rendering and static site
          generation with a modern React framework. It’s perfect for fast,
          SEO-friendly websites. But for smaller projects, its complexity can
          sometimes feel like overkill.
        </p>
      ),
    },
    {
      name: "Django",
      src: "/logo/django.png",
      children: (
        <p>
          Django is a solid choice for building complex web applications
          quickly, thanks to its batteries-included philosophy. Its admin
          interface is a huge time-saver. However, for smaller or more flexible
          projects, it can feel rigid.
        </p>
      ),
    },
    {
      name: "Svelte",
      src: "/logo/svelte.svg",
      children: (
        <p>
          Svelte offers a refreshing approach to web development with its
          compile-time optimizations, making web apps faster and more
          lightweight. However, it&apos;s still not as widely adopted, which can
          limit community support and ecosystem tools.
        </p>
      ),
    },
    {
      name: "htmx",
      src: "/logo/htmx.svg",
      children: (
        <p>
          htmx makes adding dynamic behavior to web pages simple without needing
          a full frontend framework. It&apos;s lightweight and integrates well
          with server-side applications. But, for more complex interactions, its
          simplicity can become a limitation.
        </p>
      ),
    },
  ];

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
            <h1 className="font-black text-3xl md:text-4xl my-4 text-center text-red-600">
              Tool For The Web
            </h1>
            <p className="text-center md:text-left text-sm md:text-base">
              Powerful frameworks that simplify modern web development. Next.js
              excels at creating fast, server-rendered React applications, while
              Django provides a high-level Python framework for robust web apps
              with built-in security. Svelte streamlines user interface
              development by compiling components at build time, resulting in
              lightweight applications. htmx enhances HTML with interactivity,
              enabling rich, responsive experiences. Together, these tools
              create an efficient stack for scalable web applications.
            </p>
          </section>
          <div className="w-full flex flex-wrap justify-evenly items-center mt-4 gap-4">
            {webData.map((data, index) => (
              <TechCard key={index} name={data.name} src={data.src}>
                {data.children}
              </TechCard>
            ))}
          </div>
        </div>
      </Seperator>
    </div>
  );
};

export default Web;
