"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { destinationsData } from "@/data/destinations";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoShareOutline } from "react-icons/io5";
import { useLanguage } from "@/context/LanguageContext";

const contentDict = {
  en: {
    notFound: "Destination Not Found",
    back: "Back",
    guideTag: "Destination Guide",
    whereToRest: "Where to Rest",
    accommodationHubs: "Accommodation Hubs",
    linkCopied: "Link copied to clipboard!"
  },
  es: {
    notFound: "Destino no Encontrado",
    back: "Volver",
    guideTag: "Guía de Destino",
    whereToRest: "Dónde Descansar",
    accommodationHubs: "Colección de Estancias",
    linkCopied: "¡Enlace copiado al portapapeles!"
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default function DestinationSlugClient({ params }: Props) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const router = useRouter();
  const { activeLanguage, setActiveLanguage } = useLanguage();

  const currentContent = contentDict[activeLanguage];

  const destination = destinationsData.find(
    (item) => item.id === slug && item.language === activeLanguage
  );

  // If not found, show minimal 404
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-light">{currentContent.notFound}</h1>
      </div>
    );
  }

  const handleShare = async () => {
    const shareData = {
      title: `Blvck Sheep: ${destination.title}`,
      text: activeLanguage === "es" 
        ? `¡Descubre ${destination.title} en Guatemala!` 
        : `Check out ${destination.title} in Guatemala!`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert(currentContent.linkCopied);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black pb-24">
      {/* Top Nav Overlay - Now Fixed and Scrollable */}
            <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 mix-blend-difference ">
              <button
                onClick={() => router.back()}
                className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity pointer-events-auto"
              >
                <IoChevronBack className="text-xl group-hover:-translate-x-1 transition-transform" />
                {currentContent.back}
              </button>
              <button onClick={handleShare} className="text-xl hover:opacity-70 transition-opacity pointer-events-auto">
                <IoShareOutline />
              </button>
            </nav>

      {/* Cinematic Hero */}
      <section className="relative min-h-screen w-full flex flex-col justify-end pb-12 pt-40 px-6 md:px-12 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImage}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          {/* Magazine-style vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Flex-col-reverse pone el toggle arriba en móvil, y a la derecha en desktop */}
            <header className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-4">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs uppercase tracking-[0.3em] font-medium border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {currentContent.guideTag}
                  </span>
                </div>
                
                {/* Ajustamos los tamaños de texto para que fluyan mejor */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-4">
                  {destination.title}
                </h1>
                
                <h2 className="text-xl md:text-2xl text-zinc-300 font-light tracking-wide mb-6">
                  {destination.subtitle}
                </h2>
                
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed mix-blend-screen max-w-2xl">
                  {destination.overview}
                </p>
              </div>

              {/* Language Toggle */}
              <nav aria-label={activeLanguage === "en" ? "Language selector" : "Selector de idioma"} className="relative flex items-center bg-zinc-900/50 p-1 rounded-full border border-zinc-800 self-start md:self-auto shrink-0 md:mb-6">
                {(["en", "es"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLanguage(lang)}
                    aria-label={lang === "en" ? "Switch to English" : "Cambiar a Español"}
                    aria-pressed={activeLanguage === lang}
                    className={`relative px-6 py-2.5 text-sm font-medium uppercase tracking-widest rounded-full transition-colors z-10 ${
                      activeLanguage === lang ? "text-black" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {activeLanguage === lang && (
                      <motion.div
                        layoutId={`active-lang-destinations-${lang}`} 
                        className="absolute inset-0 bg-white rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {lang === "en" ? "ENG" : "ESP"}
                  </button>
                ))}
              </nav>
            </header>
          </motion.div>
        </div>
      </section>

      {/* Destination Sections */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto flex flex-col gap-32">
          {destination.sections.map((section, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="flex flex-col gap-6 border-t border-zinc-900 pt-16"
             >
               <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
                 {section.heading}
               </h3>
               <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                 {section.content}
               </p>
               {section.actionText && section.actionLink && (
                 <div className="mt-8">
                   <Link
                     href={section.actionLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block bg-white text-black px-10 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-zinc-200 transition-colors rounded-full"
                   >
                     {section.actionText}
                   </Link>
                 </div>
               )}
             </motion.div>
          ))}
        </div>
      </section>

      {/* Accommodation Portals Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">{currentContent.whereToRest}</h2>
            <h3 className="text-4xl md:text-5xl font-light tracking-tight">{currentContent.accommodationHubs}</h3>
          </motion.div>

          {destination.accommodationPortals && destination.accommodationPortals.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {destination.accommodationPortals.map((portal) => (
                <Link key={portal.title} href={portal.link} className="block group">
                  <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-none">
                    <img
                      src={portal.image}
                      alt={portal.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500" />
                    
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                      <h4 className="text-3xl md:text-4xl font-semibold mb-4 text-white group-hover:-translate-y-2 transition-transform duration-500">
                        {portal.title}
                      </h4>
                      <p className="text-zinc-300 text-lg leading-relaxed opacity-0 hidden sm:block md:hidden lg:block group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                        {portal.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
