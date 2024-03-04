import { ArrowLeft, MapPin } from "lucide-react";
import type { tourCulinary } from "@/utils/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function DetailTourCulinary({
  locale,
  detailTour,
  handleBackButton,
}: {
  locale: string;
  detailTour: tourCulinary;
  handleBackButton?: () => void;
}) {
  return (
    <div
      key={detailTour.id}
      className="relative w-full h-fit overflow-y-auto bg-submain dark:bg-[#0f0f0f] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center py-10 sm:py-14 px-12 lg:px-20"
    >
      <div
        onClick={handleBackButton}
        className="absolute top-0 left-8 cursor-pointer back-button font-semibold flex items-center gap-2 sm:gap-3 lg:gap-4"
      >
        <ArrowLeft size={24} className="scale-[0.75] sm:scale-100" />
        {locale === "id" ? "Kembali" : "Back"}
      </div>
      <div className="flex flex-col justify-start space-y-2 sm:space-y-4 lg:w-[55%] mt-5 lg:mt-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[2rem] sm:leading-[3.5rem]">
          {detailTour.name}
        </h1>
        <p className="text-sm lg:text-xl text-justify">
          {locale === "id" ? detailTour.descId : detailTour.descEn}
        </p>
        <Link
          href={detailTour.maps}
          target="_blank"
          className="text-base font-semibold bg-main lg:text-2xl text-white dark:white w-fit px-5 py-2 sm:px-7 sm:py-3 rounded-full flex items-center gap-1 sm:gap-2 mt-5 lg:gap-3"
        >
          <MapPin size={24} className="scale-[0.75] sm:scale-100" />
          {locale === "id" ? "Lihat Peta Lokasi" : "View Map Location"}
        </Link>
      </div>
      <Image
        src={detailTour.image}
        width={400}
        height={150}
        alt="hero-image"
        className="w-[350px] sm:w-[400px] h-[250px] sm:h-[280px] lg:h-[400px] rounded-[30px] object-cover"
      />
    </div>
  );
}
