"use client";

import { motion } from "framer-motion";
import { Video, Globe, Ticket, Sparkles, ArrowRight, Gift } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";

import wellnessAtitlan from "@/assets/images/wellness-atitlan.png";

export default function RenathaBlondePage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-zinc-800">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 pt-24 pb-16">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${wellnessAtitlan.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full border border-zinc-700/50 bg-zinc-900/50 text-zinc-300 text-xs md:text-sm tracking-[0.2em] uppercase font-medium backdrop-blur-md">
              Blvck Sheep x Renatha Blonde
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-6 text-white"
          >
            Descubre <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Guatemala</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-light"
          >
            Renatha Blonde y Blvck Sheep se han unido para darte una promoción para tu viaje en el País de la Eterna Primavera.
          </motion.p>

          {/* Co-Branded Profile Badge Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-2xl mx-auto my-12"
          >
            {/* Glow sutil de fondo */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-700/30 via-zinc-500/10 to-zinc-700/30 rounded-3xl blur-xl opacity-50 pointer-events-none" />

            {/* Tarjeta Glassmorphic */}
            <div className="relative bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md rounded-3xl p-8 md:p-10 text-center flex flex-col items-center shadow-2xl overflow-hidden">
              
              {/* Micro Badge Colaboración */}
              <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-zinc-300">
                  Blvck Sheep <span className="text-zinc-500 mx-1">✕</span> Renatha Blonde
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </div>

              {/* Título & Subtítulo */}
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-1">
                Renatha Blonde
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400 mb-4">
                Travel Coach
              </p>

              {/* Pequeña descripción con personalidad */}
              <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-md mx-auto mb-6">
                Aprovecha agosto y septiembre de esta promocion. Explora sus recomendaciones y reclama tu beneficio exclusivo en tus traslados.
              </p>

              {/* Enlaces Sociales Estilizados */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                <a
                  href="https://www.instagram.com/renathablonde" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-white p-2.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300"
                >
                  <FaInstagram className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="hidden sm:inline text-xs text-zinc-300 group-hover:text-white font-medium">Instagram</span>
                </a>

                <a
                  href="https://www.tiktok.com/@renathablonde16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-white p-2.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300"
                >
                  <FaTiktok className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="hidden sm:inline text-xs text-zinc-300 group-hover:text-white font-medium">TikTok</span>
                </a>
                <a
                  href="https://www.facebook.com/renathablonde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-white p-2.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300"
                >
                  <FaFacebook className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="hidden sm:inline text-xs text-zinc-300 group-hover:text-white font-medium">Facebook</span>
                </a>
                <a
                  href="https://www.youtube.com/c/RenathaBlonde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-white p-2.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300"
                >
                  <FaYoutube className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="hidden sm:inline text-xs text-zinc-300 group-hover:text-white font-medium">YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks Section (Beneficios Base) */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 py-10 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Perk 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-zinc-700 transition-colors shadow-2xl"
          >
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-800/50 text-zinc-300 group-hover:text-white group-hover:bg-zinc-800 transition-all">
              <Ticket className="w-7 h-7" />
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-zinc-100 mb-4 tracking-tight">Descuento Especial</h3>
            <p className="text-zinc-400 leading-relaxed text-lg font-light">
              Un precio especial en tu primer traslado. Viaja con comodidad y seguridad desde el momento en que llegas.
            </p>
          </motion.div>

          {/* Perk 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-zinc-700 transition-colors shadow-2xl"
          >
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-800/50 text-zinc-300 group-hover:text-white group-hover:bg-zinc-800 transition-all">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-zinc-100 mb-4 tracking-tight">Diseño de Itinerario</h3>
            <p className="text-zinc-400 leading-relaxed text-lg font-light">
              Te ayudamos a crear tu itinerario personalizado con nuestro equipo para que disfrutes al máximo tu aventura.
            </p>
          </motion.div>
        </div>

        {/* Featured Giveaway Section (Sorteo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-3xl mx-auto mt-12 bg-gradient-to-b from-amber-950/20 via-zinc-950 to-zinc-950 border border-amber-500/40 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
        >
          {/* Badge */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-amber-500 text-black text-[10px] md:text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
            Sorteo Especial
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5 text-amber-400">
                <Gift className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-amber-400/90 font-bold block mb-2">
                1 Solo Ganador
              </span>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                Itinerario Completo Gratis
              </h3>
              <p className="text-zinc-300 font-light leading-relaxed mb-6">
                Sorteamos los tres traslados, para grupos de 1 a 4 personas, de la ruta icónica : <strong className="text-white font-medium">Ciudad de Guatemala ➔ Antigua ➔ Panajachel ➔ Ciudad de Guatemala</strong>. Ampliaremos mas detalles en el instagram de Blvck Sheep.
              </p>

              {/* Requirements */}
              <div className="bg-black/60 border border-zinc-800 rounded-xl p-4 md:p-5 space-y-4 text-sm text-zinc-300">
                <p className="flex items-start gap-3">
                  <span className="text-amber-400 mt-0.5">✓</span> 
                  <span>Reservar para viajar entre <strong className="text-white">Septiembre y Octubre</strong>.</span>
                </p>
                <div className="flex items-start gap-3 border-t border-zinc-800 pt-4">
                  <span className="text-amber-400 mt-0.5">✓</span> 
                  <div className="flex flex-col gap-2 w-full">
                    <span className="font-medium text-white mb-1">Síguenos en redes para participar:</span>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">Blvck Sheep</span>
                        <div className="flex gap-3">
                          <a href="https://www.instagram.com/blvcksheepgt" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 hover:underline">Instagram</a>
                          <a href="https://www.tiktok.com/@blvcksheepgt" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 hover:underline">TikTok</a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">Renatha Blonde</span>
                        <div className="flex gap-3">
                          <a href="https://www.instagram.com/renathablonde" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 hover:underline">Instagram</a>
                          <a href="https://www.tiktok.com/@renathablonde16" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 hover:underline">TikTok</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-5 border-t border-zinc-900/80 text-xs md:text-sm text-amber-400/80 font-medium text-center md:text-left">
            Anuncio del ganador: Domingo 30 de Agosto
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 pt-10 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <a
            href="https://wa.me/50255116881?text=%C2%A1Hola!%20Quiero%20la%20promo%20de%20Renatha%20Blonde%20Codigo:%20RENATHA-AG26%20para%20mi%20viaje%20a%20Guatemala%20y%20quiero%20entrar%20al%20sorteo%20del%20Itinerario%20Completo.%20%F0%9F%90%91%E2%9C%A8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 md:px-10 py-5 bg-white text-black font-semibold text-lg rounded-full overflow-hidden hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:-translate-y-1"
          >
            <span>Reclamar mi promocion en WhatsApp</span>
          </a>
          <p className="mt-8 text-sm md:text-base text-zinc-500 max-w-lg mx-auto leading-relaxed">
            Serás redirigido a nuestro WhatsApp oficial para atención personalizada. <br className="hidden md:block"/>
            <span className="text-zinc-400">Por favor, no borres el código que tendrás en tu mensaje inicial.</span>
          </p>
        </motion.div>
      </section>
    </div>
  );
}