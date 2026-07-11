"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { 
  DollarSign, 
  ShieldCheck, 
  CalendarClock, 
  CheckCircle2, 
  Car, 
  User, 
  FileText, 
  Sparkles, 
  Briefcase, 
  Laptop 
} from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

export default function CareersPage() {
  const { activeLanguage } = useLanguage();
  const isEs = activeLanguage === "es";
  const [activeTab, setActiveTab] = useState<"drivers" | "admin">("drivers");

  const content = {
    hero: {
      title: isEs ? "Únete al Equipo Blvck Sheep" : "Join the Blvck Sheep Team",
      subtitle: isEs 
        ? "Buscamos talento excepcional para expandir nuestros servicios. Ya sea al volante o en la oficina digital, hay un lugar para ti."
        : "We are looking for exceptional talent to expand our services. Whether behind the wheel or in the digital office, there is a place for you.",
      cta: isEs ? "Ver Puestos" : "View Positions"
    },
    tabs: {
      drivers: isEs ? "Pilotos Turisticos" : "Drivers & Fleet",
      admin: isEs ? "Roles Administrativos" : "Administrative Roles"
    },
    benefits: {
      title: isEs ? "Por qué trabajar con nosotros" : "Why work with us",
      items: [
        {
          icon: <DollarSign className="w-8 h-8 text-white mb-4" />,
          title: isEs ? "Ingresos Estables" : "Stable Income",
          description: isEs 
            ? "Tarifas fijas y competitivas por viaje o esquemas claros en roles administrativos."
            : "Fixed, competitive rates per trip or clear structures for admin roles."
        },
        {
          icon: <ShieldCheck className="w-8 h-8 text-white mb-4" />,
          title: isEs ? "Seguridad & Confianza" : "Safety & Trust",
          description: isEs 
            ? "Operamos exclusivamente con clientes pre-agendados y filtros estrictos de seguridad."
            : "We operate exclusively with pre-scheduled clients and strict security filters."
        },
        {
          icon: <CalendarClock className="w-8 h-8 text-white mb-4" />,
          title: isEs ? "Flexibilidad Real" : "Real Flexibility",
          description: isEs 
            ? "Viajes programados de larga distancia o modalidades de trabajo remoto."
            : "Scheduled long-distance trips or remote work modalities."
        }
      ]
    },
    driversTab: {
      requirements: {
        title: isEs ? "Requisitos de Ingreso" : "Application Requirements",
        generalTitle: isEs ? "Requisitos Obligatorios" : "Mandatory Requirements",
        generalItems: isEs ? [
          "Antecedentes penales y policiacos vigentes y limpios.",
          "Inglés Básico / Intermedio para interactuar fluidamente con turistas.",
          "Excelente actitud de servicio al cliente y estricta puntualidad."
        ] : [
          "Current and clean criminal and police background checks.",
          "Basic / Intermediate English to interact smoothly with tourists.",
          "Excellent customer service attitude and strict punctuality."
        ],
        desirableTitle: isEs ? "Perfil Deseable (Puntos Extra)" : "Preferred Profile (Bonus Points)",
        desirableItems: isEs ? [
          "Experiencia activa previa en Uber, Indriver u otras apps de transporte.",
          "Calificación histórica ideal de 4.8+ estrellas en plataformas de movilidad.",
          "Estudios en carreras afines al turismo o un fuerte interés por el sector.",
          "Habilidad y comodidad usando tecnología y apps de gestión de equipos (como Connecteam)."
        ] : [
          "Active prior experience in Uber, Indriver, or other transport apps.",
          "Historical rating of 4.8+ stars on mobility platforms is ideal.",
          "Studies related to tourism or a strong interest in the industry.",
          "Comfortable using technology and team management apps (like Connecteam)."
        ]
      },
      tracks: [
        {
          icon: <Car className="w-6 h-6 text-white mb-2" />,
          title: isEs ? "Piloto con Vehículo Propio" : "Driver with Own Vehicle",
          items: isEs ? [
            "Vehículo modelo 2018 o más reciente en excelentes condiciones.",
            "Sedán espacioso, SUV, van o microbús.",
            "Pantalla con GPS / Waze / Google Maps operativo.",
            "Aire acondicionado 100% funcional."
          ] : [
            "Vehicle model 2018 or newer in excellent condition.",
            "Spacious Sedan, SUV, van, or microbus.",
            "Screen with active GPS / Waze / Google Maps.",
            "100% functional Air Conditioning."
          ]
        },
        {
          icon: <User className="w-6 h-6 text-white mb-2" />,
          title: isEs ? "Solo Piloto (Flotilla)" : "Driver Only (Fleet)",
          items: isEs ? [
            "Aplica para conducir nuestros vehículos de flotilla interna.",
            "Aplican los mismos requisitos obligatorios de seguridad y servicio."
          ] : [
            "Apply to drive our internal fleet vehicles.",
            "Same mandatory safety and service requirements apply."
          ]
        }
      ]
    },
    adminTab: {
      title: isEs ? "Plazas Administrativas Disponibles" : "Available Administrative Positions",
      roles: [
        {
          id: "social-media",
          title: isEs ? "Social Media Associate (Junior)" : "Social Media Associate (Junior)",
          subtitle: isEs ? "Modalidad: Remoto | Horario: Part-Time" : "Location: Remote | Schedule: Part-Time",
          description: isEs
            ? "Buscamos un/a creador/a digital, con un excelente sentido de la estética y ganas de crecer. Si tienes un estilo de diseño minimalista, sabes crear contenido atractivo y te entusiasma el turismo nacional, este es tu lugar."
            : "We are looking for a passionate digital creator with an excellent sense of aesthetics and a desire to grow. If you have a minimalist design style, know how to create engaging content, and love tourism, this is for you.",
          tasksTitle: isEs ? "¿Qué harás?" : "What you will do:",
          tasks: isEs ? [
            "Crear, editar y programar contenido (Reels, Stories, posts) enfocado en turismo local.",
            "Gestionar comunidades en Instagram, TikTok y Facebook: responder interacciones y conectar con turistas.",
            "Mantener y proteger la identidad visual de la marca.",
            "Contacto directo con otras marcas para crear alianzas o planificar visitas."
          ] : [
            "Create, edit, and schedule content (Reels, Stories, posts) focused on local and international tourism.",
            "Manage communities on Instagram, TikTok, and Facebook: reply to interactions and connect with tourists.",
            "Maintain and protect the brand's visual identity.",
            "Direct contact with other brands to create partnerships or plan visits."
          ],
          requirementsTitle: isEs ? "¿Qué buscamos?" : "What we look for:",
          requirements: isEs ? [
            "Estudios universitarios iniciales en Marketing Digital, CM o experiencia junior (1-2 años) con portafolio (valen proyectos personales/universitarios).",
            "Disponibilidad para viajar dentro del país para la creación de contenido (Indispensable).",
            "Nivel de inglés avanzado (indispensable para redactar y responder fluidamente a turistas).",
            "Excelente ojo visual con fuerte inclinación hacia la estética minimalista y limpia.",
            "Habilidad en edición de video corto (CapCut, Premiere, etc.). Plus: Uso de Adobe After Effects.",
            "Conocimiento en el uso de Inteligencia Artificial.",
          ] : [
            "Early university studies in Digital Marketing, CM, or junior experience (1-2 years) with a portfolio (personal/university projects count).",
            "Availability to travel within the country for content creation (Essential).",
            "Advanced English level (essential for writing and smoothly responding to tourists).",
            "Excellent visual eye with a strong inclination towards clean and minimalist aesthetics.",
            "Skills in short-form video editing (CapCut, Premiere, etc.). Bonus: Adobe After Effects knowledge.",
            "Knowledge using Artificial Intelligence.",
          ]
        },
        {
          id: "travel-assistant",
          title: isEs ? "Asistente Ejecutivo de Viajes" : "Travel Executive Assistant",
          subtitle: isEs ? "Modalidad: Remoto | Horario: Part-Time" : "Location: Remote | Schedule: Part-Time",
          description: isEs 
            ? "Buscamos una persona altamente organizada y apasionada por el turismo en Guatemala, el servicio premium y el orden digital."
            : "We are looking for a highly organized individual passionate about tourism in Guatemala, premium service, and digital organization.",
          tasksTitle: isEs ? "¿Qué harás?" : "What you will do:",
          tasks: isEs ? [
            "Coordinar la logística de viajes y traslados, asegurando tiempos exactos y un servicio impecable.",
            "Primer punto de contacto: responder consultas, brindar información y enviar cotizaciones rápidas y profesionales.",
            "Gestionar y optimizar bases de datos en Google Sheets (itinerarios, registro de clientes y control contable básico).",
            "Asegurar una experiencia de cliente fluida y de nivel premium desde el primer contacto."
          ] : [
            "Coordinate trip and transfer logistics, ensuring exact timing and flawless service.",
            "First point of contact: answer inquiries, provide info, and send out quick and professional quotes.",
            "Manage and optimize databases in Google Sheets (itineraries, client logs, basic accounting).",
            "Ensure a smooth, premium client experience right from the initial inquiry."
          ],
          requirementsTitle: isEs ? "¿Qué buscamos?" : "What we look for:",
          requirements: isEs ? [
            "Excelente manejo de Google Workspace (dominio específico y comprobable en Google Sheets).",
            "Nivel de inglés avanzado (tanto escrito como hablado de forma fluida).",
            "Estudios iniciales universitarios en Administración de Empresas, Marketing o afín (únicamente cursando 1er o 2do año) O experiencia previa en puestos administrativos, logística o turismo.",
            "Atención meticulosa al detalle, excelente redacción, ortografía y capacidad multitarea."
          ] : [
            "Excellent command of Google Workspace (specific, verifiable mastery of Google Sheets).",
            "Advanced English level (fluent written and spoken).",
            "Initial university studies in Business Admin, Marketing, or related fields (only 1st or 2nd year students) OR prior experience in admin, logistics, or tourism.",
            "Meticulous attention to detail, excellent writing and spelling, and multitasking abilities."
          ]
        }
      ]
    },
    cta: {
      title: isEs ? "Comienza tu proceso" : "Start your process",
      description: isEs
        ? "Envíanos un correo electrónico con tus datos para iniciar el proceso de selección de inmediato."
        : "Send us an email with your details to start the selection process right away.",
      email: "connect@blvck-sheep.com",
      subject: isEs ? "Aplicación de Cartera - Blvck Sheep" : "Job Application - Blvck Sheep",
      instructions: isEs
        ? "Si aplicas para Piloto, adjunta tu CV, incluye tus antecedentes penales/policiacos y capturas de tus plataformas de transporte o fotos de tu auto (si aplica). Si aplicas para Asistente o Social Media Associate, adjunta tu CV y un pequeño resumen de tu experiencia."
        : "Please attach your CV. If applying as a Driver, include your background checks and screenshots of your transport platforms or car photos (if applicable). If applying as an Assistant or Social Media Associate, attach your resume and a brief summary of your experience.",
      warningText: isEs 
        ? "Aplicar únicamente por correo: no se recibirán mensajes de WhatsApp para aplicaciones."
        : "Apply via email only: WhatsApp messages for applications will not be accepted."
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
          className="text-center max-w-3xl mx-auto mb-16"
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
            <Link href="#positions-section">
              {content.hero.cta}
            </Link>
          </Button>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
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

        {/* Navigation Tabs Selector */}
        <div id="positions-section" className="flex justify-center mb-16 border-b border-zinc-800 p-2 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("drivers")}
            className={`flex-1 py-3 text-center font-medium text-sm transition-all rounded-xl relative ${
              activeTab === "drivers" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {activeTab === "drivers" && (
              <motion.div 
                layoutId="activeTabIndicator" 
                className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-xl -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {content.tabs.drivers}
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`flex-1 py-3 text-center font-medium text-sm transition-all rounded-xl relative ${
              activeTab === "admin" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {activeTab === "admin" && (
              <motion.div 
                layoutId="activeTabIndicator" 
                className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-xl -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {content.tabs.admin}
          </button>
        </div>

        {/* Dynamic Content View based on Active Tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === "drivers" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-32"
        >
          {activeTab === "drivers" ? (
            /* DRIVERS CONTENT */
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Mandatory Requirements */}
                <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
                    <ShieldCheck className="w-5 h-5 text-zinc-400" />
                    {content.driversTab.requirements.generalTitle}
                  </h3>
                  <div className="space-y-4">
                    {content.driversTab.requirements.generalItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                        <p className="text-zinc-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desirable Profiles */}
                <div className="bg-zinc-900/10 border border-zinc-800/60 border-dashed rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-zinc-300">
                    <Sparkles className="w-5 h-5 text-zinc-500" />
                    {content.driversTab.requirements.desirableTitle}
                  </h3>
                  <div className="space-y-4">
                    {content.driversTab.requirements.desirableItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0" />
                        <p className="text-zinc-400 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tracks (Fleet vs Private car) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
                {content.driversTab.tracks.map((track, idx) => (
                  <div 
                    key={idx} 
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
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* ADMINISTRATIVE ROLES CONTENT */
            <div className="space-y-12">
              <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
                {content.adminTab.title}
              </h2>
              
              <div className="grid grid-cols-1 gap-8">
                {content.adminTab.roles.map((role) => (
                  <div 
                    key={role.id}
                    className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-10 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/60 pb-6 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight mb-1">{role.title}</h3>
                        <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">{role.subtitle}</p>
                      </div>
                      <Briefcase className="w-8 h-8 text-zinc-600 hidden md:block" />
                    </div>

                    {/* Specific Description if exists */}
                    {'description' in role && (
                      <p className="text-zinc-300 mb-6 leading-relaxed bg-zinc-950/40 p-4 border border-zinc-900 rounded-xl">
                        {role.description}
                      </p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Left Column Tasks if applicable */}
                      {'tasks' in role && (
                        <div>
                          <h4 className="text-md font-semibold text-white mb-4 flex items-center gap-2">
                            <Laptop className="w-4 h-4 text-zinc-400" />
                            {role.tasksTitle}
                          </h4>
                          <ul className="space-y-3">
                            {role.tasks?.map((task, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Right/Full Column Requirements */}
                      <div className={'tasks' in role ? '' : 'md:col-span-2'}>
                        <h4 className="text-md font-semibold text-white mb-4 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-zinc-400" />
                          {role.requirementsTitle}
                        </h4>
                        <ul className="space-y-3">
                          {role.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                              <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

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

          {/* Contact and Restrictions Area */}
          <div className="flex flex-col items-center justify-center space-y-4 mt-8">
            <a 
              href={`mailto:${content.cta.email}?subject=${encodeURIComponent(content.cta.subject)}`}
              className="text-2xl md:text-3xl font-light text-white hover:text-zinc-400 transition-colors underline decoration-zinc-700 underline-offset-8"
            >
              {content.cta.email}
            </a>
            
            <div className="bg-zinc-950/30 border border-zinc-900/50 rounded-lg px-6 py-3 mt-6">
              <p className="text-white/90 text-xs md:text-sm font-medium tracking-widest uppercase">
                {content.cta.warningText}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}