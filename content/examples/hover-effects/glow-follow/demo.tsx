"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

export default function Demo() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleLeave = () => {
    if (reduce) return;
    mx.set(50);
    my.set(50);
  };

  const bg = useTransform(
    () =>
      `radial-gradient(280px circle at ${mx.get()}% ${my.get()}%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)`,
  );

  return (
    <div
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="flex h-full w-full items-center justify-center p-6"
    >
      <motion.div
        style={{ backgroundImage: bg }}
        className="relative flex h-44 w-72 items-center justify-center rounded-2xl border border-border bg-surface-raised"
      >
        <div className="text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Hover
          </div>
          <div className="mt-2 text-base font-medium text-foreground">
            Cursor follows
          </div>
        </div>
      </motion.div>
    </div>
  );
}
