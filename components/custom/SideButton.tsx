"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillSound, AiOutlineSound } from "react-icons/ai";
import { LuArrowUpToLine } from "react-icons/lu";

export default function SideButton() {
  const [isAudioPlay, setIsAudioPlay] = useState<boolean>(false);
  const [audioMusic, setAudioMusic] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/assets/music/bg-music.mp3");
    audio.loop = true; // Mengatur lagu untuk bermain ulang secara otomatis
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
    <div className="fixed bottom-5 right-5 flex flex-col items-center justify-center gap-5 z-[200]">
      <div
        onClick={() => {
          setIsAudioPlay((prev) => !prev);
          !isAudioPlay ? handlePlayAudio() : handlePauseAudio();
        }}
        className="text-base sm:text-lg lg:text-xl bg-submainDark dark:bg-submain dark:text-mainDark text-white hover:bg-mainDark dark:hover:bg-white transition duration-300 rounded-xl p-3 sm:p-4 cursor-pointer"
      >
        {isAudioPlay ? <AiFillSound /> : <AiOutlineSound />}
      </div>
      <Link
        href="#"
        className="text-base sm:text-lg lg:text-xl bg-submainDark dark:bg-submain dark:text-mainDark text-white hover:bg-mainDark dark:hover:bg-white transition duration-300 rounded-xl p-3 sm:p-4 cursor-pointer"
      >
        <LuArrowUpToLine />
      </Link>
    </div>
  );
}
