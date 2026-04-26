"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Demo() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Page content
      </div>
      {!reduce && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "0%", "0%", "100%"] }}
          transition={{
            duration: 2.4,
            times: [0, 0.4, 0.6, 1],
            ease: [0.65, 0, 0.35, 1],
            repeat: Infinity,
            repeatDelay: 0.6,
          }}
          className="absolute inset-0 bg-accent"
        />
      )}
    </div>
  );
}
