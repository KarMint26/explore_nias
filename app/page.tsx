import Banner from "@/components/custom/Banner";
import HeroScreen from "@/components/custom/HeroScreen";
import OverviewWisata from "@/components/custom/OverviewWisata";
import RouteMaps from "@/components/custom/RouteMaps";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroScreen />

      {/* Perjalanan ke pulau nias */}
      <div className="bg-mainLight">
        <h2 className="text-3xl text-main pt-15 p-10 text-center">
          Membawa Anda Pengalaman Berharga di Explorenias
        </h2>
        <div className="w-full flex items-center justify-between bg-main p-5 rounded-t-[5rem]">
          <div className="w-1/2 my-10 ml-20">
            <h3 className="text-4xl text-white">Perjalanan Ke Pulau Nias</h3>
            <p className="text-white text-xl w-[35rem] mt-5">
              Pilih Rute Perjalanan Anda dan Mulailah Petualangan Tak Terlupakan
              Bersama Kami di Pulau Nias!
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/assets/maps/nias.png"
              width={500}
              height={500}
              className="w-full scale-90"
              alt="hero-1"
            />
          </div>
        </div>
      </div>

      {/* Mulai Perjalan */}
      <RouteMaps />

      {/* Wisata */}
      <OverviewWisata />

      {/* Banner */}
      <Banner />

      {/* Budaya */}
      {/* <Budaya /> */}
    </main>
  );
}
