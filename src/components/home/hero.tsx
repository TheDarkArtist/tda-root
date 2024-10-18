import React from "react";
import HoverImage from "../utils/hover-image";
import About from "./about";
import Seperator from "../utils/seperator";

const Hero = () => {
  return (
    <div className="sm:my-10 mx-2 lg:mx-0 border border-gray-300 dark:border-zinc-800 shadow  rounded-lg p-4 bg-white dark:bg-black">
      <Seperator
        className="border-sky-600/80 text-sky-400 font-bold"
        text="A bit about me"
        classWrapper="my-4"
      >
        <section className="group-hover:border-sky-600 p-4 sm:px-0 space-y-4 text-xs sm:text-sm">
          <h1 className="flex flex-wrap justify-center sm:justify-start text-2xl sm:text-4xl">
            <span>Hey there, This is </span>
            <HoverImage
              text=" Kushagra Sharma"
              className="text-green-600 pl-2 font-bold cursor-default"
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmczcXJtYmxxMXhieGZnZHB1MzllNDk4NXY3Zm1hbnMxcjd5aXEzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jptSqy6yYse5AaDRn0/giphy.webp"
              alt="An image of kushagra sharma"
            />
          </h1>
          <p className="text-sm text-center md:text-left sm:text-xl">
            A experienced Full Stack Developer with a passion for building
            high-performance apps, exploring cutting-edge technologies, and
            hacking solutions.
          </p>
        </section>
        <About />
      </Seperator>
    </div>
  );
};

export default Hero;
