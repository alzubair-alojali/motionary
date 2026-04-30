import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ViewfinderProps {
  size?: number;
  className?: string;
  children?: ReactNode;
  /** Render the inner concentric ring (true by default for hero use). */
  rings?: boolean;
}

export function Viewfinder({
  size = 540,
  className,
  children,
  rings = true,
}: ViewfinderProps) {
  return (
    <div
      className={cn(
        "viewfinder relative grid place-items-center text-paper-3",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="49.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.18"
          opacity="0.55"
        />
        {rings && (
          <>
            <circle
              cx="50"
              cy="50"
              r="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.12"
              opacity="0.25"
              strokeDasharray="0.6 1.2"
            />
            <line x1="50" y1="14" x2="50" y2="20" stroke="currentColor" strokeWidth="0.18" opacity="0.4" />
            <line x1="50" y1="80" x2="50" y2="86" stroke="currentColor" strokeWidth="0.18" opacity="0.4" />
            <line x1="14" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="0.18" opacity="0.4" />
            <line x1="80" y1="50" x2="86" y2="50" stroke="currentColor" strokeWidth="0.18" opacity="0.4" />
          </>
        )}
        <text
          x="50"
          y="6.5"
          textAnchor="middle"
          fontSize="2.6"
          fill="currentColor"
          opacity="0.75"
          style={{ letterSpacing: "0.4px" }}
        >
          N · 00°
        </text>
        <text
          x="94.5"
          y="51"
          textAnchor="end"
          fontSize="2.6"
          fill="currentColor"
          opacity="0.75"
        >
          E · 90°
        </text>
        <text
          x="50"
          y="96.5"
          textAnchor="middle"
          fontSize="2.6"
          fill="currentColor"
          opacity="0.75"
        >
          S · 180°
        </text>
        <text
          x="5.5"
          y="51"
          textAnchor="start"
          fontSize="2.6"
          fill="currentColor"
          opacity="0.75"
        >
          W · 270°
        </text>
      </svg>
      {children ? (
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          {children}
        </div>
      ) : null}
    </div>
  );
}
