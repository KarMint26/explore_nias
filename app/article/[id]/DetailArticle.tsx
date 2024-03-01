"use client";

import { useLocale } from "@/contexts/LocaleContext";
import getArticle from "@/utils/article";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function DetailArticle({ params }: { params: any }) {
  const { locale } = useLocale();
  const articleDetail = getArticle();
  const detail = articleDetail[params.id];

  return (
    <div className="container relative my-5 sm:my-8 lg:my-20 flex flex-col justify-center items-start gap-6">
      <Link
        href="/article"
        className="button-back sm:text-base text-sm absolute font-medium left-4 top-4 flex justify-center items-center gap-2"
      >
        <AiOutlineArrowLeft className="sm:text-2xl" />
        {locale === "id" ? "Kembali" : "Back"}
      </Link>
      {detail ? (
        <div>
          <div className="img-box flex flex-col justify-center self-center items-center gap-2 my-2 sm:my-4 mt-8 sm:mt-12">
            <Image
              src={`/assets/Article/image-${detail.id}.jpg`}
              alt="hero-detail-artikel"
              width={800}
              height={800}
              className="rounded-xl shadow-md"
            />
            <a
              href={detail.url}
              className="self-start text-[0.5rem] sm:text-xs"
              target="_blank"
            >
              {locale === "id" ? "sumber" : "source"}: {detail.url}
            </a>
          </div>
          <div className="title-article">
            <h1 className="text-xl sm:text-2xl mb-2 lg:text-3xl font-semibold">
              {detail.title}
            </h1>
            <p className="text-xs sm:text-base">{detail.text}</p>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
