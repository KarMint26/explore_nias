"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale } from "@/contexts/LocaleContext";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const { locale } = useLocale();
  const { theme } = useTheme();
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    let src: string | any;
    if (theme === "dark") {
      src = "/assets/homepage/video/homepage-dark.mp4";
    } else if (theme === "light") {
      src = "/assets/homepage/video/homepage.mp4";
    } else if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      src =
        systemTheme === "dark"
          ? "/assets/homepage/video/homepage-dark.mp4"
          : "/assets/homepage/video/homepage.mp4";
    }
    setVideoSrc(src);
  }, [theme]);

  return (
    <React.Fragment>
      <div className="w-full h-fit pt-12 lg:pt-0 flex justify-center items-center relative">
        <video
          src={videoSrc}
          className="w-full h-fit pt-12 lg:pt-0 object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-[42%] sm:top-[30%] lg:top-[20%]">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-[270px] h-[150px] sm:w-[600px] lg:w-[1300px] sm:h-[320px] lg:h-[550px]"
          >
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={`/assets/Gallery/banner/banner-${
                      locale === "id" ? index + 1 : index + 1 + "-english"
                    }.png`}
                    width={700}
                    height={500}
                    alt={`image-carousel-${index + 1}`}
                    className="w-full h-[150px] sm:h-[320px] lg:h-[550px] rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
