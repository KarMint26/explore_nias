"use client";
import { useLocale } from "@/contexts/LocaleContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import TourRegional from "../../app/tour/TourRegional";
import AsteticStick from "./AsteticStick";
import TourCulinary from "@/app/tour/TourCulinary";

function MainTour() {
  const { locale } = useLocale();
  const [tabActive, setTabActive] = React.useState<string>("tour");

  return (
    <div className="w-full pt-5 sm:pt-10 bg-mainLight dark:bg-submainDark">
      <div className="w-full flex justify-center mb-5 m-auto">
        <AsteticStick />
      </div>
      <h3 className="text-main text-2xl sm:text-4xl text-center mb-5">
        {locale === "id" ? "Kategori Wisata" : "Tourism Category"}
      </h3>
      <Tabs defaultValue="tour" className="w-full">
        <TabsList className="grid sm:w-[400px] h-fit grid-cols-2 mb-3 p-3 bg-gray-400 dark:bg-gray-800 rounded-xl mx-auto sm:mb-5 space-x-2 sm:space-x-3">
          <TabsTrigger
            value="tour"
            className={`px-5 sm:text-lg font-medium text-main py-3 rounded-xl ${
              tabActive === "tour"
                ? "shadow-md bg-white dark:bg-main text-main dark:text-mainLight"
                : "text-white hover:text-gray-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 dark:text-slate-400"
            }`}
            onClick={() => setTabActive("tour")}
          >
            {locale === "id" ? "Wisata Daerah" : "Regional Tourism"}
          </TabsTrigger>
          <TabsTrigger
            value="culinary"
            className={`px-5 sm:text-lg text-main font-medium py-3 rounded-xl ${
              tabActive === "culinary"
                ? "shadow-md bg-white dark:bg-main text-main dark:text-mainLight"
                : "text-white hover:text-gray-700 hover:bg-slate-50 dark:hover:bg-slate-800/50  dark:text-slate-400"
            }`}
            onClick={() => setTabActive("culinary")}
          >
            {locale === "id" ? "Wisata Kuliner" : "Culinary Tour"}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="tour"
          className=" bg-white dark:bg-mainDark w-full rounded-xl"
        >
          <TourRegional />
        </TabsContent>
        <TabsContent
          value="culinary"
          className="dark:bg-mainDark bg-white w-full rounded-xl"
        >
          <TourCulinary />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MainTour;
