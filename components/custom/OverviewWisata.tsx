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
      <CardBody className="w-[14rem] h-[20rem] mr-5 sm:mr-0 sm:w-[22rem] sm:h-[30rem] mt-5 rounded-t-full bg-main relative">
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
          translateZ={70}
          className="text-white border text-base sm:text-xl absolute sm:left-4 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl bottom-5 px-5 py-3 rounded-xl w-full sm:w-80 border-white bg-white/40 backdrop-blur-md"
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
    <div className="w-full bg-white dark:bg-darkBg p-10" id="tourism-section">
      <div className="flex w-full justify-between items-center flex-col-reverse sm:flex-row">
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

      <div className="w-full flex justify-between mt-5 px-10 overflow-x-auto">
        {dataWisata.map((item) => (
          <CardWisata key={item.nameEn} {...item} />
        ))}
      </div>
    </div>
  );
}

export default OverviewWisata;
