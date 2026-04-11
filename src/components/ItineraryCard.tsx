"use client";

import { motion } from "framer-motion";

interface ItineraryCardProps {
  title: string;
  description: string;
  index: number;
}

export default function ItineraryCard({ title, description, index }: ItineraryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="flex flex-col justify-between border border-white/10 p-8 rounded-2xl bg-zinc-950 text-white h-full hover:border-white/30 transition-all duration-300 group"
    >
      <div>
        <h3 className="text-2xl font-semibold mb-3 tracking-tight group-hover:text-white transition-colors">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
          {description}
        </p>
      </div>
      <div className="flex justify-start">
        <a 
          href="#" 
          className="inline-block"
          onClick={(e) => e.preventDefault()}
        >
          <button className="border border-white/20 rounded-full px-6 py-3 font-medium text-sm transition-colors hover:bg-white hover:text-black">
            Book Experience
          </button>
        </a>
      </div>
    </motion.div>
  );
}
