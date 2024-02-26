"use client";

import Image from "next/image";
import React, { useState } from "react";
import ListItem from "./ListItem";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHome, FaTheaterMasks } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { ChevronUp, Menu, Moon, Sun, XCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/contexts/LocaleContext";
import Link from "next/link";

type NavbarProps = {
  activeLink: string | any;
  activeNav: boolean;
  setActiveNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({
  activeLink,
  activeNav,
  setActiveNav,
}: NavbarProps) {
  const { setTheme } = useTheme();
  const { locale, toggleLocale } = useLocale();
  const [dropdownArrow, setDropdownArrow] = useState<boolean>(false);

  return (
    <React.Fragment>
      {/* Mobile and Tablet Version */}
      <div
        onClick={() => setActiveNav(false)}
        className={`bg-background/20 backdrop-blur-sm lg:hidden w-[30%] sm:w-[40%] h-screen fixed right-0 top-0 z-[1000] ${
          activeNav
            ? "opacity-100 -translate-x-0"
            : "opacity-0 -translate-x-[800px]"
        }`}
      ></div>
      <div
        className={`popup-menu flex lg:hidden flex-col justify-center items-center fixed left-0 top-0 h-screen w-[70%] sm:w-[60%] sm:text-xl bg-background z-[1000] space-y-8 transition-all duration-300 ${
          activeNav
            ? "opacity-100 -translate-x-0"
            : "opacity-0 -translate-x-[600px]"
        }`}
      >
        <Button
          variant="outline"
          size="icon"
          className={`flex lg:hidden fixed top-6 right-[30px] ${
            activeNav
              ? "opacity-100 -translate-x-0"
              : "opacity-0 -translate-x-[600px]"
          }`}
          onClick={() => setActiveNav(false)}
        >
          <XCircle color="#9C9680" />
        </Button>
        <Link
          href="/"
          onClick={() => setActiveNav(false)}
          className="list-menu text-main flex justify-center items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <FaHome className="text-lg" />
          <div>{locale === "id" ? "Beranda" : "Homepage"}</div>
        </Link>
        <Link
          href="/tour"
          onClick={() => setActiveNav(false)}
          className="list-menu text-main flex justify-center items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <FaMapLocationDot className="text-lg" />
          <div>{locale === "id" ? "Wisata" : "Tour"}</div>
        </Link>
        <Link
          href="/culture"
          onClick={() => setActiveNav(false)}
          className="list-menu text-main flex justify-center items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <FaTheaterMasks className="text-lg" />
          <div>{locale === "id" ? "Budaya" : "Culture"}</div>
        </Link>
        <Link
          href="/article"
          onClick={() => setActiveNav(false)}
          className="list-menu text-main flex justify-center items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <MdArticle className="text-lg" />
          <div>{locale === "id" ? "Artikel" : "Article"}</div>
        </Link>
        <Link
          href="/culinary"
          onClick={() => setActiveNav(false)}
          className="list-menu text-main flex justify-center items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <PiBowlFoodFill className="text-lg" />
          <div>{locale === "id" ? "Kuliner" : "Culinary"}</div>
        </Link>
      </div>

      <div className="fixed top-0 w-full h-fit px-4 py-3 bg-background z-[999] flex justify-between items-center">
        <div className="nav-brand flex justify-center items-center">
          <Button
            variant="outline"
            size="icon"
            className="relative flex translate-x-2 lg:hidden lg:translate-x-0 z-10"
            onClick={() => setActiveNav((prev) => !prev)}
          >
            <Menu />
          </Button>
          <Link href="/">
            <Image
              src={"/assets/logo.png"}
              width={200}
              height={200}
              alt="explore nias icon"
              className="scale-[0.65] sm:scale-75 lg:scale-100 -translate-x-4 sm:translate-x-0"
            />
          </Link>
        </div>
        {/* Desktop Version */}
        <div className="nav-list-menu lg:flex justify-center items-center space-x-4 hidden">
          <ListItem
            activeLink={activeLink}
            text={locale === "id" ? "Beranda" : "Homepage"}
            href="/"
            icon={<FaHome className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={locale === "id" ? "Wisata" : "Tour"}
            href="/tour"
            icon={<FaMapLocationDot className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={locale === "id" ? "Budaya" : "Culture"}
            href="/culture"
            icon={<FaTheaterMasks className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={locale === "id" ? "Artikel" : "Article"}
            href="/article"
            icon={<MdArticle className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={locale === "id" ? "Kuliner" : "Culinary"}
            href="/culinary"
            icon={<PiBowlFoodFill className="text-xl" />}
          />
        </div>

        <div className="side-menu flex justify-center items-center space-x-3 lg:space-x-5">
          {/* Toggle Switch Language */}
          <DropdownMenu onOpenChange={setDropdownArrow} open={dropdownArrow}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                onClick={() => setDropdownArrow((prev) => !prev)}
                size="default"
                className="px-2 sm:px-3"
              >
                {locale === "id" ? (
                  <div className="text-xs sm:text-sm flex justify-center items-center h-[1.2rem] w-[1.4rem]">
                    <div>ID</div>
                  </div>
                ) : (
                  <div className="text-xs sm:text-sm flex justify-center items-center h-[1.2rem] w-[1.4rem]">
                    <div>EN</div>
                  </div>
                )}
                <ChevronUp
                  size={20}
                  className={`${
                    dropdownArrow ? "rotate-0" : "rotate-180"
                  } transition duration-200`}
                />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-[1000]">
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={() => toggleLocale("id")}
              >
                <Image
                  src={"/assets/indonesia.png"}
                  width={30}
                  height={20}
                  alt="indonesia-flag"
                />
                <div>Indonesia</div>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={() => toggleLocale("en")}
              >
                <Image
                  src={"/assets/uk.png"}
                  width={30}
                  height={20}
                  alt="uk-flag"
                />
                <div>English</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Toggle Dark Mode */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-[1000]">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                {locale === "id" ? "Terang" : "Light"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                {locale === "id" ? "Gelap" : "Dark"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                {locale === "id" ? "Sistem" : "System"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </React.Fragment>
  );
}
