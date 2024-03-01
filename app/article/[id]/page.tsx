import { Metadata } from "next";
import React from "react";
import DetailArticle from "./DetailArticle";

export const metadata: Metadata = {
  title: "Detail Article",
  description:
    "Mengenal Lebih Dekat Nias dan Kekayaan Budayanya Serta Keindahan Alamnya.",
};

const ArticleDetailPage = ({ params }: { params: any }) => {
  return <DetailArticle params={params} />;
};

export default ArticleDetailPage;
