"use client";

import { motion, AnimatePresence } from "framer-motion";
import ItineraryCard from "@/components/ItineraryCard";
import { itinerariesData } from "@/data/itineraries";
import { Map, Home, Compass } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ItinerariesPage() {
  const { activeLanguage, setActiveLanguage } = useLanguage();

  const filteredItineraries = itinerariesData.filter(
    (item) => item.language === activeLanguage
  );

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* ENCABEZADO Y TOGGLE ALINEADOS */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              {activeLanguage === "en" ? (
                <>
                  Popular <br className="hidden md:block" /> Itinerary Ideas
                </>
              ) : (
                <>
                  Ideas de <br className="hidden md:block" /> Itinerarios
                </>
              )}
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              {activeLanguage === "en"
                ? "Explore our most popular route ideas across Guatemala, tailored to different travel styles. Use them as inspiration for your trip—we can advise you on how to optimize your route and handle all your transportation between destinations."
                : "Explora nuestras ideas de rutas más populares por Guatemala según tu estilo de viaje. Úsalas como inspiración: podemos asesorarte para optimizar tu itinerario, aprovechar mejor tu tiempo y encargarnos de todo tu transporte entre destinos."}
            </p>
          </div>

          {/* Toggle Language */}
          <nav
            aria-label={
              activeLanguage === "en" ? "Language selector" : "Selector de idioma"
            }
            className="relative flex items-center bg-zinc-900/50 p-1 rounded-full border border-zinc-800 self-start md:self-auto shrink-0"
          >
            {(["en", "es"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                aria-label={
                  lang === "en" ? "Switch to English" : "Cambiar a Español"
                }
                aria-pressed={activeLanguage === lang}
                className={`relative px-6 py-2.5 text-sm font-medium uppercase tracking-widest rounded-full transition-colors z-10 ${
                  activeLanguage === lang
                    ? "text-black"
                    : "text-zinc-400 hover:text-white"
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
          </nav>
        </header>

        {/* GRID DE ITINERARIOS */}
        <section aria-labelledby="itineraries-heading">
          <h2 id="itineraries-heading" className="sr-only">
            {activeLanguage === "en"
              ? "Popular Itinerary Ideas"
              : "Ideas de Itinerarios Populares"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItineraries.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.language}`}
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
                    heroImage={item.heroImage}
                    duration={item.duration}
                    highlights={item.highlights}
                    language={item.language}
                    index={index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* SECCIÓN: THE BLVCK SHEEP APPROACH */}
        <section
          className="mt-32 pt-24 border-t border-zinc-900"
          aria-labelledby="approach-heading"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4"
            aria-hidden="true"
          >
            {activeLanguage === "en"
              ? "The Blvck Sheep Approach"
              : "El Enfoque Blvck Sheep"}
          </p>
          <h2
            id="approach-heading"
            className="text-4xl md:text-5xl font-light tracking-tight mb-16"
          >
            {activeLanguage === "en"
              ? "Optimize Your Time in Guatemala"
              : "Optimiza tu Tiempo en Guatemala"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-zinc-950 border border-zinc-800/50 p-10 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-500">
              <Map
                strokeWidth={1}
                className="w-8 h-8 text-zinc-400 mb-6"
                aria-hidden="true"
                focusable="false"
              />
              <h3 className="text-xl font-medium mb-4">
                {activeLanguage === "en"
                  ? "Seamless Transit Logistics"
                  : "Logística de Tránsito"}
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en"
                  ? "More than just a ride. We help you connect your destinations efficiently across Guatemala, offering private and shared transfers that match your schedule."
                  : "Algo más que un simple viaje. Te ayudamos a conectar tus destinos de forma eficiente por toda Guatemala, con traslados privados y compartidos adaptados a tus tiempos."}
              </p>
            </article>

            <article className="bg-zinc-950 border border-zinc-800/50 p-10 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-500">
              <Home
                strokeWidth={1}
                className="w-8 h-8 text-zinc-400 mb-6"
                aria-hidden="true"
                focusable="false"
              />
              <h3 className="text-xl font-medium mb-4">
                {activeLanguage === "en"
                  ? "Route Advisory & Favorite Stays"
                  : "Asesoría de Ruta y Estadías"}
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en"
                  ? "Not sure how many nights to spend at the lake or in what order to visit each spot? We advise you on optimizing your pacing and share our favorite hostels and hotels."
                  : "¿No estás seguro de cuántas noches pasar en el lago o en qué orden visitar cada lugar? Te asesoramos para optimizar tus tiempos y te compartimos nuestros hostales y hoteles favoritos."}
              </p>
            </article>

            <article className="bg-zinc-950 border border-zinc-800/50 p-10 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-500">
              <Compass
                strokeWidth={1}
                className="w-8 h-8 text-zinc-400 mb-6"
                aria-hidden="true"
                focusable="false"
              />
              <h3 className="text-xl font-medium mb-4">
                {activeLanguage === "en"
                  ? "The Express Detours"
                  : "Los Detours Express"}
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en"
                  ? "Transform a transit day into an expedition. Enhance your private transfer with strategic stops—from soaking in volcanic hot springs to exploring Mayan ruins on the way to your next stop."
                  : "Transforma un día de tránsito en una expedición. Mejora tu traslado privado con paradas estratégicas: desde aguas termales volcánicas hasta ruinas mayas de camino a tu próximo destino."}
              </p>
            </article>
          </div>

          <div className="mt-20 flex justify-center">
            <Link
              href={`https://wa.me/50255116881?text=${encodeURIComponent(
                activeLanguage === "en"
                  ? "Hello!, I would like advice on optimizing my route and transportation in Guatemala."
                  : "¡Hola!, Me gustaría recibir asesoría para optimizar mi ruta y transporte en Guatemala."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                activeLanguage === "en"
                  ? "Ask for Route Advice via WhatsApp"
                  : "Pedir Asesoría de Ruta por WhatsApp"
              }
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-zinc-200 transition-colors"
            >
              {activeLanguage === "en"
                ? "Optimize Your Route with Us"
                : "Optimiza tu Ruta con Nosotros"}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
