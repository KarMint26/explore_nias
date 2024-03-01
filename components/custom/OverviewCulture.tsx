"use client";

import { useLocale } from "@/contexts/LocaleContext";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import AsteticStick from "./AsteticStick";
import ButtonPrimary from "./ButtonPrimary";

function OverviewCulture() {
  const { locale } = useLocale();

  const words = [
    {
      text: locale === "id" ? "Pulau" : "Nias",
      className: "text-main dark:text-main",
    },
    {
      text: locale === "id" ? "Nias" : "Island",
      className: "text-main dark:text-main",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-fit bg-white dark:bg-[#0f0f0f] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center py-32 px-12 lg:px-20">
        <div className="flex flex-col justify-start space-y-4 lg:w-[55%] mt-5 lg:mt-0">
          <div className="sm:mb-5 my-7 sm:mt-0">
            <AsteticStick />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[2rem] sm:leading-[3.5rem]">
            {locale === "id"
              ? "Temukan Kebudayaan Daerah dan Destinasi Wisata dari"
              : "Discover Regional Culture and Tourist Destinations from"}{" "}
            <br className="hidden lg:block" />
            <TypewriterEffectSmooth words={words} className="font-bold" />
          </h1>
          <p
            className="text-sm sm:text-base lg:text-2xl w-72 sm:w-[38rem]"
            dangerouslySetInnerHTML={{
              __html:
                locale === "id"
                  ? "Ada sesuatu yang menarik saat menjelajahi Nias. tempat baru, keindahan baru."
                  : "There is something interesting about exploring Nias.  New Place, New Beauty.",
            }}
          />
          <ButtonPrimary to="/culture">
            {locale === "id" ? "Lihat Selengkapnya" : "View More"}
          </ButtonPrimary>
        </div>
        <Image
          src="/assets/Culture/hero.svg"
          width={400}
          height={500}
          alt="hero-image"
        />
      </div>
    </>
  );
}

export default OverviewCulture;
