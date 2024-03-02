"use client";

import React, { useEffect, useState } from "react";
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
    <div className="w-full h-screen flex justify-center items-center relative">
      <video
        src={videoSrc}
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
      />
      {/* mobile */}
      <div className="absolute sm:hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 w-[95%]">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          interval={2000}
          className="w-full h-[10rem] bg-white mt-5 mb-5 lg:mt-20 overflow-hidden rounded-3xl relative"
        >
          {dataImagesCarousel.map((item, index) => (
            <Image
              src={item}
              key={index}
              width={500}
              height={650}
              className="h-full object-cover"
              alt="slide-1"
            />
          ))}
        </Carousel>
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="bg-white/70 dark:bg-black/30 w-full lg:w-[40rem] p-5 backdrop-blur-md rounded-xl mb-5">
            <h1 className="text-xl sm:text-3xl font-medium">
              {locale === "id"
                ? "Jelajahi Keindahan Budaya dan Ragam Pesona Pulau Nias"
                : "Explore the Cultural Beauty and Various Enchantments of Nias Island"}
            </h1>
            <p className="text-sm text-justify mt-3">
              {locale === "id"
                ? "Pulau Nias, surga tersembunyi di barat Sumatera, menawarkan pengalaman wisata yang tak terlupakan. Keindahan alam yang memesona, budaya yang kaya, kuliner yang khas, dan keramahan penduduknya menjadikan Nias destinasi ideal bagi para penjelajah sejati."
                : "Nias Island, a hidden paradise in western Sumatra, offers an unforgettable travel experience. Breathtaking natural beauty, rich culture, distinctive cuisine and the hospitality of its people make Nias an ideal destination for true explorers."}
            </p>
          </div>
          <ButtonPrimary to="#tourism-section">
            {locale === "id" ? "Mulai Sekarang" : "Get Started Now"}
          </ButtonPrimary>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden sm:flex absolute top-0 left-0 w-full h-full flex-col-reverse sm:flex-row  items-center justify-between p-5">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="bg-white/70 dark:bg-black/30 w-full lg:w-[40rem] p-10 backdrop-blur-md rounded-xl mb-5 lg:mb-10">
            <h1 className="text-xl sm:text-3xl font-medium">
              {locale === "id"
                ? "Jelajahi Keindahan Budaya dan Ragam Pesona Pulau Nias"
                : "Explore the Cultural Beauty and Various Enchantments of Nias Island"}
            </h1>
            <p className="text-base sm:text-lg mt-3">
              {locale === "id"
                ? "Pulau Nias, surga tersembunyi di barat Sumatera, menawarkan pengalaman wisata yang tak terlupakan. Keindahan alam yang memesona, budaya yang kaya, kuliner yang khas, dan keramahan penduduknya menjadikan Nias destinasi ideal bagi para penjelajah sejati"
                : "Nias Island, a hidden paradise in western Sumatra, offers an unforgettable travel experience. Breathtaking natural beauty, rich culture, distinctive cuisine and the hospitality of its people make Nias an ideal destination for true explorers."}
            </p>
          </div>
          <ButtonPrimary to="#tourism-section">
            {locale === "id" ? "Mulai Sekarang" : "Get Started Now"}
          </ButtonPrimary>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            interval={2000}
            className="w-full lg:w-[40rem] lg:h-[35rem] mt-32 lg:mt-20 overflow-hidden rounded-3xl relative"
          >
            {dataImagesCarousel.map((item, index) => (
              <Image
                src={item}
                key={index}
                width={500}
                height={650}
                className="lg:h-[43rem] object-cover"
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
