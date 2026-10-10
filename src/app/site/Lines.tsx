import type { Topology } from "../../content/caseStudies";

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
 * A small line-art architecture sketch drawn from a case study's stages and topology, so every system shows its
 * own shape: review gates as diamonds, an offline lane that merges in, outputs that fan out, and a tracing strand
 * that runs under the whole flow.
 */
export function MiniFlow({ stages, topology = {}, className = "" }: { stages: readonly string[]; topology?: Topology; className?: string }) {
  const W = 240, H = 84, pad = 16, mid = 38;
  const { gate, sidecar, joinAt, split } = topology;
  const main = stages.map((_, i) => i).filter((i) => i !== sidecar);
  const lanes = main.filter((i) => joinAt === undefined || i >= joinAt);
  const offline = joinAt === undefined ? [] : main.filter((i) => i < joinAt);
  const right = split ? W - pad - 34 : W - pad;
  // the merging lane starts later so its last node sits clear of the join
  const left = offline.length ? pad + 70 : pad;
  const xs = (n: number, from: number, to: number) => Array.from({ length: n }, (_, k) => (n === 1 ? from : from + (k * (to - from)) / (n - 1)));
  const laneX = xs(lanes.length, left, right);
  const pts = lanes.map((i, k) => ({ i, x: laneX[k], y: mid + (k % 2 ? -5 : 5) }));
  const offX = xs(offline.length, pad, left - 30);
  const offPts = offline.map((i, k) => ({ i, x: offX[k], y: 14 + (k % 2 ? 3 : 0) }));
  const curve = (p: { x: number; y: number }[], o: number) =>
    p.reduce((d, q, k) => {
      if (k === 0) return `M${q.x} ${q.y + o}`;
      const a = p[k - 1], dx = (q.x - a.x) / 2;
      return `${d} C${a.x + dx} ${a.y + o} ${q.x - dx} ${q.y + o} ${q.x} ${q.y + o}`;
    }, "");
  const lead = (o: number) => `M${pts[0].x - 14} ${pts[0].y + o - 4} Q${pts[0].x - 6} ${pts[0].y + o} ${pts[0].x} ${pts[0].y + o}`;
  const last = pts[pts.length - 1];
  const leaves = split ? [{ x: W - pad, y: 18 }, { x: W - pad, y: 58 }] : [];
  const traceY = 72;
  const node = (x: number, y: number, i: number, end = false) =>
    i === gate ? (
      <rect key={`n${i}`} x={x - 4} y={y - 4} width={8} height={8} transform={`rotate(45 ${x} ${y})`} className="miniflow__node is-gate" />
    ) : (
      <circle key={`n${i}`} cx={x} cy={y} r={end ? 3.6 : 3} className={end ? "miniflow__node is-end" : "miniflow__node"} />
    );
  return (
    <svg className={`miniflow ${className}`} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      {[-2.4, 0, 2.4].map((o, k) => (
        <g key={o} className={`miniflow__strand s${k}`}>
          <path d={lead(o)} />
          <path d={curve(pts, o)} />
          {offPts.length > 0 && <path d={`${curve(offPts, o)} C${offPts[offPts.length - 1].x + 14} ${offPts[offPts.length - 1].y + o} ${pts[0].x - 16} ${pts[0].y + o - 14} ${pts[0].x} ${pts[0].y + o}`} />}
          {leaves.map((l) => (
            <path key={l.y} d={`M${last.x} ${last.y + o} C${last.x + 16} ${last.y + o} ${l.x - 18} ${l.y + o} ${l.x} ${l.y + o}`} />
          ))}
        </g>
      ))}
      {sidecar !== undefined && (
        <g className="miniflow__trace">
          <path d={`M${pts[0].x} ${traceY} L${last.x} ${traceY}`} />
          {pts.map((p) => (
            <path key={p.i} d={`M${p.x} ${p.y + 5} L${p.x} ${traceY}`} className="miniflow__tap" />
          ))}
          <circle cx={last.x + 12} cy={traceY} r={2.6} className="miniflow__node" />
        </g>
      )}
      {offPts.map((p) => node(p.x, p.y, p.i))}
      {pts.map((p, k) => node(p.x, p.y, p.i, !split && k === pts.length - 1))}
      {leaves.map((l, k) => (
        <circle key={`l${k}`} cx={l.x} cy={l.y} r={3.4} className="miniflow__node is-end" />
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
