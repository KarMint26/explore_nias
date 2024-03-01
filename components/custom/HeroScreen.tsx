"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { dataImagesCarousel } from "@/utils/homepage";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";
import ButtonPrimary from "./ButtonPrimary";

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
          <div className="bg-white/70 dark:bg-black/30 w-[40rem] p-10 backdrop-blur-md rounded-xl mb-10">
            <h1 className="text-3xl font-medium">
              {locale === "id"
                ? "Jelajahi Keindahan Budaya dan Ragam Pesona Pulau Nias"
                : "Explore the Cultural Beauty and Various Enchantments of Nias Island"}
            </h1>
            <p className="text-lg mt-3">
              {locale === "id"
                ? "Pulau Nias, surga tersembunyi di barat Sumatera, menawarkan pengalaman wisata yang tak terlupakan. Keindahan alam yang memesona, budaya yang kaya, kuliner yang khas, dan keramahan penduduknya menjadikan Nias destinasi ideal bagi para penjelajah sejati"
                : "Nias Island, a hidden paradise in western Sumatra, offers an unforgettable travel experience. Breathtaking natural beauty, rich culture, distinctive cuisine and the hospitality of its people make Nias an ideal destination for true explorers."}
            </p>
          </div>
          <ButtonPrimary>
            {locale === "id" ? "Mulai Sekarang" : "Get Started Now"}
          </ButtonPrimary>
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
            className="w-[45rem] h-[40rem] mt-20 overflow-hidden rounded-3xl relative"
          >
            {dataImagesCarousel.map((item, index) => (
              <Image
                src={item}
                key={index}
                width={500}
                height={650}
                className="h-[43rem] object-cover"
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
