"use client";

import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";
import React from "react";

const dataWisata = [
  {
    name: "Bawomataluo Village",
    image: "/assets/foto/bawomataluo.jpg",
  },
  {
    name: "Museum Pusaka Nias",
    image: "/assets/foto/baloho1.jpg",
  },
  {
    name: "Pantai Indah Tureloto",
    image: "/assets/foto/pantai.jpg",
  },
  {
    name: "Pantai Nias",
    image: "/assets/foto/2.png",
  },
];
function CardWisata({ name, image }: { name: string; image: string }) {
  return (
    <div className="w-[22rem] mt-5 rounded-t-full overflow-hidden h-[30rem] bg-red-300 relative">
      <Image src={image} fill className="object-cover" alt="wisata" />
      <button className="text-white text-xl absolute left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl bottom-0 px-5 py-3 rounded-xl w-80 border-white bg-white/40 backdrop-blur-sm">
        {name}
      </button>
    </div>
  );
}
function OverviewWisata() {
  const { locale } = useLocale();

  return (
    <div className="w-full bg-white p-10">
      <div className="flex w-full justify-between items-center">
        <p className="text-xl text-main w-[28rem] text-center">
          {locale === "id"
            ? "Jelajahi keajaiban Pulau Nias, tempat di mana keindahan alam tropis bertemu dengan kekayaan budaya yang khas."
            : "Explore the wonders of Nias Island, a place where tropical natural beauty meets a rich and distinctive culture."}
        </p>
        <div className="text-right">
          <div className="flex flex-row-reverse mb-3">
            <div className="w-28 h-3 bg-main"></div>
          </div>
          <h3 className="text-3xl text-main">Kategori Wisata</h3>
          <button className="px-5 py-3 bg-main text-white rounded-xl mt-3">
            Lebih Lengkap
          </button>
        </div>
      </div>

      <div className="w-full flex justify-between mt-5 px-10">
        {dataWisata.map((item) => (
          <CardWisata key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default OverviewWisata;
