"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LocaleContext = createContext({
  locale: "id",
  toggleLocale: (locale: string) => {},
});

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<string>("id");

  const toggleLocale = (locale: string) => {
    setLocale(() => {
      const localeNow: string = locale;
      localStorage.setItem("locale", localeNow);

      return localeNow;
    });
  };

  const dataLocale = useMemo(() => {
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  useEffect(() => {
    const localeHistory = localStorage.getItem("locale") || "id";

    setLocale(localeHistory);
  },[]);

  return (
    <LocaleContext.Provider value={dataLocale}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
export const useLocale = () => {
  return useContext(LocaleContext);
};
