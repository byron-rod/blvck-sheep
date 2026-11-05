"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { itinerariesData } from "@/data/itineraries";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoShareOutline } from "react-icons/io5";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  params: Promise<{ id: string }>;
};

const uiText = {
  en: {
    notFound: "Itinerary Not Found",
    back: "Back",
    shareLabel: "Share this itinerary",
    linkCopied: "Link copied to clipboard!",
    editionLabel: "Popular Route Idea",
    featuredStaysHeading: "Route Stops & Recommended Stays",
    moreInfo: "Need transport or advice to optimize this route?",
    inquireButton: "Quote Route Transport",
    hookLabels: {
      wellness: "Wellness & Restoration",
      adrenaline: "Adrenaline & Social Hostels",
      culture: "Heritage & Expedition",
    } as Record<string, string>,
  },
  es: {
    notFound: "Itinerario no Encontrado",
    back: "Volver",
    shareLabel: "Compartir este itinerario",
    linkCopied: "¡Enlace copiado al portapapeles!",
    editionLabel: "Idea de Ruta Popular",
    featuredStaysHeading: "Paradas de la Ruta y Estadías Recomendadas",
    moreInfo: "¿Necesitas transporte o asesoría para optimizar esta ruta?",
    inquireButton: "Cotizar Transporte de Ruta",
    hookLabels: {
      wellness: "Bienestar y Restauración",
      adrenaline: "Adrenalina y Hostales Sociales",
      culture: "Cultura y Expedición",
    } as Record<string, string>,
  },
};

export default function ItineraryDetailPage({ params }: Props) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const router = useRouter();
  const { activeLanguage, setActiveLanguage } = useLanguage();

  // Support both canonical IDs and legacy "-es" IDs
  const normalizedId = id.replace(/-es$/, "");
  const t = uiText[activeLanguage];

  const itinerary =
    itinerariesData.find(
      (item) => item.id === normalizedId && item.language === activeLanguage
    ) || itinerariesData.find((item) => item.id === normalizedId);

  if (!itinerary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-light">{t.notFound}</h1>
      </div>
    );
  }

  const whatsappMessage =
    activeLanguage === "es"
      ? `¡Hola!, Me interesa cotizar el transporte y recibir asesoría para la ruta "${itinerary.title}" (${itinerary.duration}).`
      : `Hello!, I would like to quote transportation and get advice for the "${itinerary.title}" (${itinerary.duration}) route!`;

  const whatsappUrl = `https://wa.me/50255116881?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleShare = async () => {
    const shareData = {
      title: `Blvck Sheep: ${itinerary.title}`,
      text:
        activeLanguage === "es"
          ? `¡Descubre el itinerario ${itinerary.title} en Guatemala!`
          : `Check out the ${itinerary.title} experience in Guatemala!`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert(t.linkCopied);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black pb-28">
      {/* Top Nav Overlay */}
      <nav
        aria-label="Top navigation"
        className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 mix-blend-difference"
      >
        <button
          onClick={() => router.back()}
          aria-label={t.back}
          className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity pointer-events-auto"
        >
          <IoChevronBack
            className="text-xl group-hover:-translate-x-1 transition-transform"
            aria-hidden="true"
            focusable="false"
          />
          {t.back}
        </button>
        <button
          onClick={handleShare}
          aria-label={t.shareLabel}
          className="text-xl hover:opacity-70 transition-opacity pointer-events-auto"
        >
          <IoShareOutline aria-hidden="true" focusable="false" />
        </button>
      </nav>

      {/* Cinematic Hero */}
      <header className="relative min-h-[85vh] w-full flex flex-col justify-end pb-16 pt-36 px-6 md:px-12 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={itinerary.heroImage}
            alt={`${itinerary.title} cover`}
            className="w-full h-full object-cover"
          />
          {/* Magazine-style vignette gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20"
            aria-hidden="true"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-6 md:gap-8">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-xs uppercase tracking-[0.3em] font-medium border border-white/30 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
                    {itinerary.duration}
                  </span>
                  <span className="text-xs text-zinc-300 uppercase tracking-[0.2em]">
                    {t.hookLabels[itinerary.visualHookKey] ||
                      itinerary.visualHookKey}
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-6">
                  {itinerary.title}
                </h1>

                <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8">
                  {itinerary.description}
                </p>

                {itinerary.highlights && itinerary.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {itinerary.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs uppercase tracking-widest text-zinc-200 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Toggle */}
              <nav
                aria-label={
                  activeLanguage === "en"
                    ? "Language selector"
                    : "Selector de idioma"
                }
                className="relative flex items-center bg-zinc-900/70 backdrop-blur-md p-1 rounded-full border border-zinc-800 self-start md:self-auto shrink-0"
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
                        layoutId={`active-lang-itinerary-detail-${lang}`}
                        className="absolute inset-0 bg-white rounded-full -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    {lang === "en" ? "ENG" : "ESP"}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Lookbook: Route & Featured Stays */}
      <section
        aria-labelledby="featured-stays-heading"
        className="py-28 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p
              className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4"
              aria-hidden="true"
            >
              {t.editionLabel}
            </p>
            <h2
              id="featured-stays-heading"
              className="text-4xl md:text-5xl font-light tracking-tight"
            >
              {t.featuredStaysHeading}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-32">
            {itinerary.featuredStays.map((stay, index) => (
              <article
                key={`${stay.name}-${index}`}
                className={`flex flex-col ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-10 md:gap-20`}
              >
                {/* Image Card */}
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-3/5"
                >
                  <figure className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-2xl group m-0 bg-zinc-900">
                    <img
                      src={stay.image}
                      alt={`${stay.name} - ${stay.location}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </figure>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full md:w-2/5 flex flex-col justify-center"
                >
                  <span
                    className="text-sm font-mono text-zinc-500 mb-4"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")} // {stay.location}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                    {stay.name}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {stay.description}
                  </p>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <nav
        aria-label="Bottom navigation"
        className="w-full max-w-5xl mx-auto flex justify-between items-center px-6 py-8"
      >
        <button
          onClick={() => router.back()}
          aria-label={t.back}
          className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity"
        >
          <IoChevronBack
            className="text-xl group-hover:-translate-x-1 transition-transform"
            aria-hidden="true"
            focusable="false"
          />
          {t.back}
        </button>
        <button
          onClick={handleShare}
          aria-label={t.shareLabel}
          className="text-xl hover:opacity-70 transition-opacity"
        >
          <IoShareOutline aria-hidden="true" focusable="false" />
        </button>
      </nav>

      {/* Sticky Bottom Action Bar */}
      <aside
        aria-label="Booking actions"
        className="fixed bottom-0 left-0 w-full z-40 bg-black/85 backdrop-blur-xl border-t border-zinc-900/80 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              {itinerary.title} · {itinerary.duration}
            </p>
            <p className="text-sm font-medium">{t.moreInfo}</p>
          </div>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.inquireButton}: ${itinerary.title}`}
            className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-semibold hover:bg-zinc-200 transition-colors text-center"
          >
            {t.inquireButton}
          </Link>
        </div>
      </aside>
    </div>
  );
}
