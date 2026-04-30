"use client";

import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  const id = window.setInterval(callback, 1000);
  return () => window.clearInterval(id);
};

const getSnapshot = () => Date.now();
const getServerSnapshot = () => 0;

function formatLST(ms: number) {
  const d = new Date(ms);
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mm = String(d.getUTCMinutes()).padStart(2, "0");
  const ss = String(d.getUTCSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

export function SiderealClock({ className }: { className?: string }) {
  const time = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  return (
    <span suppressHydrationWarning className={className}>
      {time === 0 ? "--:--:--" : formatLST(time)}
    </span>
  );
}
