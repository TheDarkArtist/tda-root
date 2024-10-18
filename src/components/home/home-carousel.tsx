"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { os } from "@/utils/fonts";
import { cn } from "@/lib/utils";

const CarouselSlide = ({
  src,
  alt,
  heading,
  paragraph,
  gradientColor,
}: {
  src: string;
  alt: string;
  heading: string;
  paragraph: string;
  gradientColor: string;
}) => {
  return (
    <CarouselItem className="relative sm:h-[24rem] h-52 w-full flex items-center justify-center -z-10">
      <div className="w-full">
        <Image
          src={src}
          className="w-full h-full object-cover -z-10"
          alt={alt}
          height={400}
          width={600}
        />
      </div>
      <div className="absolute h-full w-full bg-black/30" />
      <div className="absolute h-full w-full top-0 flex items-center pl-4 justify-center">
        <span
          className={cn(
            os.className,
            `bg-gradient-to-b from-black/40 via-transparent to-${gradientColor}/60`,
            "w-full h-full",
            "flex flex-col items-center justify-center text-center px-4"
          )}
        >
          <h2 className="font-black text-xl md:text-5xl text-white/60 text-center w-full mb-4 animate-fadeIn">
            {heading}
          </h2>
          <p className="hidden sm:block text-xs md:text-xl px-6 font-semibold text-white/60 animate-fadeIn">
            {paragraph}
          </p>
        </span>
      </div>
    </CarouselItem>
  );
};

const HomeCarousel = () => {
  const slides = [
    {
      src: "https://cdn.pixabay.com/photo/2023/11/05/02/07/ai-generated-8366100_960_720.jpg",
      alt: "AI Art Image",
      heading: "Innovative Full Stack Developer",
      paragraph:
        "I'm a tech enthusiast who is always exploring the intersection of AI and software development. Whether it's working on AI-driven solutions or building tools that help people solve problems efficiently, I like to stay ahead of the curve and push the limits of what technology can do. My passion lies in crafting solutions that not only solve problems but also bring value to the world of tech.",
      gradientColor: "bg-green-600",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/06/17/08/40/hacker-3480124_960_720.jpg",
      alt: "Hacker Image",
      heading: "Hacking The Box",
      paragraph:
        "I approach everything with a hacker's mindset—breaking things down to understand how they work, and then building something better. Innovation and creativity go hand in hand for me, and I believe that thinking outside the box is what helps me come up with unique solutions to everyday challenges in tech. My focus is on creating software that not only performs well but also challenges the status quo.",
      gradientColor: "bg-sky-600",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_960_720.jpg",
      alt: "Workspace Image",
      heading: "Blending Creativity with Code",
      paragraph:
        "As an Artist, I blend creativity with code. I take ideas and bring them to life through clean, efficient, and powerful development. Whether working on front-end or back-end, I aim to build experiences that resonate with users and make a real impact. My goal is to continue pushing my skills, learning new technologies, and always staying ahead of the trends in software development.",
      gradientColor: "bg-red-600",
    },
  ];

  return (
    <Carousel
      className="sm:max-h-[24rem] max-h-80 overflow-hidden"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselPrevious />
      <CarouselContent className="duration-100 -z-10">
        {slides.map((slide, index) => (
          <CarouselSlide
            key={index}
            src={slide.src}
            alt={slide.alt}
            heading={slide.heading}
            paragraph={slide.paragraph}
            gradientColor={slide.gradientColor}
          />
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

export default HomeCarousel;
