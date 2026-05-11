"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { destinationsData } from "@/data/destinations";
import CallToAction from "@/sections/CallToAction";

const content = {
  en: {
    title: "Destinations",
    description: "Explore our curated selection of Guatemala's most captivating locations.",
    exploreGuide: "Explore Guide",
  },
  es: {
    title: "Destinos",
    description: "Descubre nuestros rincones favoritos más cautivadores de Guatemala.",
    exploreGuide: "Explorar Guía",
  },
};

export default function DestinationsClient() {
  const { activeLanguage, setActiveLanguage } = useLanguage();
  const currentContent = content[activeLanguage];
  const filteredDestinations = destinationsData.filter((d) => d.language === activeLanguage);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col items-center mb-24 gap-8">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white uppercase text-center">
              {currentContent.title}
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light text-center max-w-2xl">
              {currentContent.description}
            </p>
          </div>

          <nav aria-label={activeLanguage === "en" ? "Language selector" : "Selector de idioma"} className="relative flex items-center bg-zinc-900/50 p-1 rounded-full border border-zinc-800 shrink-0">
            {(["en", "es"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                aria-label={lang === "en" ? "Switch to English" : "Cambiar a Español"}
                aria-pressed={activeLanguage === lang}
                className={`relative px-6 py-2.5 text-sm font-medium uppercase tracking-widest rounded-full transition-colors z-10 ${
                  activeLanguage === lang ? "text-black" : "text-zinc-400 hover:text-white"
                }`}
              >
                {activeLanguage === lang && (
                  <motion.div
                    layoutId={`active-lang-destinations-${lang}`} // Ensure unique layoutId to prevent animation bugs across pages
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {lang === "en" ? "ENG" : "ESP"}
              </button>
            ))}
          </nav>
        </header>

        <div className="flex flex-col gap-16">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="relative group block w-full overflow-hidden rounded-none aspect-[16/9] md:aspect-[21/9]">
              <img 
                src={destination.heroImage} 
                alt={destination.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end md:justify-center items-start md:items-center text-left md:text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                  {destination.title}
                </h2>
                <h3 className="text-lg md:text-2xl text-zinc-300 font-light mb-8 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                  {destination.subtitle}
                </h3>
                
                <Link
                  href={`/destinations/${destination.id}`}
                  className="mt-auto md:mt-0 inline-block bg-white text-black px-8 md:px-12 py-4 text-sm uppercase tracking-[0.2em] rounded-full font-semibold hover:bg-zinc-200 transition-colors translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-200"
                >
                  {currentContent.exploreGuide}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32">
        <CallToAction activeLanguage={activeLanguage} />
      </div>
    </section>
  );
}
