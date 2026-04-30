import { SiderealClock } from "./SiderealClock";

export function CornerTelemetry() {
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-40 select-none text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-paper-3 sm:right-6 sm:top-6">
      <div>OBSERVATORY · ATACAMA STATION</div>
      <div>SEEING 0.6&quot; · CLEAR</div>
      <div>
        SIDEREAL{" "}
        <SiderealClock className="text-paper-2" />
      </div>
    </div>
  );
}
