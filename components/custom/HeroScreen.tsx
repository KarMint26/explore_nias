"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
import { useTheme } from "next-themes";
import Image from "next/image";

const dataImage = [
  "/assets/foto/0.jpg",
  "/assets/foto/1.png",
  "/assets/foto/2.png",
  "/assets/foto/3.png",
  "/assets/foto/4.png",
];

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function HeroScreen() {
  const { theme } = useTheme();

  return (
    <div className="w-full h-screen relative">
      <video
        src={
          theme === "light"
            ? "/assets/video/homepage.mp4"
            : "/assets/video/homepage-dark.mp4"
        }
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between p-5">
        <div className="w-1/2 flex flex-col items-center">
          <div className="bg-white/70 w-[32rem] p-10 backdrop-blur-sm rounded-xl">
            <h1 className="text-2xl">Gaya baru berwisata di Nias</h1>
            <p className="text-lg mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              pariatur consequatur laborum repellat eligendi fuga eius quam esse
              distinctio, tenetur omnis labore, itaque ratione odit?
            </p>
          </div>
          <Button className="bg-main text-lg text-white rounded-full px-10 py-6 mt-5 shadow-lg">
            Mulai
          </Button>
        </div>
        <div className="w-1/2">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            interval={2000}
            className="w-[50rem] h-[40rem] p-5 rounded-3xl relative"
          >
            {dataImage.map((item, index) => (
              <img
                src={item}
                key={index}
                className="rounded-3xl object-cover h-full"
                alt="slide-1"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HeroScreen;
