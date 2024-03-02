"use client";
import React from "react";
import AsteticStick from "./AsteticStick";
import ButtonPrimary from "./ButtonPrimary";
import { useLocale } from "@/contexts/LocaleContext";
import { LayoutGrid } from "../ui/layout-grid";
import CardSkeleton from "./CardSkeleton";

function OverviewGallery() {
  const { locale } = useLocale();
  return (
    <div className="w-full bg-mainLight dark:bg-darkBg px-10 py-20 flex flex-col items-center justify-center relative">
      <AsteticStick />
      <h2
        className="text-xl sm:text-4xl my-5 text-center"
        dangerouslySetInnerHTML={{
          __html:
            locale === "id"
              ? "Jelajahi Keindahan Nias <br /> Lewat Galeri"
              : "Explore the Beauty of Nias <br /> Through Galleries",
        }}
      ></h2>
      <ButtonPrimary to="/gallery">
        {locale === "id" ? "Lebih Lengkap" : "View More"}
      </ButtonPrimary>

      <div className="mt-10 w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}

export default OverviewGallery;

const Skeleton1 = () => {
  return (
    <CardSkeleton
      title="Ini Contoh Judul 1"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem commodi quaerat suscipit expedita consequatur ullam esse delectus laboriosam veritatis culpa"
    />
  );
};

const Skeleton2 = () => {
  return (
    <CardSkeleton
      title="Ini Contoh Judul 2"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem commodi quaerat suscipit expedita consequatur ullam esse delectus laboriosam veritatis culpa"
    />
  );
};

const Skeleton3 = () => {
  return (
    <CardSkeleton
      title="Ini Contoh Judul 3"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem commodi quaerat suscipit expedita consequatur ullam esse delectus laboriosam veritatis culpa"
    />
  );
};

const cards = [
  {
    id: 1,
    content: <Skeleton1 />,
    className:
      "w-[10rem] h-[14rem] sm:w-[20rem] sm:h-[28rem] rounded-[5rem] object-cover  cursor-pointer",
    thumbnail: "/assets/homepage/foto/0.jpg",
  },
  {
    id: 2,
    content: <Skeleton2 />,
    className:
      "w-[10rem] h-[14rem] sm:w-[20rem] sm:h-[28rem] rounded-[5rem] object-cover  cursor-pointer",
    thumbnail: "/assets/homepage/foto/1.png",
  },
  {
    id: 3,
    content: <Skeleton3 />,
    className:
      "w-[10rem] h-[14rem] sm:w-[20rem] sm:h-[28rem] rounded-[5rem] object-cover  cursor-pointer",
    thumbnail: "/assets/homepage/foto/2.png",
  },
];
