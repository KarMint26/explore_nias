"use client";

import Image from "next/image";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { useLocale } from "@/contexts/LocaleContext";
import AsteticStick from "./AsteticStick";

function OverviewCulinary() {
  const { locale } = useLocale();
  return (
    <div className="w-full bg-mainLight p-10 flex gap-10">
      <div className="w-1/2 p-10">
        <Image
          src="/assets/homepage/foto/foods1.png"
          width={500}
          height={500}
          className="w-[30rem] object-cover"
          alt="foods 1"
        />
        <p className="text-black text-xl w-[35rem] my-5">
          Ada Makanan yang Menarik Saat Menjelajahi Nias. Cita Rasa yang Kaya
          dan Cita Rasa Yang Sangat Khas
        </p>
        <ButtonPrimary>
          {locale === "id" ? "Lebih Lengkap" : "View More"}
        </ButtonPrimary>
      </div>
      <div className="w-1/2 p-10">
        <AsteticStick />
        <h2 className="text-4xl my-7">
          Nikmati Kuliner Bersama <br />
          ExploreNias
        </h2>
        <Image
          src="/assets/homepage/foto/foods2.png"
          width={500}
          height={500}
          className="w-[30rem] object-cover"
          alt="foods 1"
        />
      </div>
    </div>
  );
}

export default OverviewCulinary;
