"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { DollarSign, ShieldCheck, CalendarClock, CheckCircle2, Car, User } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

export default function CareersPage() {
  const { activeLanguage } = useLanguage();

  const isEs = activeLanguage === "es";

  const content = {
    hero: {
      title: isEs ? "Únete a la Flota Blvck Sheep" : "Join the Blvck Sheep Fleet",
      subtitle: isEs 
        ? "¿Trabajas en Uber y quieres multiplicar tus ingresos con viajes seguros y programados?"
        : "Do you drive for Uber and want to multiply your income with safe, scheduled trips?",
      cta: isEs ? "Aplicar Ahora" : "Apply Now"
    },
    benefits: {
      title: isEs ? "Por qué conducir con nosotros" : "Why drive with us",
      items: [
        {
          icon: <DollarSign className="w-8 h-8 text-white mb-4" />,
          title: isEs ? "Tarifas Fijas" : "Fixed Rates",
          description: isEs 
            ? "Gana mejor por viaje en lugar de depender del tráfico."
            : "Earn better per trip instead of relying on traffic."
        },
        {
          icon: <ShieldCheck className="w-8 h-8 text-white mb-4" />,
          title: isEs ? "Seguridad Total" : "Total Security",
          description: isEs
            ? "Viajes privados pre-agendados exclusivamente con turistas."
            : "Private pre-scheduled trips exclusively with tourists."
        },
        {
          icon: <CalendarClock className="w-8 h-8 text-white mb-4" />,
          title: isEs ? "Menos Desgaste" : "Less Wear & Tear",
          description: isEs
            ? "Viajes largos en carretera, menos tráfico de ciudad."
            : "Long highway trips, less city traffic."
        }
      ]
    },
    requirements: {
      title: isEs ? "Requisitos para aplicar" : "Requirements to apply",
      common: {
        title: isEs ? "Requisitos Generales" : "General Requirements",
        items: isEs ? [
          "Mínimo 3 años de experiencia activa en Uber.",
          "Calificación mínima de 4.8 estrellas.",
          "Inglés Básico/Intermedio para interactuar con turistas.",
          "Excelente actitud de servicio al cliente y estricta puntualidad."
        ] : [
          "Minimum 3 years of active experience in Uber.",
          "Minimum rating of 4.8 stars.",
          "Basic/Intermediate English for tourist interaction.",
          "Excellent customer service attitude and strict punctuality."
        ]
      },
      tracks: [
        {
          icon: <Car className="w-6 h-6 text-white mb-2" />,
          title: isEs ? "Piloto con Vehículo" : "Driver with Vehicle",
          items: isEs ? [
            "Vehículo modelo 2018 o más reciente en excelentes condiciones.",
            "Sedán espacioso, van, microbus o SUV.",
            "Pantalla con GPS/Waze/Maps.",
            "Aire acondicionado 100% funcional."
          ] : [
            "Vehicle model 2018 or newer in excellent condition.",
            "Spacious Sedan, van, microbus or SUV.",
            "Screen with GPS/Waze/Maps.",
            "100% functional Air Conditioning."
          ]
        },
        {
          icon: <User className="w-6 h-6 text-white mb-2" />,
          title: isEs ? "Solo Piloto" : "Driver Only (No Vehicle)",
          items: isEs ? [
            "Aplica para conducir nuestros vehículos de flotilla.",
            "Aplican los mismos requisitos de experiencia y calificación."
          ] : [
            "Apply to drive our fleet vehicles.",
            "Same experience and rating requirements apply."
          ]
        }
      ]
    },
    cta: {
      title: isEs ? "Comienza tu proceso" : "Start your process",
      description: isEs
        ? "Envíanos un correo electrónico con tus datos para iniciar el proceso de selección."
        : "Send us an email with your details to start the selection process.",
      email: "connect@blvck-sheep.com",
      subject: isEs ? "Aplicación Piloto Blvck Sheep" : "Blvck Sheep Driver Application",
      instructions: isEs
        ? "Por favor adjunta tu CV, una captura de pantalla de tu perfil de Uber (mostrando calificación y tiempo conduciendo), y fotos de tu vehículo, por dentro y por fuera (si aplicas con auto)."
        : "Please attach your CV, a screenshot of your Uber profile (showing rating and time driving), and photos of your vehicle, inside and out (if applying with a car).",
      buttonText: isEs ? "Enviar Aplicación" : "Send Application"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24 selection:bg-white/20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            {content.hero.subtitle}
          </p>
          <Button variant="primary">
            <Link href="#apply">
              {content.hero.cta}
            </Link>
          </Button>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-12 text-center">
            {content.benefits.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.benefits.items.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/50 transition-colors"
              >
                {item.icon}
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements Section */}
        <motion.div 
          className="mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-12 text-center">
            {content.requirements.title}
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Common Requirements */}
            <motion.div variants={itemVariants} className="lg:col-span-3 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                {content.requirements.common.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.requirements.common.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white/70 shrink-0 mt-0.5" />
                    <p className="text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tracks */}
            {content.requirements.tracks.map((track, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className={`bg-zinc-900/20 border border-zinc-800 rounded-2xl p-8 ${idx === 0 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
              >
                {track.icon}
                <h3 className="text-xl font-medium mb-6">{track.title}</h3>
                <ul className="space-y-4">
                  {track.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0" />
                      <p className="text-zinc-400 text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        {/* CTA Section */}
        <motion.div 
          id="apply"
          className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-3xl p-8 md:p-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.cta.title}</h2>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            {content.cta.description}
          </p>
          
          <div className="bg-black/50 border border-zinc-800 rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto">
            <p className="text-zinc-300 text-sm leading-relaxed">
              {content.cta.instructions}
            </p>
          </div>

          {/* Área de Contacto Directo y Advertencia */}
          <div className="flex flex-col items-center justify-center space-y-4 mt-8">
            <a 
              href={`mailto:${content.cta.email}?subject=${encodeURIComponent(content.cta.subject)}`}
              className="text-2xl md:text-3xl font-light text-white hover:text-zinc-400 transition-colors underline decoration-zinc-700 underline-offset-8"
            >
              {content.cta.email}
            </a>
            
            <div className="bg-zinc-950/30 border border-zinc-900/50 rounded-lg px-6 py-3 mt-6">
              <p className="text-white/90 text-xs md:text-sm font-medium tracking-widest uppercase">
                {activeLanguage === "en" 
                  ? "Apply via email only: WhatsApp messages for applications will not be accepted."
                  : "Aplicar únicamente por correo: no se recibirán mensajes de WhatsApp para aplicaciones."}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
