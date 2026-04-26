"use client";

import { Toaster } from "sonner";
import { useTheme } from "./ThemeProvider";

export function ThemedToaster() {
  const { theme } = useTheme();
  return (
    <Toaster
      theme={theme}
      position="bottom-right"
      duration={1800}
      closeButton={false}
      toastOptions={{
        style: {
          background: "var(--surface-raised)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
          borderRadius: "12px",
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
        },
      }}
    />
  );
}
