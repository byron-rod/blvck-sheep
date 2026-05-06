"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { hostelsData } from "@/data/hostels";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoShareOutline } from "react-icons/io5";

type Props = {
  params: Promise<{ hostelId: string }>;
};

export default function HostelDetailPage({ params }: Props) {
  const resolvedParams = use(params);
  const { hostelId } = resolvedParams;
  const router = useRouter();

  const hostel = hostelsData.find((item) => item.id === hostelId);

  // Minimalist 404 Screen
  if (!hostel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-light">Properties Spotlight Not Found</h1>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/50255116881?text=${encodeURIComponent("Hello!, I am interested in booking a shuttle to " + hostel.name + "!")}`;

  const handleShare = async () => {
    const shareData = {
      title: `Blvck Sheep: ${hostel.name}`,
      text: `Check out ${hostel.name} in ${hostel.location}!`,
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
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black pb-32">
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
      <section className="relative h-[85vh] w-full flex items-end pb-24 px-6 md:px-12 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={hostel.heroImage}
            alt={hostel.name}
            className="w-full h-full object-cover"
          />
          {/* Dark Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Hero Content positioned at bottom left */}
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.3em] font-medium border border-white/30 px-3 py-1 rounded-full">
                {hostel.vibe}
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-4">
              {hostel.name}
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-300 font-light tracking-wide mix-blend-screen">
              {hostel.location}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto md:mx-0"
        >
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            {hostel.description}
          </p>
        </motion.div>
      </section>

      {/* Dual-Action Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-black/80 backdrop-blur-xl border-t border-zinc-900/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* <div className="hidden sm:block">
             <p className="text-xs uppercase tracking-widest text-zinc-400">{hostel.name}</p>
             <p className="text-sm font-medium">Ready to explore?</p>
          </div> */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-zinc-700 bg-transparent text-white px-6 py-3 rounded-xl text-sm uppercase tracking-[0.2em] font-semibold hover:bg-zinc-900 transition-colors text-center"
            >
              Book Shuttle
            </Link>
            <Link
              href={hostel.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em] font-semibold hover:bg-zinc-200 transition-colors text-center"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
