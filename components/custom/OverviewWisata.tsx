"use client";

import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";
import React from "react";
import AsteticStick from "./AsteticStick";
import ButtonPrimary from "./ButtonPrimary";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import CardWisata from "./CardWisata";

const dataWisata = [
  {
    nameId: "Desa Bawomataluo",
    nameEn: "Bawomataluo Village",
    image: "/assets/homepage/foto/bawomataluo.jpg",
  },
  {
    nameId: "Museum Pusaka Nias",
    nameEn: "Nias Heritage Museum",
    image: "/assets/homepage/foto/baloho1.jpg",
  },
  {
    nameId: "Pantai Indah Tureloto",
    nameEn: "Tureloto Indah Beach",
    image: "/assets/homepage/foto/pantai.jpg",
  },
  {
    nameId: "Pantai Nias",
    nameEn: "Nias Beach",
    image: "/assets/homepage/foto/2.png",
  },
];

function OverviewWisata() {
  const { locale } = useLocale();

  return (
    <div className="w-full bg-white dark:bg-darkBg" id="tourism-section">
      <div className="flex w-full p-10 justify-between items-center flex-col-reverse sm:flex-row lg:flex-row">
        <p className="text-sm sm:text-xl text-main sm:w-[28rem] mt-5 text-center">
          {locale === "id"
            ? '"Jelajahi keajaiban Pulau Nias, tempat di mana keindahan alam tropis bertemu dengan kekayaan budaya yang khas."'
            : '"Explore the wonders of Nias Island, a place where tropical natural beauty meets a rich and distinctive culture."'}
        </p>
        <div className="text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start flex-row-reverse sm:flex-row-reverse mb-5">
            <AsteticStick />
          </div>

          <h3 className="text-4xl text-main mb-5">
            {locale === "id" ? "Destinasi Wisata" : "Tourism Destination"}
          </h3>
          <ButtonPrimary to="/tour">
            {locale === "id" ? "Lebih Lengkap" : "More Details"}
          </ButtonPrimary>
        </div>
      </div>

      <div className="w-full flex justify-between gap-5 mt-5 px-10 overflow-x-auto">
        {dataWisata.map((item) => (
          <CardWisata key={item.nameEn} {...item} />
        ))}
      </div>
    </div>
  );
}

export default OverviewWisata;
