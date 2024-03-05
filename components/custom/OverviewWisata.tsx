"use client";

import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";
import React from "react";
import AsteticStick from "./AsteticStick";
import ButtonPrimary from "./ButtonPrimary";
import CardWisata from "./CardWisata";
import { DrawerContent, Drawer } from "../ui/drawer";
import DetailTour from "@/app/tour/DetailTour";

const dataWisata = [
  {
    id: 1,
    nameId: "Desa Bawomataluo",
    nameEn: "Bawomataluo Village",
    image: "/assets/homepage/foto/bawomataluo.jpg",
    descId:
      "Desa tradisional yang terletak di Pulau Nias, Indonesia. Desa ini mempertahankan banyak tradisi dan adat istiadat nenek moyang mereka, termasuk rumah adat yang unik dan ritual lompat batu (fahombo).",
    descEn:
      "A traditional village located on Nias Island, Indonesia. The village retains many of the traditions and customs of their ancestors, including unique traditional houses and the stone jumping ritual (fahombo).",
    maps: "https://maps.app.goo.gl/fpGDupwnETcdBsz37",
  },
  {
    id: 2,
    nameId: "Museum Pusaka Nias",
    nameEn: "Nias Heritage Museum",
    image: "/assets/tour/musium.jpg",
    descId:
      "Tempat yang memamerkan warisan budaya dan sejarah pulau Nias, termasuk senjata tradisional, pakaian adat, perhiasan, dan berbagai artefak lain yang menceritakan kaya akan budaya lokal",
    descEn:
      "A place that showcases the cultural and historical heritage of Nias Island, including traditional weapons, traditional clothing, jewelry, and various other artifacts that tell the story of the rich local culture.",
    maps: "https://maps.app.goo.gl/sSLPJp3EYJwjbyMr5",
  },
  {
    id: 3,
    nameId: "Pantai Indah Tureloto",
    nameEn: "Tureloto Indah Beach",
    image: "/assets/tour/tureloto.jpg",
    descId:
      "Pantai yang tenang dengan air yang jernih dan pemandangan yang indah. Cocok untuk berenang, berjemur, atau hanya bersantai menikmati keindahan alam.",
    descEn:
      "A quiet beach with clear water and beautiful scenery. Perfect for swimming, sunbathing, or just relaxing and enjoying the beauty of nature.",
    maps: "https://maps.app.goo.gl/LuPCjLowY7377C7X7",
  },
  {
    id: 4,
    nameId: "Pantai Baloho",
    nameEn: "Baloho Beach",
    image: "/assets/tour/baloho.jpg",
    descId:
      "Pantai lain di Pulau Nias yang menawarkan pesona alam yang menakjubkan dengan pasir putih dan air laut yang jernih. Tempat yang sempurna untuk bersantai dan menikmati matahari terbenam.",
    descEn:
      "Another beach on Nias Island that offers stunning natural charm with white sand and clear sea water. A perfect place to relax and enjoy the sunset.",
    maps: "https://maps.app.goo.gl/v7wx2W4xn4fRy5St5",
  },
];

function OverviewWisata() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [detailData, setDetailData] = React.useState({
    id: 0,
    nameId: "",
    nameEn: "",
    image: "",
    descId: "",
    descEn: "",
    maps: "",
  });
  const { locale } = useLocale();

  return (
    <div
      className="w-full bg-white dark:bg-darkBg py-4 sm:py-6 lg:py-8 relative"
      id="tourism-section"
    >
      <div className="flex w-full p-10 pb-0 sm:pb-8 justify-between items-center flex-col-reverse sm:flex-row lg:flex-row">
        <p className="text-sm sm:text-xl text-main sm:w-[28rem] mt-5 text-center">
          {locale === "id"
            ? '"Jelajahi keajaiban Pulau Nias, tempat di mana keindahan alam tropis bertemu dengan kekayaan budaya yang khas."'
            : '"Explore the wonders of Nias Island, a place where tropical natural beauty meets a rich and distinctive culture."'}
        </p>
        <div className="text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start flex-row-reverse sm:flex-row-reverse mb-5">
            <AsteticStick />
          </div>

          <h3 className="text-4xl text-main mb-5">
            {locale === "id" ? "Destinasi Wisata" : "Tourism Destination"}
          </h3>
          <ButtonPrimary to="/tour">
            {locale === "id" ? "Lebih Lengkap" : "More Details"}
          </ButtonPrimary>
        </div>
      </div>

      <div className="w-full flex justify-between gap-5 mt-5 px-10 overflow-x-auto">
        {dataWisata.map((item) => (
          <CardWisata
            key={item.id}
            nameId={item.nameId}
            nameEn={item.nameEn}
            image={item.image}
            onClick={() => {
              setDetailData(item);
              setOpenDrawer((prev) => !prev);
            }}
          />
        ))}
      </div>

      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerContent className="bg-submain dark:bg-[#0f0f0f] ring-0 outline-none border-main">
          {detailData && (
            <DetailTour
              detailTour={detailData}
              key={detailData.id}
              locale={locale}
              handleBackButton={() => {
                setOpenDrawer(false);
              }}
            />
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default OverviewWisata;
