"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function CategoryPreview({ slug }: { slug: string }) {
  switch (slug) {
    case "hover-effects":
      return <HoverPreview />;
    case "page-transitions":
      return <PageTransitionPreview />;
    case "scroll-animations":
      return <ScrollAnimationsPreview />;
    case "loading-states":
      return <LoadingStatesPreview />;
    case "micro-interactions":
      return <MicroInteractionsPreview />;
    case "text-animations":
      return <TextAnimationsPreview />;
    default:
      return null;
  }
}

function HoverPreview() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-full items-center justify-center">
      <motion.span
        aria-hidden="true"
        animate={reduce ? {} : { scale: [1, 1.7, 1], opacity: [0.55, 0, 0.55] }}
        transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
        className="absolute h-10 w-24 rounded-full bg-accent/50 blur-md"
      />
      <span className="relative inline-flex h-9 w-24 items-center justify-center rounded-full bg-accent text-[10px] font-medium uppercase tracking-[0.18em] text-accent-foreground">
        Hover
      </span>
    </div>
  );
}

function PageTransitionPreview() {
  const reduce = useReducedMotion();
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-16 w-32 overflow-hidden rounded-xl border border-border bg-background">
        {!reduce && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "0%", "0%", "100%"] }}
            transition={{
              duration: 2.4,
              times: [0, 0.3, 0.7, 1],
              ease: [0.32, 0.72, 0, 1],
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            className="absolute inset-0 bg-accent"
          />
        )}
      </div>
    </div>
  );
}

function ScrollAnimationsPreview() {
  const reduce = useReducedMotion();
  const layers = [
    { width: 88, opacity: 0.2, duration: 3.4, range: 6 },
    { width: 64, opacity: 0.55, duration: 2.8, range: 12 },
    { width: 44, opacity: 1, duration: 2.4, range: 20 },
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {layers.map((l, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          animate={reduce ? {} : { y: [-l.range, l.range, -l.range] }}
          transition={{
            duration: l.duration,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute h-1.5 rounded-full bg-accent"
          style={{ width: l.width, opacity: l.opacity }}
        />
      ))}
    </div>
  );
}

function LoadingStatesPreview() {
  const reduce = useReducedMotion();
  return (
    <div className="flex h-full items-center justify-center gap-2">
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

function MicroInteractionsPreview() {
  const reduce = useReducedMotion();
  return (
    <div className="flex h-full items-center justify-center">
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="var(--accent)"
        aria-hidden="true"
        animate={reduce ? { scale: 1 } : { scale: [0.9, 1.25, 0.9] }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 1.4, ease: [0.32, 0.72, 0, 1], repeat: Infinity }
        }
      >
        <path d="M12 21s-7.5-4.7-7.5-11A4.5 4.5 0 0112 6a4.5 4.5 0 017.5 4c0 6.3-7.5 11-7.5 11z" />
      </motion.svg>
    </div>
  );
}

function TextAnimationsPreview() {
  const reduce = useReducedMotion();
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setCycle((c) => c + 1), 2400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="flex h-full items-center justify-center font-mono text-3xl font-semibold tracking-tight text-accent">
      <div key={cycle} className="flex items-center gap-0.5">
        {["A", "a"].map((char, i) => (
          <motion.span
            key={i}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: reduce ? 0 : i * 0.15,
              ease: [0.32, 0.72, 0, 1],
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <motion.span
        aria-hidden="true"
        animate={reduce ? {} : { opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
        className="ml-1 inline-block h-[0.9em] w-[2px] bg-accent"
      />
    </div>
  );
}
