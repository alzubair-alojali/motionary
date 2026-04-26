"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Demo() {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <motion.div
        initial={reduce ? false : { x: "-110%" }}
        animate={
          reduce ? { x: 0 } : { x: ["-110%", "0%", "0%", "110%"] }
        }
        transition={
          reduce
            ? { duration: 0 }
            : {
                duration: 2.4,
                times: [0, 0.3, 0.7, 1],
                ease: [0.32, 0.72, 0, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
              }
        }
        className="flex h-32 w-64 items-center justify-center rounded-2xl bg-accent text-sm font-medium text-accent-foreground"
      >
        Sliding in
      </motion.div>
    </div>
  );
}
