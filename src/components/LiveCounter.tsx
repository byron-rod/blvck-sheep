"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LiveCounter() {
  const [count, setCount] = useState(275);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function scheduleNextTick() {
      // Random delay between 8s (8000ms) and 15s (15000ms)
      const delay = Math.floor(Math.random() * (15000 - 3000 + 1) + 3000);
      timeoutId = setTimeout(() => {
        setCount((prev) => prev + 1);
        scheduleNextTick();
      }, delay);
    }

    scheduleNextTick();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <span className="relative flex-inline items-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={count}
          initial={{ opacity: 0.5, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          {count}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
