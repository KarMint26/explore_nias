"use client";

import Image from "next/image";
import React from "react";

import { useLocale } from "@/contexts/LocaleContext";
import { CardContainer } from "../ui/3d-card";

export default function HeroJourney() {
  const { locale } = useLocale();

  return (
    <>
      {/* Perjalanan ke pulau nias */}
      <div className="bg-mainLight dark:bg-darkBg">
        <h2 className="text-xl sm:text-3xl text-main pt-15 p-10 text-center">
          {locale === "id"
            ? "Membawa Anda Pengalaman Berharga di Explorenias"
            : "Bringing You Valuable Experience in Explorenias"}
        </h2>
        <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-center bg-main dark:bg-submainDark p-5 rounded-t-[5rem]">
          <div className="mt-5 p-5 sm:my-10 sm:ml-20">
            <h3 className="text-2xl sm:text-4xl text-white">
              {locale === "id"
                ? "Perjalanan Ke Pulau Nias"
                : "Travel to Nias Island"}
            </h3>
            <p className="text-white sm:text-xl sm:w-[35rem] mt-5">
              {locale === "id"
                ? "Pilih Rute Perjalanan Anda dan Mulailah Petualangan Tak Terlupakan Bersama Kami di Pulau Nias!"
                : "Choose your Travel Route and Embark on an Unforgettable Adventure with Us on Nias Island!"}
            </p>
          </div>
          <div className="sm:w-1/2">
            <Image
              src="/assets/homepage/maps/nias.png"
              width={500}
              height={500}
              className="w-full scale-75 drop-shadow-lg"
              alt="hero-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
