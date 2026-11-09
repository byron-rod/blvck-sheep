"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileText,
  Route as MapRoute,
  Sparkles,
  BookOpen,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Receipt,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import blvckSheepSuccessIcon from "@/assets/images/blvck-sheep-success.jpg";

type Lang = "en" | "es";

interface PaymentReceipt {
  orderId: string;
  name: string;
  email?: string;
  phone?: string;
  currency: string;
  amount: string;
  paymentMethod?: string;
  timestamp?: string;
}

const SAMPLE_PREVIEW_RECEIPT: PaymentReceipt = {
  orderId: "9555-0199",
  name: "Dionelly Garzon",
  email: "nelly_136@hotmail.com",
  phone: "+50769811900",
  currency: "GTQ",
  amount: "530.00",
  paymentMethod: "VISA •••• 1644",
  timestamp: new Date().toISOString(),
};

export default function SuccessPage() {
  const { activeLanguage, setActiveLanguage } = useLanguage();
  const [lang, setLang] = useState<Lang>(activeLanguage || "en");
  const [receipt, setReceipt] = useState<PaymentReceipt | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

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
        ? "Payment Confirmed | Blvck Sheep Concierge"
        : "Pago Confirmado | Blvck Sheep Concierge";
  }, [lang]);

  // Fetch payment receipt from URL params or Google Apps Script webhook cache
  useEffect(() => {
    let isMounted = true;
    const params = new URLSearchParams(window.location.search);

    // 1. Check if preview mode is requested (?preview=true or ?demo=1)
    if (params.get("preview") === "true" || params.get("demo") === "1") {
      setIsPreviewMode(true);
      setReceipt(SAMPLE_PREVIEW_RECEIPT);
      return;
    }

    // 2. Check if explicit receipt parameters were passed in the URL
    const urlAmount = params.get("amount");
    const urlName = params.get("name");
    const urlOrderId =
      params.get("orderId") ||
      params.get("receipt_number") ||
      params.get("checkout_id") ||
      params.get("id");

    if (urlAmount || urlName) {
      setReceipt({
        orderId: urlOrderId || "CONFIRMED",
        name: urlName || "Viajero",
        email: params.get("email") || "",
        phone: params.get("phone") || "",
        currency: params.get("currency") || "GTQ",
        amount: urlAmount || "0.00",
        paymentMethod: params.get("card") || "",
        timestamp: new Date().toISOString(),
      });
      return;
    }

    // 3. Otherwise, query the Google Apps Script endpoint via our Next.js API route
    const fetchReceipt = async (attempt = 1) => {
      try {
        const query = urlOrderId
          ? `?id=${encodeURIComponent(urlOrderId)}`
          : "";
        const res = await fetch(`/api/payment-receipt${query}`, {
          cache: "no-store",
        });
        if (!res.ok) return;
        const data = await res.json();

        if (isMounted && data && data.status === "success" && data.amount) {
          setReceipt({
            orderId: data.orderId || "CONFIRMED",
            name: data.name || "Viajero",
            email: data.email || "",
            phone: data.phone || "",
            currency: data.currency || "GTQ",
            amount: data.amount,
            paymentMethod: data.paymentMethod || "",
            timestamp: data.timestamp || new Date().toISOString(),
          });
        } else if (isMounted && attempt < 3) {
          // Retry after 1.5s in case the Recurrente webhook finishes just after the redirect
          setTimeout(() => fetchReceipt(attempt + 1), 1500);
        }
      } catch (err) {
        console.error("Failed to load payment receipt:", err);
      }
    };

    fetchReceipt();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLanguageChange = (newLang: Lang) => {
    setLang(newLang);
    if (setActiveLanguage) {
      setActiveLanguage(newLang);
    }
  };

  const formatAmount = (currency: string, amount: string) => {
    const num = parseFloat(amount);
    const formatted = isNaN(num)
      ? amount
      : num.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
    if (currency.toUpperCase() === "GTQ") {
      return `Q${formatted}`;
    }
    if (currency.toUpperCase() === "USD") {
      return `$${formatted} USD`;
    }
    return `${currency} ${formatted}`;
  };

  const formatDate = (isoString?: string) => {
    try {
      const date = isoString ? new Date(isoString) : new Date();
      return date.toLocaleDateString(lang === "es" ? "es-GT" : "en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return new Date().toLocaleDateString();
    }
  };

  const content = {
    badge: {
      en: "Payment Confirmed",
      es: "Pago Confirmado",
    },
    hero: {
      subtitle: {
        en: "Thank you for choosing Blvck Sheep. Your payment is complete, now we can finish your booking.",
        es: "Gracias por elegir Blvck Sheep. Tu pago está completo, ahora podemos finalizar tu reserva.",
      },
      receiptNotice: {
        en: "Can't find the email? Please check your spam or promotions folder.",
        es: "¿No encuentras el correo? Por favor revisa tu carpeta de spam o promociones.",
      },
    },
    receiptLabels: {
      header: {
        en: "Inari Agency • Blvck Sheep",
        es: "Inari Agency • Blvck Sheep",
      },
      totalPaid: {
        en: "Total Paid",
        es: "Monto Pagado",
      },
      receiptNumber: {
        en: "Receipt Number",
        es: "Número de recibo",
      },
      date: {
        en: "Date",
        es: "Fecha",
      },
      name: {
        en: "Name",
        es: "Nombre",
      },
      email: {
        en: "Email",
        es: "Correo electrónico",
      },
      phone: {
        en: "Phone",
        es: "Teléfono",
      },
      paymentMethod: {
        en: "Payment Method",
        es: "Método de pago",
      },
      screenshotHint: {
        en: "Take a screenshot of this receipt and send it to us on WhatsApp to finalize your trip details.",
        es: "Toma una captura de pantalla de este comprobante y envíanosla por WhatsApp para finalizar los detalles de tu viaje.",
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
    <div className="relative min-h-screen bg-black text-white selection:bg-zinc-800 overflow-hidden">
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
          className="space-y-14 md:space-y-18"
        >
          {/* Hero / Thank You Section — constrained to max-w-md so it matches the receipt width */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-md mx-auto"
          >
            {/* Branded Blvck Sheep Success Icon */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 20,
                delay: 0.1,
              }}
              className="relative mx-auto mb-4 flex items-center justify-center"
            >
              <Image
                src={blvckSheepSuccessIcon}
                alt="Blvck Sheep Payment Confirmed"
                width={176}
                height={176}
                className="w-36 h-36 sm:w-44 sm:h-44 object-contain select-none mix-blend-screen"
                priority
              />
            </motion.div>

            {/* Pill Confirmation Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-medium tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 -ml-3.5" />
              {content.badge[lang]}
            </div>

            {/* Subtitle — smaller font & exact same max-w-md width as receipt */}
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
              {content.hero.subtitle[lang]}
            </p>

            {/* Payment Receipt Card (Recurrente-style) */}
            {receipt && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 w-full text-left rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden"
              >
                {/* Top Amount Banner */}
                <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/70 border-b border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                      <Receipt className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                        {content.receiptLabels.header[lang]}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {content.receiptLabels.totalPaid[lang]}
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-white">
                    {formatAmount(receipt.currency, receipt.amount)}
                  </span>
                </div>

                {/* Receipt Details Rows */}
                <div className="px-6 py-5 space-y-3.5 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-400">
                      {content.receiptLabels.receiptNumber[lang]}
                    </span>
                    <span className="font-mono font-medium text-white text-right">
                      {receipt.orderId}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-400">
                      {content.receiptLabels.date[lang]}
                    </span>
                    <span className="text-zinc-200 text-right capitalize">
                      {formatDate(receipt.timestamp)}
                    </span>
                  </div>

                  {receipt.name && (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-zinc-400">
                        {content.receiptLabels.name[lang]}
                      </span>
                      <span className="font-medium text-white text-right">
                        {receipt.name}
                      </span>
                    </div>
                  )}

                  {receipt.email && (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-zinc-400 shrink-0">
                        {content.receiptLabels.email[lang]}
                      </span>
                      <span className="text-zinc-200 text-right truncate">
                        {receipt.email}
                      </span>
                    </div>
                  )}

                  {receipt.phone && (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-zinc-400">
                        {content.receiptLabels.phone[lang]}
                      </span>
                      <span className="text-zinc-200 text-right">
                        {receipt.phone}
                      </span>
                    </div>
                  )}

                  {receipt.paymentMethod && (
                    <div className="flex items-center justify-between gap-4 pt-2 border-t border-zinc-800/80">
                      <span className="text-zinc-400">
                        {content.receiptLabels.paymentMethod[lang]}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200">
                        {receipt.paymentMethod}
                      </span>
                    </div>
                  )}
                </div>

                {/* Screenshot helper note */}
                <div className="px-6 py-3 bg-zinc-900/40 border-t border-zinc-800/80 text-[12px] text-zinc-400 text-center leading-relaxed">
                  {content.receiptLabels.screenshotHint[lang]}
                </div>
              </motion.div>
            )}

            {/* Receipt Notice Note */}
            <p className="text-xs text-zinc-500 font-normal">
              {content.hero.receiptNotice[lang]}
            </p>

            {isPreviewMode && (
              <p className="mt-2 text-[11px] uppercase tracking-widest text-zinc-500">
                Modo Vista Previa (Datos de ejemplo)
              </p>
            )}
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
                    className="group relative flex flex-col justify-between p-7 lg:p-8 rounded-2xl bg-zinc-950 hover:bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 shadow-xl hover:-translate-y-1 overflow-hidden"
                  >
                    <div>
                      {/* Top Header of Card: Icon & Tag */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:border-zinc-700 group-hover:scale-105 transition-all duration-300">
                          <IconComponent className="h-6 w-6 stroke-[1.8]" />
                        </div>
                        <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                          {card.tag[lang]}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-xl font-medium tracking-tight text-white transition-colors duration-200 mb-3">
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
            className="relative overflow-hidden rounded-3xl bg-zinc-950 p-8 md:p-10 border border-zinc-800 shadow-2xl"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-300">
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
                  className="inline-flex w-full md:w-auto items-center justify-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold tracking-wide text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
