"use client";
import { useScroll, useTransform } from "framer-motion";
import Tag from "@/components/Tag";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `With our rides, it's all about comfort, safety and a personalized touch. We've got you covered with flexible schedules, bilingual drivers, curated Spotify playlists, and the best tips to discover Guatemala like a local.`;
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
            <span className="text-white/90">
              At Blvck Sheep, we believe your journey should be as incredible as
              your destination.
            </span>{" "}
            <span className="">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-white/15",
                    wordIndex < currentWord && "text-white"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-white font-semibold block">
              Travel <span className="text-blue-400">Differently</span> with
              Blvck Sheep.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
