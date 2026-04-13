import About from "@/sections/About";
import CallToAction from "@/sections/CallToAction";
import Destinations from "@/sections/Destinations";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import CuratedExperiences from "@/sections/CuratedExperiences";
import CuratedAccommodations from "@/sections/CuratedAccommodations";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import TraveloguePreview from "@/sections/TraveloguePreview";
import { journalData } from "@/data/journal";

export default function Home() {
  const featuredPosts = journalData.slice(0, 3);

  return (
    <>
      <Hero />
      {/* <LogoTicker /> */}
      <About />
      <Features />
      <CuratedExperiences />
      <CuratedAccommodations />
      <Destinations />
      <Reviews />
      <TraveloguePreview posts={featuredPosts} />
      <Faqs />
      <CallToAction />
    </>
  );
}
