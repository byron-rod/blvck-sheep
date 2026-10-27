"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  FileText,
  Route as MapRoute,
  Sparkles,
  BookOpen,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Compass,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Lang = "en" | "es";

export default function SuccessPage() {
  const { activeLanguage, setActiveLanguage } = useLanguage();
  const [lang, setLang] = useState<Lang>(activeLanguage || "en");

  // Keep local state in sync if global context changes
  useEffect(() => {
    if (activeLanguage && (activeLanguage === "en" || activeLanguage === "es")) {
      setLang(activeLanguage);
    }
  }, [activeLanguage]);

  // Update browser tab title dynamically
  useEffect(() => {
    document.title =
      lang === "en"
        ? "Payment Successful | Blvck Sheep Concierge"
        : "¡Pago Exitoso! | Blvck Sheep Concierge";
  }, [lang]);

  const handleLanguageChange = (newLang: Lang) => {
    setLang(newLang);
    if (setActiveLanguage) {
      setActiveLanguage(newLang);
    }
  };

  const content = {
    badge: {
      en: "Payment Confirmed",
      es: "Pago Confirmado",
    },
    hero: {
      title: {
        en: "Payment Successful!",
        es: "¡Pago Exitoso!",
      },
      subtitle: {
        en: "Thank you for choosing Blvck Sheep. Your payment is complete, now we can finish your booking.",
        es: "Gracias por elegir Blvck Sheep. Tu pago está completo, ahora podemos finalizar tu reserva.",
      },
      receiptNotice: {
        en: "Can't find the email? Please check your spam or promotions folder.",
        es: "¿No encuentras el correo? Por favor revisa tu carpeta de spam o promociones.",
      },
    },
    bentoHeading: {
      title: {
        en: "Next Steps & Trip Resources",
        es: "Siguientes Pasos y Recursos de Viaje",
      },
      subtitle: {
        en: "Essential information, logistics, and insider recommendations for your upcoming journey.",
        es: "Información esencial, logística y recomendaciones locales para tu próximo viaje.",
      },
    },
    cards: [
      {
        id: "terms",
        href: "/terms-conditions",
        icon: FileText,
        tag: { en: "Essential Policy", es: "Política Esencial" },
        title: {
          en: "Terms & Conditions",
          es: "Términos y Condiciones",
        },
        description: {
          en: "Review our essential policies regarding luggage, cancellations, and waiting times.",
          es: "Revisa nuestras políticas esenciales sobre equipaje, cancelaciones y tiempos de espera.",
        },
        cta: { en: "View Policies", es: "Ver Políticas" },
      },
      {
        id: "shared-instructions",
        href: "/shared-instructions",
        icon: MapRoute,
        tag: { en: "Boarding & Logistics", es: "Abordaje y Logística" },
        title: {
          en: "Boarding Guide",
          es: "Guía de Abordaje",
        },
        description: {
          en: "Traveling on a shared route? Read our quick guide on pick-up logistics and locations.",
          es: "¿Viajas en ruta compartida? Lee nuestra guía rápida sobre la logística y puntos de abordaje.",
        },
        cta: { en: "Read Boarding Guide", es: "Leer Guía de Abordaje" },
      },
      {
        id: "detours",
        href: "/services/detours",
        icon: Sparkles,
        tag: { en: "Curated Stops", es: "Paradas Curadas" },
        title: {
          en: "Express Detours",
          es: "Desvíos Express",
        },
        description: {
          en: "Enhance your private trip by adding curated stops like Hobbitenango or Iximché.",
          es: "Mejora tu viaje privado agregando paradas seleccionadas como Hobbitenango o Iximché.",
        },
        cta: { en: "Explore Detours", es: "Explorar Desvíos" },
      },
      {
        id: "journal",
        href: "/journal",
        icon: BookOpen,
        tag: { en: "Insider Guide", es: "Guía de Expertos" },
        title: {
          en: "Travel Blog",
          es: "Blog de Viajes",
        },
        description: {
          en: "Discover local tips, recommendations, and secrets to make the most of Guatemala.",
          es: "Descubre consejos locales, recomendaciones y secretos para disfrutar al máximo Guatemala.",
        },
        cta: { en: "Discover Stories", es: "Descubrir Artículos" },
      },
    ],
    support: {
      badge: {
        en: "Concierge Desk",
        es: "Mesa de Concierge",
      },
      title: {
        en: "Need Immediate Assistance?",
        es: "¿Necesitas Asistencia Inmediata?",
      },
      helperText: {
        en: "Have questions about your booking? We are here to help.",
        es: "¿Tienes dudas sobre tu reserva? Estamos aquí para ayudarte.",
      },
      buttonText: {
        en: "Contact Support",
        es: "Contactar Soporte",
      },
      availability: {
        en: "Direct WhatsApp Line • Fast response time",
        es: "Línea directa de WhatsApp • Respuesta rápida",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-zinc-800 overflow-hidden">
      {/* Ambient background lighting effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 -right-40 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px]" />

      <div className="container relative mx-auto max-w-5xl py-16 md:py-24 px-6 lg:px-8">
        
        {/* Top Bar: Language Toggle */}
        <div className="flex justify-end mb-10 md:mb-14">
          <div className="relative flex items-center bg-zinc-900/60 p-1 rounded-full border border-zinc-800/80 shadow-2xl backdrop-blur-xl">
            {(["en", "es"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => handleLanguageChange(l)}
                className={`relative px-6 py-2 text-xs font-semibold uppercase tracking-widest rounded-full transition-colors z-10 ${
                  lang === l ? "text-black" : "text-zinc-400 hover:text-white"
                }`}
                aria-label={`Switch to ${l === "en" ? "English" : "Spanish"}`}
              >
                {lang === l && (
                  <motion.div
                    layoutId="active-lang-success"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {l === "en" ? "ENG" : "ESP"}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-16 md:space-y-20"
        >
          {/* Hero / Thank You Section */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            {/* Top Icon with multi-layer emerald glow */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-zinc-900/80 border border-emerald-500/30 text-emerald-400 shadow-[0_0_60px_-15px_rgba(16,185,129,0.35)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 rounded-3xl bg-emerald-500/10 blur-xl animate-pulse" />
              <CheckCircle className="relative h-12 w-12 text-emerald-400 stroke-[1.8]" />
            </motion.div>

            {/* Pill Confirmation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 -ml-3.5" />
              {content.badge[lang]}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
              {content.hero.title[lang]}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-4">
              {content.hero.subtitle[lang]}
            </p>

            {/* Receipt Notice Note */}
            <p className="text-xs text-zinc-500 font-normal">
              {content.hero.receiptNotice[lang]}
            </p>
          </motion.div>

          {/* Bento Box Layout: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800/80 pb-5 gap-2">
              <div>
                <h2 className="text-2xl font-light tracking-tight text-white">
                  {content.bentoHeading.title[lang]}
                </h2>
                <p className="text-sm text-zinc-400 font-light">
                  {content.bentoHeading.subtitle[lang]}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {content.cards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <Link
                    key={card.id}
                    href={card.href}
                    className="group relative flex flex-col justify-between p-7 lg:p-8 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 backdrop-blur-md shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Subtle hover gradient highlight inside card */}
                    <div className="pointer-events-none absolute -right-16 -top-16 w-48 h-48 bg-white/[0.03] rounded-full blur-2xl group-hover:bg-emerald-500/[0.06] transition-colors duration-500" />

                    <div>
                      {/* Top Header of Card: Icon & Tag */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950/80 border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:border-zinc-700 group-hover:scale-105 transition-all duration-300 shadow-inner">
                          <IconComponent className="h-6 w-6 stroke-[1.8]" />
                        </div>
                        <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 px-3 py-1 rounded-full bg-zinc-800/40 border border-zinc-800/60">
                          {card.tag[lang]}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-emerald-300 transition-colors duration-200 mb-3">
                        {card.title[lang]}
                      </h3>

                      {/* Card Description */}
                      <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                        {card.description[lang]}
                      </p>
                    </div>

                    {/* Bottom CTA Arrow Link */}
                    <div className="pt-2 flex items-center text-xs font-medium uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors duration-200">
                      <span>{card.cta[lang]}</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom Action: VIP Concierge & WhatsApp Support */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 p-8 md:p-10 border border-zinc-800/90 shadow-2xl backdrop-blur-xl"
          >
            {/* Ambient accent glow */}
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{content.support.badge[lang]}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white">
                  {content.support.title[lang]}
                </h3>
                <p className="text-base text-zinc-400 font-light leading-relaxed">
                  {content.support.helperText[lang]}
                </p>
                <p className="text-xs text-zinc-500 font-normal">
                  {content.support.availability[lang]}
                </p>
              </div>

              {/* Stylish WhatsApp Action Button */}
              <div className="shrink-0 w-full md:w-auto">
                <a
                  href="https://wa.me/50255116881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold tracking-wide text-sm transition-all duration-300 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                  id="whatsapp-support-btn"
                >
                  <MessageCircle className="w-5 h-5 fill-current stroke-none" />
                  <span>{content.support.buttonText[lang]}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
