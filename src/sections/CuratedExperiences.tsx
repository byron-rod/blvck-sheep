"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Tag from "@/components/Tag";

export default function CuratedExperiences() {
  return (
    <section className="py-24 bg-black text-white relative border-t border-white/5" id="curated-experiences">
      <div className="container px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <Tag>New</Tag>
          <h2 className="text-4xl md:text-5xl lg:text-7xl mt-6 mb-8 font-bold tracking-tighter">
            Elevate Your <br className="hidden md:block"/> Journey.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
            Discover Guatemala like a local. Our boutique travel agency and itinerary planning services can help you design crafted adventures, blending seamless logistics, cultural immersion, and sophisticated comfort tailored entirely to you.
          </p>
          <Link href="/itineraries">
            <button className="bg-white text-black font-semibold rounded-full px-10 py-5 transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95 text-lg">
              Explore Itineraries
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
