"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { dataImagesCarousel } from "@/utils/homepage";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";

function HeroScreen() {
  const { theme } = useTheme();
  const { locale } = useLocale();

  return (
    <div className="w-full h-screen relative">
      <video
        src={
          theme === "light"
            ? "/assets/homepage/video/homepage.mp4"
            : "/assets/homepage/video/homepage-dark.mp4"
        }
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between p-5">
        <div className="w-1/2 flex flex-col items-center">
          <div className="bg-white/70 dark:bg-black/30 w-[32rem] p-10 backdrop-blur-md rounded-xl">
            <h1 className="text-2xl font-semibold">
              {locale === "id"
                ? "Gaya baru berwisata di Nias"
                : "A new style of traveling on Nias"}
            </h1>
            <p className="text-lg mt-3">
              {locale === "id"
                ? "Lebih dari keindahan alam, Nias juga menawarkan kekayaan budaya  yang unik. Suku Nias terkenal dengan tradisi lompat batu yang luar biasa, sebuah pertunjukan keberanian dan kekuatan yang mempesona"
                : "More than natural beauty, Nias also offers a rich culture that is unique. The Nias tribe is famous for its extraordinary stone jumping tradition, a dazzling display of courage and strength. tradition, a dazzling display of courage and strength."}
            </p>
          </div>
          <Button className="bg-main text-lg dark:hover:bg-gray-700 text-white rounded-full px-10 py-6 mt-5 shadow-lg">
            {locale === "id" ? "Mulai Sekarang" : "Get Started Now"}
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
            {dataImagesCarousel.map((item, index) => (
              <Image
                src={item}
                key={index}
                width={500}
                height={650}
                className="rounded-3xl h-[43rem] object-cover"
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
