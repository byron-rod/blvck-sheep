"use client";

import React, { use } from "react";
import Link from "next/link";
import { journalData } from "@/data/journal";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoShareOutline } from "react-icons/io5";

type Props = {
  params: Promise<{ id: string }>;
};

export default function JournalArticlePage({ params }: Props) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const router = useRouter();

  const article = journalData.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-light">Article Not Found</h1>
      </div>
    );
  }

  const handleShare = async () => {
    const shareData = {
      title: `Blvck Sheep Travelogue: ${article.title}`,
      text: article.excerpt,
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
      {/* Top Nav Overlay */}
      <nav className="fixed top-14 left-0 w-full z-40 flex justify-between items-center px-6 py-8 mix-blend-difference pointer-events-none">
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
      <section className="relative h-[70vh] w-full flex items-end px-6 md:px-12 lg:px-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-zinc-300 mb-6">
            <span>{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-500" />
            <span>{article.publishDate}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-500" />
            <span>{article.readTime}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-white">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Editorial Content Renderer */}
      <article className="max-w-3xl mx-auto py-24 px-6 md:px-0">
        {article.content.map((block, index) => {
          if (block.type === 'paragraph') {
            return (
              <p 
                key={index} 
                // EL ARREGLO: Agregamos las clases [&_a] para forzar el estilo a todos los enlaces <a> que vengan en el texto
                className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed mb-8 [&_a]:text-white [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-white/30 hover:[&_a]:decoration-white hover:[&_a]:opacity-80 [&_a]:transition-all"
                dangerouslySetInnerHTML={{ __html: block.value || "" }}
              />
            );
          }
          if (block.type === 'heading') {
            return (
              <h2 key={index} className="text-3xl md:text-4xl font-semibold mt-16 mb-8 tracking-tight text-white">
                {block.value}
              </h2>
            );
          }
          if (block.type === 'image') {
            return (
              <figure key={index} className="my-14 w-full">
                <img 
                  src={block.url} 
                  alt={block.caption || "Article image"} 
                  className="w-full h-auto object-cover rounded-sm"
                />
                {block.caption && (
                  <figcaption className="text-zinc-500 text-sm mt-4 text-center tracking-wide">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          if (block.type === 'cta') {
            return (
              <Link 
                key={index} 
                href={block.link || "#"} 
                className="block w-fit bg-white text-black px-10 py-5 uppercase tracking-widest text-sm font-bold my-12 hover:bg-zinc-200 transition-colors rounded-2xl"
                target={block.link?.startsWith('http') ? "_blank" : "_self"}
                rel={block.link?.startsWith('http') ? "noopener noreferrer" : ""}
              >
                {block.value}
              </Link>
            );
          }
          return null;
        })}
      </article>
    </div>
  );
}