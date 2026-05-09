"use client";
import Button from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const content = {
  en: {
    badge: "Explore Guatemala in Comfort",
    title: "Blvck Sheep",
    subtitle: "Tourist Services,",
    highlight: " just got Better",
    cta: "Book Your Ride Now"
  },
  es: {
    badge: "Explora Guatemala con Comodidad",
    title: "Blvck Sheep",
    subtitle: "Tourist Services,",
    highlight: " just got Better",
    cta: "Reserva Tu Viaje Ahora"
  }
};

export default function Hero({ 
  activeLanguage = "en", 
  setActiveLanguage 
}: { 
  activeLanguage?: "en" | "es", 
  setActiveLanguage: (lang: "en" | "es") => void 
}) {
  const whatsappLink =
    "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20shuttle!";

  return (
    <section className="py-24 px-5 md:px-0">
      <div className="container max-w-5xl flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex justify-start">
            <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
              {content[activeLanguage].badge}
            </div>
          </div>
          <h1 className="text-[5.5rem] lg:text-[6.2rem] font-medium mt-10 leading-[4.3rem]">
            {content[activeLanguage].title}
          </h1>
          <p className="text-start text-xl lg:text-2xl text-white mt-4 md:mt-6 font-bold">
            {content[activeLanguage].subtitle}
            <span className="text-gray-400">{content[activeLanguage].highlight}</span>
          </p>
          <Button variant="secondary" className="mt-8 font-bold flex">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group-hover:text-blue-400"
              aria-label="WhatsApp contact for BlackSheep Shuttles"
            >
              {content[activeLanguage].cta}
            </Link>
          </Button>
        </div>

        <nav aria-label={activeLanguage === "en" ? "Language selector" : "Selector de idioma"} className="relative flex items-center bg-zinc-900/50 p-1 rounded-full border border-zinc-800 self-start md:self-auto shrink-0">
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
                  layoutId="active-lang-home"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {lang === "en" ? "ENG" : "ESP"}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
