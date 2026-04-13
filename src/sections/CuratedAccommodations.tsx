import Link from "next/link";
import React from "react";

import hotelMain from "@/assets/images/hotel-main.png";
import hostelMain from "@/assets/images/hostels-main.png";

export default function CuratedAccommodations() {
  return (
    <section className="py-24 bg-black text-white border-t border-zinc-900 overflow-hidden" id="curated-accommodations">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Rest & Recover
          </h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
            Curated Accommodations
          </h3>
        </div>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1: Boutique Hotels */}
          <Link href="/hotels" className="group block">
            <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden border border-transparent hover:border-zinc-800 transition-colors duration-500 rounded-3xl">
              <img 
                src={hotelMain.src} 
                alt="Boutique Hotels" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start text-left">
                <h4 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2 group-hover:-translate-y-2 transition-transform duration-500">
                  Boutique Hotels
                </h4>
                <p className="text-zinc-300 text-lg group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                  Exclusive sanctuaries and high-end design.
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2: Curated Hostels */}
          <Link href="/hostels" className="group block">
            <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden border border-transparent hover:border-zinc-800 transition-colors duration-500 rounded-3xl">
              <img 
                src={hostelMain.src} 
                alt="Curated Hostels" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start text-left">
                <h4 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2 group-hover:-translate-y-2 transition-transform duration-500">
                  Social Hostels
                </h4>
                <p className="text-zinc-300 text-lg group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                  High-energy social spaces and backpacker hubs.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
