"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export default function Demo() {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setOn((v) => !v), 1800);
    return () => clearInterval(id);
  }, [reduce]);

  const display = reduce ? true : on;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <button
        type="button"
        role="switch"
        aria-checked={display}
        aria-label="Toggle slide demo"
        onClick={() => setOn((v) => !v)}
        className="relative h-9 w-16 rounded-full transition-colors duration-200"
        style={{
          backgroundColor: display
            ? "var(--accent)"
            : "color-mix(in oklab, var(--foreground) 15%, transparent)",
        }}
      >
        <motion.span
          animate={{ x: display ? 30 : 2 }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", stiffness: 360, damping: 28 }
          }
          className="absolute left-0 top-1 h-7 w-7 rounded-full bg-background shadow-md"
        />
      </button>
    </div>
  );
}
