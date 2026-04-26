"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export default function Demo() {
  const reduce = useReducedMotion();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setChecked((c) => !c), 1800);
    return () => clearInterval(id);
  }, [reduce]);

  const display = reduce ? true : checked;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <button
        type="button"
        role="checkbox"
        aria-checked={display}
        onClick={() => setChecked((c) => !c)}
      >
        <motion.div
          animate={{
            backgroundColor: display ? "var(--accent)" : "transparent",
            borderColor: display ? "var(--accent)" : "var(--border)",
            scale: !reduce && display ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="flex h-12 w-12 items-center justify-center rounded-xl border-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <motion.path
              d="M5 12.5l4.5 4.5L20 6.5"
              stroke="var(--accent-foreground)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={false}
              animate={{ pathLength: display ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </svg>
        </motion.div>
      </button>
    </div>
  );
}
