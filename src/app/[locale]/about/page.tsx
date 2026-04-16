"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoShareOutline } from "react-icons/io5";
import { LiveCounter } from "@/components/LiveCounter";


// A simple hook-based count up component for massive counter animations
function AnimatedCounter({ from = 0, to, duration = 2.5, format = false }: { from?: number; to: number; duration?: number; format?: boolean }) {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{format ? count.toLocaleString() : count}</span>;
}

export default function AboutPage() {
  const router = useRouter();

  const handleShare = async () => {
    const shareData = {
      title: `Blvck Sheep: The Architects`,
      text: `Learn about the architect of adventure behind Blvck Sheep in Guatemala.`,
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

  const whatsappMessage = encodeURIComponent("Hello!, I want to book a curated experience!");
  const whatsappUrl = `https://wa.me/50255116881?text=${whatsappMessage}`;

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-16 left-0 w-full z-50 flex justify-between items-center px-6 py-8 mix-blend-difference">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity pointer-events-auto"
        >
          <IoChevronBack className="text-xl group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <button
          onClick={handleShare}
          className="text-xl hover:opacity-70 transition-opacity pointer-events-auto"
        >
          <IoShareOutline />
        </button>
      </nav>

      {/* Brand as Hero */}
      <section className="relative w-full aspect-[16/9] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/brand_hero_logo.png"
            alt="Blvck Sheep Brand Mark"
            className="w-full h-full object-cover center"
          />
          {/* Magazine-style vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        {/* Title area */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">
              The Curator / The Craft
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              The Architects
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Narrative & Metrics */}
      <section className="bg-black py-24 pb-32">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Dynamic Metrics Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
            className="mb-32 text-center"
          >
             <h2 className="text-xs text-zinc-600 font-medium mb-16 uppercase tracking-[0.4em]">The Architecture in Numbers</h2>
             
             {/* Row 1 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
               <div className="flex flex-col items-center justify-center group">
                 <div className="flex items-baseline justify-center whitespace-nowrap group-hover:scale-105 transition-transform duration-500">
                    <span className="text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-none mb-4 text-white">
                       <LiveCounter />
                    </span>
                    <span className="text-5xl md:text-6xl font-light tracking-tighter mb-4 pb-2 text-zinc-400 ml-1">+</span>
                 </div>
                 <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Trips Completed</span>
               </div>
               
               <div className="flex flex-col items-center justify-center group">
                 <div className="flex items-baseline justify-center whitespace-nowrap group-hover:scale-105 transition-transform duration-500">
                    <span className="text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-none mb-4 text-white">
                       <AnimatedCounter to={143} duration={2.5} />
                    </span>
                    <span className="text-5xl md:text-6xl font-light tracking-tighter mb-4 pb-2 text-zinc-400 ml-1">+</span>
                 </div>
                 <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Satisfied Travelers</span>
               </div>
             </div>

             {/* Row 2 */}
             <div className="flex flex-col items-center text-center w-full group">
                 <div className="flex items-baseline justify-center whitespace-nowrap group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl md:text-[5rem] font-black tracking-tighter leading-none mb-4 text-white">
                      <AnimatedCounter to={96000} duration={8} format={true} />
                    </span>
                    <span className="text-4xl md:text-7xl font-light tracking-tighter mb-4 pb-2 md:pb-6 text-zinc-400 ml-2">km</span>
                 </div>
                 <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold">Distance Traveled</span>
             </div>
          </motion.div>

          {/* Placeholder Image 1 */}
          <motion.div 
             initial={{ opacity: 0 }} 
             whileInView={{ opacity: 1 }} 
             viewport={{ once: true }} 
             transition={{ duration: 1 }}
             className="w-full aspect-video bg-zinc-950 border border-zinc-900 flex items-center justify-center mb-32 relative overflow-hidden group mx-auto"
          >
            <div className="absolute inset-0 bg-white/5 opacity-10 bg-[url('https://images.unsplash.com/photo-1544621577-bda8ca3da2eb?q=80&w=2070')] bg-cover bg-center grayscale transition-transform duration-1000 group-hover:scale-105" />
            <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold text-center px-6">
              [PLACEHOLDER IMAGE: A BLVCK SHEEP PREMIUM SHUTTLE IN TRANSIT]
            </span>
          </motion.div>

          {/* Refined Copy: Storytelling & Experience */}
          <div className="max-w-3xl mx-auto flex flex-col gap-10 text-lg font-light leading-relaxed text-zinc-300">
             
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
               <h3 className="text-[10px] text-zinc-500 font-medium mb-8 uppercase tracking-[0.3em]">Storytelling & Experience</h3>
               
               <p className="mb-8">
                 Every destination has a surface layer designed to appease the masses. And then it has a pulse. We built Blvck Sheep for those whose curiosity demands more than the curated standard. To extract the purest elements of this country requires ruthless curation and unrelenting structural architecture.
               </p>
               <p className="mb-0">
                 From orchestrating uncompromising logistics for premium transport fleets to hand-selecting the finest boutique enclaves hidden amongst volcanic ridges, our curation process guarantees safety and aesthetic fluidity without sacrificing the raw, cinematic appeal of Central America.
               </p>
             </motion.div>

             {/* Placeholder Image 2 */}
             <motion.div 
               initial={{ opacity: 0 }} 
               whileInView={{ opacity: 1 }} 
               viewport={{ once: true }} 
               transition={{ duration: 1 }}
               className="w-full aspect-video bg-zinc-950 border border-zinc-900 flex items-center justify-center my-16 relative overflow-hidden group mx-auto"
             >
               <div className="absolute inset-0 bg-white/5 opacity-10 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071')] bg-cover bg-center grayscale transition-transform duration-1000 group-hover:scale-105" />
               <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold text-center px-6">
                 [PLACEHOLDER IMAGE: CULTURAL CUISINE & COFFEE TASTING]
               </span>
             </motion.div>

             {/* Conclusion / Validation */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="border-t border-zinc-900 pt-20 mt-4">
               <h3 className="text-3xl font-medium text-white mb-10 tracking-tight">The Architect's Intuition.</h3>
               
               {/* Final Anchor Image and Concluding Paragraph */}
               <div className="relative">
                 <img 
                   src="/image_21.png" 
                   alt="Founder Medallion" 
                   className="float-right w-36 h-36 md:w-48 md:h-48 rounded-full ml-8 lg:ml-12 mb-8 border border-zinc-800 object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-500" 
                 />
                 <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed font-light mix-blend-screen">
                    My name is Byron, the founder blending the metrics of our operation with localized human intuition. Authentic discovery shouldn't have to exist in the margins of comfort and precision. What validates our craft is not solely the robust scale of our fleet or our flawless safety record, but the meticulous intuition required to weave you through the chaotic beauty of Guatemala seamlessly. This isn't just ground transport or boutique stays; it is the ultimate expression of immersive, uncompromised travel. Guatemala, Decoded.
                 </p>
                 <div className="clear-both" />
               </div>
             </motion.div>
          </div>

        </div>
      </section>

      {/* Validated Conversion Section */}
      <section className="bg-zinc-900 py-32 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-12 max-w-3xl mx-auto leading-tight">
            Validated. Experienced. Secure. Curate Your Guatemala Journey.
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Inquire to Book
          </a>
        </motion.div>
      </section>
    </div>
  );
}
