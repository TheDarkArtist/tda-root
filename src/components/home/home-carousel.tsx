"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { os } from "@/utils/fonts";
import { cn } from "@/lib/utils";

// CarouselSlide component with heading and paragraph for each slide
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
    <CarouselItem className="relative h-[24rem] flex items-center justify-center -z-10">
      <Image
        src={src}
        className="w-full h-full object-cover -z-10"
        alt={alt}
        height={400}
        width={600}
      />
      <div className="absolute h-full w-full bg-black/50" />
      <div className="absolute h-full w-full top-0 flex items-center justify-center">
        <span
          className={cn(
            os.className,
            `bg-gradient-to-b from-black/40 via-transparent to-${gradientColor}/60`,
            "w-full h-full",
            "flex flex-col items-center justify-center text-center px-4"
          )}
        >
          <h2 className="font-black text-xl md:text-5xl text-white mb-2 animate-fadeIn">
            {heading}
          </h2>
          <p className="font-medium text-xs md:text-xl px-6 text-white animate-fadeIn">
            {paragraph}
          </p>
        </span>
      </div>
    </CarouselItem>
  );
};

const HomeCarousel = () => {
  return (
    <Carousel
      className="max-h-[24rem] overflow-hidden ml-4"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="duration-100 -z-10">
        <CarouselSlide
          src="https://cdn.pixabay.com/photo/2023/11/05/02/07/ai-generated-8366100_960_720.jpg"
          alt="AI Art Image"
          heading="The Full Stack Web Developer"
          paragraph="I'm a tech enthusiast who is always exploring the intersection of AI and software development. Whether it's working on AI-driven solutions or building tools that help people solve problems efficiently, I like to stay ahead of the curve and push the limits of what technology can do. My passion lies in crafting solutions that not only solve problems but also bring value to the world of tech."
          gradientColor="green-600"
        />
        <CarouselSlide
          src="https://cdn.pixabay.com/photo/2018/06/17/08/40/hacker-3480124_960_720.jpg"
          alt="Hacker Image"
          heading="Always In Search For Something"
          paragraph="I approach everything with a hacker's mindset—breaking things down to understand how they work, and then building something better. Innovation and creativity go hand in hand for me, and I believe that thinking outside the box is what helps me come up with unique solutions to everyday challenges in tech. My focus is on creating software that not only performs well but also challenges the status quo."
          gradientColor="sky-600"
        />
        <CarouselSlide
          src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_960_720.jpg"
          alt="Workspace Image"
          heading="Always Been An Artist"
          paragraph="As an Artist, I blend creativity with code. I take ideas and bring them to life through clean, efficient, and powerful development. Whether working on front-end or back-end, I aim to build experiences that resonate with users and make a real impact. My goal is to continue pushing my skills, learning new technologies, and always staying ahead of the trends in software development."
          gradientColor="red-600"
        />
      </CarouselContent>
    </Carousel>
  );
};

export default HomeCarousel;
