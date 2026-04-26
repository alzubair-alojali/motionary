"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const PAGES = ["Page A", "Page B", "Page C"];

export default function Demo() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setStep((s) => (s + 1) % PAGES.length), 2000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
          transition={{
            duration: reduce ? 0.08 : 0.45,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="text-3xl font-semibold tracking-tight text-foreground"
        >
          {PAGES[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
