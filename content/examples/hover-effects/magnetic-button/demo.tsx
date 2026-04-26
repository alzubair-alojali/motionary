"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useRef } from "react";

export default function Demo() {
  const reduce = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  const handlePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const radius = 140;
    if (dist > radius) {
      x.set(0);
      y.set(0);
      return;
    }
    x.set(dx * 0.25);
    y.set(dy * 0.25);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onPointerMove={handlePointer}
      onPointerLeave={handleLeave}
      className="flex h-full w-full items-center justify-center"
    >
      <motion.button
        ref={buttonRef}
        type="button"
        style={{ x: sx, y: sy }}
        className="inline-flex h-12 select-none items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground shadow-[0_10px_28px_-10px_color-mix(in_oklab,var(--accent)_70%,transparent)]"
      >
        Hover me
      </motion.button>
    </div>
  );
}
