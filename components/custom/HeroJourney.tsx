"use client";

import Image from "next/image";
import React from "react";

import { useLocale } from "@/contexts/LocaleContext";

export default function HeroJourney() {
  const { locale } = useLocale();

  return (
    <>
      {/* Perjalanan ke pulau nias */}
      <div className="bg-mainLight dark:bg-darkBg">
        <h2 className="text-3xl text-main pt-15 p-10 text-center">
          {locale === "id"
            ? "Membawa Anda Pengalaman Berharga di Explorenias"
            : "Bringing You Valuable Experience in Explorenias"}
        </h2>
        <div className="w-full flex items-center justify-between bg-main p-5 rounded-t-[5rem]">
          <div className="w-1/2 my-10 ml-20">
            <h3 className="text-4xl text-white">
              {locale === "id"
                ? "Perjalanan Ke Pulau Nias"
                : "Travel to Nias Island"}
            </h3>
            <p className="text-white text-xl w-[35rem] mt-5">
              {locale === "id"
                ? "Pilih Rute Perjalanan Anda dan Mulailah Petualangan Tak Terlupakan Bersama Kami di Pulau Nias!"
                : "Choose your Travel Route and Embark on an Unforgettable Adventure with Us on Nias Island!"}
            </p>
          </div>

          <div className="w-1/2">
            <Image
              src="/assets/homepage/maps/nias.png"
              width={500}
              height={500}
              className="w-full scale-90"
              alt="hero-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
