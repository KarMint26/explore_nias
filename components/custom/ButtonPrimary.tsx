import React from "react";
import { Button } from "../ui/button";

function ButtonPrimary({ children }: { children: React.ReactNode }) {
  return (
    <Button
      size="lg"
      className="bg-main rounded-full text-sm sm:text-base w-fit hover:bg-submainDark dark:hover:bg-[#c0b99d]"
    >
      {children}
    </Button>
  );
}

export default ButtonPrimary;
