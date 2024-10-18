import Seperator from "@/components/utils/seperator";
import TechCard from "@/components/utils/tech-card";
import { cn } from "@/lib/utils";
import React from "react";

const Languages = () => {
  const languageData = [
    {
      name: "Python",
      src: "/logo/python.png",
      children: (
        <p>
          Python is great for quick scripting and handling complex logic without
          too much hassle. Its vast library support makes coding fast and
          efficient. But when performance matters or when projects scale up, the
          lack of strict types and slower execution might hold it back.
        </p>
      ),
    },
    {
      name: "TypeScript",
      src: "/logo/typescript.png",
      children: (
        <p>
          TypeScript adds structure and confidence to JavaScript projects by
          catching errors before they happen. It’s excellent for large-scale,
          maintainable code. But, the strict types can slow things down for
          small projects when you just want to move quickly.
        </p>
      ),
    },
    {
      name: "Rust",
      src: "/logo/rust.png",
      children: (
        <p>
          Rust offers full control over performance and memory, making it ideal
          for fast, reliable code. Its safety and concurrency support are
          top-notch. However, its steep learning curve can be a challenge, and
          it may feel like overkill for smaller tasks.
        </p>
      ),
    },
  ];

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
          <h1 className="font-black text-3xl md:text-4xl my-4 text-center text-green-600">
            A Reliable Set
          </h1>
          <p className="text-center md:text-left text-sm md:text-base">
            powerful trio in modern software development. Python excels in
            versatility, making it ideal for web development, data analysis, and
            machine learning. Rust stands out for its performance and memory
            safety, allowing for the creation of efficient and reliable
            system-level applications. TypeScript enhances JavaScript with
            static typing, which leads to more maintainable and error-free code.
            Together, these languages provide a robust foundation for building
            scalable and efficient applications, ensuring that every project is
            both innovative and reliable.
          </p>
        </section>
        <div className="w-full flex flex-col flex-shrink flex-grow flex-wrap sm:flex-row justify-evenly items-center gap-4 mt-6">
          {languageData.map((data, index) => (
            <TechCard key={index} name={data.name} src={data.src}>
              {data.children}
            </TechCard>
          ))}
        </div>
      </div>
    </Seperator>
  );
};

export default Languages;
