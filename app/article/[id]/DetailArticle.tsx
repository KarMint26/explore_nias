"use client";

import { useLocale } from "@/contexts/LocaleContext";
import getArticle from "@/utils/article";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function DetailArticle({ params }: { params: any }) {
  const { locale } = useLocale();
  const articleDetail = getArticle();
  const detail = articleDetail[params.id-1];

  return (
    <div className="w-full max-w-[85rem] m-auto p-5 px-8 sm:px-10 lg:px-0 box-border relative my-5 sm:my-8 lg:my-20 flex flex-col justify-center items-start gap-6 pt-24 sm:pt-20 lg:pt-16">
      <Link
        href="/article"
        className="button-back sm:text-base text-sm absolute font-medium left-8 lg:left-0 top-24 sm:top-20 lg:top-16 flex justify-center items-center gap-2"
      >
        <AiOutlineArrowLeft className="sm:text-2xl" />
        {locale === "id" ? "Kembali" : "Back"}
      </Link>
      {detail ? (
        <>
          <div className="img-box flex flex-col justify-center self-center items-center gap-2 mt-8 sm:mt-12">
            <Image
              src={`/assets/Article/image-${detail.id}.jpg`}
              alt="hero-detail-artikel"
              width={800}
              height={800}
              className="rounded-xl shadow-md"
            />
            <a
              href={detail.url}
              className="self-start text-[0.5rem] sm:text-sm"
              target="_blank"
            >
              {locale === "id" ? "sumber" : "source"}: {detail.url}
            </a>
          </div>
          <div className="title-article">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              {detail.title}
            </h1>
            <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 text-main mt-2 text-xs sm:text-base">
              <Calendar size={20} color="#9C9680" className="scale-90 sm:scale-100" />
              {detail.datetime}
            </div>
            <p className="text-xs sm:text-base text-justify">{detail.text}</p>
          </div>
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
