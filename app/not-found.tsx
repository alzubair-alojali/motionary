import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-4 py-32 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        404 — pattern not found
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        That motion isn&apos;t here.
      </h1>
      <p className="max-w-md text-base text-muted-foreground">
        The pattern either moved or never existed. Browse the catalog to find
        what you were looking for.
      </p>
      <Link
        href="/"
        className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
      >
        <ArrowLeft size={14} />
        Back to all patterns
      </Link>
    </div>
  );
}
