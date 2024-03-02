"use client";
import { useLocale } from "@/contexts/LocaleContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import TourRegional from "./TourRegional";

function MainTour() {
  const { locale } = useLocale();
  const [tabActive, setTabActive] = React.useState<string>("tour");

  return (
    <div className="w-full p-3 sm:p-10 bg-submainDark">
      <Tabs defaultValue="tour" className="w-full">
        <TabsList className="grid sm:w-[400px] grid-cols-2 mb-3 p-3 bg-slate-100 rounded-xl">
          <TabsTrigger
            value="tour"
            className={`px-5 font-medium text-main py-3 rounded-xl ${
              tabActive === "tour"
                ? "shadow-md bg-white"
                : "text-gray-400 hover:text-gray-400"
            }`}
            onClick={() => setTabActive("tour")}
          >
            {locale === "id" ? "Wisata Daerah" : "Regional Tourism"}
          </TabsTrigger>
          <TabsTrigger
            value="culinary"
            className={`px-5 text-main font-medium py-3 rounded-xl ${
              tabActive === "culinary"
                ? "shadow-md bg-white"
                : "text-gray-400 hover:text-gray-400"
            }`}
            onClick={() => setTabActive("culinary")}
          >
            {locale === "id" ? "Wisata Kuliner" : "Culinary Tour"}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tour" className="p-5 bg-white w-full rounded-xl">
          <TourRegional />
        </TabsContent>
        <TabsContent
          value="culinary"
          className="p-5 bg-white w-full rounded-xl"
        >
          Culinary
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MainTour;
