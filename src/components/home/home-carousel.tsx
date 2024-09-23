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

const HomeCarousel = () => {
  return (
    <Carousel
      className="max-h-[24rem] overflow-hidden"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="duration-100 -z-10">
        <CarouselItem className="relative -z-10">
          <Image
            src={"/gif/smiley.gif"}
            className="w-full -z-10"
            alt="Carousel Image 1"
            height={400}
            width={600}
          />
          <div className="absolute h-full w-full top-0">
            <span
              className={cn(
                os.className,
                "bg-black/60",
                "bg-grid-lg-green-600/10",
                "w-full h-full",
                "flex justify-center items-center"
              )}
            >
              <p className="font-black text-6xl">Kushagra</p>
            </span>
          </div>
        </CarouselItem>
        <CarouselItem className="relative -z-10">
          <Image
            src={"/gif/smiley.gif"}
            className="w-full -z-10"
            alt="Carousel Image 1"
            height={400}
            width={600}
          />
          <div className="absolute h-full w-full top-0">
            <span
              className={cn(
                os.className,
                "bg-black/60",
                "bg-grid-lg-sky-600/10",
                "w-full h-full",
                "flex justify-center items-center"
              )}
            >
              <p className="font-black text-6xl">Sharma</p>
            </span>
          </div>
        </CarouselItem>
        <CarouselItem className="relative -z-10">
          <Image
            src={"/gif/smiley.gif"}
            className="w-full -z-10"
            alt="Carousel Image 1"
            height={400}
            width={600}
          />
          <div className="absolute h-full w-full top-0">
            <span
              className={cn(
                os.className,
                "bg-black/60",
                "bg-grid-lg-red-600/10",
                "w-full h-full",
                "flex justify-center items-center"
              )}
            >
              <p className="font-black text-6xl">TheDarkArtist</p>
            </span>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default HomeCarousel;
