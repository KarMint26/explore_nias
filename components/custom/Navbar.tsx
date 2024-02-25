"use client";

import Image from "next/image";
import React from "react";
import ListItem from "./ListItem";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHome, FaTheaterMasks } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/contexts/LocaleContext";

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

  return (
    <React.Fragment>
      {/* Desktop Version */}
      <div className="fixed top-0 w-full h-fit px-4 py-3 bg-background z-[999] flex justify-between items-center">
        <div className="nav-brand">
          <Image
            src={"/assets/logo.png"}
            width={200}
            height={200}
            alt="explore nias icon"
          />
        </div>
        <div className="nav-list-menu flex justify-center items-center space-x-4">
          <ListItem
            activeLink={activeLink}
            text={locale === "id" ? "Beranda" : "Homepage"}
            href="/"
            icon={<FaHome className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={locale === "id" ? "Wisata" : "Tour"}
            href="/wisata"
            icon={<FaMapLocationDot className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={locale === "id" ? "Budaya" : "Culture"}
            href="/budaya"
            icon={<FaTheaterMasks className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={locale === "id" ? "Artikel" : "Article"}
            href="/artikel"
            icon={<MdArticle className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={locale === "id" ? "Kuliner" : "Culinary"}
            href="/kuliner"
            icon={<PiBowlFoodFill className="text-xl" />}
          />
        </div>
        <div className="side-menu flex justify-center items-center space-x-5">
          {/* Toggle Switch Language */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="default" className="px-6">
                {locale === "id" ? (
                  <div className="flex justify-center items-center gap-2 h-[1.2rem] w-[1.4rem]">
                    <Image
                      src={"/assets/indonesia.png"}
                      width={50}
                      height={40}
                      alt="indonesia-flag"
                    />
                    ID
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2 h-[1.2rem] w-[1.4rem]">
                    <Image
                      src={"/assets/uk.png"}
                      width={50}
                      height={40}
                      alt="uk-flag"
                    />
                    EN
                  </div>
                )}
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-[1000]">
              <DropdownMenuItem onClick={toggleLocale}>
                Indonesia
              </DropdownMenuItem>
              <DropdownMenuItem onClick={toggleLocale}>
                English
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
