"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const { locale } = useLocale();
  const { theme } = useTheme();
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    let src: string | any;
    if (theme === "dark") {
      src = "/assets/homepage/video/homepage-dark.mp4";
    } else if (theme === "light") {
      src = "/assets/homepage/video/homepage.mp4";
    } else if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      src =
        systemTheme === "dark"
          ? "/assets/homepage/video/homepage-dark.mp4"
          : "/assets/homepage/video/homepage.mp4";
    }
    setVideoSrc(src);
  }, [theme]);

  return (
    <div>
      <div>Gallery</div>
    </div>
  );
};

export default Gallery;
