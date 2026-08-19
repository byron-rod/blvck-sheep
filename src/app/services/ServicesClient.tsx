"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import blvckSheepLogo from "@/assets/images/blvck-sheep-new.png";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoShareOutline } from "react-icons/io5";
import {
  Bus,
  Car,
  Sparkle,
  MapPin,
  Clock,
  ShieldCheck,
  Briefcase,
  Ban,
  AlertTriangle,
  Compass,
  Star,
  Armchair,
  Coffee,
  Wifi,
  CreditCard,
  Map,
  Leaf,
  Headphones,
  Navigation,
  PhoneCall,
  ArrowRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesClient() {
  const router = useRouter();
  const { activeLanguage, setActiveLanguage } = useLanguage();

  const handleShare = async () => {
    const shareData = {
      title:
        activeLanguage === "en"
          ? `Our Services | Blvck Sheep`
          : `Nuestros Servicios | Blvck Sheep`,
      text:
        activeLanguage === "en"
          ? `Travel Differently. Find the perfect transit solution for your journey across Guatemala.`
          : `Viaja Diferente. Encuentra la solución de transporte perfecta para tu viaje por Guatemala.`,
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
                  layoutId="active-lang-services"
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
            {activeLanguage === "en"
              ? "Travel Differently."
              : "Viaja Diferente."}
            <br />
            <span className="text-zinc-500">
              {activeLanguage === "en"
                ? "Choose Your Experience."
                : "Elige tu Experiencia."}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            {activeLanguage === "en"
              ? "From budget-friendly shared shuttles to absolute peace of mind. Find the perfect transit solution for your journey across Guatemala."
              : "Desde rutas compartidas accesibles hasta absoluta tranquilidad. Encuentra la solución de transporte perfecta para tu viaje por Guatemala."}
          </p>
        </div>
      </section>

      {/* 2. The Tiers */}
      <section className="relative w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Shared Transit */}
            <div className="group relative bg-zinc-950 border border-zinc-700 rounded-2xl p-8 hover:border-zinc-500 transition-colors duration-500 flex flex-col">
              <div className="mb-8">
                <Bus
                  strokeWidth={1}
                  className="w-12 h-12 text-zinc-300 mb-6 group-hover:text-white transition-colors duration-500"
                />
                <h3 className="text-3xl font-light tracking-tight mb-3">
                  {activeLanguage === "en"
                    ? "Shared Shuttle"
                    : "Shuttle Compartido"}
                </h3>
                <p className="text-zinc-400 text-sm font-medium tracking-wide uppercase">
                  {activeLanguage === "en"
                    ? "Practical & Budget-Friendly"
                    : "Practico y Económico"}
                </p>
              </div>
              <p className="text-zinc-300 font-light leading-relaxed mb-8">
                {activeLanguage === "en"
                  ? "The budget-friendly choice for flexible travelers."
                  : "La opción económica para viajeros flexibles."}
              </p>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
                    {activeLanguage === "en"
                      ? "Logistics & Rules"
                      : "Logística y Reglas"}
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {activeLanguage === "en"
                          ? "Specific Pick-up & Drop-off areas (door-to-door not always available)"
                          : "Puntos específicos de recogida y bajada"}
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {activeLanguage === "en"
                          ? "Fixed schedules with connections"
                          : "Horarios fijos con conexiones"}
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {activeLanguage === "en"
                          ? "Wait-time windows of 10-90 mins"
                          : "Ventanas de espera de 10-90 minutos"}
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {activeLanguage === "en"
                          ? "Strict Luggage Policy"
                          : "Límite de equipaje"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
                    {activeLanguage === "en" ? "Fleet" : "Flota"}
                  </h4>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {activeLanguage === "en"
                      ? "Operated via local transport companies using Vans and Microbuses."
                      : "Operado a través de empresas de transporte locales utilizando Vans y Microbuses."}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Private Transit */}
            <div className="group relative bg-zinc-950 border border-zinc-700 rounded-2xl p-8 hover:border-zinc-300 transition-colors duration-500 flex flex-col">
              <div className="mb-8">
                <Car
                  strokeWidth={1}
                  className="w-12 h-12 text-zinc-300 mb-6 group-hover:text-white transition-colors duration-500"
                />
                <h3 className="text-3xl font-light tracking-tight mb-3">
                  {activeLanguage === "en"
                    ? "Private Transit"
                    : "Transporte Privado"}
                </h3>
                <p className="text-zinc-300 text-sm font-medium tracking-wide uppercase">
                  {activeLanguage === "en"
                    ? "Flexible & Direct"
                    : "Flexible y Directo"}
                </p>
              </div>
              <p className="text-zinc-200 font-light leading-relaxed mb-8">
                {activeLanguage === "en"
                  ? "Your schedule, your route. Our 24 hour door to door service."
                  : "Tu horario, tu ruta. Nuestro servicio puerta a puerta, disponible las 24 horas."}
              </p>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
                    {activeLanguage === "en"
                      ? "Logistics & Rules"
                      : "Logística y Reglas"}
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {activeLanguage === "en"
                          ? "Direct door-to-door service. You have more control of your journey"
                          : "Servicio directo puerta a puerta. Mayor control de tu viaje"}
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {activeLanguage === "en"
                          ? "We work 24/7. You choose the exact departure time. No waiting times"
                          : "Trabajamos las 24 horas. Tú eliges la hora exacta de salida. Sin tiempos de espera"}
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {activeLanguage === "en"
                          ? "Accommodates luggage according to your needs"
                          : "Acomoda equipaje según tus necesidades"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
                    {activeLanguage === "en" ? "Fleet" : "Flota"}
                  </h4>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {activeLanguage === "en"
                      ? "Exclusive experience for your group with our sedans and SUVs."
                      : "Sedanes y SUVs exclusivos para tu grupo."}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 The Blvck Sheep Standard */}
      <section className="relative w-full py-24 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
            <div className="relative w-28 h-28 mb-8">
              <Image 
                src={blvckSheepLogo} 
                alt="Blvck Sheep Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
              {activeLanguage === "en" ? "The Blvck Sheep Standard" : "The Blvck Sheep Standard"}
            </h2>
            <p className="text-zinc-400 font-light text-xl">
              {activeLanguage === "en"
                ? "Why traveling with us is different"
                : "Por qué viajar con nosotros es diferente"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-zinc-900/20 rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors duration-500">
              <Compass strokeWidth={1} className="w-10 h-10 text-zinc-300 mb-6" />
              <h3 className="text-xl font-medium text-white mb-4">
                {activeLanguage === "en" ? "Custom-Tailored Design" : "Diseño a Medida"}
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en" 
                  ? "We optimize your itinerary's logistics so you can make the most of every destination, with perfect timing and zero stress." 
                  : "Ayudamos a optimizar la logística de tu itinerario para que puedas aprovechar cada destino al máximo, con los tiempos perfectos y sin estrés."}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-zinc-900/20 rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors duration-500">
              <Star strokeWidth={1} className="w-10 h-10 text-zinc-300 mb-6" />
              <h3 className="text-xl font-medium text-white mb-4">
                {activeLanguage === "en" ? "Curated Experiences" : "Experiencias Únicas"}
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en" 
                  ? "We design your trip around your time and budget, recommending only the best-vetted hotels, activities, and local gastronomy." 
                  : "Diseñamos tu viaje según tu tiempo y presupuesto, recomendando únicamente las mejores opciones probadas de hoteles, actividades y gastronomía local."}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-zinc-900/20 rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors duration-500">
              <MapPin strokeWidth={1} className="w-10 h-10 text-zinc-300 mb-6" />
              <h3 className="text-xl font-medium text-white mb-4">
                {activeLanguage === "en" ? "Express Detours" : "Desvios Express"}
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en" 
                  ? "The journey is as important as the destination. We offer strategic stops and en-route options to visit points of interest." 
                  : "El viaje es tan importante como el destino. Ofrecemos paradas estratégicas y opciones en ruta para que puedas visitar puntos de interés."}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-zinc-900/20 rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors duration-500">
              <Sparkle strokeWidth={1} className="w-10 h-10 text-zinc-300 mb-6" />
              <h3 className="text-xl font-medium text-white mb-4">
                {activeLanguage === "en" ? "Total Comfort" : "Comodidad Total"}
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en" 
                  ? "Travel relaxed in our comfortable SUVs or Sedans. Our professional drivers are dedicated to assisting you with every detail on the road." 
                  : "Viaja relajado en nuestras cómodas SUVs o Sedanes. Nuestros conductores profesionales están dedicados a asistirte en cada detalle de tu ruta."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN: BENTO BOX DE TÉRMINOS (The Essentials) --- */}
      <section className="relative w-full py-20 px-6 border-t border-zinc-900 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-light tracking-tight text-white mb-4">
              {activeLanguage === "en" ? "The Essentials" : "Los Esenciales"}
            </h2>
            <p className="text-zinc-400 font-light text-lg max-w-2xl">
              {activeLanguage === "en"
                ? "A quick guide on how our services operate. Please review these key points before booking."
                : "Una guía rápida de cómo operan nuestros servicios. Por favor revisa estos puntos clave antes de reservar."}
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-min">

             {/* Box 1: Private Transit (2 cols) */}
            <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-zinc-600" />
                <h3 className="text-xl font-medium text-white">
                  {activeLanguage === "en" ? "Blvck Sheep: Private Transit" : "Blvck Sheep: Viajes Privados"}
                </h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-zinc-500 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "Total control, our personalized service." 
                      : "Control total, nuestro servicio personalizado."}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-zinc-500 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "Direct door-to-door for pick-ups and drop-offs." 
                      : "Servicio directo puerta a puerta para abordajes y llegadas."}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-zinc-500 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "Zero wait times for other passengers." 
                      : "Sin tiempos de espera por otros pasajeros."}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-zinc-500 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "Available 24 hours a day, this service adapts to all your needs." 
                      : "Disponible 24 horas del día, este servicio se adapta a todas tus necesidades."}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-zinc-500 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "Operated by our own drivers in comfortable SUVs or Sedans." 
                      : "Operado por nuestros propios pilotos en cómodas SUVs o Sedanes."}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-zinc-500 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "Express Detours available on routes." 
                      : "Desvios Express disponibles en ruta."}
                  </span>
                </li>
              </ul>
            </div>

            {/* Box 2: Luggage Rule (1 col) - Placed next to Shared */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/60 transition-colors flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-amber-900" />
                <h3 className="text-xl font-medium text-white">
                  {activeLanguage === "en" ? "The Luggage Rule" : "Regla de Equipaje"}
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {activeLanguage === "en"
                  ? "Standard allowance for ALL trips is 1 large (23kg) or medium bag (10kg) + 1 personal item per person. If you are bringing extra bags or oversized items, you MUST notify us in advance. Undeclared extra luggage may not fit in your assigned vehicle and may result in additional fees to provide a larger vehicle if available."
                  : "El límite estándar para TODOS los viajes es 1 maleta grande (23kg) o mediana (10kg) + 1 artículo personal por persona. Si traes maletas extra o equipaje muy grande, DEBES notificarnos con anticipación. El equipaje no declarado puede no caber en el vehículo asignado y puede resultar en tarifas adicionales para proporcionar un vehículo más grande si está disponible."}
              </p>
            </div>

            {/* Box 3: Shared Shuttles (2 cols) */}
            <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-medium text-white">
                  {activeLanguage === "en" ? "Shared Transit Logistics" : "Logística del Viaje Compartido"}
                </h3>
              </div>
              
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "We coordinate with external operators for shared routes." 
                      : "Coordinamos con operadores externos para rutas compartidas."}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "Pick-up and drop-off are at specific meeting points. Door-to-door service is not always guaranteed." 
                      : "Abordaje y llegadas son en puntos específicos. No siempre hay servicio puerta a puerta."}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "Please arrive at your meeting point 10 minutes before departure time." 
                      : "Estar en puntos de abordaje 10 minutos antes de la hora de salida."}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "The vehicles pick up multiple people, depending on your location, wait times can vary from 10 to 90 minutes." 
                      : "Los vehículos recogen a múltiples personas, dependiendo de tu ubicación, los tiempos de espera pueden variar de 10 a 90 minutos."}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span>
                    {activeLanguage === "en" 
                      ? "Shared routes often involve connections. Departure and arrival times are approximate." 
                      : "Las rutas compartidas tienen conexiones. Los tiempos de salida y llegada son aproximados."}
                  </span>
                </li>
              </ul>

              <div className="flex items-start gap-2 bg-yellow-950/20 text-yellow-600/80 p-3 rounded-lg border border-yellow-900/30 text-xs">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  {activeLanguage === "en"
                    ? "We are not liable for missed flights or connections due to shared route delays."
                    : "No somos responsables por vuelos o conexiones perdidas por retrasos en estas rutas."}
                </p>
              </div>
            </div>

            {/* Box 4: Cancellations (1 col) - Placed next to Private */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-green-400/80" />
                <h3 className="text-xl font-medium text-white">
                  {activeLanguage === "en" ? "Payments, Changes & Cancellations" : "Pagos, Cambios y Cancelaciones"}
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {activeLanguage === "en"
                  ? "All reservation payments are processed securely via Recurrente.com with Visa or Master Card. You must cancel, change departure times or dates at least 24 hours before your scheduled departure time to qualify for a refund or for us to accomodate a schedule change. Cancellations made within 24 hours of the trip are strictly non-refundable."
                  : "Todos los pagos de reservaciones se procesan de forma segura a través de Recurrente.com con tarjeta Visa o Master Card. Debes cancelar, cambiar horarios de salida o fechas con al menos 24 horas de anticipación a tu salida para aplicar a un reembolso o para que podamos acomodar un cambio de horario. Las cancelaciones hechas con menos de 24 horas son estrictamente no reembolsables."}
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* --- FIN NUEVA SECCIÓN --- */}

      {/* 3. The A La Carte Collection (Upsells for ALL tiers) */}
      <section className="relative w-full py-24 px-6 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
              {activeLanguage === "en" ? "A La Carte" : "A La Carta"}
            </h2>
            <p className="text-zinc-400 font-light text-xl">
              {activeLanguage === "en"
                ? "Elevate your journey. Exclusive add-ons available for our private routes. To ensure seamless logistics, all add-ons must be requested at least 24 hours in advance."
                : "Diseña tu experiencia. Complementos exclusivos disponibles en nuestras rutas privadas. Para garantizar una buena logística, deben solicitarse con al menos 24 horas de anticipación."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Perk 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-300 flex flex-col justify-between">
              <div>
                <MapPin strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-3">
                  {activeLanguage === "en"
                    ? "The Express Detours"
                    : "Los Desvíos Express"}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {activeLanguage === "en"
                    ? "Turn a transit day into an exploration. Add curated stops along your route, like the kaqchikel Mayan capital of Iximché, or enjoy local cuisine at restaurants along the way."
                    : "Convierte un día de tránsito en una exploración. Agrega paradas curadas en tu ruta, como la capital maya kaqchikel de Iximché, o disfruta de la cocina local en restaurantes en el camino."}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-zinc-800/50">
                <Link
                  href="/services/detours"
                  className="group inline-flex items-center gap-2 text-xs font-medium tracking-widest text-zinc-400 hover:text-white uppercase transition-colors"
                >
                  {activeLanguage === "en"
                    ? "Explore detours"
                    : "Ver desvíos populares"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Perk 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-300">
              <Coffee strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-3">
                {activeLanguage === "en"
                  ? "The Road Cooler"
                  : "La Hielera de Viaje"}
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {activeLanguage === "en"
                  ? "Long trip? We can add a cooler to keep drinks cold. Enjoy ice-cold local beverages, mineral water, or select snacks waiting for you as soon as you board."
                  : "¿Viaje largo? Podemos agregar una hielera para mantener tus bebidas frías. Disfruta de bebidas refrescantes, agua mineral o snacks durante todo el viaje."}
              </p>
            </div>

            {/* Perk 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-300 flex flex-col">
              <div>
                <Wifi strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-3">
                  {activeLanguage === "en"
                    ? "Instant Connectivity"
                    : "Conectividad Instantánea"}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {activeLanguage === "en"
                    ? "Don't waste time hunting for Wi-Fi. We provide ready-to-use local SIM cards upon boarding so you stay connected. Preorder this service before your arrival."
                    : "No pierdas tiempo buscando Wi-Fi. Proveemos tarjetas SIM o eSIM locales listas para usar al abordar para que te mantengas conectado. Pre-ordena este servicio antes de tu llegada."}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-zinc-800/50">
                <Link
                  href={
                    activeLanguage === "en"
                      ? "/journal/guatemala-sim-card-esim-guide"
                      : "/journal/guia-sim-card-esim-guatemala"
                  }
                  className="group inline-flex items-center gap-2 text-xs font-medium tracking-widest text-zinc-400 hover:text-white uppercase transition-colors"
                >
                  {activeLanguage === "en"
                    ? "Read our SIM guide"
                    : "Lee nuestra guía de SIMs"}
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
          {activeLanguage === "en"
            ? "Ready to explore Guatemala?"
            : "¿Listo para explorar Guatemala?"}
        </h2>
        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 text-sm uppercase tracking-widest font-bold overflow-hidden rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative z-10 flex items-center gap-3">
            {activeLanguage === "en" ? "Book Your Ride" : "Reserva Tu Viaje"}
          </span>
          <div className="absolute inset-0 bg-zinc-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </Link>
      </section>
    </div>
  );
}
