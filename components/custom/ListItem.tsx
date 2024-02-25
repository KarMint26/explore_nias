import Link from "next/link";
import React from "react";

export default function ListItem({
  activeLink,
  text,
  href,
  icon
}: {
  href: string;
  text: string;
  icon: any;
  activeLink: string | any;
}) {
  return (
    <Link
      href={href}
      className={`flex justify-center items-center gap-3 transition duration-300 font-semibold ease-in-out hover:text-white group hover:bg-main focus:text-white focus:bg-main active:text-white active:bg-main rounded-full p-3 outline-none ${
        activeLink === href.split("/").pop() ? "text-white bg-main" : "text-main"
      }`}
    >
      <div
        className={`group border-[3px] transition duration-100 ease-in-out rounded-full p-[0.35rem] group-hover:border-white group-focus:border-white group-active:border-white ${
          activeLink === href.split("/").pop() ? "border-white" : "border-main"
        }`}
      >
        {icon}
      </div>
      {text}
    </Link>
  );
}
