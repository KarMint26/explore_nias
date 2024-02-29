import { ArrowLeft, MapPin } from "lucide-react";
import type { culture } from "@/utils/types";
import Image from "next/image";
import React from "react";

export default function DetailCulture({
  locale,
  detailCulture,
  handleBackButton,
}: {
  locale: string;
  detailCulture: culture;
  handleBackButton?: () => void;
}) {
  return (
    <div
      key={detailCulture.id}
      className="relative w-full h-fit bg-submain dark:bg-[#0f0f0f] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center py-10 sm:py-14 px-12 lg:px-20"
    >
      <div
        onClick={handleBackButton}
        className="absolute top-0 left-8 cursor-pointer back-button font-semibold flex items-center gap-2 sm:gap-3 lg:gap-4"
      >
        <ArrowLeft size={24} className="scale-[0.75] sm:scale-100" />
        {locale === "id" ? "Kembali" : "Back"}
      </div>
      <div className="flex flex-col justify-start space-y-2 sm:space-y-4 lg:w-[55%] mt-5 lg:mt-0">
        <p className="text-[0.7rem] sm:text-base lg:text-2xl font-normal text-slate-600 dark:text-slate-400 flex items-center gap-2 sm:gap-3 lg:gap-4">
          <MapPin size={24} className="scale-[0.75] sm:scale-100" />
          {locale === "id" ? "Nias, Sumatera Utara" : "Nias, North Sumatra"}
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[2rem] sm:leading-[3.5rem]">
          {detailCulture.longTitle}
        </h1>
        <p className="text-[0.65rem] sm:text-sm lg:text-xl text-justify">
          {detailCulture.text}
        </p>
      </div>
      <Image
        src={`/assets/Culture/list-culture/image-${detailCulture.id}.png`}
        width={400}
        height={150}
        alt="hero-image"
        className="w-[350px] sm:w-[400px] h-[250px] sm:h-[280px] lg:h-[400px] rounded-[30px]"
      />
    </div>
  );
}
