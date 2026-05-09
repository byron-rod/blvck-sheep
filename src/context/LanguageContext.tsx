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
  
  // 1. Añadimos un estado para saber si estamos hidratados en el cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 2. Este código SOLO se ejecuta en el navegador (nunca en Vercel)
    setIsClient(true);
    
    // Ahora es 100% seguro leer el localStorage
    try {
      const storedLang = localStorage.getItem("blvcksheep-lang") as Language;
      if (storedLang === "en" || storedLang === "es") {
        setActiveLanguageState(storedLang);
      }
    } catch (e) {
      console.warn("Error leyendo localStorage:", e);
    }
  }, []);

  const setActiveLanguage = (lang: Language) => {
    setActiveLanguageState(lang);
    try {
      // Siempre comprobamos que estamos en un entorno seguro antes de guardar
      if (typeof window !== "undefined") {
        localStorage.setItem("blvcksheep-lang", lang);
      }
    } catch (e) {
       console.warn("Error guardando en localStorage:", e);
    }
  };

  // 3. EVITAMOS EL ERROR DE HYDRATION
  // Si todavía estamos en el servidor de Vercel, no renderizamos el contenido
  // que depende de la lectura del localStorage.
  if (!isClient) {
    // Renderizamos un 'cascarón' temporal para que el build pase limpiamente
    return null; 
  }

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