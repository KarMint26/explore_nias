"use client";
import { useLocale } from "@/contexts/LocaleContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import TourRegional from "./TourRegional";
import AsteticStick from "./AsteticStick";

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
        <TabsList className="grid sm:w-[400px] grid-cols-2 mb-3 p-3 bg-slate-100 dark:bg-gray-800 rounded-xl mx-auto sm:mb-5">
          <TabsTrigger
            value="tour"
            className={`px-5 sm:text-xl font-medium text-main py-3 rounded-xl ${
              tabActive === "tour"
                ? "shadow-md bg-white dark:bg-main text-mainLight"
                : "text-gray-400 hover:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 dark:text-slate-400"
            }`}
            onClick={() => setTabActive("tour")}
          >
            {locale === "id" ? "Wisata Daerah" : "Regional Tourism"}
          </TabsTrigger>
          <TabsTrigger
            value="culinary"
            className={`px-5 sm:text-xl text-main font-medium py-3 rounded-xl ${
              tabActive === "culinary"
                ? "shadow-md bg-white dark:bg-main text-mainLight"
                : "text-gray-400 hover:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-800/50  dark:text-slate-400"
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
        <TabsContent value="culinary" className=" bg-white w-full rounded-xl">
          Culinary
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MainTour;