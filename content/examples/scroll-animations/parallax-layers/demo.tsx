"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

export default function Demo() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  const l1x = useTransform(sx, (v) => v * 0.06);
  const l1y = useTransform(sy, (v) => v * 0.06);
  const l2x = useTransform(sx, (v) => v * 0.14);
  const l2y = useTransform(sy, (v) => v * 0.14);
  const l3x = useTransform(sx, (v) => v * 0.22);
  const l3y = useTransform(sy, (v) => v * 0.22);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ x: l1x, y: l1y }}
        className="absolute h-40 w-40 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: l2x, y: l2y }}
        className="absolute h-16 w-36 rounded-2xl border border-border bg-surface-raised"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: l3x, y: l3y }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-foreground"
      >
        Move cursor
      </motion.div>
    </div>
  );
}
