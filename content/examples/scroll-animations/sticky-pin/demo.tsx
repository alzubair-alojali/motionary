"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Demo() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden p-6">
      <div className="absolute left-6 top-1/2 z-10 -translate-y-1/2">
        <div className="rounded-xl border border-border bg-surface-raised px-4 py-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Pinned section
          </div>
          <div className="mt-1 text-sm font-medium text-foreground">
            Stays in place
          </div>
        </div>
      </div>

      <motion.div
        initial={reduce ? false : { y: "20%" }}
        animate={reduce ? {} : { y: ["20%", "-110%"] }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 6, ease: "linear", repeat: Infinity }
        }
        className="ml-auto flex w-1/2 flex-col gap-3"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="h-2.5 w-32 rounded-full bg-foreground/15" />
            <div className="h-2.5 w-44 rounded-full bg-foreground/10" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
