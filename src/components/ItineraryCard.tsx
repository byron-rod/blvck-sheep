"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import lotusIcon from "@/assets/images/icons-lotus.png";
import sssIcon from "@/assets/images/icons-sss.png";
import mayaIcon from "@/assets/images/icons-maya.png";
import { StaticImageData } from "next/image";

interface ItineraryCardProps {
  title: string;
  description: string;
  bookingUrl: string;
  visualHookKey: string;
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

export default function ItineraryCard({ title, description, bookingUrl, visualHookKey, index }: ItineraryCardProps) {
  const imageSrc = getHookImage(visualHookKey);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="flex flex-col justify-between border border-white/10 p-8 rounded-2xl bg-black text-white h-full hover:border-white/30 transition-all duration-500 group"
    >
      <div>
        <div className="mb-8">
          {imageSrc && (
            <Image 
              src={imageSrc} 
              alt={`${visualHookKey} icon`}
              width={68}
              height={68}
              className="opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 ease-out mix-blend-screen object-contain"
            />
          )}
        </div>
        <h3 className="text-2xl font-semibold mb-3 tracking-tight group-hover:text-white transition-colors">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
          {description}
        </p>
      </div>
      <div className="flex justify-start mt-auto">
        <a 
          href={bookingUrl || "#"} 
          className="inline-block"
          onClick={(e) => {
            if (!bookingUrl) e.preventDefault();
          }}
        >
          <button className="border border-white/20 rounded-full px-6 py-3 font-medium text-sm transition-colors hover:bg-white hover:text-black">
            Book Experience
          </button>
        </a>
      </div>
    </motion.div>
  );
}
