"use client";

import Image from "next/image";
import React from "react";
import AsteticStick from "./AsteticStick";
import ButtonPrimary from "./ButtonPrimary";
import { useLocale } from "@/contexts/LocaleContext";
import getArticle from "@/utils/article";

function OverviewArticle() {
  const { locale } = useLocale();
  const article = getArticle();

  return (
    <div className="w-full p-5 lg:p-10 lg:px-20 bg-white dark:bg-submainDark mt-5 flex flex-col lg:flex-row">
      <div className="w-full flex items-cente justify-center">
        <Image
          src="/assets/homepage/foto/reads.png"
          width={500}
          height={500}
          className="lg:w-[38rem] scale-75 object-cover"
          alt="hero-1"
        />
      </div>
      <div className="w-full mt-7 lg:mt-0">
        <div className="flex flex-col">
          <div className="w-full flex lg:flex-row-reverse">
            <AsteticStick />
          </div>
          <h3
            className="text-xl sm:text-4xl my-5 text-left text-main lg:text-right"
            dangerouslySetInnerHTML={{
              __html:
                locale === "id"
                  ? "Tambah Wawasanmu Tentang <br /> Nias Lewat Artikel"
                  : "Increase your knowledge <br /> about Nias through articles",
            }}
          ></h3>

          <div className="w-full flex lg:flex-row-reverse">
            <ButtonPrimary to="/article">
              {locale === "id" ? "Lebih Lengkap" : "View More"}
            </ButtonPrimary>
          </div>
        </div>

        <div className="rounded-3xl bg-mainLight p-5 lg:p-10 mt-10 flex flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2">
            <h4 className="text-2xl lg:text-2xl my-3 lg:my-5 dark:text-slate-700">
              {article[0].title}
            </h4>
            <p className="mb-3 lg:mb-5 text-justify dark:text-gray-500 text-sm">
              {article[0].text.substring(0, 250) + "..."}
            </p>
            <ButtonPrimary to="/article/1">
              {locale === "id" ? "Baca Selengkapnya" : "Read More"}
            </ButtonPrimary>
          </div>
          <div className="lg:w-1/2 lg:p-10">
            <Image
              src="/assets/Article/image-1.jpg"
              width={500}
              height={500}
              className="w-full sm:h-[20rem] lg:h-auto lg:w-[35rem] object-cover rounded-md"
              alt="hero-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewArticle;
