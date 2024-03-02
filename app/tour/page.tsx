import HeroTour from "@/components/custom/HeroTour";
import MainTour from "@/components/custom/MainTour";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tour",
  description:
    "Mengenal Lebih Dekat Nias dan Kekayaan Budayanya Serta Keindahan Alamnya.",
};

const Tour = () => {
  return (
    <>
      <HeroTour />
      <MainTour />
    </>
  );
};

export default Tour;
