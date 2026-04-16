import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Blvck Sheep Shuttle Service",
  description:
    "Lee los términos, condiciones y políticas logísticas para usar los servicios de transporte compartido, privado y premium de Blvck Sheep en Guatemala.",
};

export default function TerminosYCondiciones() {
  return (
    <main className="container mx-auto max-w-4xl py-24 px-6 lg:px-0">
      {/* Botón para regresar a la versión en inglés */}
      <div className="flex justify-end mb-8">
        <Link 
          href="/terms-conditions" 
          className="text-xs font-medium tracking-widest text-zinc-500 hover:text-white transition-colors border border-zinc-800 rounded-full px-4 py-2"
        >
          READ IN ENGLISH
        </Link>
      </div>

      <h1 className="text-4xl font-light mb-6 text-center text-white tracking-tight">
        Términos y Condiciones de Blvck Sheep
      </h1>
      <p className="text-lg mb-10 text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
        Bienvenido a Blvck Sheep. Nos comprometemos a brindar un transporte seguro, confiable y sin complicaciones en toda Guatemala. Al reservar nuestros servicios, aceptas las siguientes políticas.
      </p>

      {/* THE QUICK READ (TL;DR) */}
      <section className="mb-14 bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 md:p-8">
        <h2 className="text-xl font-medium mb-4 text-white">
          Resumen Rápido: Políticas Esenciales
        </h2>
        <p className="text-zinc-400 mb-4 text-sm">
          Por favor, revisa nuestras reglas principales antes de viajar. Las explicaciones detalladas se encuentran en las secciones a continuación.
        </p>
        <ul className="list-disc pl-5 text-zinc-300 space-y-3 text-sm marker:text-blue-500">
          <li>
            <strong>Nuestro Servicio:</strong> Blvck Sheep opera Sedanes, y SUVs de 5 o 7 pasajeros con límites de capacidad por viaje para una experiencia más privada y cómoda. Para nuestros <strong>servicios compartidos o grupos grandes (5+ pasajeros)</strong>, tenemos alianzas con proveedores de confianza que nos asisten con servicios de van, microbús o autobús.
          </li>
          <li>
            <strong>Regla de Equipaje:</strong> El límite estándar es 1 maleta grande + 1 artículo personal por pasajero. <strong>Debes notificarnos con anticipación sobre cualquier equipaje extra</strong> para poder enviar el vehículo del tamaño correcto; de lo contrario, podrías enfrentar retrasos o cargos adicionales (lee más abajo).
          </li>
          <li>
            <strong>Compartido vs. Privado:</strong> Los traslados compartidos operan en rutas fijas con tiempos de espera impredecibles (10-60 minutos). Si tienes un horario ajustado, te recomendamos reservar transporte Privado.
          </li>
          <li>
            <strong>Cancelaciones:</strong> Debes cancelar o reprogramar con al menos <strong>24 horas</strong> de anticipación a la salida para obtener un reembolso o cambio gratuito.
          </li>
          <li>
            <strong>Pagos:</strong> Todos los pagos se procesan de forma segura a través de Recurrente.com bajo el nombre de nuestra empresa matriz, <strong>Inari Agency</strong>.
          </li>
          <li>
            <strong>Factores Externos:</strong> No nos hacemos responsables por vuelos perdidos o retrasos causados por factores de terceros (bloqueos de carreteras, clima extremo, tráfico pesado).
          </li>
        </ul>
      </section>

      {/* 1. Shared Shuttle Logistics */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          1. Logística y Expectativas del Servicio Compartido
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>Tiempos de Espera y Rutas:</strong> Los traslados compartidos son una opción altamente eficiente y económica, operada en colaboración con nuestros socios locales de confianza (usando vans o microbuses). Debido a que los conductores deben navegar por múltiples puntos de recogida, <strong>los horarios de salida y llegada son estimaciones, no garantías.</strong> Por favor, espera ventanas de recogida que varían de 10 a 60 minutos, especialmente durante temporadas altas.
          </li>
          <li>
            <strong>Zonas de Recogida / Bajada:</strong> Las rutas compartidas solo operan en puntos específicos. En Antigua, las recogidas se limitan a la zona central. En la Ciudad de Guatemala, las bajadas y recogidas están estrictamente limitadas al perímetro del aeropuerto y zonas cercanas seleccionadas. El servicio puerta a puerta en hoteles no está garantizado para rutas compartidas.
          </li>
          <li>
            <strong>Horarios Ajustados:</strong> Si tienes una salida de vuelo estricta, un itinerario sensible al tiempo o prefieres no esperar a otros pasajeros, <strong>te recomendamos encarecidamente reservar una salida compartida más temprana o actualizar a nuestros niveles de Transporte Privado.</strong>
          </li>
        </ul>
      </section>

      {/* 2. Private & Blvck Tier Policies */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          2. Políticas de Servicio Privado y Tier Blvck
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>Condiciones del Servicio y Flota:</strong> Para nuestros niveles Privado y Blvck, operamos Sedanes, y SUVs de 5 o 7 pasajeros. Para garantizar una experiencia cómoda, permitimos un <strong>máximo de 4 clientes por viaje</strong> en estos vehículos. Para grupos privados más grandes, utilizamos nuestra red de socios de confianza para servicios de van premium.
          </li>
          <li>
            <strong>Flexibilidad de Horarios y Avisos:</strong> Aunque ofrecemos total flexibilidad, cualquier cambio en tu hora de salida o ruta debe solicitarse con al menos <strong>24 horas de anticipación</strong> para que podamos gestionar adecuadamente la logística de los conductores.
          </li>
          <li>
            <strong>Ajustes de Última Hora:</strong> Los cambios solicitados dentro de las 24 horas previas a tu viaje están estrictamente sujetos a disponibilidad. Podrían incurrir en tarifas adicionales o ser rechazados si entran en conflicto con los horarios de otros clientes.
          </li>
        </ul>
      </section>

      {/* 3. Luggage Constraints */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          3. Restricciones de Equipaje y Capacidad del Vehículo
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>El Límite Estándar (Regla de Oro):</strong> El límite base para todos los pasajeros es de una (1) maleta grande y un (1) artículo personal (como una mochila o bolso). Para los traslados compartidos, este límite se aplica estrictamente debido al espacio de carga compartido.
          </li>
          <li>
            <strong>Transporte Privado y Aviso Previo:</strong> Debido a que nuestra flota de nivel Privado y Blvck varía desde Sedanes hasta SUVs más grandes, la capacidad total de carga varía por viaje. Podemos acomodar equipaje extra en rutas privadas, pero <strong>debes notificarnos al momento de la reserva</strong> para que podamos despachar el tamaño de vehículo correcto.
          </li>
          <li>
            <strong>Consecuencias de No Declarar Equipaje Extra:</strong> Si te presentas a la recogida con equipaje extra no declarado, Blvck Sheep no se hace responsable si este no cabe de manera segura en el vehículo asignado. El cliente asume toda la responsabilidad por las consecuencias resultantes, que pueden incluir el pago de un segundo vehículo, retrasos significativos en el viaje, o la posibilidad de que un vehículo más grande no esté disponible de inmediato.
          </li>
          <li>
            <strong>Artículos de Gran Tamaño:</strong> Para artículos excepcionalmente grandes (ej. tablas de surf, instrumentos grandes o bicicletas), por favor notifícanos con anticipación. Se aplicarán tarifas adicionales.
          </li>
        </ul>
      </section>

      {/* 4. Third-Party Factors & Liability */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          4. Factores Externos y Responsabilidad
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>Fuera de Nuestro Control:</strong> Viajar en Guatemala implica navegar por elementos impredecibles. Blvck Sheep no se hace responsable por retrasos, vuelos perdidos o cancelaciones causadas por factores fuera de nuestro control directo, incluyendo bloqueos de carreteras, protestas políticas, clima severo, problemas mecánicos, desastres naturales o tráfico pesado inesperado. Recomendamos a los clientes planificar en consecuencia, especialmente durante temporadas de alta demanda (ej. Semana Santa, Navidad, Año Nuevo). Podemos asesorar sobre los tiempos, pero no somos responsables de los retrasos causados por terceros.
          </li>
          <li>
            <strong>Pertenencias Personales:</strong> Los pasajeros son totalmente responsables de sus artículos personales. Aunque ayudaremos a localizar pertenencias olvidadas, no podemos garantizar la recuperación de artículos perdidos en nuestros vehículos o vans de nuestros socios.
          </li>
        </ul>
      </section>

      {/* 5. Booking, Payments & Cancellations */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          5. Pagos y Cancelaciones
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>Procesamiento Seguro (Inari Agency):</strong> Todos los pagos de los servicios de Blvck Sheep se procesan de forma segura a través de Recurrente.com bajo el nombre legal de nuestra empresa matriz, <strong>Inari Agency</strong>. Cuando recibas un enlace o confirmación de pago, verás a Inari Agency como el beneficiario. Ten la seguridad de que esta es la entidad comercial legítima y autorizada para Blvck Sheep.
          </li>
          <li>
            <strong>Política de Reembolso:</strong> Las cancelaciones realizadas con 24 horas o más de anticipación a la hora de salida programada califican para un reembolso completo. <strong>Las cancelaciones realizadas dentro de las 24 horas previas al viaje son estrictamente no reembolsables.</strong>
          </li>
          <li>
            <strong>Reservas de Última Hora:</strong> Las reservaciones de último minuto (dentro de las 8 horas previas a la salida) están sujetas a disponibilidad inmediata y pueden incurrir en cargos por logística expedita.
          </li>
        </ul>
      </section>

      {/* 6. Contact Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          6. Contacto y Soporte
        </h2>
        <p className="text-zinc-400 mb-4">
          Para preguntas sobre tu reserva, cambios logísticos o consultas generales, por favor comunícate con nuestro equipo:
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
            Correo Electrónico:{" "}
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