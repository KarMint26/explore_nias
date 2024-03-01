"use client";

import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaMapLocationDot, FaRegCopyright } from "react-icons/fa6";
import { FaTheaterMasks } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { BiSolidPhotoAlbum } from "react-icons/bi";

export default function Footer() {
  const { locale } = useLocale();

  return (
    <div className="w-full h-fit bg-[#334060] dark:bg-black pt-4 pb-0 lg:py-6 flex justify-center lg:justify-normal items-center flex-col">
      <div className="flex justify-between items-center w-full px-3 sm:px-5 lg:px-7">
        <Link href="/" className="w-fit h-fit">
          <Image
            src="/assets/short-logo.png"
            width={150}
            height={150}
            alt="logo-explorenias"
            className="w-[100px] h-[90px] sm:w-[125px] sm:h-[125px] lg:w-[140px] lg:h-[140px]"
          />
        </Link>
        <div className="content-footer flex flex-col w-full gap-2 sm:gap-3 lg:gap-4 text-white">
          <div className="top-menu border-b border-white py-2 pb-3 sm:pb-4 flex justify-between items-center mb-2">
            <div className="nav-menu flex justify-center items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-base lg:text-lg">
              <Link className="flex items-center gap-2 sm:gap-3" href="/tour">
                <FaMapLocationDot />
                {locale === "id" ? "Wisata" : "Tour"}
              </Link>
              <Link
                className="flex items-center gap-2 sm:gap-3"
                href="/culture"
              >
                <FaTheaterMasks />
                {locale === "id" ? "Budaya" : "Culture"}
              </Link>
              <Link
                className="flex items-center gap-2 sm:gap-3"
                href="/article"
              >
                <MdArticle />
                {locale === "id" ? "Artikel" : "Article"}
              </Link>
              <Link
                className="flex items-center gap-2 sm:gap-3"
                href="/gallery"
              >
                <BiSolidPhotoAlbum />
                {locale === "id" ? "Galeri" : "Gallery"}
              </Link>
            </div>
            <div className="social-media hidden lg:flex justify-center items-center gap-4 lg:gap-5 text-lg sm:text-xl lg:text-2xl">
              <FiFacebook className="cursor-pointer" />
              <BsTwitterX className="cursor-pointer" />
              <TbBrandTelegram className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
          </div>
          <div className="copyright-wide hidden lg:flex items-center gap-1 sm:gap-2 text-xs sm:text-base lg:text-lg">
            <FaRegCopyright className="font-bold" />
            <div>
              2024 by <span className="font-bold">Tech Titans</span> - WDC 2024
            </div>
          </div>
          <div className="social-media flex lg:hidden items-center gap-2 sm:gap-4 text-base sm:text-2xl">
            <FiFacebook className="cursor-pointer" />
            <BsTwitterX className="cursor-pointer" />
            <TbBrandTelegram className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="copyright lg:hidden py-2 sm:py-3 bg-[#1b243a] dark:bg-[#221b09] flex items-center gap-1 sm:gap-2 text-[0.7rem] sm:text-base lg:text-lg text-white mt-5 w-full justify-center">
        <FaRegCopyright className="font-bold" />
        <div>
          2024 by <span className="font-bold">Tech Titans</span> - WDC 2024
        </div>
      </div>
    </div>
  );
}
