"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { itinerariesData } from "@/data/itineraries";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoShareOutline } from "react-icons/io5";

// Import local assets
import fuegoVolcan from "@/assets/images/fuego-volcano.png";

type Props = {
  params: Promise<{ id: string }>;
};

// Mock Data specifically for Lookbook
const lookbookData = {
  "social-surf-summit": {
    heroImage:
      "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=2500&auto=format&fit=crop",
    duration: "7 Days / 6 Nights",
    highlights: ["Volcanic Crater Basecamp", "Pacific Swell Sessions", "Curated Colonial Nightlife"],
    featuredStays: [
      {
        name: "Basecamp Antigua",
        location: "Antigua, Guatemala",
        description:
          "Drop your bags in the colonial heart of Guatemala. We’ve secured access to Antigua’s premier boutique stay, where high-end design meets an electrifying social scene. Pre-game with crafted cocktails on a private rooftop while the Volcán de Agua fades into the night skyline.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Fuego Summit",
        location: "Acatenango Volcano",
        description:
          "Trade the boutique suite for a night above the clouds. This is a fully guided, high-octane ascent to our private Acatenango basecamp. Witness the raw, cinematic power of Volcán de Fuego erupting under the stars—completely off the grid, yet anchored in elevated comfort.",
        // Using the statically imported local image
        image: fuegoVolcan.src,
      },
      {
        name: "Driftwood Oasis",
        location: "El Paredon",
        description:
          "Chase the adrenaline with world-class Pacific swells. Step directly onto the volcanic black sand of El Paredon. By day, it’s surf and coastal recovery; by night, we plug you into an exclusive open-air pool club featuring strictly curated DJ sets and an unmatched coastal energy.",
        image:
          "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
};

export default function ItineraryDetailPage({ params }: Props) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const router = useRouter();

  const itinerary = itinerariesData.find((item) => item.id === id);

  // If not found, show minimal 404
  if (!itinerary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-light">Itinerary Not Found</h1>
      </div>
    );
  }

  const lookbook = lookbookData[id as keyof typeof lookbookData];
  
  // Use generic fallback if no specific lookbook data is found
  const heroImage = lookbook?.heroImage || "https://images.unsplash.com/photo-1620925763618-9d41ae648eaf?q=80&w=2500&auto=format&fit=crop";
  const featuredStays = lookbook?.featuredStays || [];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black pb-24">
      {/* Top Nav Overlay */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 Mix-blend-difference">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity"
        >
          <IoChevronBack className="text-xl group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <button className="text-xl hover:opacity-70 transition-opacity">
          <IoShareOutline />
        </button>
      </nav>

      {/* Cinematic Hero */}
      <section className="relative h-[85vh] w-full flex items-end pb-20 px-6 md:px-12 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={itinerary.title}
            className="w-full h-full object-cover"
          />
          {/* Magazine-style vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-[0.3em] font-medium border border-white/30 px-3 py-1 rounded-full">
                {lookbook?.duration || "Curated Experience"}
              </span>
              <span className="text-xs text-zinc-400 uppercase tracking-[0.2em]">
                {itinerary.visualHookKey}
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-8">
              {itinerary.title}
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mix-blend-screen">
              {itinerary.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lookbook: Featured Stays */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Edition / 01</h2>
            <h3 className="text-4xl md:text-5xl font-light tracking-tight">Featured Stays</h3>
          </motion.div>

          <div className="flex flex-col gap-32">
            {featuredStays.map((stay, index) => (
              <div 
                key={stay.name} 
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20`}
              >
                {/* Image Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-3/5"
                >
                  <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group">
                    <img 
                      src={stay.image} 
                      alt={stay.name} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full md:w-2/5 flex flex-col justify-center"
                >
                  <span className="text-sm font-mono text-zinc-500 mb-6">
                    {String(index + 1).padStart(2, '0')} // {stay.location}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-semibold mb-6">
                    {stay.name}
                  </h4>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {stay.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-black/80 backdrop-blur-xl border-t border-zinc-900 border-opacity-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Social meets Adventure</p>
            <p className="text-sm font-medium">Ready to travel to Guatemala? &rarr;</p>
          </div>
          <Link
            href={itinerary.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-none text-sm uppercase tracking-[0.2em] font-semibold hover:bg-zinc-200 transition-colors text-center"
          >
            Inquire to Book
          </Link>
        </div>
      </div>
    </div>
  );
}