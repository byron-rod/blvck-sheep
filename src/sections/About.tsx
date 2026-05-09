"use client";
import { useScroll, useTransform } from "framer-motion";
import Tag from "@/components/Tag";
import { useEffect, useRef, useState, useMemo } from "react";
import { twMerge } from "tailwind-merge";

const content = {
  en: {
    tag: "Introducing BlvckSheep",
    heading: "At Blvck Sheep, we believe your journey should be as incredible as your destination.",
    text: "Discover Guatemala while we handle the logistics to give you peace of mind on the road. Whether you are taking one of our shared routes or a private ride, our priority is your safety and comfort.",
    footerPart1: "Travel ",
    footerHighlight: "Differently",
    footerPart2: " with Blvck Sheep."
  },
  es: {
    tag: "Conoce a BlvckSheep",
    heading: "En Blvck Sheep, creemos que tu viaje debe ser tan increíble como tu destino.",
    text: "Descubre Guatemala mientras nosotros nos encargamos de la logística para darte tranquilidad en el camino. Ya sea en nuestras rutas compartidas o en un viaje privado, tu seguridad y comodidad son nuestra prioridad.",
    footerPart1: "Viaja ",
    footerHighlight: "Diferente",
    footerPart2: " con Blvck Sheep."
  }
};

export default function About({ activeLanguage = "en" }: { activeLanguage?: "en" | "es" }) {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = useMemo(() => content[activeLanguage].text.split(" "), [activeLanguage]);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
    return () => unsubscribe();
  }, [wordIndex]);

  return (
    <section className="py-24 lg:py-40" id="about">
      <div className="container">
        <div className="sticky top-20 md:top-24 lg:top-32">
          <div className="flex justify-center">
            <Tag>{content[activeLanguage].tag}</Tag>
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl text-center font-medium mt-6">
            <span className="text-white/90">
              {content[activeLanguage].heading}
            </span>{" "}
            <span className="">
              {words.map((word, index) => (
                <span
                  key={`${activeLanguage}-${index}`}
                  className={twMerge(
                    "transition duration-500 text-white/15",
                    index < currentWord && "text-white",
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-white font-semibold block">
              {content[activeLanguage].footerPart1}
              <span className="text-blue-400">{content[activeLanguage].footerHighlight}</span>
              {content[activeLanguage].footerPart2}
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
