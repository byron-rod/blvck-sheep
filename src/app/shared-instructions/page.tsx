"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Map,
  CarFront,
  Users,
  Smartphone,
  Timer,
  MapPin,
} from "lucide-react";

type Lang = "en" | "es";
type Tab = "process" | "locations";

export default function SharedInstructionsPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeTab, setActiveTab] = useState<Tab>("process");

  const tabs: { id: Tab; label: Record<Lang, string> }[] = [
    { id: "process", label: { en: "Boarding Process", es: "Proceso de Abordaje" } },
    { id: "locations", label: { en: "Locations", es: "Ubicaciones" } },
  ];

  const content = {
    title: {
      en: "Shared Shuttle Guide",
      es: "Guía de Servicio Compartido",
    },
    subtitle: {
      en: "Quick guide to understand how boarding works on our shared shuttles.",
      es: "Guía rápida para entender cómo funciona el abordaje de nuestros viajes compartidos.",
    },
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-zinc-800">
      <div className="container mx-auto max-w-5xl py-24 px-6 lg:px-8">
        
        {/* Top Bar: Language Toggle */}
        <div className="flex justify-end mb-12">
          <div className="relative flex items-center bg-zinc-900/50 p-1 rounded-full border border-zinc-800 shrink-0 shadow-lg backdrop-blur-md">
            {(["en", "es"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`relative px-6 py-2.5 text-sm font-medium uppercase tracking-widest rounded-full transition-colors z-10 ${
                  lang === l ? "text-black" : "text-zinc-400 hover:text-white"
                }`}
              >
                {lang === l && (
                  <motion.div
                    layoutId="active-lang-shared"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {l === "en" ? "ENG" : "ESP"}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light tracking-tight text-white"
          >
            {content.title[lang]}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {content.subtitle[lang]}
          </motion.p>
        </div>

        {/* Tab Navigation Pill UI */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-zinc-900/40 p-1.5 rounded-2xl border border-zinc-800/50 backdrop-blur-sm overflow-x-auto w-full md:w-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-3 text-sm md:text-base font-medium rounded-xl transition-colors whitespace-nowrap z-10 ${
                  activeTab === tab.id ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-zinc-800 rounded-xl -z-10 border border-zinc-700/50"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "process" && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                <div className="mb-10 text-center">
                  <p className="text-xl text-zinc-300 font-light">
                    {lang === "en" 
                      ? "The Shared service operates with collection logistics:" 
                      : "El servicio Compartido opera con una logística de recolección:"}
                  </p>
                </div>
                
                <div className="ml-6 md:ml-8">
                  {/* Item 1 */}
                  <div className="relative pl-10 md:pl-12 group border-l border-zinc-800 pb-12">
                    <div className="absolute -left-[24.5px] top-0 bg-black border-2 border-zinc-800 w-12 h-12 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                      <Map size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-2 pt-2">
                      {lang === "en" ? "Collection Route" : "Ruta de recolección"}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {lang === "en" 
                        ? "The driver organizes an efficient route navigating through various accommodations or meeting points to pick up each passenger." 
                        : "El piloto organiza una ruta eficiente recorriendo los distintos hospedajes o puntos de encuentro para recoger a cada pasajero."}
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="relative pl-10 md:pl-12 group border-l border-zinc-800 pb-12">
                    <div className="absolute -left-[24.5px] top-0 bg-black border-2 border-zinc-800 w-12 h-12 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                      <Clock size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-2 pt-2">
                      {lang === "en" ? "Estimated arrival time" : "Hora estimada de llegada"}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {lang === "en" 
                        ? "Pick-up time depends on your hotel or Airbnb's location on the daily route." 
                        : "La hora en que pasen por ti dependerá de la ubicación de tu hotel o Airbnb dentro de la ruta del día."}
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="relative pl-10 md:pl-12 group border-l border-zinc-800 pb-12">
                    <div className="absolute -left-[24.5px] top-0 bg-black border-2 border-zinc-800 w-12 h-12 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                      <CarFront size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-2 pt-2">
                      {lang === "en" ? "If you are first on the route" : "Si eres de los primeros en la ruta"}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {lang === "en" 
                        ? "Please be 100% ready 10 minutes before the scheduled time." 
                        : "Te pedimos estar 100% listo 10 minutos antes de la hora programada."}
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="relative pl-10 md:pl-12 group border-l border-zinc-800 pb-12">
                    <div className="absolute -left-[24.5px] top-0 bg-black border-2 border-zinc-800 w-12 h-12 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                      <Users size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-2 pt-2">
                      {lang === "en" ? "If you are further along" : "Si estás más adelante en la ruta"}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {lang === "en" 
                        ? "The unit will take a few extra minutes while completing previous stops. Wait times vary based on passenger volume, please be patient." 
                        : "La unidad tardará algunos minutos adicionales en llegar mientras completa las paradas previas. Tiempos de espera varían a la cantidad de gente que viaja ese día, sé paciente."}
                    </p>
                  </div>

                  {/* Item 5 */}
                  <div className="relative pl-10 md:pl-12 group border-l border-zinc-800 pb-12">
                    <div className="absolute -left-[24.5px] top-0 bg-black border-2 border-zinc-800 w-12 h-12 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                      <Smartphone size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-2 pt-2">
                      {lang === "en" ? "Active communication" : "Comunicación activa"}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {lang === "en" 
                        ? "It is essential to have mobile signal, data, or active connection so the coordinator can reach you with updates." 
                        : "Es indispensable contar con señal, datos móviles o conexión activa en tu teléfono para que el coordinador pueda comunicarse contigo ante cualquier actualización."}
                    </p>
                  </div>

                  {/* Item 6 */}
                  <div className="relative pl-10 md:pl-12 group border-l border-transparent">
                    <div className="absolute -left-[24.5px] top-0 bg-black border-2 border-zinc-800 w-12 h-12 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                      <Timer size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-2 pt-2">
                      {lang === "en" ? "Punctuality" : "Puntualidad"}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {lang === "en" 
                        ? "We appreciate you being attentive and ready at the indicated time to avoid delaying the group." 
                        : "Agradecemos estar atentos y listos a la hora indicada para evitar retrasos en el itinerario de todo el grupo."}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "locations" && (
              <motion.div
                key="locations"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
              >
                {/* Card 1 */}
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-3xl p-8 flex flex-col items-start hover:bg-zinc-900/50 transition-colors">
                  <div className="bg-zinc-800/40 p-3 rounded-2xl mb-6 text-zinc-300">
                    <MapPin size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Antigua</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {lang === "en" 
                      ? "Weekdays: Pick-up at your hotel if located near the Central Park. Weekends: Due to traffic restrictions, pick-up is strictly at a central meeting point: Bloom Hostel." 
                      : "Entre semana: Te recogen en tu hotel si está cercano al Parque Central. Fines de semana: Debido a restricciones de tráfico, el único punto de encuentro estricto es en Bloom Hostel."}
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-3xl p-8 flex flex-col items-start hover:bg-zinc-900/50 transition-colors">
                  <div className="bg-zinc-800/40 p-3 rounded-2xl mb-6 text-zinc-300">
                    <MapPin size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Panajachel</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {lang === "en" 
                      ? "Pick-up at your hotel within the central area (near Calle Santander), or at the public docks (Tzanjuyú) if traveling from another lake village." 
                      : "Recogida en tu hotel en el área central (cerca de Calle Santander), o directamente en los muelles públicos (Tzanjuyú) si viajas desde otro pueblo del lago."}
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-3xl p-8 flex flex-col items-start hover:bg-zinc-900/50 transition-colors">
                  <div className="bg-zinc-800/40 p-3 rounded-2xl mb-6 text-zinc-300">
                    <MapPin size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">
                    {lang === "en" ? "Guatemala City" : "Ciudad de Guatemala"}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {lang === "en" 
                      ? "Pick-ups and drop-offs are limited to the Airport and nearby hubs: Zone 13 (Hotel Americas), Zone 10 (Westin Camino Real), Zone 9 (Hotel Barcelo), and Zone 4 (Cuatro Grados Norte)." 
                      : "Abordaje y llegadas se limitan al Aeropuerto y puntos de encuentro cercanos: Zona 13 (Hotel Américas), Zona 10 (Westin Camino Real), Zona 9 (Hotel Barceló) y Zona 4 (Cuatro Grados Norte)."}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
