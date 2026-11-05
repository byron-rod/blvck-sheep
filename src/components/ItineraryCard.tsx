"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import lotusIcon from "@/assets/images/icons-lotus.png";
import sssIcon from "@/assets/images/icons-sss.png";
import mayaIcon from "@/assets/images/icons-maya.png";
import { ArrowUpRight } from "lucide-react";

interface ItineraryCardProps {
  title: string;
  description: string;
  bookingUrl: string;
  visualHookKey: string;
  heroImage?: string;
  duration?: string;
  highlights?: string[];
  language?: "en" | "es";
  index: number;
}

const getHookImage = (key: string): StaticImageData | null => {
  switch (key) {
    case "wellness":
      return lotusIcon;
    case "adrenaline":
      return sssIcon;
    case "culture":
      return mayaIcon;
    default:
      return null;
  }
};

export default function ItineraryCard({
  title,
  description,
  bookingUrl,
  visualHookKey,
  heroImage,
  duration,
  highlights,
  language = "en",
  index,
}: ItineraryCardProps) {
  const imageSrc = getHookImage(visualHookKey);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="flex flex-col justify-between border border-white/10 rounded-2xl bg-zinc-950/60 text-white h-full hover:border-white/30 transition-all duration-500 group overflow-hidden"
    >
      {/* Cover Image + Icon + Duration Badge */}
      <Link href={bookingUrl || "#"} className="block relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        {heroImage && (
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/30 to-transparent" />

        {duration && (
          <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.2em] font-medium bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-zinc-200">
            {duration}
          </span>
        )}

        {imageSrc && (
          <div className="absolute bottom-3 right-4" aria-hidden="true">
            <Image
              src={imageSrc}
              alt="Itinerary icon"
              width={48}
              height={48}
              className="opacity-85 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 ease-out mix-blend-screen object-contain"
            />
          </div>
        )}
      </Link>

      {/* Card Body */}
      <div className="p-8 flex flex-col flex-grow justify-between">
        <div>
          <Link href={bookingUrl || "#"}>
            <h3 className="text-2xl font-semibold mb-3 tracking-tight group-hover:text-white transition-colors">
              {title}
            </h3>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <ul className="flex flex-wrap gap-2 mb-8" aria-label={language === "en" ? "Trip highlights" : "Puntos destacados"}>
              {highlights.map((item) => (
                <li
                  key={item}
                  className="text-[11px] uppercase tracking-wider text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3 py-1 rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex justify-start mt-auto">
          <Link
            href={bookingUrl || "#"}
            aria-label={`${language === "en" ? "Explore Itinerary" : "Explorar Itinerario"}: ${title}`}
            onClick={(e) => {
              if (!bookingUrl) e.preventDefault();
            }}
            className="inline-flex items-center gap-2 border border-white/20 rounded-full px-6 py-3 font-medium text-sm transition-colors hover:bg-white hover:text-black text-center"
          >
            {language === "en" ? "Explore Itinerary" : "Explorar Itinerario"}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
