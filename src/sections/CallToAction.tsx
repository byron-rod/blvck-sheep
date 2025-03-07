"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();

  const whatsappLink =
    "https://wa.me/50255116881?text=Hi,%20I%20would%20like%20to%20book%20a%20ride!";

  useEffect(() => {
    // Check if scope.current is defined before trying to animate
    if (scope.current) {
      animation.current = animate(
        scope.current,
        { x: "-50%" },
        { duration: 30, ease: "linear", repeat: Infinity }
      );
    }
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope} // Attach the scope to the motion.div
          className="flex flex-none gap-16 text-5xl lg:text-6xl font-medium pr-16 group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>&#10038;</span>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-blue-400"
                aria-label="WhatsApp contact for BlackSheep Shuttles"
              >
                Book Your Ride
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
