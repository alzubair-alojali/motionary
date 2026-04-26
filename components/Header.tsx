import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-base font-medium tracking-tight text-foreground"
        >
          <span className="relative inline-block h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-accent" aria-hidden="true" />
            <span
              className="absolute inset-0 rounded-full bg-accent opacity-60 blur-[5px] transition-opacity duration-200 group-hover:opacity-90"
              aria-hidden="true"
            />
          </span>
          Motionary
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/#categories"
            className="hidden h-9 items-center rounded-full px-3 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Categories
          </Link>
          <a
            href="https://github.com/alzubair-alojali/motionary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
          >
            <GithubIcon size={16} />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
