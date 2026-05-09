"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import About from "@/sections/About";
import CallToAction from "@/sections/CallToAction";
import Destinations from "@/sections/Destinations";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import ServiceTiers from "@/sections/ServiceTiers";
import CuratedExperiences from "@/sections/CuratedExperiences";
import CuratedAccommodations from "@/sections/CuratedAccommodations";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import TraveloguePreview from "@/sections/TraveloguePreview";
import { journalData } from "@/data/journal";

export default function Home() {
  const [activeLanguage, setActiveLanguage] = useState<"en" | "es">("en");
  const featuredPosts = journalData.filter(post => post.language === activeLanguage).slice(0, 3);

  return (
    <>
      <div className="container max-w-5xl pt-12 flex justify-end px-5 md:px-0">
        <nav aria-label={activeLanguage === "en" ? "Language selector" : "Selector de idioma"} className="relative flex items-center bg-zinc-900/50 p-1 rounded-full border border-zinc-800 shrink-0 w-fit">
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

      <Hero activeLanguage={activeLanguage} />
      <About activeLanguage={activeLanguage} />
      <Features activeLanguage={activeLanguage} />
      <ServiceTiers activeLanguage={activeLanguage} />
      <CuratedExperiences activeLanguage={activeLanguage} />
      <CuratedAccommodations activeLanguage={activeLanguage} />
      <Destinations activeLanguage={activeLanguage} />
      <Reviews activeLanguage={activeLanguage} />
      <TraveloguePreview posts={featuredPosts} activeLanguage={activeLanguage} />
      <Faqs activeLanguage={activeLanguage} />
      <CallToAction activeLanguage={activeLanguage} />
    </>
  );
}
