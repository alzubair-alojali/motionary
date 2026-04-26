"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type Phase = "loading" | "done";

export default function Demo() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    if (reduce) return;
    let active = true;

    function cycle() {
      if (!active) return;
      setPhase("loading");
      window.setTimeout(() => {
        if (active) setPhase("done");
      }, 1500);
      window.setTimeout(() => {
        if (active) cycle();
      }, 3000);
    }

    cycle();
    return () => {
      active = false;
    };
  }, [reduce]);

  const display: Phase = reduce ? "done" : phase;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-12 w-56">
        <AnimatePresence mode="wait">
          {display === "loading" ? (
            <motion.div
              key="bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-center"
            >
              <div className="h-2 w-full overflow-hidden rounded-full bg-foreground/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1] }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M5 12.5l4.5 4.5L20 6.5"
                    stroke="var(--accent-foreground)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
