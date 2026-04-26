"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Demo() {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-full w-full items-center justify-center gap-2.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={reduce ? { scale: 1 } : { scale: [1, 1.5, 1] }}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: 0.9,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.18,
                }
          }
          className="h-2.5 w-2.5 rounded-full bg-accent"
        />
      ))}
    </div>
  );
}
