"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LayoutGrid } from "@/components/ui/layout-grid-custom";
import { useLocale } from "@/contexts/LocaleContext";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SkeletonOne = () => {
  const { locale } = useLocale();

  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl lg:text-4xl text-white">
        {locale === "id" ? "Museum Pusaka Nias" : "Nias Heritage Museum"}
      </p>
      <p className="font-normal text-sm lg:text-base my-4 max-w-lg text-neutral-200">
        {locale === "id"
          ? "Museum Pusaka Nias menyimpan berbagai macam koleksi benda bersejarah dan budaya Nias. Museum ini terletak di Kota Gunungsitoli, ibukota Kabupaten Nias."
          : "The Nias Heritage Museum holds various collections of Nias historical and cultural objects. This museum is located in Gunungsitoli City, the capital of Nias Regency."}
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  const { locale } = useLocale();

  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl lg:text-4xl text-white">
        {locale === "id" ? "Desa Bawomataluo" : "Bawomataluo Village"}
      </p>
      <p className="font-normal text-sm lg:text-base my-4 max-w-lg text-neutral-200">
        {locale === "id"
          ? "Desa Bawomataluo adalah desa adat Nias yang masih menjaga tradisi dan budayanya. Di sini, Anda dapat melihat rumah adat Nias yang unik, megalitikum, dan berbagai atraksi budaya lainnya."
          : "Bawomataluo Village is a traditional Nias village that still maintains its traditions and culture. Here, you can see unique Nias traditional houses, megaliths and various other cultural attractions."}
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  const { locale } = useLocale();

  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl lg:text-4xl text-white">
        {locale === "id" ? "Desa Wisata Orahili" : "Orahili Tourism Village"}
      </p>
      <p className="font-normal text-sm lg:text-base my-4 max-w-lg text-neutral-200">
        {locale === "id"
          ? "Desa Wisata Orahili Fau menawarkan pengalaman budaya yang unik. Pengunjung dapat belajar tentang tenun ikat Nias, mencicipi makanan khas Nias, dan bahkan mencoba mengenakan pakaian adat Nias."
          : "Orahili Fau Tourism Village offers a unique cultural experience. Visitors can learn about Nias ikat weaving, taste typical Nias food, and even try wearing traditional Nias clothing."}
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  const { locale } = useLocale();

  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl lg:text-4xl text-white">
        {locale === "id" ? "Pantai Sorake" : "Sorake Beach"}
      </p>
      <p className="font-normal text-sm lg:text-base my-4 max-w-lg text-neutral-200">
        {locale === "id"
          ? "Pantai Sorake terkenal dengan ombaknya yang besar dan menantang, menjadikannya surga bagi para peselancar. Pemandangan pantai yang indah dengan pasir putih dan air laut biru jernih juga menjadi daya tarik utama."
          : "Sorake Beach is famous for its big and challenging waves, making it a paradise for surfers. The beautiful beach view with white sand and clear blue sea water is also the main attraction."}
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  const { locale } = useLocale();

  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl lg:text-4xl text-white">
        {locale === "id" ? "Pantai Tureloto" : "Tureloto Beach"}
      </p>
      <p className="font-normal text-sm lg:text-base my-4 max-w-lg text-neutral-200">
        {locale === "id"
          ? "Pantai Tureloto menawarkan pemandangan matahari terbenam yang spektakuler. Pengunjung dapat bersantai di pinggir pantai, berenang, atau berselancar."
          : "Tureloto Beach offers spectacular sunset views. Visitors can relax on the beach, swim or surf."}
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  const { locale } = useLocale();

  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl lg:text-4xl text-white">
        {locale === "id" ? "Pulau Tello" : "Tello Island"}
      </p>
      <p className="font-normal text-sm lg:text-base my-4 max-w-lg text-neutral-200">
        {locale === "id"
          ? "Pulau Tello adalah pulau kecil dengan pantai berpasir putih dan air laut yang jernih. Pulau ini terkenal dengan keindahan bawah lautnya yang kaya akan terumbu karang dan ikan tropis."
          : "Tello Island is a small island with white sand beaches and clear sea water. This island is famous for its underwater beauty which is rich in coral reefs and tropical fish."}
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  const { locale } = useLocale();

  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl lg:text-4xl text-white">
        {locale === "id" ? "Pantai Lagundri" : "Lagundri Beach"}
      </p>
      <p className="font-normal text-sm lg:text-base my-4 max-w-lg text-neutral-200">
        {locale === "id"
          ? "Pantai Lagundri terkenal dengan pasir putihnya yang halus dan air lautnya yang jernih. Pantai ini terletak di Desa Lagundri, Kecamatan Nias Barat, Kabupaten Nias."
          : "Lagundri Beach is famous for its fine white sand and clear sea water. This beach is located in Lagundri Village, West Nias District, Nias Regency."}
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/assets/Gallery/galeri/galeri-1.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/assets/Gallery/galeri/galeri-2.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/assets/Gallery/galeri/galeri-3.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail: "/assets/Gallery/galeri/galeri-4.jpeg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail: "/assets/Gallery/galeri/galeri-5.jpeg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail: "/assets/Gallery/galeri/galeri-6.jpeg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-2",
    thumbnail: "/assets/Gallery/galeri/galeri-7.jpeg",
  },
];

const Gallery = () => {
  const { locale } = useLocale();
  const { theme } = useTheme();
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [videoDetail, setVideoDetail] = useState<number>(1);

  const videoList = [
    {
      id: 1,
      title:
        locale === "id"
          ? "ADWI 2022 || Desa Wisata Hilisimaetano, Kab. Nias Selatan, Sumatera Utara"
          : "ADWI 2022 || Hilisimaetano Tourism Village, South Nias Regency, North Sumatra",
      link: "https://www.youtube.com/embed/zabuaDNgnyM?si=TvmHci7Yowqz5qCp",
    },
    {
      id: 2,
      title:
        locale === "id"
          ? "Nias Pro 2022 | Dahsyatnya Ombak Pantai Sorake"
          : "Nias Pro 2022 | The Powerful Waves of Sorake Beach",
      link: "https://www.youtube.com/embed/G-L7KG9mckU?si=L1W2AX_0Dw60r0yw",
    },
    {
      id: 3,
      title:
        locale === "id"
          ? "Kunjungan Kerja Menparekraf Sandiaga: Kunjungi Desa Wisata Hilisimaetano dan Nias Pro 2022"
          : "Minister of Tourism and Creative Economy Sandiaga's Working Visit: Visit Hilisimaetano and Nias Pro Tourism Villages 2022",
      link: "https://www.youtube.com/embed/beaGLKyiCtE?si=ZltgQB3mrjxIF_SP",
    },
    {
      id: 4,
      title:
        locale === "id"
          ? "Sail Nias 2019 Buat Pariwisata Sumut Naik Kelas"
          : "Sail Nias 2019 Makes North Sumatra Tourism Upgrade",
      link: "https://www.youtube.com/embed/X7R7Y0UKF8E?si=JobqubKgFXcovnVC",
    },
    {
      id: 5,
      title:
        locale === "id"
          ? "HOMBO BATU, TRADISI LOMPAT BATU YANG DILAKUKAN OLEH PEMUDA SUKU NIAS | TANAH AIR BETA"
          : "HOMBO BATU, A TRADITION OF STONE JUMPING PERFORMED BY YOUTH OF THE NIAS TRIBE | TANAH WATER BETA",
      link: "https://www.youtube.com/embed/szA1EtdDLow?si=gysc0oeVFUGxlOoi",
    },
    {
      id: 6,
      title:
        locale === "id"
          ? "Indonesia Bagus - Pulau Nias"
          : "Good Indonesia - Nias Island",
      link: "https://www.youtube.com/embed/1Y_54jfynr4?si=_q9iGmhqQbZfDoIg",
    },
  ];

  useEffect(() => {
    let src: string | any;
    if (theme === "dark") {
      src = "/assets/video/homepage-dark.mp4";
    } else if (theme === "light") {
      src = "/assets/video/homepage.mp4";
    } else if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      src =
        systemTheme === "dark"
          ? "/assets/video/homepage-dark.mp4"
          : "/assets/video/homepage.mp4";
    }
    setVideoSrc(src);
  }, [theme]);

  return (
    <React.Fragment>
      <div className="w-full h-fit pt-12 lg:pt-0 flex justify-center items-center relative">
        <video
          src={videoSrc}
          className="w-full h-fit pt-12 lg:pt-0 object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-[41%] sm:top-[30%] lg:top-[20%]">
          <Carousel className="w-[320px] h-[160px] sm:w-[650px] lg:w-[1300px] sm:h-[320px] lg:h-[600px]">
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={`/assets/Gallery/banner/banner-${
                      locale === "id" ? index + 1 : index + 1 + "-english"
                    }.png`}
                    width={700}
                    height={500}
                    alt={`image-carousel-${index + 1}`}
                    className="w-full h-[160px] sm:h-[320px] lg:h-[600px] rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </div>

      {/* Galeri Foto */}
      <div className="galery-photo w-full h-fit py-4 sm:py-6 lg:py-8 relative">
        {/* Title */}
        <div className="title-culture px-6 sm:px-10 flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold gap-2 sm:gap-4">
          <Image
            src="/assets/Culture/shape.svg"
            className="scale-[0.85] sm:scale-100"
            width={40}
            height={40}
            alt="shape"
          />
          {locale === "id" ? "Galeri Foto Nias" : "Nias Photo Gallery"}
          <Image
            src="/assets/Culture/shape.svg"
            className="scale-[0.85] sm:scale-100"
            width={40}
            height={40}
            alt="shape"
          />
        </div>
        <div className="w-full h-[800px] -translate-y-2 sm:translate-y-0">
          <LayoutGrid cards={cards} />
        </div>
      </div>

      {/* Galeri Video */}
      <div className="galery-photo w-full h-fit bg-submain dark:bg-mainDark px-6 sm:px-10 lg:px-12 py-4 sm:py-6 lg:py-8 relative">
        {/* Title */}
        <div className="title-culture flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold gap-2 sm:gap-4 mb-5 sm:mb-8 lg:mb-12">
          <Image
            src="/assets/Culture/shape.svg"
            className="scale-[0.85] sm:scale-100"
            width={40}
            height={40}
            alt="shape"
          />
          {locale === "id" ? "Galeri Video Nias" : "Nias Video Gallery"}
          <Image
            src="/assets/Culture/shape.svg"
            className="scale-[0.85] sm:scale-100"
            width={40}
            height={40}
            alt="shape"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {videoList.map((data, index) => (
            <Image
              key={index}
              src={`/assets/Gallery/video/video-thumbnail-${index + 1}.jpg`}
              width={500}
              height={400}
              alt={`Youtube-Thumbnail-${index + 1}`}
              className="cursor-pointer hover:scale-[1.050] transition duration-300 rounded-lg"
              onClick={() => {
                setOpenDialog(true);
                setVideoDetail(index);
              }}
            />
          ))}
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="w-[350px] h-fit sm:w-[560px] sm:h-[410px]">
            <iframe
              src={videoList[videoDetail].link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              className="w-full h-full rounded-lg"
            />
            <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl">
              {videoList[videoDetail].title}
            </h1>
          </DialogContent>
        </Dialog>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
