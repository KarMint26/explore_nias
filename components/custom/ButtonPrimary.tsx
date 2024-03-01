import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function ButtonPrimary({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) {
  return (
    <Link href={to} className="w-fit h-fit">
      <Button
        size="lg"
        className="bg-main rounded-full text-sm sm:text-base w-fit hover:bg-submainDark dark:hover:bg-[#c0b99d]"
      >
        {children}
      </Button>
    </Link>
  );
}

export default ButtonPrimary;
