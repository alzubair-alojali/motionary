import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-6 sm:px-12 lg:px-20">
      <section className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-start justify-center gap-8 pt-32 pb-32">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3">
          NO SIGNAL · 404
        </p>
        <h1 className="font-display text-4xl italic leading-[0.95] tracking-tight text-paper break-words sm:text-6xl lg:text-7xl">
          Specimen not on plate.
        </h1>
        <p className="max-w-md font-display text-lg italic leading-relaxed text-paper-2">
          The pattern you were looking for either drifted out of frame or was
          never observed at this station. The field index lists every
          catalogued specimen.
        </p>
        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 border border-paper-3/50 px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors hover:border-star hover:text-star"
        >
          <span aria-hidden="true">←</span>
          Return to field index
        </Link>
      </section>
    </div>
  );
}
