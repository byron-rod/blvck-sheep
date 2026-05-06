"use client";

import Image from "next/image";
import logoImage from "@/assets/images/blvcksheep.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Itineraries", href: "/itineraries" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Blog", href: "/journal" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* SEMÁNTICA: Cambiamos <section> por <header> */}
      <header className="py-4 lg:py-8 fixed w-full top-0 z-[99999] transform-gpu">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-black/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 px-4 md:px-2 items-center">
              
              {/* ACCESIBILIDAD: aria-label en el logo */}
              <div className="p-1">
                <Link href="/" aria-label="Ir a la página principal de Blvck Sheep">
                  <Image
                    src={logoImage}
                    alt="Blvck Sheep logo"
                    className="h-12 md:h-14 lg:h-16 w-auto cursor-pointer"
                    width={64}
                    height={64}
                    priority // Recomendado para logos en el header
                  />
                </Link>
              </div>
              
              <div className="hidden lg:flex justify-center items-center relative z-50">
                {/* ACCESIBILIDAD: Identificamos que este es el menú principal */}
                <nav aria-label="Navegación de escritorio" className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      scroll={true}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div className="flex justify-end">
                {/* ACCESIBILIDAD: El SVG ahora está dentro de un <button> real con atributos ARIA */}
                <button
                  className="md:hidden flex items-center justify-center p-2 cursor-pointer text-white"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
                    aria-hidden="true" // Ocultamos el SVG para lectores de pantalla porque el botón ya tiene aria-label
                  >
                    <line
                      x1="3"
                      y1="6"
                      x2="21"
                      y2="6"
                      className={twMerge(
                        "origin-left transition",
                        isOpen && "rotate-45 -translate-y-1"
                      )}
                    ></line>
                    <line
                      x1="3"
                      y1="12"
                      x2="21"
                      y2="12"
                      className={twMerge("transition", isOpen && "opacity-0")}
                    ></line>
                    <line
                      x1="3"
                      y1="18"
                      x2="21"
                      y2="18"
                      className={twMerge(
                        "origin-left transition",
                        isOpen && "-rotate-45 translate-y-1"
                      )}
                    ></line>
                  </svg>
                </button>

                <div className="hidden md:inline-flex">
                  {/* Se asume que <Button> renderiza un div o es compatible con el Link anidado */}
                  <Button variant="primary">
                    <Link
                      href="/contact"
                      aria-label="Ir a la página de contacto"
                    >
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id="mobile-menu"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  {/* SEMÁNTICA: <nav> en lugar de <div> */}
                  <nav aria-label="Navegación móvil" className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <Link
                        href={link.href}
                        key={link.label}
                        className="text-white font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    {/* HTML VÁLIDO: Eliminamos el <button> que envolvía al <Link>. Ahora es solo un <Link> estilizado */}
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="border border-white/20 h-8 rounded-full px-4 flex items-center justify-center font-medium hover:bg-white hover:text-black transition-colors"
                      aria-label="Ir a la página de contacto"
                    >
                      Contact Us
                    </Link>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
      
      {/* Spacer para evitar que el header fijo tape el contenido */}
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" aria-hidden="true"></div>
    </>
  );
}