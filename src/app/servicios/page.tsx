import React from 'react';
import Link from 'next/link';
import { 
  Bus, Car, Sparkle, 
  MapPin, Coffee, Wifi, Map, Leaf,
  Headphones, Navigation, PhoneCall, ArrowRight,
  Check
} from 'lucide-react';

export const metadata = {
  title: 'Nuestros Servicios | Blvck Sheep',
  description: 'Desde rutas compartidas económicas hasta absoluta tranquilidad. Encuentra la solución de transporte perfecta para tu viaje por Guatemala.',
};

export default function ServiciosPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-zinc-800 selection:text-white relative">
      
     {/* Botón de Cambio de Idioma */}
      <div className="w-full pt-32 px-6 md:px-12 max-w-7xl mx-auto flex justify-end relative z-50">
        <Link 
          href="/services" 
          className="text-xs font-medium tracking-widest text-zinc-500 hover:text-white transition-colors border border-zinc-800 rounded-full px-4 py-2"
        >
          READ IN ENGLISH
        </Link>
      </div>

      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full pt-40 pb-24 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
            Viaja Diferente.<br />
            <span className="text-zinc-500">Elige tu Experiencia.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Desde rutas compartidas accesibles hasta absoluta tranquilidad. Encuentra la solución de transporte perfecta para tu viaje por Guatemala.
          </p>
        </div>
      </section>

      {/* 2. The Tiers */}
      <section className="relative w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Shared Transit */}
            <div className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-500 transition-colors duration-500 flex flex-col">
              <div className="mb-8">
                <Bus strokeWidth={1} className="w-12 h-12 text-zinc-400 mb-6 group-hover:text-white transition-colors duration-500" />
                <h3 className="text-3xl font-light tracking-tight mb-3">Shuttle Compartido</h3>
                <p className="text-zinc-400 text-sm font-medium tracking-wide uppercase">Eficiente y practico</p>
              </div>
              <p className="text-zinc-300 font-light leading-relaxed mb-8">
                La opción inteligente y accesible para viajeros flexibles.
              </p>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">Logística y Reglas</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                      <Check className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                      <span>Puntos específicos de recogida y bajada (servicio puerta a puerta no siempre disponible)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                      <Check className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                      <span>Horarios fijos con posibles conexiones</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                      <Check className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                      <span>Ventanas de espera de 10-60 minutos</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                      <Check className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                      <span>Límite de equipaje</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">Flota</h4>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Operado a través de nuestra red de socios locales de confianza utilizando Vans y Microbuses.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Private Transit */}
            <div className="group relative bg-zinc-950 border border-zinc-700 rounded-2xl p-8 hover:border-zinc-300 transition-colors duration-500 flex flex-col">
              <div className="mb-8">
                <Car strokeWidth={1} className="w-12 h-12 text-zinc-300 mb-6 group-hover:text-white transition-colors duration-500" />
                <h3 className="text-3xl font-light tracking-tight mb-3">Transporte Privado</h3>
                <p className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Flexible y Directo</p>
              </div>
              <p className="text-zinc-200 font-light leading-relaxed mb-8">
                Tu horario, tu ruta. Nuestro servicio puerta a puerta 24/7.
              </p>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">Logística y Reglas</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>Servicio directo puerta a puerta. Tienes control total de tu viaje.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>Trabajamos las 24 horas. Tú eliges la hora exacta de salida. Sin tiempos de espera</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <span>Acomoda equipaje según tus necesidades</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">Flota</h4>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    Modernos Sedanes y SUVs exclusivos para tu grupo.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: The Blvck Tier */}
            <div className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-600 rounded-2xl p-8 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <Sparkle strokeWidth={0.5} className="w-32 h-32" />
              </div>
              <div className="mb-8 relative z-10">
                <Sparkle strokeWidth={1} className="w-12 h-12 text-white mb-6" />
                <h3 className="text-3xl font-light tracking-tight mb-3 text-white">Blvck Sheep</h3>
                <p className="text-zinc-200 text-sm font-medium tracking-wide uppercase">Comodidad Consciente</p>
              </div>
              <p className="text-white font-light leading-relaxed mb-8 relative z-10">
                Viaja con absoluta comodidad mientras reduces tu huella en nuestra flota ecológica.
              </p>
              <div className="space-y-6 flex-grow relative z-10">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-3">La Experiencia</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-zinc-200 font-light">
                      <Check className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                      <span>Ayuda al planeta mientras disfrutas el viaje con confort total</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-200 font-light">
                      <Check className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                      <span>Flexibilidad total de horarios - una experiencia más personalizada</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-200 font-light">
                      <Check className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                      <span>Generosa capacidad de equipaje</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-zinc-800 relative z-10">
                <p className="text-sm text-white font-medium uppercase tracking-widest flex items-center gap-2">
                  <Leaf className="w-4 h-4" /> SUVs Eléctricos Ecológicos
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The A La Carte Collection (Upsells for ALL tiers) */}
      <section className="relative w-full py-24 px-6 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
              A La Carta
            </h2>
            <p className="text-zinc-400 font-light text-lg">
              Mejora cualquier viaje. Disponibles como complementos para nuestras rutas Privadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Perk 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-300">
              <MapPin strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-3">Los Desvíos Express</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Convierte un día de tránsito en una exploración. Agrega paradas curadas en tu ruta, como la capital maya kaqchikel de Iximché, o disfruta de la cocina local en restaurantes en el camino.
              </p>
            </div>

            {/* Perk 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-300">
              <Coffee strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-3">La Hielera de Viaje</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Pre-abastecida y lista para el camino. Disfruta de bebidas refrescantes, agua mineral o snacks seleccionados esperándote al abordar.
              </p>
            </div>

            {/* Perk 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-300">
              <Wifi strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-3">Conectividad Instantánea</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                No pierdas tiempo buscando Wi-Fi. Proveemos tarjetas SIM o eSIM locales listas para usar al abordar para que te mantengas conectado.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Blvck Tier Exclusives (The Hook) 
      <section className="relative w-full py-24 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <Sparkle strokeWidth={1} className="w-12 h-12 text-white mb-6" />
              <h2 className="text-3xl font-light tracking-tight text-white mb-4">
                Exclusivos<br />Blvck
              </h2>
              <p className="text-zinc-400 font-light">
                Nuestro máximo valor. Estos beneficios no pueden comprarse como complementos; son de cortesía y exclusivos para nuestros clientes del Nivel Blvck.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-black border border-zinc-800 p-6 rounded-lg">
                <Map strokeWidth={1} className="w-6 h-6 text-zinc-300 mb-4" />
                <h4 className="text-white font-medium text-sm mb-2">Diseño de Viaje e Itinerario Gratis</h4>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  Olvida los tours genéricos. Actuamos como tu agencia de viajes personal, curando tu experiencia perfecta en Guatemala basada completamente en tu vibra, requisitos y presupuesto únicos.
                </p>
              </div>

              <div className="bg-black border border-zinc-800 p-6 rounded-lg">
                <Headphones strokeWidth={1} className="w-6 h-6 text-zinc-300 mb-4" />
                <h4 className="text-white font-medium text-sm mb-2">El Viaje y Sonido del Fundador</h4>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  Sujeto a disponibilidad, tu viaje eléctrico es piloteado directamente por nuestro fundador. Espera conocimientos locales profundos, recomendaciones auténticas y una lista de reproducción electrónica y ambient meticulosamente curada para el camino.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section> */}

      

      {/* 5. Footer / CTA */}
      <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center border-t border-zinc-900 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-10">
          ¿Listo para explorar Guatemala?
        </h2>
        <Link 
          href="/contact" 
          className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 text-sm uppercase tracking-widest font-bold overflow-hidden rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative z-10 flex items-center gap-3">
            Reserva Tu Viaje
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-zinc-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </Link>
      </section>

    </div>
  );
}