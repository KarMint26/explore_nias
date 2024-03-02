import { Metadata } from "next";
import React from "react";
import Gallery from "./Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Mengenal Lebih Dekat Nias dan Kekayaan Budayanya Serta Keindahan Alamnya.",
};

const GaleryPage = () => {
  return <Gallery />;
};

export default GaleryPage;
