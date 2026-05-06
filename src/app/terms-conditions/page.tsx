"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsConditions() {
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
                  layoutId="active-lang-terms"
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
        {activeLanguage === "en" ? "Blvck Sheep Terms & Conditions" : "Términos y Condiciones de Blvck Sheep"}
      </h1>
      <p className="text-lg mb-10 text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
        {activeLanguage === "en" 
          ? "Welcome to Blvck Sheep. We are committed to providing safe, reliable, and straightforward transit across Guatemala. By booking our services, you agree to the following policies."
          : "Bienvenido a Blvck Sheep. Nos comprometemos a brindar un transporte seguro, confiable y sin complicaciones en toda Guatemala. Al reservar nuestros servicios, aceptas las siguientes políticas."}
      </p>

      {/* THE QUICK READ (TL;DR) */}
      <section className="mb-14 bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 md:p-8">
        <h2 className="text-xl font-medium mb-4 text-white">
          {activeLanguage === "en" ? "The Quick Read: Essential Policies" : "Resumen Rápido: Políticas Esenciales"}
        </h2>
        <p className="text-zinc-400 mb-4 text-sm">
          {activeLanguage === "en" 
            ? "Please review our core rules before traveling. Detailed explanations can be found in the sections below."
            : "Por favor, revisa nuestras reglas principales antes de viajar. Las explicaciones detalladas se encuentran en las secciones a continuación."}
        </p>
        <ul className="list-disc pl-5 text-zinc-300 space-y-3 text-sm marker:text-blue-500">
          <li>
            <strong>{activeLanguage === "en" ? "Our Service:" : "Nuestro Servicio:"}</strong>{" "}
            {activeLanguage === "en" 
              ? <>Blvck Sheep operates 5-passenger to 7-passenger vehicles SUVs or Sedans with limits on passenger capacity per trip for a more private and comfortable experience. For our <strong>shared services or larger groups (5+ passengers)</strong> we have partnerships with trusted providers, that assist us with vans, microbuses or buses services.</>
              : <>Blvck Sheep opera Sedanes, y SUVs de 5 o 7 pasajeros con límites de capacidad por viaje para una experiencia más privada y cómoda. Para nuestros <strong>servicios compartidos o grupos grandes (5+ pasajeros)</strong>, tenemos alianzas con proveedores de confianza que nos asisten con servicios de van, microbús o autobús.</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Luggage Rule:" : "Regla de Equipaje:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>Standard allowance is 1 large bag + 1 personal item per person. <strong>You must notify us in advance of any extra luggage</strong> so we can dispatch the correct vehicle size, otherwise, you may face delays or extra fees, read more below.</>
              : <>El límite estándar es 1 maleta grande + 1 artículo personal por pasajero. <strong>Debes notificarnos con anticipación sobre cualquier equipaje extra</strong> para poder enviar el vehículo del tamaño correcto; de lo contrario, podrías enfrentar retrasos o cargos adicionales (lee más abajo).</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Shared vs. Private:" : "Compartido vs. Privado:"}</strong>{" "}
            {activeLanguage === "en"
              ? "Shared shuttles operate on fixed routes with unpredictable wait times (10-60 mins). If you are on a tight schedule, we recommend booking Private transit."
              : "Los traslados compartidos operan en rutas fijas con tiempos de espera impredecibles (10-60 minutos). Si tienes un horario ajustado, te recomendamos reservar transporte Privado."}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Cancellations:" : "Cancelaciones:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>You must cancel or reschedule at least <strong>24 hours</strong> before departure for a refund or free change.</>
              : <>Debes cancelar o reprogramar con al menos <strong>24 horas</strong> de anticipación a la salida para obtener un reembolso o cambio gratuito.</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Payments:" : "Pagos:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>All payments are securely processed via Recurrente.com under our parent company name, <strong>Inari Agency</strong>.</>
              : <>Todos los pagos se procesan de forma segura a través de Recurrente.com bajo el nombre de nuestra empresa matriz, <strong>Inari Agency</strong>.</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "External Factors:" : "Factores Externos:"}</strong>{" "}
            {activeLanguage === "en"
              ? "We are not liable for missed flights or delays caused by third-party factors (roadblocks, extreme weather, heavy traffic)."
              : "No nos hacemos responsables por vuelos perdidos o retrasos causados por factores de terceros (bloqueos de carreteras, clima extremo, tráfico pesado)."}
          </li>
        </ul>
      </section>

      {/* 1. Shared Shuttle Logistics */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "1. Shared Shuttle Logistics & Expectations" : "1. Logística y Expectativas del Servicio Compartido"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>{activeLanguage === "en" ? "Wait Times & Routing:" : "Tiempos de Espera y Rutas:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>Shared shuttles are a highly efficient, budget-friendly option operated in collaboration with our trusted local partners (using vans or microbuses). Because drivers must navigate multiple pick-up locations, <strong>departure and arrival times are estimates, not guarantees.</strong> Please expect pick-up wait windows ranging from 10 to 60 minutes, especially during peak seasons.</>
              : <>Los traslados compartidos son una opción altamente eficiente y económica, operada en colaboración con nuestros socios locales de confianza (usando vans o microbuses). Debido a que los conductores deben navegar por múltiples puntos de recogida, <strong>los horarios de salida y llegada son estimaciones, no garantías.</strong> Por favor, espera ventanas de recogida que varían de 10 a 60 minutos, especialmente durante temporadas altas.</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Pick-up / Drop-off Zones:" : "Zonas de Recogida / Bajada:"}</strong>{" "}
            {activeLanguage === "en"
              ? "Shared routes only operate at specific hubs. In Antigua, pick-ups are limited to the central zone. In Guatemala City, drop-offs and pick-ups are strictly limited to the airport perimeter and select nearby zones. Door-to-door hotel service is not guaranteed for shared routes."
              : "Las rutas compartidas solo operan en puntos específicos. En Antigua, las recogidas se limitan a la zona central. En la Ciudad de Guatemala, las bajadas y recogidas están estrictamente limitadas al perímetro del aeropuerto y zonas cercanas seleccionadas. El servicio puerta a puerta en hoteles no está garantizado para rutas compartidas."}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Tight Schedules:" : "Horarios Ajustados:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>If you have a strict flight departure, a time-sensitive itinerary, or prefer not to wait on other passengers, <strong>we strongly advise booking an earlier shared departure or upgrading to our Private Transit tiers.</strong></>
              : <>Si tienes una salida de vuelo estricta, un itinerario sensible al tiempo o prefieres no esperar a otros pasajeros, <strong>te recomendamos encarecidamente reservar una salida compartida más temprana o actualizar a nuestros niveles de Transporte Privado.</strong></>}
          </li>
        </ul>
      </section>

      {/* 2. Private & Blvck Tier Policies */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "2. Private & Blvck Tier Policies" : "2. Políticas de Servicio Privado y Tier Blvck"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>{activeLanguage === "en" ? "Service Conditions & Fleet:" : "Condiciones del Servicio y Flota:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>For our Private and Blvck tiers, Blvck Sheep operates Sedans, 5-passenger SUVs, or 7-passenger SUVs. To ensure a comfortable experience, we allow a <strong>maximum of 4 clients per trip</strong> in these vehicles. For larger private groups, we utilize our trusted partner network for premium van services.</>
              : <>Para nuestros niveles Privado y Blvck, operamos Sedanes, y SUVs de 5 o 7 pasajeros. Para garantizar una experiencia cómoda, permitimos un <strong>máximo de 4 clientes por viaje</strong> en estos vehículos. Para grupos privados más grandes, utilizamos nuestra red de socios de confianza para servicios de van premium.</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Schedule Flexibility & Notice:" : "Flexibilidad de Horarios y Avisos:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>While we offer total flexibility, any changes to your departure time or route must be requested at least <strong>24 hours in advance</strong> so we can properly manage driver logistics.</>
              : <>Aunque ofrecemos total flexibilidad, cualquier cambio en tu hora de salida o ruta debe solicitarse con al menos <strong>24 horas de anticipación</strong> para que podamos gestionar adecuadamente la logística de los conductores.</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Short-Notice Adjustments:" : "Ajustes de Última Hora:"}</strong>{" "}
            {activeLanguage === "en"
              ? "Changes requested within 24 hours of your trip are strictly subject to availability. They may incur additional fees or be declined if they conflict with our drivers' overlapping schedules."
              : "Los cambios solicitados dentro de las 24 horas previas a tu viaje están estrictamente sujetos a disponibilidad. Podrían incurrir en tarifas adicionales o ser rechazados si entran en conflicto con los horarios de otros clientes."}
          </li>
        </ul>
      </section>

      {/* 3. Luggage Constraints */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "3. Luggage Constraints & Vehicle Capacity" : "3. Restricciones de Equipaje y Capacidad del Vehículo"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>{activeLanguage === "en" ? "The Standard Allowance (Golden Rule):" : "El Límite Estándar (Regla de Oro):"}</strong>{" "}
            {activeLanguage === "en"
              ? "The baseline allowance for all passengers is one (1) large suitcase and one (1) personal item (such as a backpack or purse). For shared shuttles, there are exceptions to this rule but depends on the number of passengers and the size of their luggage. Please notify if you bring any extras."
              : "El límite base para todos los pasajeros es de una (1) maleta grande y un (1) artículo personal (como una mochila o bolso). Para los traslados compartidos, pueden aceptar mas dependiendo de la cantidad de pasajeros ese dia y el tamaño de sus maletas. Por favor notifica si llevas algo extra."}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Private Transit & Advance Notice:" : "Transporte Privado y Aviso Previo:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>Because our Private and Blvck tier fleets range from Sedans to larger 7-passenger SUVs, total cargo capacity varies per trip. We can happily accommodate extra luggage on private routes, but <strong>you must notify us at the time of booking</strong> so we can dispatch the correct vehicle size.</>
              : <>Debido a que nuestra flota de nivel Privado y Blvck varía desde Sedanes hasta SUVs más grandes, la capacidad total de carga varía por viaje. Podemos acomodar equipaje extra en rutas privadas, pero <strong>debes notificarnos al momento de la reserva</strong> para que podamos despachar el tamaño de vehículo correcto.</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Failure to Disclose Excess Luggage:" : "Consecuencias de No Declarar Equipaje Extra:"}</strong>{" "}
            {activeLanguage === "en"
              ? "If you arrive at pick-up with undeclared extra baggage, Blvck Sheep is not liable if it cannot safely fit in your assigned vehicle. The client assumes full responsibility for any resulting consequences, which may include paying for a secondary vehicle, significant travel delays, or the possibility that a larger vehicle is not immediately available."
              : "Si te presentas a la recogida con equipaje extra no declarado, Blvck Sheep no se hace responsable si este no cabe de manera segura en el vehículo asignado. El cliente asume toda la responsabilidad por las consecuencias resultantes, que pueden incluir el pago de un segundo vehículo, retrasos significativos en el viaje, o la posibilidad de que un vehículo más grande no esté disponible de inmediato."}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Oversized Items:" : "Artículos de Gran Tamaño:"}</strong>{" "}
            {activeLanguage === "en"
              ? "For exceptionally large items (e.g., surfboards, large instruments, or bicycles), please notify us in advance. Additional fees may apply."
              : "Para artículos excepcionalmente grandes (ej. tablas de surf, instrumentos grandes o bicicletas), por favor notifícanos con anticipación. Se aplicarán tarifas adicionales."}
          </li>
        </ul>
      </section>

      {/* 4. Third-Party Factors & Liability */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "4. Third-Party Factors & Liability" : "4. Factores Externos y Responsabilidad"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>{activeLanguage === "en" ? "Out of Our Control:" : "Fuera de Nuestro Control:"}</strong>{" "}
            {activeLanguage === "en"
              ? "Traveling in Guatemala involves navigating unpredictable elements. Blvck Sheep is not liable for delays, missed flights, or cancellations caused by factors outside our direct control, including roadblocks, political protests, severe weather, mechanical issues, natural disasters, or unexpected heavy traffic. We encourage clients to plan accordingly, especially during high-demand seasons (e.g., Holy Week, Christmas, New Year). We can advise on timeframes but are not responsible for delays caused by third-party factors."
              : "Viajar en Guatemala implica navegar por elementos impredecibles. Blvck Sheep no se hace responsable por retrasos, vuelos perdidos o cancelaciones causadas por factores fuera de nuestro control directo, incluyendo bloqueos de carreteras, protestas políticas, clima severo, problemas mecánicos, desastres naturales o tráfico pesado inesperado. Recomendamos a los clientes planificar en consecuencia, especialmente durante temporadas de alta demanda (ej. Semana Santa, Navidad, Año Nuevo). Podemos asesorar sobre los tiempos, pero no somos responsables de los retrasos causados por terceros."}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Personal Belongings:" : "Pertenencias Personales:"}</strong>{" "}
            {activeLanguage === "en"
              ? "Passengers are entirely responsible for their personal items. While we will assist in locating forgotten belongings, we cannot guarantee the recovery of lost items in our vehicles or partner vans."
              : "Los pasajeros son totalmente responsables de sus artículos personales. Aunque ayudaremos a localizar pertenencias olvidadas, no podemos garantizar la recuperación de artículos perdidos en nuestros vehículos o vans de nuestros socios."}
          </li>
        </ul>
      </section>

      {/* 5. Booking, Payments & Cancellations */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "5. Payments & Cancellations" : "5. Pagos y Cancelaciones"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>{activeLanguage === "en" ? "Secure Processing (Inari Agency):" : "Procesamiento Seguro (Inari Agency):"}</strong>{" "}
            {activeLanguage === "en"
              ? <>All payments for Blvck Sheep services are securely processed through Recurrente.com under the legal name of our parent company, <strong>Inari Agency</strong>. When you receive a payment link or confirmation, you will see Inari Agency listed as the payee. Rest assured, this is the legitimate and authorized business entity for Blvck Sheep.</>
              : <>Todos los pagos de los servicios de Blvck Sheep se procesan de forma segura a través de Recurrente.com bajo el nombre legal de nuestra empresa matriz, <strong>Inari Agency</strong>. Cuando recibas un enlace o confirmación de pago, verás a Inari Agency como el beneficiario. Ten la seguridad de que esta es la entidad comercial legítima y autorizada para Blvck Sheep.</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Refund Policy:" : "Política de Reembolso:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>Cancellations made 24 hours or more before the scheduled departure time qualify for a full refund. <strong>Cancellations made within 24 hours of the trip are strictly non-refundable.</strong></>
              : <>Las cancelaciones realizadas con 24 horas o más de anticipación a la hora de salida programada califican para un reembolso completo. <strong>Las cancelaciones realizadas dentro de las 24 horas previas al viaje son estrictamente no reembolsables.</strong></>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Late Bookings:" : "Reservas de Última Hora:"}</strong>{" "}
            {activeLanguage === "en"
              ? "Last-minute reservations (within 8 hours of departure) are subject to immediate availability and may incur expedited logistics charges."
              : "Las reservaciones de último minuto (dentro de las 8 horas previas a la salida) están sujetas a disponibilidad inmediata y pueden incurrir en cargos por logística expedita."}
          </li>
        </ul>
      </section>

      {/* 6. Contact Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "6. Contact & Support" : "6. Contacto y Soporte"}
        </h2>
        <p className="text-zinc-400 mb-4">
          {activeLanguage === "en" 
            ? "For questions regarding your booking, logistical changes, or general inquiries, please reach out to our dispatch team:"
            : "Para preguntas sobre tu reserva, cambios logísticos o consultas generales, por favor comunícate con nuestro equipo:"}
        </p>
        <ul className="list-disc pl-6 text-zinc-400 space-y-2 marker:text-zinc-600">
          <li>
            WhatsApp:{" "}
            <a
              href="https://wa.me/50255116881"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              +502 5511 6881
            </a>
          </li>
          <li>
            {activeLanguage === "en" ? "Email:" : "Correo Electrónico:"}{" "}
            <a 
              href="mailto:connect@blvck-sheep.com" 
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              connect@blvck-sheep.com
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}