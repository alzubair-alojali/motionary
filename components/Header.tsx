import Link from "next/link";

export function Header() {
  return (
    <header className="pointer-events-none fixed left-4 top-4 z-40 select-none font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-paper-3 sm:left-6 sm:top-6">
      <Link
        href="/"
        aria-label="Motionary — return to field index"
        className="pointer-events-auto block transition-colors hover:text-paper"
      >
        <div className="text-paper-2">MOTIONARY</div>
        <div aria-hidden="true">VOL. I · MMXXVI</div>
        <div aria-hidden="true">FIELD GUIDE TO INTERFACE MOTION</div>
      </Link>
    </header>
  );
}
