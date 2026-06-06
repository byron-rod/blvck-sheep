"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoShareOutline } from "react-icons/io5";
import {
  MapPin,
  Mountain,
  Leaf,
  Flame,
  Droplets,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ExpressDetoursPage() {
  const router = useRouter();
  const { activeLanguage, setActiveLanguage } = useLanguage();

  const handleShare = async () => {
    const shareData = {
      title:
        activeLanguage === "en"
          ? `Express Detours | Blvck Sheep`
          : `Desvíos Express | Blvck Sheep`,
      text:
        activeLanguage === "en"
          ? `Turn a transit day into an exploration. Curated stops along your route in Guatemala.`
          : `Convierte un día de tránsito en una exploración. Paradas curadas en tu ruta por Guatemala.`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert(
          activeLanguage === "en"
            ? "Link copied to clipboard!"
            : "¡Enlace copiado al portapapeles!",
        );
      }
    } catch (err) {
      console.error(
        activeLanguage === "en" ? "Error sharing:" : "Error al compartir:",
        err,
      );
    }
  };

  const detours = [
    {
      id: "chichicastenango",
      icon: ShoppingBag,
      title: "Mercado de Chichicastenango",
      tags: activeLanguage === "en" ? "Culture & Crafts" : "Cultura y Artesanías",
      desc:
        activeLanguage === "en"
          ? "Dive into the vibrant colors and traditions of one of Central America's largest indigenous markets. Perfect for finding authentic textiles and crafts."
          : "Sumérgete en los colores vibrantes y tradiciones de uno de los mercados indígenas más grandes de Centroamérica. Perfecto para encontrar textiles y artesanías auténticas.",
    },
    {
      id: "hobbitenango",
      icon: Mountain,
      title: "Hobbitenango",
      tags: activeLanguage === "en" ? "Views & Magic" : "Vistas y Magia",
      desc:
        activeLanguage === "en"
          ? "Experience breathtaking views and whimsical architecture nestled in the mountains near Antigua. A magical stop for photos and relaxation."
          : "Experimenta vistas impresionantes y arquitectura caprichosa en las montañas cerca de Antigua. Una parada mágica para tomar fotos y relajarte.",
    },
    {
      id: "iximche",
      icon: MapPin,
      title: "Iximché",
      tags: activeLanguage === "en" ? "Mayan History" : "Historia Maya",
      desc:
        activeLanguage === "en"
          ? "Explore the ancient ruins of the Kaqchikel Mayan capital. Walk among the temples and plazas while learning about pre-Columbian history."
          : "Explora las ruinas de la antigua capital Maya Kaqchikel. Camina entre templos y plazas mientras aprendes sobre la historia precolombina.",
    },
    {
      id: "auto-safari",
      icon: Leaf,
      title: "Auto Safari Chapín",
      tags: activeLanguage === "en" ? "Wildlife & Adventure" : "Vida Silvestre y Aventura",
      desc:
        activeLanguage === "en"
          ? "Take a wild detour through a drive-through safari park. Get up close with exotic animals in a safe, unique environment before continuing your trip."
          : "Toma un desvío salvaje por un safari drive-through. Acércate a animales exóticos en un entorno seguro y único antes de continuar tu viaje.",
    },
    {
      id: "pacaya",
      icon: Flame,
      title: "Volcán Pacaya",
      tags: activeLanguage === "en" ? "Active Volcano Trek" : "Trekking en Volcán Activo",
      desc:
        activeLanguage === "en"
          ? "Hike one of Guatemala's most accessible active volcanoes. Walk across dramatic lava fields and roast marshmallows over geothermal hotspots."
          : "Escala uno de los volcanes activos más accesibles de Guatemala. Camina sobre dramáticos campos de lava y asa malvaviscos en puntos geotérmicos.",
    },
    {
      id: "georginas",
      icon: Droplets,
      title: "Fuentes Georginas",
      tags: activeLanguage === "en" ? "Hot Springs & Cloud Forest" : "Aguas Termales y Bosque Nuboso",
      desc:
        activeLanguage === "en"
          ? "Relax in natural hot springs surrounded by a lush cloud forest. The perfect restorative break during a long transit day."
          : "Relájate en aguas termales naturales rodeadas de un exuberante bosque nuboso. El descanso perfecto durante un largo día de tránsito.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: activeLanguage === "en" ? "Select Route" : "Elige tu Ruta",
      desc:
        activeLanguage === "en"
          ? "Choose your main private transfer route between destinations."
          : "Selecciona tu ruta principal de traslado privado entre destinos.",
    },
    {
      num: "02",
      title: activeLanguage === "en" ? "Add Detour" : "Agrega un Desvío",
      desc:
        activeLanguage === "en"
          ? "Select a curated detour to turn your transit day into an experience."
          : "Selecciona un desvío curado para convertir tu día de tránsito en una experiencia.",
    },
    {
      num: "03",
      title: activeLanguage === "en" ? "Explore Freely" : "Explora Libremente",
      desc:
        activeLanguage === "en"
          ? "Your driver waits securely with your luggage while you enjoy the stop."
          : "Tu piloto espera de forma segura con tu equipaje mientras disfrutas la parada.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white selection:bg-zinc-800 selection:text-white relative">
      {/* Top Nav Overlay (Back & Share) */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 pointer-events-none">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity pointer-events-auto text-white"
        >
          <IoChevronBack className="text-xl group-hover:-translate-x-1 transition-transform" />
          {activeLanguage === "en" ? "Back" : "Atrás"}
        </button>
        <button
          onClick={handleShare}
          className="text-xl hover:opacity-70 transition-opacity pointer-events-auto text-white"
        >
          <IoShareOutline />
        </button>
      </nav>

      {/* Language Toggle */}
      <div className="w-full pt-32 px-6 md:px-12 max-w-7xl mx-auto flex justify-end relative z-40">
        <div className="relative flex items-center bg-zinc-900/50 p-1 rounded-full border border-zinc-800 self-start md:self-auto shrink-0">
          {(["en", "es"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLanguage(lang)}
              className={`relative px-6 py-2.5 text-sm font-medium uppercase tracking-widest rounded-full transition-colors z-10 ${
                activeLanguage === lang
                  ? "text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeLanguage === lang && (
                <motion.div
                  layoutId="active-lang-detours"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {lang === "en" ? "ENG" : "ESP"}
            </button>
          ))}
        </div>
      </div>

      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full pt-20 pb-24 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
            {activeLanguage === "en" ? "Express Detours" : "Desvíos Express"}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            {activeLanguage === "en"
              ? "Turn a transit day into an exploration day. Stop at Guatemala's most remarkable spots without the stress of logistics."
              : "Convierte un día de tránsito en un día de exploración. Detente en los lugares más increíbles de Guatemala sin el estrés de la logística."}
          </p>
        </div>
      </section>

      {/* 2. How It Works Section */}
      <section className="relative w-full py-20 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
              {activeLanguage === "en" ? "How It Works" : "Cómo Funciona"}
            </h2>
            <p className="text-zinc-400 font-light text-xl">
              {activeLanguage === "en"
                ? "Three simple steps to elevate your journey."
                : "Tres sencillos pasos para elevar tu viaje."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 pointer-events-none" />

            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-zinc-950 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center z-10 hover:border-zinc-500 transition-colors duration-500">
                <span className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-6">
                  {activeLanguage === "en" ? "Step" : "Paso"} {step.num}
                </span>
                <h3 className="text-2xl font-light text-white mb-4">{step.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Grid Layout for Selected Detours */}
      <section className="relative w-full py-24 px-6 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
              {activeLanguage === "en" ? "Curated Stops" : "Paradas Curadas"}
            </h2>
            <p className="text-zinc-400 font-light text-xl">
              {activeLanguage === "en"
                ? "Add one of these highly requested experiences to your private transfer."
                : "Agrega una de estas experiencias a tu traslado privado."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detours.map((detour) => {
              const Icon = detour.icon;
              return (
                <div
                  key={detour.id}
                  className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 hover:bg-zinc-900 hover:border-zinc-600 transition-colors duration-300 flex flex-col"
                >
                  <Icon strokeWidth={1} className="w-10 h-10 text-white mb-6" />
                  <h3 className="text-xl font-medium text-white mb-2">
                    {detour.title}
                  </h3>
                  <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 mb-6 w-fit">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
                      {detour.tags}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">
                    {detour.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center border-t border-zinc-900 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-10">
          {activeLanguage === "en"
            ? "Ready to customize your route?"
            : "¿Listo para personalizar tu ruta?"}
        </h2>
        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 text-sm uppercase tracking-widest font-bold overflow-hidden rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative z-10 flex items-center gap-3">
            {activeLanguage === "en" ? "Build Itinerary" : "Construye tu Itinerario"}
          </span>
          <div className="absolute inset-0 bg-zinc-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </Link>
      </section>
    </div>
  );
}
