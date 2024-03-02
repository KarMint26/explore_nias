"use client";
import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";
import React from "react";

function HeroTour() {
  const { locale } = useLocale();
  return (
    <div
      className="w-full gap-5 lg:mt-10 h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/tour/hero.png')",
      }}
    >
      <div className="w-full h-screen flex flex-col-reverse lg:flex-row justify-center p-5 items-center">
        <div className="p-5">
          <div className="flex">
            <div className="">
              <p className="text-white text-base font-semibold">
                Nias, Indonesia
              </p>
              <h2 className="text-white text-xl sm:text-4xl lg:w-[32rem] font-bold my-2 sm:my-5 leading-normal">
                {locale === "id"
                  ? "Rasakan kesejukan alam Nias yang mempesona dan Nikmati Hidangannya."
                  : "Feel the coolness of Nias's enchanting nature and savor its cuisine."}{" "}
              </h2>
              <div className="w-14 rounded-xl h-1 bg-main mb-3 sm:mb-7"></div>
              <p className="text-white text-sm sm:text-base lg:w-[25rem]">
                {locale === "id"
                  ? '"Teknologi bukanlah segalanya. Terkadang, yang kita butuhkan hanyalah ketenangan jiwa, waktu, dan udara yang menyejukkan."'
                  : '"Technology isn\'t everything. Sometimes, all we need is peace of mind, time, and soothing air."'}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image
            src="/assets/tour/Ihero.png"
            width={500}
            height={500}
            className="w-[14rem] sm:w-[28rem] object-cover scale-75"
            alt="hero-1"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroTour;
