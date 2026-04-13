"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { destinationsData } from "@/data/destinations";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoShareOutline } from "react-icons/io5";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function DestinationDetailPage({ params }: Props) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const router = useRouter();

  const destination = destinationsData.find((item) => item.id === slug);

  // If not found, show minimal 404
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-light">Destination Not Found</h1>
      </div>
    );
  }

  const handleShare = async () => {
    const shareData = {
      title: `Blvck Sheep: ${destination.title}`,
      text: `Check out ${destination.title} in Guatemala!`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black pb-24">
      {/* Top Nav Overlay - Now Fixed and Scrollable */}
            <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 mix-blend-difference ">
              <button
                onClick={() => router.back()}
                className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity pointer-events-auto"
              >
                <IoChevronBack className="text-xl group-hover:-translate-x-1 transition-transform" />
                Back
              </button>
              <button onClick={handleShare} className="text-xl hover:opacity-70 transition-opacity pointer-events-auto">
                <IoShareOutline />
              </button>
            </nav>

      {/* Cinematic Hero */}
      <section className="relative h-[85vh] w-full flex items-end pb-20 px-6 md:px-12 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImage}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          {/* Magazine-style vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-[0.3em] font-medium border border-white/30 px-3 py-1 rounded-full">
                Destination Guide
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-4">
              {destination.title}
            </h1>
            
            <h2 className="text-xl md:text-2xl text-zinc-300 font-light tracking-wide mb-8">
              {destination.subtitle}
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mix-blend-screen">
              {destination.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destination Sections */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto flex flex-col gap-32">
          {destination.sections.map((section, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="flex flex-col gap-6 border-t border-zinc-900 pt-16"
             >
               <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
                 {section.heading}
               </h3>
               <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                 {section.content}
               </p>
               {section.actionText && section.actionLink && (
                 <div className="mt-8">
                   <Link
                     href={section.actionLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block bg-white text-black px-10 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-zinc-200 transition-colors"
                   >
                     {section.actionText}
                   </Link>
                 </div>
               )}
             </motion.div>
          ))}
        </div>
      </section>

      {/* Curated Stays Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Where to Rest</h2>
            <h3 className="text-4xl md:text-5xl font-light tracking-tight">Curated Stays</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {destination.featuredStays.map((stay, index) => (
              <motion.div
                 key={stay.name}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, delay: index * 0.1 }}
                 className="flex flex-col group cursor-pointer"
                 onClick={() => router.push(`/hostels/${stay.hostelId}`)}
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-8">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h4 className="text-3xl font-semibold mb-4 group-hover:text-zinc-300 transition-colors">
                  {stay.name}
                </h4>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8 flex-grow">
                  {stay.description}
                </p>
                <div className="text-sm uppercase tracking-widest font-medium border-b border-white/30 pb-2 self-start group-hover:border-white transition-colors">
                  View Details
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
