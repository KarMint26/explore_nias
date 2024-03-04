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
    <div className="w-full bg-mainLight dark:bg-[#302f2d] px-10 py-20 flex flex-col items-center justify-center relative">
      <AsteticStick />
      <h2
        className="text-xl sm:text-4xl text-main my-5 text-center"
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
  const { locale } = useLocale();
  return (
    <CardSkeleton
      title={locale === "id" ? "Museum Pusaka Nias" : "Nias Heritage Museum"}
      description={
        locale === "id"
          ? "Museum Pusaka Nias menyimpan berbagai macam koleksi benda bersejarah dan budaya Nias. Museum ini terletak di Kota Gunungsitoli, ibukota Kabupaten Nias."
          : "The Nias Heritage Museum holds various collections of Nias historical and cultural objects. This museum is located in Gunungsitoli City, the capital of Nias Regency."
      }
    />
  );
};

const Skeleton2 = () => {
  const { locale } = useLocale();
  return (
    <CardSkeleton
      title={locale === "id" ? "Desa Bawomataluo" : "Bawomataluo Village"}
      description={
        locale === "id"
          ? "Desa Bawomataluo adalah desa adat Nias yang masih menjaga tradisi dan budayanya. Di sini, Anda dapat melihat rumah adat Nias yang unik, megalitikum, dan berbagai atraksi budaya lainnya."
          : "Bawomataluo Village is a traditional Nias village that still maintains its traditions and culture. Here, you can see unique Nias traditional houses, megaliths and various other cultural attractions."
      }
    />
  );
};

const Skeleton3 = () => {
  const { locale } = useLocale();

  return (
    <CardSkeleton
      title={
        locale === "id" ? "Desa Wisata Orahili" : "Orahili Tourism Village"
      }
      description={
        locale === "id"
          ? "Desa Wisata Orahili Fau menawarkan pengalaman budaya yang unik. Pengunjung dapat belajar tentang tenun ikat Nias, mencicipi makanan khas Nias, dan bahkan mencoba mengenakan pakaian adat Nias."
          : "Orahili Fau Tourism Village offers a unique cultural experience. Visitors can learn about Nias ikat weaving, taste typical Nias food, and even try wearing traditional Nias clothing."
      }
    />
  );
};

const cards = [
  {
    id: 1,
    content: <Skeleton1 />,
    className:
      "w-[10rem] h-[14rem] lg:w-[20rem] lg:h-[28rem] rounded-[5rem] object-cover  cursor-pointer",
    thumbnail: "/assets/Gallery/galeri/galeri-1.jpeg",
  },
  {
    id: 2,
    content: <Skeleton2 />,
    className:
      "w-[10rem] h-[14rem] lg:w-[20rem] lg:h-[28rem] rounded-[5rem] object-cover  cursor-pointer",
    thumbnail: "/assets/Gallery/galeri/galeri-2.jpeg",
  },
  {
    id: 3,
    content: <Skeleton3 />,
    className:
      "w-[10rem] h-[14rem] lg:w-[20rem] lg:h-[28rem] rounded-[5rem] object-cover  cursor-pointer",
    thumbnail: "/assets/Gallery/galeri/galeri-3.jpeg",
  },
];
