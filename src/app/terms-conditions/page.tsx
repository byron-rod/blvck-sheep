"use client";

import { useState } from "react";
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
              ? <>Blvck Sheep operates private transfers only (SUVs or Sedans). For our <strong>shared services and large groups (5+ passengers)</strong>, we act as coordinators, working with trusted external transportation companies to facilitate your trip.</>
              : <>Blvck Sheep opera exclusivamente viajes privados (Sedanes y SUVs). Para nuestros <strong>servicios compartidos y grupos grandes (5+ pasajeros)</strong>, actuamos como coordinadores, trabajando con empresas de transporte externas de confianza para facilitar tu viaje.</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Luggage Rule:" : "Regla de Equipaje:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>Standard allowance is 1 large/medium bag + 1 personal item per person. <strong>You must notify us in advance of any extra luggage.</strong></>
              : <>El límite estándar es 1 maleta grande/mediana + 1 artículo personal por pasajero. <strong>Debes notificarnos con anticipación sobre cualquier equipaje extra.</strong></>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Shared Shuttles (Crucial):" : "Shuttles Compartidos (Crucial):"}</strong>{" "}
            {activeLanguage === "en"
              ? "Shared routes have strict schedules, conections with change of vehicle, multiple stops to pick-up/drop-off people, wait times up to 90 minutes, and do not guarantee door-to-door service. We are NOT responsible for missed flights or connections due to shared route operating times. If you have a strict schedule we recommend our Private Transit."
              : "Las rutas compartidas tienen horarios estrictos, conexiones con cambios de vehiculo, multiples paradas para recoger/dejar mas pasajeros, esperas de hasta 90 minutos y no garantizan servicio puerta a puerta. NO nos hacemos responsables por vuelos o conexiones perdidas por retrasos debido al funcionamiento usual de este servicio. Si tienen tiempo limitado recomendamos usar viajes Privados."}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Cancellations:" : "Cancelaciones:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>You must cancel or reschedule at least <strong>24 hours</strong> before departure for a refund.</>
              : <>Debes cancelar o reprogramar con al menos <strong>24 horas</strong> de anticipación a la salida para obtener un reembolso.</>}
          </li>
          <li>
            <strong>{activeLanguage === "en" ? "Payments:" : "Pagos:"}</strong>{" "}
            {activeLanguage === "en"
              ? <>All payments are securely processed via Recurrente.com under our parent company name, <strong>Inari Agency</strong>.</>
              : <>Todos los pagos se procesan de forma segura a través de Recurrente.com bajo el nombre de nuestra empresa matriz, <strong>Inari Agency</strong>.</>}
          </li>
        </ul>
      </section>

      {/* 1. Shared Shuttle Logistics - COMPLETELY RESTRUCTURED */}
      <section className="mb-14">
        <h2 className="text-2xl font-normal mb-4 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "1. Shared Shuttle Logistics & Expectations" : "1. Logística y Expectativas del Servicio Compartido"}
        </h2>
        <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
          {activeLanguage === "en"
            ? "Please read carefully. To offer budget-friendly shared options, we coordinate with the best external transportation companies in the country for each region. We do not operate these vehicles directly, meaning certain logistics and terms of service fall entirely under the operator's control. Blvck Sheep was created to improve this system, that is why we focus on providing a more eficient way to travel with our Private Transit options. By booking a shared shuttle, you accept the following realities:"
            : "Por favor lee detenidamente. Para ofrecerte opciones compartidas económicas, coordinamos con las mejores empresas de transporte externas para cada region del pais. Nosotros no operamos estos vehículos directamente, lo que significa que ciertas logísticas y terminos de servicio caen bajo el control del operador. Blvck Sheep fue creado para mejorar este sistema, por lo que tratamos de proveer un servicio mas eficiente en nuestros viajes de sistema privado. Al reservar un shuttle compartido, aceptas las siguientes realidades:"}
        </p>

        <div className="space-y-4">
          {/* Box 1: Schedules & Meeting points */}
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
            <h3 className="text-white font-medium mb-2 flex items-center gap-2">
              <span className="text-blue-500">▪</span> 
              {activeLanguage === "en" ? "Fixed Schedules & Meeting Points" : "Horarios Fijos y Puntos de Encuentro"}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {activeLanguage === "en"
                ? "Shared systems operate on strict, pre-established schedules. If you need to travel outside of these specific hours, you must book a private transfer. Furthermore, door-to-door service is NOT guaranteed. Most routes require you to arrive at specific hubs or meeting points (e.g., Central zones in Antigua, Airport perimeter in the City)."
                : "Los sistemas compartidos operan bajo horarios estrictos y preestablecidos. Si deseas viajar fuera de esos horarios, debes reservar un traslado privado. Además, el servicio puerta a puerta NO está garantizado. La mayoría de rutas requieren que llegues a puntos de encuentro específicos (ej. zonas céntricas en Antigua, perímetro del aeropuerto en la Capital)."}
            </p>
          </div>

          {/* Box 2: Wait times */}
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
            <h3 className="text-white font-medium mb-2 flex items-center gap-2">
              <span className="text-blue-500">▪</span> 
              {activeLanguage === "en" ? "Pick-Up Windows & Wait Times" : "Horas de Recogida y Tiempos de Espera"}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {activeLanguage === "en"
                ? "Your actual pick-up time will vary greatly depending on your location. The driver may arrive before your scheduled time if you are the first stop, or significantly later if you are the last. Drivers grant a 10-minute grace period to each passenger to avoid leaving anyone behind. -IMPORTANT: They can leave you behind too if you are not able to reach the meeting point in time, this means, you would have to pay for a new ride. Because this adds up, wait times can range from 60 to 90 minutes. Please be ready 15 minutes before your scheduled time and be patient. Someone in your party MUST have working roaming or data plan so we can contact you outside of an area with WIFI."
                : "Tu hora real de recogida variará dependiendo de tu punto de abordaje. El piloto puede llegar antes de la hora estipulada si eres la primera parada, o mucho tiempo después si eres el último. Los pilotos dan 10 minutos de gracia a cada pasajero para evitar dejar a alguien. -IMPORTANTE: El transporte te puede dejar sin no logras llegar a tiempo a tu punto de encuentro, esto significa, que debes de pagar un nuevo viaje. Debido a que todo esto suma, las esperas pueden ser de 60 a 90 minutos. Por favor, estate listo 15 minutos antes y ten paciencia. Alguien en tu grupo DEBE tener roaming o algun plan de internet para poder contactarlos sin necesidad de tener WIFI."}
            </p>
          </div>

          {/* Box 3: Connections */}
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
            <h3 className="text-white font-medium mb-2 flex items-center gap-2">
              <span className="text-blue-500">▪</span> 
              {activeLanguage === "en" ? "Routing & Vehicle Connections" : "Rutas y Conexiones de Vehículos"}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {activeLanguage === "en"
                ? "A shared shuttle is rarely a straight, non-stop line. The vast majority of routes involve at least one connection where you will wait and switch to a different van or bus to reach your final destination. These connection wait times are variable and out of our control."
                : "Un shuttle compartido rara vez es una línea recta sin paradas. La gran mayoría de rutas tienen algún tipo de conexión, donde deberás esperar y cambiar de van o microbús para llegar a tu destino final. Los tiempos de espera en estas conexiones son variables y están fuera de nuestro control."}
            </p>
          </div>

          {/* Box 4: ZERO LIABILITY (Strong warning) */}
          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-5">
            <h3 className="text-red-400 font-medium mb-2 flex items-center gap-2">
              <span className="text-red-500">⚠️</span> 
              {activeLanguage === "en" ? "Zero Liability for Missed Connections" : "Cero Responsabilidad por Conexiones Perdidas"}
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {activeLanguage === "en"
                ? "Because of all the factors mentioned above, Blvck Sheep is NOT responsible for any missed flights, missed boats, or missed connecting transport of any kind due to delays on a shared route. If you have a tight schedule or a flight to catch, we strongly advise booking an earlier shared departure or upgrading to a Private Transit where you control the schedule."
                : "Debido a todos los factores mencionados, Blvck Sheep NO se hace responsable por vuelos perdidos, lanchas perdidas o conexiones con otros transportes de cualquier tipo que puedas perder por atrasos en rutas compartidas. Si tienes un horario ajustado, te aconsejamos usar horarios más tempranos o reservar un Traslado Privado, donde tú tienes el control total del tiempo."}
            </p>
          </div>
        </div>
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
              ? <>For our Private and Blvck tiers, Blvck Sheep operates Sedans, 5-passenger SUVs, or 7-passenger SUVs. To ensure a comfortable experience, we allow a <strong>maximum of 4 clients per trip</strong> in these vehicles. For larger private groups, we utilize our trusted partner network for van or microbus services.</>
              : <>Para nuestros niveles Privado y Blvck, operamos Sedanes, y SUVs de 5 o 7 pasajeros. Para garantizar una experiencia cómoda, permitimos un <strong>máximo de 4 clientes por viaje</strong> en estos vehículos. Para grupos privados más grandes, utilizamos nuestra red de socios de confianza para servicios de van o microbus.</>}
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

      {/* 5. Pricing, Payments & Cancellations */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          {activeLanguage === "en" ? "5. Pricing, Payments & Cancellations" : "5. Precios, Pagos y Cancelaciones"}
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>{activeLanguage === "en" ? "Dynamic Pricing:" : "Precios Dinámicos:"}</strong>{" "}
            {activeLanguage === "en"
              ? "Because our rates are heavily dependent on current fuel and oil costs, prices are subject to change without prior notice. (Note: Once your booking is paid and confirmed, your rate is locked and will not change)."
              : "Debido a que nuestros precios se basan en el estado actual del petróleo y los combustibles, las tarifas pueden cambiar sin previo aviso. (Nota: Una vez que tu reserva esté pagada y confirmada, tu tarifa queda asegurada y no cambiará)."}
          </li>
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