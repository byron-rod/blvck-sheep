"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const content = {
  en: {
    message: "Hi, I would like to book a ride!",
    buttonText: "Book Your Ride"
  },
  es: {
    message: "¡Hola, me gustaría reservar un viaje!",
    buttonText: "Reserva Tu Viaje"
  }
};

export default function CallToAction({ activeLanguage = "en" }: { activeLanguage?: "en" | "es" }) {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();
  const data = content[activeLanguage];

  const whatsappLink = `https://wa.me/50255116881?text=${encodeURIComponent(data.message)}`;

  useEffect(() => {
    // Check if scope.current is defined before trying to animate
    if (scope.current) {
      animation.current = animate(
        scope.current,
        { x: "-50%" },
        { duration: 30, ease: "linear", repeat: Infinity }
      );
    }
  }, [animate]);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope} // Attach the scope to the motion.div
          className="flex flex-none gap-16 text-5xl lg:text-6xl font-medium pr-16 group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>&#10038;</span>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-blue-400"
                aria-label="WhatsApp contact for BlackSheep Shuttles"
              >
                {data.buttonText}
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
