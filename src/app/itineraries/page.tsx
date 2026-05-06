"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ItineraryCard from "@/components/ItineraryCard";
import { itinerariesData } from "@/data/itineraries";
import { ArrowRight, Map, Home, Compass } from "lucide-react";
import Link from "next/link";

export default function ItinerariesPage() {
  const [activeLanguage, setActiveLanguage] = useState<"en" | "es">("en");

  const filteredItineraries = itinerariesData.filter((item) => item.language === activeLanguage);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO Y TOGGLE ALINEADOS (Igual que en el Blog) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              {activeLanguage === "en" ? (
                <>
                  Curated <br className="hidden md:block"/> Journeys
                </>
              ) : (
                <>
                  Viajes <br className="hidden md:block"/> Curados
                </>
              )}
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              {activeLanguage === "en"
                ? "Exclusive experiences tailored to your distinctive travel style. Select your path and begin the adventure. Our team can also create custom itineraries for you."
                : "Experiencias exclusivas adaptadas a tu estilo de viaje. Selecciona tu ruta y comienza la aventura. Nuestro equipo también diseña itinerarios 100% a la medida."}
            </p>
          </div>

          {/* Toggle Language (Mismas clases del Blog) */}
          <div className="relative flex items-center bg-zinc-900/50 p-1 rounded-full border border-zinc-800 self-start md:self-auto shrink-0">
            {(["en", "es"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`relative px-6 py-2.5 text-sm font-medium uppercase tracking-widest rounded-full transition-colors z-10 ${
                  activeLanguage === lang ? "text-black" : "text-zinc-400 hover:text-white"
                }`}
              >
                {activeLanguage === lang && (
                  <motion.div
                    layoutId="active-lang-itineraries"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {lang === "en" ? "ENG" : "ESP"}
              </button>
            ))}
          </div>

        </div>
        
        {/* GRID DE ITINERARIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItineraries.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ItineraryCard 
                  title={item.title} 
                  description={item.description}
                  bookingUrl={`/itineraries/${item.id}`} 
                  visualHookKey={item.visualHookKey}
                  index={index} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SECCIÓN: THE BLVCK SHEEP APPROACH */}
        <section className="mt-32 pt-24 border-t border-zinc-900">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
            {activeLanguage === "en" ? "The Blvck Sheep Approach" : "El Enfoque Blvck Sheep"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-16">
            {activeLanguage === "en" ? "Beyond Transportation" : "Más Allá del Transporte"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-zinc-800/50 p-10 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-500">
              <Map strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-6" />
              <h4 className="text-xl font-medium mb-4">
                {activeLanguage === "en" ? "Seamless Transit Logistics" : "Logística de Tránsito Impecable"}
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en"
                  ? "More than just a ride. We engineer your entire logistical route across Guatemala, ensuring flawless, private transitions between destinations in our premium fleet."
                  : "Algo más que un simple viaje. Diseñamos toda tu ruta logística por Guatemala, garantizando transiciones privadas y sin contratiempos en nuestra flota premium."}
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800/50 p-10 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-500">
              <Home strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-6" />
              <h4 className="text-xl font-medium mb-4">
                {activeLanguage === "en" ? "Curated Pacing & Stays" : "Estadías y Ritmo Curados"}
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en"
                  ? "Not sure how many nights to spend at the lake? We provide expert guidance on pacing your trip and unlock our hand-picked portfolio of boutique stays and eco-luxury lodges."
                  : "¿No estás seguro de cuántas noches pasar en el lago? Te brindamos asesoría experta sobre el ritmo de tu viaje y te damos acceso a nuestro portafolio seleccionado de hoteles boutique."}
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800/50 p-10 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-500">
              <Compass strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-6" />
              <h4 className="text-xl font-medium mb-4">
                {activeLanguage === "en" ? "The Express Detours" : "Los Detours Express"}
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en"
                  ? "Transform a transit day into an expedition. We customize your routes with strategic stops—from soaking in volcanic hot springs to exploring hidden Mayan ruins on the way to your next hotel."
                  : "Transforma un día de tránsito en una expedición. Personalizamos tus rutas con paradas estratégicas: desde aguas termales volcánicas hasta ruinas mayas escondidas en el camino a tu hotel."}
              </p>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <Link 
              href={`https://wa.me/50255116881?text=${encodeURIComponent(
                activeLanguage === "en"
                  ? "Hello!, I would like help crafting a custom itinerary in Guatemala."
                  : "¡Hola!, Me gustaría recibir ayuda para diseñar un itinerario a la medida en Guatemala."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-zinc-200 transition-colors"
            >
              {activeLanguage === "en" ? "Craft Your Custom Route" : "Diseña tu Ruta Personalizada"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}