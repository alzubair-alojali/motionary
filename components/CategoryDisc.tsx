import { cn } from "@/lib/utils";

interface CategoryDiscProps {
  seed: number;
  className?: string;
  size?: number;
}

interface DiscStar {
  x: number;
  y: number;
  r: number;
  alpha: number;
}

function makeRng(seed: number) {
  let s = (seed * 0x9e3779b9) | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateStars(seed: number, count: number): DiscStar[] {
  const rand = makeRng(seed);
  const stars: DiscStar[] = [];
  for (let i = 0; i < count; i++) {
    // Reject stars too close to the disc edge so the constellation feels
    // contained, with a stronger density toward the centre.
    const r = Math.sqrt(rand()) * 44 + 4;
    const a = rand() * Math.PI * 2;
    stars.push({
      x: 50 + r * Math.cos(a),
      y: 50 + r * Math.sin(a),
      r: rand() * 0.55 + 0.18,
      alpha: rand() * 0.55 + 0.25,
    });
  }
  return stars;
}

export function CategoryDisc({ seed, className, size = 320 }: CategoryDiscProps) {
  const stars = generateStars(seed * 31 + 7, 90);
  const rand = makeRng(seed * 17 + 3);
  // One small accent "object" off-center per category — same role as the
  // bright accent dot in D4's category plates.
  const ox = 30 + rand() * 40;
  const oy = 30 + rand() * 40;

  return (
    <div
      className={cn(
        "viewfinder relative aspect-square overflow-hidden rounded-full border border-paper-3/30 bg-void-2 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.03] group-hover:border-star/70",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="rgb(244, 239, 227)"
            opacity={s.alpha}
          />
        ))}
        <circle cx={ox} cy={oy} r="2.2" fill="oklch(0.86 0.06 220)" opacity="0.8" />
        <circle cx={ox} cy={oy} r="6.5" fill="oklch(0.86 0.06 220)" opacity="0.16" />
        <circle
          cx="50"
          cy="50"
          r="49.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.16"
          opacity="0.5"
          className="text-paper-3"
        />
      </svg>
    </div>
  );
}
