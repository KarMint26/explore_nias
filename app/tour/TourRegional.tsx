"use client";
import { useLocale } from "@/contexts/LocaleContext";
import React from "react";
import AsteticStick from "../../components/custom/AsteticStick";
import CardWisata from "../../components/custom/CardWisata";
import { Drawer, DrawerContent } from "../../components/ui/drawer";
import DetailTour from "@/app/tour/DetailTour";

function TourRegional() {
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
    <React.Fragment>
      {/* head section */}
      <div className="flex w-full p-5 sm:p-10 justify-between items-center flex-col-reverse sm:flex-row lg:flex-row">
        <p className="text-sm sm:text-xl text-main sm:w-[28rem] mt-5 text-center">
          {locale === "id"
            ? '"Jelajahi keajaiban Pulau Nias, tempat di mana keindahan alam tropis bertemu dengan kekayaan budaya yang khas."'
            : '"Explore the wonders of Nias Island, a place where tropical natural beauty meets a rich and distinctive culture."'}
        </p>
        <div className="text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start flex-row-reverse sm:flex-row-reverse mb-5">
            <AsteticStick />
          </div>

          <h3 className="text-xl sm:text-4xl text-main mb-5">
            {locale === "id" ? "Wisata Daerah" : "Regional Tourism"}
          </h3>
        </div>
      </div>

      {/* main section */}
      <div className="w-full flex flex-wrap justify-center items-center gap-5">
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

      {/* Detail section */}
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
    </React.Fragment>
  );
}

export default TourRegional;

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
  {
    id: 5,
    nameId: "Pantai Sorake",
    nameEn: "Sorake Beach",
    image: "/assets/tour/sorake.jpg",
    descId:
      "Salah satu pantai terindah di Nias dengan pasir putih dan ombak yang menarik bagi para peselancar. Pantai ini juga populer di kalangan peselancar internasional.",
    descEn:
      "One of the most beautiful beaches on Nias with white sand and waves that appeal to surfers. This beach is also popular with international surfers.",
    maps: "https://maps.app.goo.gl/kWDNCCSSf8LNfqze8",
  },
  {
    id: 6,
    nameId: "Pulau Wunga",
    nameEn: "Wunga Island",
    image: "/assets/tour/wunga.jpg",
    descId:
      "Pulau yang indah dengan pantai pasir putih yang terhampar luas. Pulau ini sering dijadikan tempat untuk bersantai, berjemur, dan berenang. Pengunjung juga dapat menikmati kegiatan menyelam di sekitar pulau ini yang kaya akan kehidupan bawah laut.",
    descEn:
      "A beautiful island with a wide white sand beach. The island is often used as a place to relax, sunbathe and swim. Visitors can also enjoy diving around the island, which is rich in marine life.",
    maps: "https://maps.app.goo.gl/21oDD316RWQTKAPx7",
  },
  {
    id: 7,
    nameId: "Pulau Serambau",
    nameEn: "Serambau Island",
    image: "/assets/tour/serambau.jpg",
    descId:
      "Pulau kecil yang dikelilingi oleh air laut yang jernih dan pemandangan alam yang menakjubkan. Pulau Serambau sering menjadi tempat untuk snorkeling karena terumbu karangnya yang indah dan beragam",
    descEn:
      "A small island surrounded by clear sea water and stunning natural scenery. Serambau Island is often a place for snorkeling because of its beautiful and diverse coral reefs.",
    maps: "https://maps.app.goo.gl/pkKxysrx1RzeT5bE6",
  },
  {
    id: 8,
    nameId: "Pulau Walo",
    nameEn: "Walo Island",
    image: "/assets/tour/walo.jpg",
    descId:
      "Pulau yang terkenal dengan panorama alamnya yang memukau. Di sini, pengunjung dapat menikmati kegiatan seperti berjalan-jalan di sepanjang pantai, menyelam, atau sekadar bersantai menikmati keindahan alam",
    descEn:
      "The island is famous for its stunning natural panorama. Here, visitors can enjoy activities such as strolling along the beach, diving, or simply relaxing to enjoy the beauty of nature.",
    maps: "https://maps.app.goo.gl/n4AVowrcbceCscM99",
  },
];
