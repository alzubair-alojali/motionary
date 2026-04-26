"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const TEXT = "Words arrive one after another.";
const WORDS = TEXT.split(" ");

export default function Demo() {
  const reduce = useReducedMotion();
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setCycle((c) => c + 1), 2800);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="flex h-full w-full items-center justify-center px-6">
      <div
        key={cycle}
        className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2"
      >
        {WORDS.map((word, i) => (
          <motion.span
            key={i}
            initial={reduce ? false : { y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.45,
              delay: reduce ? 0 : i * 0.08,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="text-base text-foreground"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
