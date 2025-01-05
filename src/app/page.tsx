import About from "@/sections/About";
import CallToAction from "@/sections/CallToAction";
import Destinations from "@/sections/Destinations";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
// import LogoTicker from "@/sections/LogoTicker";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <LogoTicker /> */}
      <About />
      <Features />
      <Destinations />
      <Faqs />
      <CallToAction />
    </>
  );
}
