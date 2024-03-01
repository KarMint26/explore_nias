import { Metadata } from "next";
import React from "react";
import Article from "./Article";

export const metadata: Metadata = {
  title: "Article",
  description:
    "Mengenal Lebih Dekat Nias dan Kekayaan Budayanya Serta Keindahan Alamnya.",
};

const ArticlePage = () => {
  return <Article />;
};

export default ArticlePage;
