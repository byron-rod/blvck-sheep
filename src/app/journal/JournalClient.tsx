"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { journalData } from "@/data/journal";

export default function JournalClient() {
  const [activeLanguage, setActiveLanguage] = useState<"en" | "es">("en");

  const filteredPosts = journalData.filter(post => post.language === activeLanguage);

  return (
    <>
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter">The Travelogue</h1>
          <p className="mt-6 text-xl md:text-2xl text-zinc-400 font-light max-w-2xl">
            Essays, guides, and logistical insights for navigating Guatemala with intent. Descubre nuestro pais mejor con nuestras guias.
          </p>
        </div>

        {/* Toggle Button */}
        <div className="relative flex items-center bg-zinc-900/50 p-1 rounded-full border border-zinc-800 self-start md:self-auto shrink-0">
          {["en", "es"].map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLanguage(lang as "en" | "es")}
              className={`relative px-6 py-2.5 text-sm font-medium uppercase tracking-widest rounded-full transition-colors z-10 ${
                activeLanguage === lang ? "text-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeLanguage === lang && (
                <motion.div
                  layoutId="active-language"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {lang === "en" ? "ENG" : "ESP"}
            </button>
          ))}
        </div>
      </header>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 z-10">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Link href={`/journal/${post.id}`} className="group block h-full">
                <article className="flex flex-col gap-6 h-full">
                  <div className="w-full aspect-video overflow-hidden border border-transparent group-hover:border-zinc-800 transition-colors duration-500 rounded-none relative">
                    <img
                      src={post.heroImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-3 border-b border-zinc-800 pb-2 self-start">
                      {post.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-medium mt-2 mb-4 tracking-tight group-hover:text-zinc-300 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-zinc-400 text-base leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
