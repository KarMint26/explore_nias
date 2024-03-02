"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleItem from "./ArticleItem";
import getArticle from "@/utils/article";

const Article = () => {
  const { locale } = useLocale();
  const listArticle = getArticle();

  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="bg-submain dark:bg-mainDark w-full h-fit px-8 sm:px-10 lg:px-14 pt-[135px] sm:pt-[150px] lg:pt-[180px] pb-12 sm:pb-16 flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col justify-start space-y-4 lg:w-[52%] mt-5 lg:mt-0">
            <div className="flex items-center gap-1 sm:gap-2">
              <Image
                src="/assets/Article/shape.svg"
                width={20}
                height={20}
                alt="shape-icon"
                className="scale-[0.80] sm:scale-100"
              />
              <div className="flex flex-col text-main font-bold justify-center">
                <div className="datetime text-[0.75rem] sm:text-sm lg:text-base">
                  {listArticle[0].datetime}
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[2rem] sm:leading-[3.5rem] tracking-wide">
              {listArticle[0].title}
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-justify">
              {listArticle[0].text.substring(0,300) + "..."}
            </p>
            <Link href="/article/1" className="w-fit h-fit">
              <Button
                size="lg"
                className="bg-main rounded-full text-sm sm:text-base font-semibold w-fit hover:bg-submainDark dark:hover:bg-[#c0b99d]"
              >
                {locale === "id" ? "Baca Selengkapnya" : "Read More"}
              </Button>
            </Link>
          </div>
          <Image
            src="/assets/Article/image-1.jpg"
            width={500}
            height={500}
            alt="hero-image"
            className="rounded-lg"
          />
        </div>

        {/* List Rendering Element */}
        {listArticle.slice(1, 4).map((data, i) => (
          <ArticleItem
            key={i}
            title={data.title}
            text={data.text}
            datetime={data.datetime}
            imageNumber={String(data.id)}
            id={data.id}
            isDiff={data.isDiff}
            isReverse={data.isReverse}
            locale={locale}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Article;
