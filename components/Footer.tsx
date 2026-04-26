export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-8 text-sm sm:flex-row sm:items-center sm:px-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-foreground">Motionary</span>
          <span aria-hidden="true">·</span>
          <span>Motion patterns for developers</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a
            href="https://github.com/alzubair-alojali/motionary"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <span>MIT</span>
        </div>
      </div>
    </footer>
  );
}
