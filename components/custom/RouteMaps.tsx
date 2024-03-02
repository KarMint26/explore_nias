"use client";

import React, { useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Button } from "../ui/button";
import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";

type ItemType = {
  name: string;
  startPrice: string;
  endPrice: string;
};

type TimelineType = {
  id: number;
  nameId: string;
  nameEn: string;
  startPrice: string;
  endPrice: string;
};

function Item({ name, startPrice, endPrice }: ItemType) {
  return (
    <>
      {/* desktop */}
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-main rounded-full -start-3 dark:ring-gray-900 dark:bg-main"></span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-main dark:text-main">
          {name}
        </h3>
        <p className="block mb-2 text-sm font-normal leading-none text-gray-500">
          IDR {startPrice} - {endPrice}
        </p>
      </li>
    </>
  );
}

const dataMaps = [
  {
    nameId: "Dunia",
    nameEn: "World",
    image: "/assets/homepage/maps/dunia.png",
    timeLine: [
      {
        id: 0,
        nameId: "Daerah Asal",
        nameEn: "Home Region",
        startPrice: "~",
        endPrice: "~",
      },
      {
        id: 1,
        nameId: "Bandara Soekarno Hatta",
        nameEn: "Soekarno Hatta Airport",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 2,
        nameId: "Bandara Binaka Gunungsitoli",
        nameEn: "Binaka Gunungsitoli Airport",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 3,
        nameId: "Terminal Bandara",
        nameEn: "Airport Terminal",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 4,
        nameId: "Nias Heritage Hotel",
        nameEn: "Nias Heritage Hotel",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
    ],
  },
  {
    nameId: "Singapura",
    nameEn: "Singapore",
    image: "/assets/homepage/maps/singapura.png",
    timeLine: [
      {
        id: 1,
        nameId: "Bandara Changi Singapura",
        nameEn: "Changi Singapore Airport",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 2,
        nameId: "Bandara Kualanamu Medan",
        nameEn: "Kualanamu Medan Airport",
        startPrice: "500.000",
        endPrice: "2.000.000",
      },
      {
        id: 3,
        nameId: "Bandara Terminal",
        nameEn: "Airport Terminal",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 4,
        nameId: "Nias Heritage Hotel",
        nameEn: "Nias Heritage Hotel",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
    ],
  },
  {
    nameId: "Jakarta",
    nameEn: "Jakarta",
    image: "/assets/homepage/maps/jakarta.png",
    timeLine: [
      {
        id: 1,
        nameId: "Bandara Soekarno Hatta",
        nameEn: "Soekarno Hatta Airport",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 2,
        nameId: "Bandara Binaka Gunungsitoli",
        nameEn: "Binaka Gunungsitoli Airport",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 3,
        nameId: "Terminal Bandara",
        nameEn: "Airport Terminal",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 4,
        nameId: "Nias Heritage Hotel",
        nameEn: "Nias Heritage Hotel",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
    ],
  },
  {
    nameId: "Banten",
    nameEn: "Banten",
    image: "/assets/homepage/maps/banten.png",
    timeLine: [
      {
        id: 1,
        nameId: "Bandara Soekarno Hatta",
        nameEn: "Soekarno Hatta Airport",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 2,
        nameId: "Bandara Binaka Gunungsitoli",
        nameEn: "Binaka Gunungsitoli Airport",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 3,
        nameId: "Terminal Bandara",
        nameEn: "Airport Terminal",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
      {
        id: 4,
        nameId: "Nias Heritage Hotel",
        nameEn: "Nias Heritage Hotel",
        startPrice: "1.000.000",
        endPrice: "1.500.000",
      },
    ],
  },
];

function RouteMaps() {
  const { locale } = useLocale();
  const [showDetailRoute, setShowDetailRoute] = React.useState<boolean>(false);
  const [dataRoute, setDataRoute] = React.useState<TimelineType[]>(
    dataMaps[0].timeLine
  );
  const [routeActive, setRouteActive] = React.useState<string>("Jakarta");

  return (
    <div className="w-full relative">
      {!showDetailRoute && (
        <div className="w-full bg-white dark:bg-darkBg flex flex-col">
          <Button
            className="text-lg hover:bg-transparent bg-transparent shadow-none text-main self-center rounded-full px-10 py-5 mt-5"
            onClick={() => setShowDetailRoute(true)}
          >
            <FiChevronsUp className="text-4xl font-bold text-black dark:text-white" />
          </Button>

          <h3 className="text-main text-2xl sm:text-3xl mb-8 text-center">
            {locale === "id"
              ? "Pilih Perjalananmu dari"
              : "Choose Your Trip from"}
          </h3>

          <div className="w-full py-20 px-16 sm:px-5 lg:px-20 mb-10 bg-[#5A574A] dark:bg-submainDark items-center rounded-t-[5rem] flex flex-col sm:flex-row justify-between">
            {dataMaps.map((item, index) => (
              <div
                key={index}
                className="w-80 relative cursor-pointer"
                onClick={() => {
                  setDataRoute(item.timeLine);
                  setRouteActive(item.nameId);
                  setShowDetailRoute(true);
                }}
              >
                <Image
                  src={item.image}
                  width={600}
                  height={600}
                  className="w-full scale-90 sm:scale-100 drop-shadow-lg"
                  alt={item.nameEn}
                />

                <h3 className="text-white text-3xl absolute font-medium top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-3xl">
                  {locale === "id" ? item.nameId : item.nameEn}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {showDetailRoute && (
        <div className="bg-white dark:bg-darkBg flex flex-col items-center w-screen">
          <Button
            className="text-lg hover:bg-transparent bg-transparent shadow-none text-main dark:text-white self-center rounded-full px-10 py-5 mt-5"
            onClick={() => setShowDetailRoute(false)}
          >
            <FiChevronsDown className="text-4xl font-bold text-black dark:text-white" />
          </Button>

          <h3 className="text-main drop-shadow-md text-xl sm:text-3xl mb-5 text-center">
            {locale === "id"
              ? "Menjelajahi Pengalaman Berharga di Explorenias"
              : "Exploring the Precious Experience at Explorenias"}
          </h3>

          <div className="w-full bg-mainLight flex items-center justify-center pt-10 rounded-t-[5rem]">
            <div className="flex sm:w-[80%] lg:w-1/2 flex-col-reverse justify-center sm:flex-row items-center">
              <div className="roadmap sm:w-[53rem] lg:w-[40rem]">
                <h3 className="text-xl font-medium sm:text-3xl text-main">
                  {routeActive}
                </h3>

                <ol className="relative border-s border-black dark:border-gray-600 mt-5">
                  {dataRoute.map((item) => (
                    <Item
                      key={item.id}
                      name={locale === "id" ? item.nameId : item.nameEn}
                      startPrice={item.startPrice}
                      endPrice={item.endPrice}
                    />
                  ))}
                </ol>
              </div>
              <div className="w-full">
                <Image
                  src={
                    routeActive === "Jakarta"
                      ? "/assets/homepage/maps/jakarta.png"
                      : routeActive === "Banten"
                      ? "/assets/homepage/maps/banten.png"
                      : routeActive === "Singapura"
                      ? "/assets/homepage/maps/singapura.png"
                      : "/assets/homepage/maps/dunia.png"
                  }
                  alt="maps"
                  width={500}
                  height={500}
                  className="w-full scale-75 sm:scale-110 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RouteMaps;
