import Link from "next/link";
import React from "react";

import hotelMain from "@/assets/images/hotel-main.png";
import hostelMain from "@/assets/images/hostels-main.png";

const content = {
  en: {
    subtitle: "Rest & Recover",
    title: "Curated Accommodations",
    card1Title: "Boutique Hotels",
    card1Desc: "Exclusive sanctuaries and high-end design.",
    card2Title: "Social Hostels",
    card2Desc: "High-energy social spaces and backpacker hubs."
  },
  es: {
    subtitle: "Descansa y Recupérate",
    title: "Alojamientos Exclusivos",
    card1Title: "Hoteles Boutique",
    card1Desc: "Santuarios exclusivos y diseño de alta gama.",
    card2Title: "Hostales Sociales",
    card2Desc: "Espacios sociales llenos de energía y puntos de encuentro para mochileros."
  }
};

export default function CuratedAccommodations({ activeLanguage = "en" }: { activeLanguage?: "en" | "es" }) {
  const data = content[activeLanguage];
  return (
    <section className="py-24 bg-black text-white border-t border-zinc-900 overflow-hidden" id="curated-accommodations">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
            {data.subtitle}
          </h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
            {data.title}
          </h3>
        </div>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1: Boutique Hotels */}
          <Link href="/hotels" className="group block">
            <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden border border-transparent hover:border-zinc-800 transition-colors duration-500 rounded-3xl">
              <img 
                src={hotelMain.src} 
                alt={data.card1Title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start text-left">
                <h4 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2 group-hover:-translate-y-2 transition-transform duration-500">
                  {data.card1Title}
                </h4>
                <p className="text-zinc-300 text-lg group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                  {data.card1Desc}
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2: Curated Hostels */}
          <Link href="/hostels" className="group block">
            <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden border border-transparent hover:border-zinc-800 transition-colors duration-500 rounded-3xl">
              <img 
                src={hostelMain.src} 
                alt={data.card2Title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start text-left">
                <h4 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2 group-hover:-translate-y-2 transition-transform duration-500">
                  {data.card2Title}
                </h4>
                <p className="text-zinc-300 text-lg group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                  {data.card2Desc}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
