import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ArticleItem({
  id,
  datetime,
  title,
  text,
  imageNumber,
  isReverse,
  isDiff,
  locale,
}: {
  id: number;
  datetime: string;
  title: string;
  text: string;
  imageNumber: string;
  isReverse?: boolean;
  isDiff?: boolean;
  locale: string;
}) {
  return (
    <div
      className={`${
        isDiff ? "bg-white dark:bg-darkBg" : "bg-submain dark:bg-mainDark"
      } w-full h-fit px-8 sm:px-10 lg:px-14 py-12 sm:py-16 flex justify-between items-center flex-col-reverse ${
        isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex flex-col justify-start space-y-4 lg:w-[52%] mt-5 lg:mt-0">
        <div className="flex items-center gap-1 sm:gap-2">
          <Image
            src="/assets/Article/shape.svg"
            width={20}
            height={20}
            alt="shape-icon"
            className="scale-[0.80] sm:scale-100"
          />
          <div className="flex flex-col justify-center text-main font-bold">
            <div className="datetime text-[0.75rem] sm:text-sm lg:text-base">
              {datetime}
            </div>
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[2rem] sm:leading-[3.5rem] tracking-wide">
          {title}
        </h1>
        <p className="text-sm sm:text-base lg:text-xl text-justify">
          {text.substring(0, 300) + "..."}
        </p>
        <Link href={`/article/${id}`} className="w-fit h-fit">
          <Button
            size="lg"
            className="bg-main rounded-full text-sm sm:text-base font-semibold w-fit hover:bg-submainDark dark:hover:bg-[#c0b99d]"
          >
            {locale === "id" ? "Baca Selengkapnya" : "Read More"}
          </Button>
        </Link>
      </div>
      <Image
        src={`/assets/Article/image-${imageNumber}.jpg`}
        width={500}
        height={500}
        alt="hero-image"
        className="rounded-lg"
      />
    </div>
  );
}
