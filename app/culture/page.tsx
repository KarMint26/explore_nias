import { Metadata } from "next";
import React from "react";
import Culture from "./Culture";

export const metadata: Metadata = {
  title: "Culture",
  description:
    "Mengenal Lebih Dekat Nias dan Kekayaan Budayanya Serta Keindahan Alamnya.",
};

const CulturePage = () => {
  return <Culture />;
};

export default CulturePage;
