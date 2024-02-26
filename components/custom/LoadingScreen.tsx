"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const LoadingScreen = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex justify-center items-center flex-col fixed z-[999] right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%] w-screen h-screen ${
        theme === "light" ? "bg-white" : "bg-darkBg"
      } gap-3`}
    >
      <Image
        src="/assets/short-logo.png"
        width={100}
        height={100}
        alt="icon-splash"
      />
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingScreen;
