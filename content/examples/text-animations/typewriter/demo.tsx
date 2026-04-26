"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const TEXT = "Type at human speed.";

export default function Demo() {
  const reduce = useReducedMotion();
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduce) return;
    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      setChars(index);
      if (index < TEXT.length) {
        index++;
        timeout = setTimeout(tick, 60);
      } else {
        timeout = setTimeout(() => {
          index = 0;
          tick();
        }, 1400);
      }
    }

    tick();
    return () => clearTimeout(timeout);
  }, [reduce]);

  const visible = reduce ? TEXT.length : chars;

  return (
    <div className="flex h-full w-full items-center justify-center px-6">
      <div className="font-mono text-base text-foreground">
        {TEXT.slice(0, visible)}
        <motion.span
          animate={reduce ? {} : { opacity: [1, 0, 1] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="ml-0.5 inline-block h-[1.1em] w-[2px] -translate-y-[2px] bg-accent align-middle"
        />
      </div>
    </div>
  );
}
