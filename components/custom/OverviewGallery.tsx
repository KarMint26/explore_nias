"use client";
import React from "react";
import AsteticStick from "./AsteticStick";
import ButtonPrimary from "./ButtonPrimary";
import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";

function OverviewGallery() {
  const { locale } = useLocale();
  return (
    <div className="w-full bg-mainLight dark:bg-submainDark px-10 py-20 flex flex-col items-center justify-center">
      <AsteticStick />
      <h2
        className="text-4xl my-5 text-center"
        dangerouslySetInnerHTML={{
          __html:
            locale === "id"
              ? "Jelajahi Keindahan Nias <br /> Lewat Galeri"
              : "Explore the Beauty of Nias <br /> Through Galleries",
        }}
      ></h2>
      <ButtonPrimary>
        {locale === "id" ? "Lebih Lengkap" : "View More"}
      </ButtonPrimary>

      <div className="flex gap-10 mt-10">
        <Image
          src={"/assets/homepage/foto/0.jpg"}
          width={500}
          height={500}
          className="w-[20rem] h-[28rem] rounded-[5rem] object-cover"
          alt="galeri-1"
        />

        <Image
          src={"/assets/homepage/foto/0.jpg"}
          width={500}
          height={500}
          className="w-[20rem] h-[28rem] rounded-[5rem] object-cover"
          alt="galeri-1"
        />
        <Image
          src={"/assets/homepage/foto/0.jpg"}
          width={500}
          height={500}
          className="w-[20rem] h-[28rem] rounded-[5rem] object-cover"
          alt="galeri-1"
        />
        <Image
          src={"/assets/homepage/foto/0.jpg"}
          width={500}
          height={500}
          className="w-[20rem] h-[28rem] rounded-[5rem] object-cover"
          alt="galeri-1"
        />
      </div>
    </div>
  );
}

export default OverviewGallery;
