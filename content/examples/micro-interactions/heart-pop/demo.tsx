"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export default function Demo() {
  const reduce = useReducedMotion();
  const [pop, setPop] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setPop((p) => p + 1), 2500);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <button
        type="button"
        aria-label="Like"
        onClick={() => setPop((p) => p + 1)}
        className="relative"
      >
        <motion.svg
          key={pop}
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="var(--accent)"
          initial={reduce ? { scale: 1 } : { scale: 0.9 }}
          animate={reduce ? { scale: 1 } : { scale: [0.9, 1.3, 1] }}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: 0.55,
                  times: [0, 0.4, 1],
                  ease: [0.32, 0.72, 0, 1],
                }
          }
        >
          <path d="M12 21s-7.5-4.7-7.5-11A4.5 4.5 0 0112 6a4.5 4.5 0 017.5 4c0 6.3-7.5 11-7.5 11z" />
        </motion.svg>

        <AnimatePresence>
          {!reduce &&
            Array.from({ length: 6 }).map((_, i) => {
              const angle = (Math.PI * 2 * i) / 6;
              const dx = Math.cos(angle) * 32;
              const dy = Math.sin(angle) * 32;
              return (
                <motion.span
                  key={`${pop}-${i}`}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ x: dx, y: dy, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
                  aria-hidden="true"
                />
              );
            })}
        </AnimatePresence>
      </button>
    </div>
  );
}
