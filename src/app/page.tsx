import About from "@/sections/About";
import Destinations from "@/sections/Destinations";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <About />
      <Features />
      <Destinations />
      <Faqs />
      {/* <Testimonials />
      <CTA />
      <Footer /> */}
    </>
  );
}
