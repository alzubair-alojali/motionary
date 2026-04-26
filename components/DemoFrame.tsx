"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface DemoFrameContextValue {
  replayKey: number;
  replay: () => void;
}

const DemoFrameContext = createContext<DemoFrameContextValue | null>(null);

export function useDemoFrame() {
  const ctx = useContext(DemoFrameContext);
  if (!ctx) {
    throw new Error("useDemoFrame must be used within a DemoFrame");
  }
  return ctx;
}

interface DemoFrameProps {
  children: ReactNode;
  className?: string;
  /** Show the grid background (default true). Disable for demos that paint full-bleed. */
  grid?: boolean;
}

export function DemoFrame({
  children,
  className,
  grid = true,
}: DemoFrameProps) {
  const [replayKey, setReplayKey] = useState(0);
  const replay = useCallback(() => {
    setReplayKey((k) => k + 1);
  }, []);

  return (
    <DemoFrameContext.Provider value={{ replayKey, replay }}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-surface",
          grid && "demo-grid-bg",
          className,
        )}
      >
        <div key={replayKey} className="relative h-full w-full">
          {children}
        </div>
      </div>
    </DemoFrameContext.Provider>
  );
}
