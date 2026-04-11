"use client";

import { motion } from "framer-motion";

interface ItineraryCardProps {
  title: string;
  description: string;
  bookingUrl: string;
  visualHookKey: string;
  index: number;
}

const HookIcon = ({ hookKey }: { hookKey: string }) => {
  const commonClasses = "text-white opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 ease-out";
  
  switch (hookKey) {
    case "wellness":
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={commonClasses}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    case "adrenaline":
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={commonClasses}>
          <polygon points="12 2 22 20 2 20" />
        </svg>
      );
    case "culture":
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={commonClasses}>
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        </svg>
      );
    default:
      return null;
  }
};

export default function ItineraryCard({ title, description, bookingUrl, visualHookKey, index }: ItineraryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="flex flex-col justify-between border border-white/10 p-8 rounded-2xl bg-zinc-950 text-white h-full hover:border-white/30 transition-all duration-500 group"
    >
      <div>
        <div className="mb-8">
          <HookIcon hookKey={visualHookKey} />
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
