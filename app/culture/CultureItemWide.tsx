import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Drama, Search } from "lucide-react";
import React from "react";

export default function CultureItemWide({
  text,
  bgUrl,
  detailAction,
}: {
  text: string;
  bgUrl: string;
  detailAction: () => void;
}) {
  return (
    <CardContainer
      className={`card-item w-full sm:w-[280px] h-[350px] sm:h-[400px] rounded-[45px] bg-[url('/assets/Culture/${bgUrl}.png')] bg-no-repeat bg-cover relative`}
    >
      <CardBody className="w-full h-fit flex flex-col absolute bottom-5 left-5 gap-3">
        <CardItem translateZ={30}>
          <div className="p-2 hover:px-3 w-fit group cursor-pointer rounded-full bg-white flex justify-center items-center space-x-1 sm:space-x-2 transition duration-300 ">
            <Drama color="#504E4B" size={20} />
            <div className="text-submainDark text-sm hidden group-hover:inline-block  transition duration-300">
              {text}
            </div>
          </div>
        </CardItem>
        <CardItem translateZ={40}>
          <div
            onClick={detailAction}
            className="p-2 hover:px-3 w-fit group cursor-pointer rounded-full bg-white flex justify-center items-center space-x-1 sm:space-x-2 transition duration-300 "
          >
            <Search color="#504E4B" size={20} />
            <div className="text-submainDark text-sm hidden group-hover:inline-block transition duration-300">
              Lihat Detail
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
