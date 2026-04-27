"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { ReactNode } from "react";

export function MagneticGlowText({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(100);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const glowBg = useTransform(
    () =>
      `radial-gradient(220px circle at ${sx.get()}% ${sy.get()}%, color-mix(in oklab, var(--accent) 55%, transparent), transparent 60%)`,
  );

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleLeave = () => {
    if (reduce) return;
    mx.set(50);
    my.set(100);
  };

  return (
    <span
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative inline-block text-accent"
    >
      {children}
      <motion.span
        aria-hidden="true"
        style={{ background: glowBg }}
        className="pointer-events-none absolute inset-x-0 -bottom-2 -z-10 h-12 blur-2xl"
      />
    </span>
  );
}
