"use client";

import { Toaster } from "sonner";

export function ObservatoryToaster() {
  return (
    <Toaster
      theme="dark"
      position="bottom-right"
      duration={2200}
      closeButton={false}
      offset={64}
      toastOptions={{
        style: {
          background: "var(--void-3)",
          border: "1px solid var(--rule)",
          borderLeft: "2px solid var(--star)",
          color: "var(--paper)",
          borderRadius: 0,
          fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          padding: "12px 16px",
        },
      }}
    />
  );
}
