"use client";

import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";
import React from "react";
import AsteticStick from "./AsteticStick";
import ButtonPrimary from "./ButtonPrimary";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

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
function CardWisata({
  nameId,
  nameEn,
  image,
}: {
  nameId: string;
  nameEn: string;
  image: string;
}) {
  const { locale } = useLocale();

  return (
    <CardContainer>
      <CardBody className="w-[22rem] mt-5 rounded-t-full h-[30rem] bg-main relative">
        <CardItem className="w-full h-full">
          <Image
            src={image}
            fill
            className="object-cover rounded-t-full"
            alt="wisata"
          />
        </CardItem>
        <CardItem
          as={"button"}
          translateZ={50}
          className="text-white border text-xl absolute left-4 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl bottom-5 px-5 py-3 rounded-xl w-80 border-white bg-white/40 backdrop-blur-sm"
        >
          {locale === "id" ? nameId : nameEn}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
function OverviewWisata() {
  const { locale } = useLocale();

  return (
    <div className="w-full bg-white dark:bg-darkBg p-10">
      <div className="flex w-full justify-between items-center">
        <p className="text-xl text-main w-[28rem] text-center">
          {locale === "id"
            ? '"Jelajahi keajaiban Pulau Nias, tempat di mana keindahan alam tropis bertemu dengan kekayaan budaya yang khas."'
            : '"Explore the wonders of Nias Island, a place where tropical natural beauty meets a rich and distinctive culture."'}
        </p>
        <div className="text-right">
          <div className="flex flex-row-reverse mb-3">
            <AsteticStick />
          </div>

          <h3 className="text-3xl text-main mb-3">
            {locale === "id" ? "Destinasi Wisata" : "Tourism Destination"}
          </h3>
          <ButtonPrimary>
            {locale === "id" ? "Lebih Lengkap" : "More Details"}
          </ButtonPrimary>
        </div>
      </div>

      <div className="w-full flex justify-between mt-5 px-10">
        {dataWisata.map((item) => (
          <CardWisata key={item.nameEn} {...item} />
        ))}
      </div>
    </div>
  );
}

export default OverviewWisata;
