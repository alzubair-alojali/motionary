export function Footer() {
  return (
    <footer
      aria-hidden="true"
      className="pointer-events-none fixed bottom-4 left-4 right-4 z-30 flex items-end justify-between gap-6 select-none font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-paper-3 sm:bottom-6 sm:left-6 sm:right-6"
    >
      <div>
        <div>RA · 14H 32M 00S</div>
        <div>DEC · −42°17′00″</div>
        <div>EXP T = 800MS</div>
      </div>
      <div className="text-right">
        <div>PLATE 01 / 18</div>
        <div>STACK 1×</div>
        <div className="flex items-center justify-end gap-1.5">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-star"
          />
          TRACKING
        </div>
      </div>
    </footer>
  );
}
