import React from "react";
import { Button } from "../ui/button";

function ButtonPrimary({ children, ...props }: { children: React.ReactNode }) {
  return (
    <Button
      size="lg"
      {...props}
      className="bg-main rounded-full text-sm sm:text-base w-fit hover:bg-submainDark dark:hover:bg-[#c0b99d] dark:text-white"
    >
      {children}
    </Button>
  );
}

export default ButtonPrimary;
