"use client";
import Image from "next/image";
import React from "react";
import AsteticStick from "./AsteticStick";
import ButtonPrimary from "./ButtonPrimary";
import { useLocale } from "@/contexts/LocaleContext";

function OverviewArticle() {
  const { locale } = useLocale();
  return (
    <div className="w-full p-10 px-20 bg-white dark:bg-submainDark mt-5 flex">
      <Image
        src="/assets/homepage/foto/reads.png"
        width={500}
        height={500}
        className="w-[40rem] object-cover"
        alt="hero-1"
      />
      <div className="w-full">
        <div className="flex flex-col">
          <div className="w-full flex flex-row-reverse">
            <AsteticStick />
          </div>
          <h3
            className="text-4xl my-5 text-right"
            dangerouslySetInnerHTML={{
              __html:
                locale === "id"
                  ? "Tambah Wawasanmu Tentang <br /> Nias Lewat Artikel"
                  : "Increase your knowledge <br /> about Nias through articles",
            }}
          ></h3>

          <div className="w-full flex flex-row-reverse">
            <ButtonPrimary>
              {locale === "id" ? "Lebih Lengkap" : "View More"}
            </ButtonPrimary>
          </div>
        </div>

        <div className="rounded-3xl bg-mainLight p-10 mt-10 flex">
          <div className="w-1/2">
            <h4 className="text-3xl my-5 font-semibold dark:text-slate-700">
              {locale === "id"
                ? "Akankah Nias Barat Gelar Event Surfing?"
                : "Will West Nias Hold a Surfing Event?"}
            </h4>
            <p className="mb-5 dark:text-gray-500">
              Bhaktapur is a royal city that was once the capital of Nepal. This
              city stores many inscriptions or historical relics of the ancient
              kingdom, to the use of Nepalese culture and religion which is
              still very much felt and used by residents there. Various cultural
              and religious festivals are held...
            </p>
            <ButtonPrimary>
              {locale === "id" ? "Baca Selengkapnya" : "Read More"}
            </ButtonPrimary>
          </div>
          <div className="w-1/2 p-10">
            <Image
              src="/assets/homepage/foto/news.png"
              width={500}
              height={500}
              className="w-[30rem] object-cover"
              alt="hero-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewArticle;
