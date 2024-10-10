import { cn } from "@/lib/utils";
import React from "react";

const About = () => {
  return (
    <section className="mt-2 mb-10 sm:px-0 text-sm sm:text-base">
      <Line text="Bachelor at Technology with majors in Computer Science & Technology" />
      <Line text="Love Linux and working with linux based enviroments, I use Arch BTW" />
      <Line text="I Love what i do, i only do what i Love." />
    </section>
  );
};

export default About;

const Line = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className="flex gap-2 items-start md:items-center">
      <span
        className={cn(
          "text-sky-600 text-base sm:text-2xl font-black",
          className
        )}
      >
        &gt;
      </span>
      <p>{text}</p>
    </div>
  );
};
