"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const ITEMS = ["Heading", "Subheading", "Body copy"];

export default function Demo() {
  const reduce = useReducedMotion();
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setCycle((c) => c + 1), 2400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <motion.div
        key={cycle}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.16, delayChildren: 0.05 },
          },
        }}
        className="flex flex-col gap-3"
      >
        {ITEMS.map((item, i) => (
          <motion.div
            key={i}
            variants={
              reduce
                ? { hidden: {}, visible: {} }
                : {
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.55,
                        ease: [0.32, 0.72, 0, 1],
                      },
                    },
                  }
            }
            className="flex items-center gap-3"
          >
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span className="text-sm text-foreground">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
