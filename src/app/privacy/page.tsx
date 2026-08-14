"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const [activeLanguage, setActiveLanguage] = useState<"en" | "es">("en");

  return (
    <main className="container mx-auto max-w-4xl py-24 px-6 lg:px-0">
      
      {/* Language Toggle */}
      <div className="flex justify-end mb-8">
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
                  layoutId="active-lang-privacy"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {lang === "en" ? "ENG" : "ESP"}
            </button>
          ))}
        </div>
      </div>

      <h1 className="text-4xl font-light mb-6 text-center text-white tracking-tight">
        {activeLanguage === "en" ? "Privacy Policy" : "Política de Privacidad"}
      </h1>
      <p className="text-lg mb-14 text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
        {activeLanguage === "en" 
          ? "At Blvck Sheep, we are committed to protecting the privacy of our clients and visitors."
          : "En Blvck Sheep, nos comprometemos a proteger la privacidad de nuestros clientes y visitantes."}
      </p>

      {/* 1. What data we collect */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "1. What data we collect" : "1. Qué datos recopilamos"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            {activeLanguage === "en" ? "Full name, Phone/WhatsApp, Email, Booking details." : "Nombre completo, Teléfono/WhatsApp, Correo electrónico, Detalles de reserva."}
          </li>
        </ul>
      </section>

      {/* 2. How we use your data */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "2. How we use your data" : "2. Cómo usamos tus datos"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            {activeLanguage === "en" ? "Manage reservations, coordinate transport, customer support." : "Gestionar reservas, coordinar transporte, atención al cliente."}
          </li>
        </ul>
      </section>

      {/* 3. Sharing data */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "3. Sharing data" : "3. Compartir datos"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            {activeLanguage === "en" ? "We do not sell personal data. Shared only with trusted drivers/partners when necessary." : "No vendemos datos personales. Se comparten solo con conductores/socios de confianza cuando es necesario."}
          </li>
        </ul>
      </section>

      {/* 4. Data retention */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "4. Data retention" : "4. Retención de datos"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            {activeLanguage === "en" ? "Retained only as long as necessary for operational obligations." : "Retenidos solo el tiempo necesario para obligaciones operativas."}
          </li>
        </ul>
      </section>

      {/* 5. Security */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "5. Security" : "5. Seguridad"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            {activeLanguage === "en" ? "Reasonable measures to protect against unauthorized access." : "Medidas razonables para proteger contra el acceso no autorizado."}
          </li>
        </ul>
      </section>

      {/* 6. Your rights */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "6. Your rights" : "6. Tus derechos"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            {activeLanguage === "en" ? "Access, correction, or deletion of data." : "Acceso, corrección o eliminación de datos."}
          </li>
        </ul>
      </section>

      {/* 7. Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "7. Contact" : "7. Contacto"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            {activeLanguage === "en" ? "Email:" : "Correo electrónico:"} connect@blvck-sheep.com
          </li>
          <li>
            WhatsApp: +502 5511 6881
          </li>
        </ul>
      </section>

      {/* 8. Changes to this policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "8. Changes to this policy" : "8. Cambios a esta política"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            {activeLanguage === "en" ? "Updates will be published on this page." : "Las actualizaciones se publicarán en esta página."}
          </li>
        </ul>
      </section>
    </main>
  );
}
