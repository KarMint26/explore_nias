"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useLocale } from "@/contexts/LocaleContext";
import { Drama, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Culture = () => {
  const { locale } = useLocale();

  const words = [
    {
      text: locale === "id" ? "Pulau" : "Nias",
      className: "text-main dark:text-main",
    },
    {
      text: locale === "id" ? "Nias" : "Island",
      className: "text-main dark:text-main",
    },
  ];

  return (
    <React.Fragment>
      {/* Hero Section */}
      <div className="w-full h-fit bg-submain dark:bg-[#0f0f0f] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center pt-36 pb-12 sm:pb-16 px-12 lg:px-20">
        <div className="flex flex-col justify-start space-y-4 lg:w-[55%] mt-5 lg:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[2rem] sm:leading-[3.5rem]">
            {locale === "id"
              ? "Temukan Kebudayaan Daerah dan Destinasi Wisata dari"
              : "Discover Regional Culture and Tourist Destinations from"}{" "}
            <br className="hidden lg:block" />
            <TypewriterEffectSmooth words={words} className="font-bold" />
          </h1>
          <p
            className="text-[0.7rem] sm:text-base lg:text-2xl"
            dangerouslySetInnerHTML={{
              __html:
                locale === "id"
                  ? "Ada sesuatu yang menarik saat menjelajahi Nias. <br /> tempat baru, keindahan baru."
                  : "There is something interesting about exploring Nias. <br /> New Place, New Beauty.",
            }}
          />
          <Button
            onClick={() =>
              window.scrollTo({
                top: 400,
              })
            }
            size="lg"
            className="bg-main rounded-full text-sm sm:text-base w-fit hover:bg-submainDark dark:hover:bg-[#c0b99d]"
          >
            {locale === "id" ? "Lihat Selengkapnya" : "View More"}
          </Button>
        </div>
        <Image
          src="/assets/Culture/hero.svg"
          width={400}
          height={500}
          alt="hero-image"
        />
      </div>

      {/* Content Culture */}
      <div className="culture-content flex flex-col w-full px-12 lg:px-20 py-6 sm:py-8 lg:py-10">
        {/* Title */}
        <div className="title-culture flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold gap-2 sm:gap-4">
          <Image
            src="/assets/Culture/shape.svg"
            className="scale-[0.85] sm:scale-100"
            width={40}
            height={40}
            alt="shape"
          />
          {locale === "id" ? "Budaya Daerah" : "Regional Culture"}
          <Image
            src="/assets/Culture/shape.svg"
            className="scale-[0.85] sm:scale-100"
            width={40}
            height={40}
            alt="shape"
          />
        </div>

        {/* List Culture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <CardContainer className="card-item w-full sm:w-[280px] h-[350px] sm:h-[400px] rounded-[45px] bg-[url('/assets/Culture/stone-jumping.png')] bg-no-repeat bg-cover relative">
            <CardBody className="w-full h-fit flex flex-col absolute bottom-5 left-5 gap-3">
              <CardItem translateZ={30}>
                <div className="p-2 hover:px-3 w-fit group cursor-pointer rounded-full bg-white flex justify-center items-center space-x-1 sm:space-x-2 transition duration-300 ">
                  <Drama color="#504E4B" size={20} />
                  <div className="text-submainDark text-sm hidden group-hover:inline-block  transition duration-300">
                    Lompat Batu
                  </div>
                </div>
              </CardItem>
              <CardItem translateZ={40}>
                <div className="p-2 hover:px-3 w-fit group cursor-pointer rounded-full bg-white flex justify-center items-center space-x-1 sm:space-x-2 transition duration-300 ">
                  <Search color="#504E4B" size={20} />
                  <div className="text-submainDark text-sm hidden group-hover:inline-block  transition duration-300">
                    Lihat Detail
                  </div>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Culture;