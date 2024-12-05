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

const CarouselSlide = ({
  src,
  alt,
  heading,
  paragraph,
  gradientClass,
}: {
  src: string;
  alt: string;
  heading: string;
  paragraph: string;
  gradientClass: string;
}) => (
  <CarouselItem className="relative sm:h-[24rem] h-52 w-full flex items-center justify-center -z-10">
    <Image
      src={src}
      alt={alt}
      height={400}
      width={600}
      className="w-full h-full object-cover"
      priority
    />
    <div className="absolute h-full w-full bg-black/30" />
    <div
      className={`absolute h-full w-full flex flex-col items-center justify-center text-center ${gradientClass} px-4`}
    >
      <h2 className="font-black text-xl md:text-5xl text-white/60 mb-4">
        {heading}
      </h2>
      <p className="hidden sm:block text-xs md:text-xl font-semibold text-white/60">
        {paragraph}
      </p>
    </div>
  </CarouselItem>
);

const HomeCarousel = () => {
  const slides = [
    {
      src: "https://cdn.pixabay.com/photo/2023/11/05/02/07/ai-generated-8366100_960_720.jpg",
      alt: "AI Art Image",
      heading: "Innovative Full Stack Developer",
      paragraph:
        "Exploring AI and software development with cutting-edge solutions.",
      gradientClass:
        "bg-gradient-to-b from-black/40 via-transparent to-green-800/60",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/06/17/08/40/hacker-3480124_960_720.jpg",
      alt: "Hacker Image",
      heading: "Hacking The Box",
      paragraph: "Breaking down systems to build innovative solutions.",
      gradientClass:
        "bg-gradient-to-b from-black/40 via-transparent to-sky-800/60",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_960_720.jpg",
      alt: "Workspace Image",
      heading: "Blending Creativity with Code",
      paragraph: "Transforming ideas into impactful software.",
      gradientClass:
        "bg-gradient-to-b from-black/40 via-transparent to-red-800/60",
    },
  ];

  return (
    <Carousel
      className="sm:max-h-[24rem] max-h-80 overflow-hidden"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselPrevious />
      <CarouselContent className="duration-100 -z-10">
        {slides.map((slide, index) => (
          <CarouselSlide key={index} {...slide} />
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

export default HomeCarousel;
