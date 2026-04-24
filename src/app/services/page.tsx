"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { IoChevronBack, IoShareOutline } from "react-icons/io5";
import { 
  Bus, Car, Sparkle, 
  MapPin, Coffee, Wifi, Map, Leaf,
  Headphones, Navigation, PhoneCall, ArrowRight,
  Check
} from 'lucide-react';
// import TraveloguePreview from '@/sections/TraveloguePreview'; <-- Descomenta esto cuando quieras agregar el Travelogue

export default function ServicesPage() {
  const router = useRouter();

  const handleShare = async () => {
    const shareData = {
      title: `Our Services | Blvck Sheep`,
      text: `Travel Differently. Find the perfect transit solution for your journey across Guatemala.`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-zinc-800 selection:text-white relative">
      
      {/* Top Nav Overlay (Back & Share) */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 pointer-events-none">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity pointer-events-auto text-white"
        >
          <IoChevronBack className="text-xl group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <button onClick={handleShare} className="text-xl hover:opacity-70 transition-opacity pointer-events-auto text-white">
          <IoShareOutline />
        </button>
      </nav>

      {/* Botón de Cambio de Idioma */}
      <div className="w-full pt-32 px-6 md:px-12 max-w-7xl mx-auto flex justify-end relative z-40">
        <Link 
          href="/servicios" 
          className="text-xs font-medium tracking-widest text-zinc-500 hover:text-white transition-colors border border-zinc-800 rounded-full px-4 py-2"
        >
          LEER EN ESPAÑOL
        </Link>
      </div>

      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full pt-20 pb-24 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
            Travel Differently.<br />
            <span className="text-zinc-500">Choose Your Experience.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            From budget-friendly shared routes to absolute peace of mind. Find the perfect transit solution for your journey across Guatemala.
          </p>
        </div>
      </section>

      {/* 2. The Tiers */}
      <section className="relative w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Shared Transit */}
            <div className="group relative bg-zinc-950 border border-zinc-700 rounded-2xl p-8 hover:border-zinc-500 transition-colors duration-500 flex flex-col">
              <div className="mb-8">
                <Bus strokeWidth={1} className="w-12 h-12 text-zinc-300 mb-6 group-hover:text-white transition-colors duration-500" />
                <h3 className="text-3xl font-light tracking-tight mb-3">Shared Shuttle</h3>
                <p className="text-zinc-400 text-sm font-medium tracking-wide uppercase">Reliable & Efficient</p>
              </div>
              <p className="text-zinc-300 font-light leading-relaxed mb-8">
                The smart, budget-friendly choice for flexible travelers.
              </p>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">Logistics & Rules</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>Specific Pick-up & Drop-off areas (door-to-door not always available)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>Fixed schedules with possible connections</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>Wait-time windows of 10-60 mins</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>Strict Luggage Policy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">Fleet</h4>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    Operated via our trusted local partner networks using Vans and Microbuses.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Private Transit */}
            <div className="group relative bg-zinc-950 border border-zinc-700 rounded-2xl p-8 hover:border-zinc-300 transition-colors duration-500 flex flex-col">
              <div className="mb-8">
                <Car strokeWidth={1} className="w-12 h-12 text-zinc-300 mb-6 group-hover:text-white transition-colors duration-500" />
                <h3 className="text-3xl font-light tracking-tight mb-3">Private Transit</h3>
                <p className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Flexible & Direct</p>
              </div>
              <p className="text-zinc-200 font-light leading-relaxed mb-8">
                Your schedule, your route. Our 24/7 door to door service.
              </p>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">Logistics & Rules</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>Direct door-to-door service. You have total control of your journey.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>We work 24/7. You choose the exact departure time. No waiting times.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>Accommodates luggage according to your needs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">Fleet</h4>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    Exclusive experience for your group with our sedans and SUVs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: The Blvck Tier */}
            <div className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-600 rounded-2xl p-8 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <Sparkle strokeWidth={0.5} className="w-32 h-32" />
              </div>
              <div className="mb-8 relative z-10">
                <Sparkle strokeWidth={1} className="w-12 h-12 text-white mb-6" />
                <h3 className="text-3xl font-light tracking-tight mb-3 text-white">Blvck Sheep</h3>
                <p className="text-zinc-200 text-sm font-medium tracking-wide uppercase">Conscious Comfort</p>
              </div>
              <p className="text-white font-light leading-relaxed mb-8 relative z-10">
                Travel in absolute comfort while reducing your footprint in our eco-friendly electric fleet. 
              </p>
              <div className="space-y-6 flex-grow relative z-10">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-3">The Experience</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-zinc-200 font-light">
                      <Check className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                      <span>Help the planet while enjoying full comfort</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-200 font-light">
                      <Check className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                      <span>Total schedule flexibility - more personalized experience</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-200 font-light">
                      <Check className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                      <span>Generous luggage capacity</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-zinc-800 relative z-10">
                <p className="text-sm text-white font-medium uppercase tracking-widest flex items-center gap-2">
                  <Leaf className="w-4 h-4" /> Eco-conscious Electric SUVs
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The A La Carte Collection (Upsells for ALL tiers) */}
      <section className="relative w-full py-24 px-6 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
              A La Carte
            </h2>
            <p className="text-zinc-400 font-light text-xl">
              Enhance any trip. Available as add-ons for our Private routes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Perk 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-300">
              <MapPin strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-3">The Express Detours</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Turn a transit day into an exploration. Add curated stops along your route, like the kaqchikel Mayan capital of Iximché, or enjoy local cuisine at restaurants along the way.
              </p>
            </div>

            {/* Perk 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-300">
              <Coffee strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-3">The Road Cooler</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Pre-stocked and ready for the highlands. Enjoy ice-cold local beverages, mineral water, or select snacks waiting for you as soon as you board.
              </p>
            </div>

            {/* Perk 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-300 flex flex-col">
              <div>
                <Wifi strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-3">Instant Connectivity</h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  Don't waste time hunting for Wi-Fi. We provide ready-to-use local SIM cards upon boarding so you stay connected.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-zinc-800/50">
                <Link 
                  href="/journal/guatemala-sim-card-esim-guide" 
                  className="group inline-flex items-center gap-2 text-xs font-medium tracking-widest text-zinc-400 hover:text-white uppercase transition-colors"
                >
                  Read our SIM guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Footer / CTA */}
      <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center border-t border-zinc-900 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-10">
          Ready to explore Guatemala?
        </h2>
        <Link 
          href="/contact" 
          className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 text-sm uppercase tracking-widest font-bold overflow-hidden rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative z-10 flex items-center gap-3">
            Book Your Ride
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-zinc-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </Link>
      </section>

    </div>
  );
}