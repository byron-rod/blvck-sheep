"use client";
import { useScroll, useTransform } from "framer-motion";
import Tag from "@/components/Tag";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `With our 7-passenger SUVs, it's all about comfort, and a personalized touch. Whether you're sharing a ride or booking privately, we've got you covered with flexible schedules, curated Spotify playlists, and the best local tips through our exclusive WhatsApp chat service.`;
const words = text.split(" ");

export default function About() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);
  return (
    <section className="py-24 lg:py-40" id="about">
      <div className="container">
        <div className="sticky top-20 md:top-24 lg:top-32">
          <div className="flex justify-center">
            <Tag>Introducing BlvckSheep</Tag>
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl text-center font-medium mt-6">
            <span className="text-white/80">
              At BlvckSheep, we believe your journey should be as incredible as
              your destination.
            </span>{" "}
            <span className="">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-white/15",
                    wordIndex < currentWord && "text-blue-400"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-white font-semibold block">
              Because let&apos;s face it, travel should be an enjoyable
              experience.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
