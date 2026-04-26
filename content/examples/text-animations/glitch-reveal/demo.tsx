"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const TEXT = "Glitch";

export default function Demo() {
  const reduce = useReducedMotion();
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setCycle((c) => c + 1), 2400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative flex h-full w-full items-center justify-center font-mono text-3xl font-semibold tracking-tight text-foreground">
      <span>{TEXT}</span>
      {!reduce && (
        <>
          <motion.span
            key={`r-${cycle}`}
            aria-hidden="true"
            initial={{ x: -4, opacity: 0.8 }}
            animate={{ x: [-4, 2, -3, 1, 0], opacity: [0.8, 0.6, 0.4, 0.2, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ color: "#ef4444", mixBlendMode: "screen" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {TEXT}
          </motion.span>
          <motion.span
            key={`b-${cycle}`}
            aria-hidden="true"
            initial={{ x: 4, opacity: 0.8 }}
            animate={{ x: [4, -2, 3, -1, 0], opacity: [0.8, 0.6, 0.4, 0.2, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ color: "#3b82f6", mixBlendMode: "screen" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {TEXT}
          </motion.span>
        </>
      )}
    </div>
  );
}
