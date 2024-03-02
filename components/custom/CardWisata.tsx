"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";

function CardWisata({
  nameId,
  nameEn,
  image,
  onClick = () => {},
}: {
  nameId: string;
  nameEn: string;
  image: string;
  onClick?: () => void;
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
        <CardItem translateZ={70} className="w-full">
          <div
            className="text-white border text-base lg:text-xl absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl bottom-5 px-5 py-3 rounded-xl w-full lg:w-72 border-white bg-white/30 backdrop-blur-md text-center"
            onClick={onClick}
          >
            <span className="drop-shadow-lg">
              {locale === "id" ? nameId : nameEn}
            </span>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default CardWisata;
