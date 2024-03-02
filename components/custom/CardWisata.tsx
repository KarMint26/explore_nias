"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";

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
      <CardBody className="w-[14rem] h-[20rem] mr-5 sm:mr-0 lg:w-[20rem] lg:h-[28rem] mt-5 sm:mt-0 rounded-t-full bg-main relative">
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
          className="text-white border text-base lg:text-xl absolute lg:left-4 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl bottom-5 px-5 py-3 rounded-xl w-full lg:w-[18rem] border-white bg-white/40 backdrop-blur-md"
        >
          {locale === "id" ? nameId : nameEn}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default CardWisata;
