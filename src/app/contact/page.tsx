// src/app/contact/page.tsx
import { Metadata } from "next";
import ContactClient from "./ContactClient";

// AHORA SÍ: Como este es un Server Component, la metadata funciona perfecto
export const metadata: Metadata = {
  title: "Contact Us | Blvck Sheep Shuttle Service",
  description: "Contact Blvck Sheep for premium transportation, custom itineraries, and tourist services across Guatemala. Reach out via WhatsApp or Email.",
  keywords: "whatsapp, email, instagram, facebook, contact details, blvck sheep contact, guatemala tourist services",
};

export default function ContactPage() {
  return (
    <>
      {/* 
        Renderizamos el componente cliente. 
        Next.js unirá la metadata del servidor con tu interactividad del cliente.
      */}
      <ContactClient />
    </>
  );
}