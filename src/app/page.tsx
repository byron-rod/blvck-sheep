"use client";

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
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { activeLanguage, setActiveLanguage } = useLanguage();
  const featuredPosts = journalData.filter(post => post.language === activeLanguage).slice(0, 3);

  return (
    <>

      <Hero activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />
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
