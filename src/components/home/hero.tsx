import React from "react";
import HoverImage from "../utils/hover-image";
import About from "./about";
import Seperator from "../utils/seperator";

const Hero = () => {
  return (
    <div className="sm:my-10 mx-4 sm:mx-0 border border-black/10 shadow dark:border-white/10 rounded-lg p-4 bg-white dark:bg-black">
      <Seperator
        className="border-sky-600/80 text-sky-400 font-bold"
        text="A bit about me"
        classWrapper="my-4"
      >
        <section className="group-hover:border-sky-600 p-4 sm:px-0 space-y-4 text-xs sm:text-sm">
          <h1 className="flex text-sm sm:text-4xl">
            <span>Hey there, This is </span>
            <HoverImage
              text=" Kushagra Sharma"
              className="text-green-600 pl-2 font-bold cursor-default"
              src="/img/me.jpg"
              alt="An image of kushagra sharma"
            />
          </h1>
          <p className="text-sm sm:text-xl">
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
