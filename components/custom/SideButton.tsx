"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillSound, AiOutlineSound } from "react-icons/ai";
import { LuArrowUpToLine } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useLocale } from "@/contexts/LocaleContext";

export default function SideButton() {
  const { locale } = useLocale();
  const [isAudioPlay, setIsAudioPlay] = useState<boolean>(false);
  const [audioMusic, setAudioMusic] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/assets/music/bg-music.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    setAudioMusic(audio);

    return () => {
      if (audioMusic) {
        audioMusic.pause();
      }
    };
  }, []);

  const handlePlayAudio = () => {
    if (audioMusic) {
      audioMusic.play();
      setIsAudioPlay(true);
    }
  };

  const handlePauseAudio = () => {
    if (audioMusic) {
      audioMusic.pause();
      setIsAudioPlay(false);
    }
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-5 right-5 flex flex-col items-center justify-center gap-5 z-10">
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              onClick={() => {
                setIsAudioPlay((prev) => !prev);
                !isAudioPlay ? handlePlayAudio() : handlePauseAudio();
              }}
              className="text-base sm:text-lg lg:text-xl bg-submainDark dark:bg-submain dark:text-mainDark text-white hover:bg-mainDark dark:hover:bg-white transition duration-300 rounded-xl p-3 sm:p-4 cursor-pointer"
            >
              {isAudioPlay ? <AiFillSound /> : <AiOutlineSound />}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{locale === "id" ? "Lagu Daerah Nias" : "Nias Regional Song"}</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="text-base sm:text-lg lg:text-xl bg-submainDark dark:bg-submain dark:text-mainDark text-white hover:bg-mainDark dark:hover:bg-white transition duration-300 rounded-xl p-3 sm:p-4 cursor-pointer"
            >
              <LuArrowUpToLine />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            {locale === "id" ? "Kembali ke atas" : "Back to top"}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
