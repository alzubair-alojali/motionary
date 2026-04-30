"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const WARP_DURATION_MS = 920;

export function WarpController() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (previousPath.current === null) {
      previousPath.current = pathname;
      return;
    }
    if (previousPath.current === pathname) return;

    previousPath.current = pathname;
    document.body.classList.add("warping");
    const id = window.setTimeout(() => {
      document.body.classList.remove("warping");
    }, WARP_DURATION_MS);

    return () => {
      window.clearTimeout(id);
      document.body.classList.remove("warping");
    };
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="warp-overlay pointer-events-none fixed inset-0 z-50 flex items-center justify-center opacity-0"
    >
      <div className="flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3">
        <span
          aria-hidden="true"
          className="inline-block h-px w-16 bg-star opacity-70"
        />
        <span>TRANSITION · LOCKED</span>
      </div>
    </div>
  );
}
