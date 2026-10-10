// The hero's line language, drawn statically for the sections below:
// strand-bundled currents, the koi glyph from Joseph's mark, and the swirl.

export const KOI_D =
  "M18 8C50 10 80 34 84 70M18 8C12 34 22 58 46 70M84 70C74 52 56 50 48 62M48 62C42 74 44 86 52 94M60 66C64 76 64 86 58 94";
export const KOI_BASE_DEG = (Math.atan2(8 - 94, 18 - 52) * 180) / Math.PI;

/** A koi at (x, y) heading `deg` (0 = swimming right), `size` px long. */
export function Koi({ x, y, deg = 0, size = 24, accent = false, className }: { x: number; y: number; deg?: number; size?: number; accent?: boolean; className?: string }) {
  const s = size / 100;
  return (
    <g transform={`translate(${x} ${y}) rotate(${deg - KOI_BASE_DEG}) scale(${s}) translate(-50 -52)`} className={className}>
      <path d={KOI_D} fill="none" stroke={accent ? "var(--accent)" : "var(--koi)"} strokeWidth={accent ? 1.5 : 1.15} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </g>
  );
}

const wave = (w: number, mid: number, amp: number, phase: number, cycles: number, step = 12) => {
  let d = "";
  for (let x = 0; x <= w; x += step) {
    const t = (x / w) * Math.PI * 2;
    const y = mid + amp * Math.sin(t * cycles + phase) + amp * 0.35 * Math.sin(t * cycles * 2.3 - phase * 1.7);
    d += `${x === 0 ? "M" : "L"}${x} ${y.toFixed(2)}`;
  }
  return d;
};

/** A thin current used in place of a straight divider. `seed` varies the phase so no two rules match. */
export function CurrentRule({ seed = 0, className = "" }: { seed?: number; className?: string }) {
  const W = 1200;
  return (
    <svg className={`current-rule ${className}`} viewBox={`0 0 ${W} 24`} preserveAspectRatio="none" aria-hidden="true">
      {[-2.6, 0, 2.6].map((o, i) => (
        <path key={o} d={wave(W, 12 + o, 4, seed * 1.9 + i * 0.35, 1.4 + (seed % 3) * 0.2)} className={`current-rule__strand s${i}`} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

/**
 * A small line-art architecture sketch: the case study's stages as nodes on one current.
 * Drawn from data, so every system row holds a diagram in the same style.
 */
export function MiniFlow({ stages, className = "" }: { stages: readonly string[]; className?: string }) {
  const W = 240, H = 80, pad = 18;
  const n = Math.max(2, stages.length);
  const pts = Array.from({ length: n }, (_, i) => ({ x: pad + (i * (W - pad * 2)) / (n - 1), y: H / 2 + (i % 2 ? -9 : 9) }));
  const seg = (o: number) =>
    pts.reduce((d, p, i) => {
      if (i === 0) return `M${p.x - 14} ${p.y + o - 6} Q${p.x - 6} ${p.y + o} ${p.x} ${p.y + o}`;
      const a = pts[i - 1], dx = (p.x - a.x) / 2;
      return `${d} C${a.x + dx} ${a.y + o} ${p.x - dx} ${p.y + o} ${p.x} ${p.y + o}`;
    }, "");
  return (
    <svg className={`miniflow ${className}`} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      {[-2.4, 0, 2.4].map((o, i) => (
        <path key={o} d={seg(o)} className={`miniflow__strand s${i}`} />
      ))}
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === n - 1 ? 3.6 : 3} className={i === n - 1 ? "miniflow__node is-end" : "miniflow__node"} />
      ))}
    </svg>
  );
}

/** The close of the page: the school at rest, regrouped along one current. */
export function ContactSchool() {
  const W = 1200, H = 190;
  const shoal: [number, number, number][] = [
    [520, 92, 26], [566, 70, 22], [574, 112, 24], [616, 88, 28], [660, 64, 22],
    [668, 108, 25], [708, 86, 27], [752, 100, 23], [748, 66, 21],
  ];
  return (
    <svg className="contact-school" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {[-5, -2.5, 0, 2.5, 5].map((o, i) => (
        <path key={o} d={wave(W, 92 + o * 1.6, 10, 0.8 + i * 0.12, 1.1, 10)} className={`contact-school__strand s${Math.abs(i - 2)}`} />
      ))}
      {[150, 260, 340, 430, 860, 940, 1010, 1100].map((x, i) => (
        <circle key={x} cx={x} cy={92 + Math.sin(x * 0.02) * 12 + (i % 2 ? 6 : -4)} r={i === 5 ? 1.8 : 1.4} className={i === 5 ? "contact-school__dot is-accent" : "contact-school__dot"} />
      ))}
      {shoal.map(([x, y, s], i) => (
        <g key={i} className="contact-school__koi" style={{ animationDelay: `${-i * 0.7}s` }}>
          <Koi x={x} y={y} size={s} deg={-4 + (i % 3) * 3} />
        </g>
      ))}
      <g className="contact-school__koi" style={{ animationDelay: "-2.1s" }}>
        <Koi x={806} y={84} size={30} deg={-3} accent />
      </g>
    </svg>
  );
}
