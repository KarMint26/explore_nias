"use client";
import { useLocale } from "@/contexts/LocaleContext";
import React from "react";
import AsteticStick from "../../components/custom/AsteticStick";
import CardWisata from "../../components/custom/CardWisata";
import { Drawer, DrawerContent } from "../../components/ui/drawer";
import DetailTour from "@/app/tour/DetailTour";
import DetailTourCulinary from "./DetailTourCulinary";

function TourCulinary() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [detailData, setDetailData] = React.useState({
    id: 0,
    name: "",
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
            ? '"Temukan perpaduan sempurna antara tradisi dan cita rasa modern dalam hidangan khas Nias yang menggoda selera."'
            : '"Discover the perfect blend of tradition and modern flavors in Nias\' tantalizing dishes."'}
        </p>
        <div className="text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start flex-row-reverse sm:flex-row-reverse mb-5">
            <AsteticStick />
          </div>

          <h3 className="text-xl sm:text-4xl text-main mb-5">
            {locale === "id" ? "Wisata Kuliner" : "Culinary Tour"}
          </h3>
        </div>
      </div>

      {/* main section */}
      <div className="w-full flex flex-wrap justify-center items-center gap-5">
        {dataCulinary.map((item) => (
          <CardWisata
            key={item.id}
            nameId={item.name}
            nameEn={item.name}
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
            <DetailTourCulinary
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

export default TourCulinary;

const dataCulinary = [
  {
    id: 1,
    name: "Hambae nititi",
    image: "/assets/tour/culinary/Hambae Nititi.jpg",
    descId:
      "Hambae Nititi adalah masakan khas Nias yang terbuat dari ikan asap. Ikan yang digunakan biasanya adalah ikan tongkol, cakalang, atau tuna. Ikan diasapi terlebih dahulu kemudian dicampur dengan bumbu kacang, cabai, dan bawang merah. Hambae Nititi biasanya disajikan dengan nasi putih atau ubi jalar.",
    descEn:
      "Hambae Nititi is a typical Nias dish made from smoked fish. The fish used is usually tuna, skipjack, or tuna. The fish is smoked first and then mixed with peanut sauce, chili, and shallots. Hambae Nititi is usually served with white rice or sweet potatoes.",
    maps: "https://maps.app.goo.gl/Bd9o3uGGvF8at3sf8",
  },
  {
    id: 2,
    name: "Babae",
    image: "/assets/tour/culinary/Babae.jpg",
    descId:
      "Babae adalah masakan khas Nias yang terbuat dari daun singkong. Daun singkong ditumbuk halus kemudian dicampur dengan santan, kelapa parut, dan bumbu-bumbu lainnya. Babae biasanya dibungkus dengan daun pisang dan dimasak dengan cara dibakar.",
    descEn:
      "Babae is a Nias dish made from cassava leaves. Cassava leaves are finely ground and then mixed with coconut milk, grated coconut and other spices. Babae is usually wrapped in banana leaves and cooked by grilling.",
    maps: "https://maps.app.goo.gl/kBn17sAD15zeLNcr9",
  },
  {
    id: 3,
    name: "Harinake",
    image: "/assets/tour/culinary/Harinake.jpg",
    descId:
      "Harinake adalah masakan khas Nias yang terbuat dari daging babi. Daging babi dimasak dengan santan, cabai, dan bumbu-bumbu lainnya. Harinake biasanya disajikan dengan nasi putih atau ubi jalar.",
    descEn:
      "Harinake is a Nias dish made from pork. The pork is cooked with coconut milk, chili, and other spices. Harinake is usually served with white rice or sweet potatoes.",
    maps: "https://maps.app.goo.gl/Hy6yi4Ufawnk9mD36",
  },
  {
    id: 4,
    name: "Kofo-kofo",
    image: "/assets/tour/culinary/Kofokofo.jpg",
    descId:
      "Kofo-kofo adalah masakan khas Nias yang terbuat dari ikan asin. Ikan asin ditumbuk halus kemudian dicampur dengan santan, cabai, dan bumbu-bumbu lainnya. Kofo-kofo biasanya disajikan dengan nasi putih atau ubi jalar.",
    descEn:
      "Kofo-kofo is a Nias dish made from salted fish. The salted fish is finely ground and then mixed with coconut milk, chili, and other spices. Kofo-kofo is usually served with white rice or sweet potatoes.",
    maps: "https://maps.app.goo.gl/MCqc5fXNCc25wsVn9",
  },
  {
    id: 5,
    name: "Gowi nifufu",
    image: "/assets/tour/culinary/Gowi.jpg",
    descId:
      "Gowi Nifufu adalah masakan khas Nias yang terbuat dari ubi tumbuk. Ubi tumbuk dicampur dengan santan, kelapa parut, dan gula merah. Gowi Nifufu biasanya disajikan sebagai hidangan penutup.",
    descEn:
      "Gowi Nifufu is a Nias dish made from mashed sweet potato. Mashed sweet potato is mixed with coconut milk, grated coconut and brown sugar. Gowi Nifufu is usually served as dessert.",
    maps: "https://maps.app.goo.gl/Gex8PKS9aWkuxtXn7",
  },
  {
    id: 6,
    name: "Galame durian",
    image: "/assets/tour/culinary/Galame.jpg",
    descId:
      "Galame Durian adalah masakan khas Nias yang terbuat dari durian. Durian dihaluskan kemudian dicampur dengan santan, gula merah, dan tepung beras. Galame Durian biasanya disajikan sebagai hidangan penutup.",
    descEn:
      "Galame Durian is a Nias specialty made from durian. Durian is mashed then mixed with coconut milk, brown sugar, and rice flour. Galame Durian is usually served as dessert.",
    maps: "https://maps.app.goo.gl/kq4UUZmhXsKgb9ZA8",
  },
  {
    id: 7,
    name: "Sillio guro",
    image: "/assets/tour/culinary/Sillio.jpg",
    descId:
      "Sillio Guro adalah masakan khas Nias yang terbuat dari daun kelor. Daun kelor ditumbuk halus kemudian dicampur dengan santan, cabai, dan bumbu-bumbu lainnya. Sillio Guro biasanya disajikan dengan nasi putih atau ubi jalar.",
    descEn:
      "Sillio Guro is a typical Nias dish made from moringa leaves. Moringa leaves are finely ground and then mixed with coconut milk, chili, and other spices. Sillio Guro is usually served with white rice or sweet potatoes.",
    maps: "https://maps.app.goo.gl/kq4UUZmhXsKgb9ZA8",
  },
  {
    id: 8,
    name: "Bawi Ni Unago",
    image: "/assets/tour/culinary/Bawi.jpg",
    descId:
      "Bawi Ni Unago adalah masakan khas Nias yang terbuat dari daging babi. Daging babi dimasak dengan santan, cabai, dan bumbu-bumbu lainnya. Bawi Ni Unago biasanya disajikan dengan nasi putih atau ubi jalar.",
    descEn:
      "Bawi Ni Unago is a Nias dish made from pork. The pork is cooked with coconut milk, chili, and other spices. Bawi Ni Unago is usually served with white rice or sweet potatoes.",
    maps: "https://maps.app.goo.gl/NtXgDcH6jKkPTSbZ8",
  },
];
