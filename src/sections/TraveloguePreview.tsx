"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { JournalPost } from "@/data/journal";

export default function TraveloguePreview({ posts }: { posts: JournalPost[] }) {
  return (
    <section className="py-24 bg-black text-white border-t border-zinc-900 w-full overflow-hidden" id="travelogue">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
           <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
             Insights & Guides
           </h2>
           <h3 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
             The Travelogue
           </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`/journal/${post.id}`} className="group block h-full">
                <article className="relative w-full aspect-video md:aspect-[4/5] lg:aspect-[4/3] overflow-hidden border border-zinc-900 hover:border-zinc-700 transition-colors duration-500 rounded-xl bg-zinc-900">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 p-6 mix-blend-difference w-full z-10">
                     <span className="text-xs uppercase tracking-[0.2em] font-medium text-white block mb-2">
                       {post.category}
                     </span>
                     <h4 className="text-2xl font-bold text-white tracking-tight mb-3 leading-tight group-hover:text-zinc-200 transition-colors">
                       {post.title}
                     </h4>
                     <div className="flex items-center gap-3 text-xs font-medium text-white/80 uppercase tracking-widest">
                       <span>{post.publishDate}</span>
                       <span className="w-1 h-1 rounded-full bg-white" />
                       <span>{post.readTime}</span>
                     </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-20 flex justify-center">
          <Link 
            href="/journal"
            className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors rounded-full"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
