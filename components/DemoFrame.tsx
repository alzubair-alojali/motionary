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
  /** Elements rendered on the outer wrapper, outside the clipped disc.
   * Still inside the DemoFrame provider so they can call useDemoFrame(). */
  actions?: ReactNode;
  className?: string;
  size?: number;
  /** Disable hover scale (for the detail page where the disc is the focal element). */
  staticDisc?: boolean;
}

export function DemoFrame({
  children,
  actions,
  className,
  size,
  staticDisc = false,
}: DemoFrameProps) {
  const [replayKey, setReplayKey] = useState(0);
  const replay = useCallback(() => {
    setReplayKey((k) => k + 1);
  }, []);

  return (
    <DemoFrameContext.Provider value={{ replayKey, replay }}>
      <div
        className={cn("relative aspect-square", className)}
        style={size ? { width: size, height: size } : undefined}
      >
        <div
          className={cn(
            "specimen-disc absolute inset-0 overflow-hidden rounded-full border border-paper-3/40 bg-void-2",
            "transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]",
            !staticDisc && "group-hover:scale-[1.03] group-hover:border-star/70",
          )}
        >
          <div key={replayKey} className="relative h-full w-full">
            {children}
          </div>
        </div>
        {actions}
      </div>
    </DemoFrameContext.Provider>
  );
}
