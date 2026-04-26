export default function Home() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] demo-glow" />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            18 patterns · prompt-ready · MIT
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Motion patterns
            <br />
            <span className="text-accent">for developers.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A reference library of transitions, hover effects, scroll
            animations, and micro-interactions — each paired with a copy-ready
            AI prompt for your coding agent.
          </p>
        </div>

        <div id="categories" className="mt-24 scroll-mt-20" />
      </div>
    </div>
  );
}
