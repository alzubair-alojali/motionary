"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Demo() {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <motion.div
        initial={{
          y: 0,
          boxShadow:
            "0 4px 8px -4px color-mix(in oklab, var(--foreground) 10%, transparent)",
        }}
        whileHover={
          reduce
            ? {}
            : {
                y: -6,
                boxShadow:
                  "0 18px 32px -12px color-mix(in oklab, var(--foreground) 22%, transparent)",
              }
        }
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="flex h-40 w-72 cursor-default flex-col gap-2 rounded-2xl border border-border bg-surface-raised p-5"
      >
        <span className="h-2 w-12 rounded-full bg-accent" />
        <div className="mt-1 text-base font-medium text-foreground">
          Hover this card
        </div>
        <div className="text-sm text-muted-foreground">
          It lifts a few pixels with a softer, deeper shadow.
        </div>
      </motion.div>
    </div>
  );
}
