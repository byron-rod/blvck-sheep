"use client";
import Tag from "@/components/Tag";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const content = {
  en: {
    tag: "FAQs",
    headingPart1: "Questions? We've Got ",
    headingHighlight: "Answers",
    faqs: [
      {
        question: "How do I book a ride?",
        answer: "You can book your ride directly by contacting us via WhatsApp. Choose your destination, confirm availability for your date and time, make your payment, and we'll send you a booking confirmation to finalize your reservation!",
      },
      {
        question: "How do I pay for my reservation?",
        answer: "We accept safe and secure payments through Recurrente.com via Visa or Mastercard. Money transfers to our accounts are also available for direct bookings. All payments are fully refundable if canceled at least 24 hours in advance.",
      },
      {
        question: "What are your cancellation or rescheduling policies?",
        answer: "Plans change—we get it! Cancel or reschedule up to 24 hours before departure at no extra charge for a full refund. Changes made less than 24 hours before departure or no-shows are non-refundable. For example, if your trip is on a Saturday at 10 AM, you must request changes or cancellations by Friday at 10 AM.",
      },
      {
        question: "How much luggage may I bring?",
        answer: "Our SUVs and Sedans are spacious and can accommodate your luggage. For your comfort, we recommend one large suitcase or carry-on bag, and one personal item per passenger. If you have extra or oversized items, please let us know in advance as additional charges may apply.",
      },
      {
        question: "Do you provide door-to-door service?",
        answer: "Yes! We offer door-to-door pick-up and drop-off in most areas we service. When booking, provide your exact address, and we'll confirm if it's within our coverage. If not, we'll arrange the nearest convenient pick-up and drop-off point for you.",
      },
      {
        question: "What are your top destinations?",
        answer: "We can take you anywhere in Guatemala and even to neighboring countries! Our most popular routes include Antigua, Panajachel (Lake Atitlán), El Paredón (Pacific Coast), and Lanquín (Semuc Champey). If you have a custom destination in mind, let us know—we willl make it happen!",
      },
    ]
  },
  es: {
    tag: "Preguntas Frecuentes",
    headingPart1: "¿Preguntas? Tenemos las ",
    headingHighlight: "Respuestas",
    faqs: [
      {
        question: "¿Cómo reservo un viaje?",
        answer: "Puedes reservar tu viaje directamente contactándonos a través de WhatsApp. Elige tu destino, confirma la disponibilidad para tu fecha y hora, realiza tu pago y te enviaremos una confirmación de reserva para finalizarla.",
      },
      {
        question: "¿Cómo pago mi reserva?",
        answer: "Aceptamos pagos seguros a través de Recurrente.com con Visa o Mastercard. Las transferencias bancarias a nuestras cuentas también están disponibles para residentes de Guatemala. Todos los pagos son totalmente reembolsables si se cancelan con al menos 24 horas de antelación.",
      },
      {
        question: "¿Cuáles son sus políticas de cancelación o reprogramación?",
        answer: "Los planes cambian, ¡lo entendemos! Cancela o reprograma hasta 24 horas antes de la salida sin cargo adicional para obtener un reembolso completo. Los cambios realizados con menos de 24 horas de anticipación o las ausencias no son reembolsables. Por ejemplo, si tu viaje es un sábado a las 10 a.m., debes solicitar cambios o cancelaciones antes del viernes a las 10 a.m.",
      },
      {
        question: "¿Cuánto equipaje puedo llevar?",
        answer: "Nuestras SUVs y sedanes son espaciosos y pueden acomodar tu equipaje. Para tu comodidad, recomendamos una maleta grande o equipaje de mano y un artículo personal por pasajero. Si tienes artículos adicionales o de gran tamaño, avísanos con anticipación ya que pueden aplicar cargos adicionales.",
      },
      {
        question: "¿Ofrecen servicio puerta a puerta?",
        answer: "¡Sí! Ofrecemos servicio de recogida y regreso puerta a puerta en la mayoría de las áreas que operamos. Al reservar, proporciona tu dirección exacta y te confirmaremos si está dentro de nuestra cobertura. Si no, organizaremos el punto de encuentro más cercano y conveniente para ti.",
      },
      {
        question: "¿Cuáles son sus destinos principales?",
        answer: "¡Podemos llevarte a cualquier parte de Guatemala e incluso a países vecinos! Nuestras rutas más populares incluyen Antigua, Panajachel (Lago de Atitlán), El Paredón (Costa del Pacífico) y Lanquín (Semuc Champey). Si tienes un destino personalizado en mente, avísanos y lo haremos realidad.",
      },
    ]
  }
};

export default function Faqs({ activeLanguage = "en" }: { activeLanguage?: "en" | "es" }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = content[activeLanguage];

  return (
    <section className="py-24" id="faqs">
      <div className="container">
        <div className="flex justify-center items-center">
          <Tag>{data.tag}</Tag>
        </div>
        <h2 className="text-4xl lg:text-5xl mt-6 text-center max-w-xl mx-auto">
          {data.headingPart1}
          <span className="text-blue-500">{data.headingHighlight}</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {data.faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-black rounded-2xl border border-white/10 p-6"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus text-blue-500 flex-shrink-0 transition duration-500",
                    selectedIndex === faqIndex && "rotate-45",
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className={twMerge("overflow-hidden")}
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
