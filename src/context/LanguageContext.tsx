"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "es";

interface LanguageContextProps {
  activeLanguage: Language;
  setActiveLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeLanguage, setActiveLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedLang = localStorage.getItem("blvcksheep-lang") as Language;
    if (storedLang === "en" || storedLang === "es") {
      setActiveLanguageState(storedLang);
    }
  }, []);

  const setActiveLanguage = (lang: Language) => {
    setActiveLanguageState(lang);
    localStorage.setItem("blvcksheep-lang", lang);
  };

  // Always return the Provider so children can consume the context during SSR.
  // The actual stored language will be applied on the client after mount.
  return (
    <LanguageContext.Provider value={{ activeLanguage, setActiveLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
