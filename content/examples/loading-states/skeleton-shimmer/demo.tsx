"use client";

import { motion, useReducedMotion } from "motion/react";

const BARS = [100, 78, 56];

export default function Demo() {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="flex w-full max-w-xs flex-col gap-3">
        {BARS.map((width, i) => (
          <div
            key={i}
            className="relative h-3 overflow-hidden rounded-full bg-foreground/10"
            style={{ width: `${width}%` }}
          >
            {!reduce && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 1.6,
                  ease: "linear",
                  repeat: Infinity,
                  delay: i * 0.18,
                }}
                className="absolute inset-y-0 w-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, color-mix(in oklab, var(--accent) 38%, transparent), transparent)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
