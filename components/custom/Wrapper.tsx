"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Navbar from "./Navbar";

const Wrapper = () => {
  const pathname = usePathname();
  const activeLink = pathname.split("/").pop();
  const [activeNav, setActiveNav] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Navbar
        activeLink={activeLink}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
    </React.Fragment>
  );
};

export default Wrapper;
