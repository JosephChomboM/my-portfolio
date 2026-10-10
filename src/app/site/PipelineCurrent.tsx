import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Koi } from "./Lines";
import { prefersReducedMotion } from "./hooks";

type Pt = { x: number; y: number };
type Geo = {
  w: number;
  h: number;
  vertical: boolean;
  nodes: Pt[];
  swirl: { x: number; y: number; r: number };
  ret: { y: number; trainX: number } | null;
};

const STRANDS = [-2.6, 0, 2.6];

/** Path through the stage nodes, bowing between them like the hero's currents. */
function throughNodes(nodes: Pt[], vertical: boolean, o: number) {
  return nodes.reduce((d, p, i) => {
    const q = vertical ? { x: p.x + o, y: p.y } : { x: p.x, y: p.y + o };
    if (i === 0) return `M${q.x} ${q.y}`;
    const a = nodes[i - 1];
    const bump = i % 2 ? 16 : -16;
    if (vertical) {
      const dy = (p.y - a.y) / 2;
      return `${d} C${a.x + o + bump} ${a.y + dy * 0.6} ${p.x + o + bump} ${p.y - dy * 0.6} ${q.x} ${q.y}`;
    }
    const dx = (p.x - a.x) / 2;
    return `${d} C${a.x + dx * 0.6} ${a.y + o + bump} ${p.x - dx * 0.6} ${p.y + o + bump} ${q.x} ${q.y}`;
  }, "");
}

/** The hero's swirl: an arm that winds inward 1.25 turns. `start` is the entry angle (0 = rightmost point, heading down). */
function spiral(cx: number, cy: number, r: number, o: number, start = -Math.PI / 2) {
  let d = "";
  const turns = Math.PI * 2 * 1.25;
  for (let th = 0; th <= turns + 0.001; th += 0.08) {
    const a = start + th;
    const rr = (r + o) * (1 - 0.84 * (th / turns));
    d += `${th === 0 ? "M" : "L"}${(cx + Math.cos(a) * rr).toFixed(2)} ${(cy + Math.sin(a) * rr * 0.86).toFixed(2)}`;
  }
  return d;
}

/**
 * "How I ship models", drawn as a current: one koi carries a model from Ingest to Monitor as the
 * section scrolls, the stretch it has travelled warms, and Monitor feeds the swirl that loops back to Train.
 */
export function PipelineCurrent() {
  const [geo, setGeo] = useState<Geo | null>(null);
  const svg = useRef<SVGSVGElement>(null);
  const pipe = useRef<SVGPathElement>(null);
  const koi = useRef<SVGGElement>(null);
  const trail = useRef<SVGPathElement>(null);

  // measure from the .loop this svg sits in (a parent ref is not attached yet when this runs)
  useLayoutEffect(() => {
    const el = svg.current?.parentElement;
    if (!el) return;
    const measure = () => {
      const box = el.getBoundingClientRect();
      const nodes = Array.from(el.querySelectorAll<HTMLElement>(".loop__node")).map((n) => {
        const r = n.getBoundingClientRect();
        return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 };
      });
      if (nodes.length < 2) return;
      const vertical = Math.abs(nodes[1].x - nodes[0].x) < 4;
      const cap = el.querySelector<HTMLElement>(".loop__return")?.getBoundingClientRect();
      const capMid = cap ? cap.top - box.top + cap.height / 2 : box.height;
      const capBottom = cap ? cap.bottom - box.top : box.height;
      if (vertical) {
        setGeo({ w: box.width, h: box.height, vertical, nodes, swirl: { x: nodes[0].x, y: capMid, r: 11 }, ret: null });
      } else {
        const r = 30;
        const retY = capBottom + 16;
        setGeo({ w: box.width, h: box.height, vertical, nodes, swirl: { x: box.width - r - 4, y: retY - r * 0.86, r }, ret: { y: retY, trainX: nodes[2].x } });
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);

  // scroll carries the koi along the pipeline; reduced motion parks it at Monitor
  useEffect(() => {
    const el = svg.current?.parentElement, path = pipe.current, k = koi.current, tr = trail.current;
    if (!geo || !el || !path || !k || !tr) return;
    const L = path.getTotalLength();
    const place = (p: number) => {
      const at = Math.max(0.001, Math.min(L - 0.5, p * L));
      const a = path.getPointAtLength(at), b = path.getPointAtLength(Math.min(L, at + 1));
      const deg = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      k.setAttribute("transform", `translate(${a.x} ${a.y}) rotate(${deg})`);
      tr.style.strokeDasharray = `${at} ${L}`;
    };
    if (prefersReducedMotion()) {
      place(1);
      return;
    }
    let shown = 0, raf = 0;
    const target = () => {
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      return Math.max(0, Math.min(1, (vh * 0.82 - r.top) / (vh * 0.62)));
    };
    const tick = () => {
      const t = target();
      shown += (t - shown) * 0.08;
      place(shown);
      raf = Math.abs(t - shown) > 0.0005 ? requestAnimationFrame(tick) : 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    shown = target();
    place(shown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [geo]);

  if (!geo) return <svg ref={svg} className="pipeline" width="0" height="0" aria-hidden="true" />;
  const { nodes, vertical, swirl, ret } = geo;
  const first = nodes[0], last = nodes[nodes.length - 1];

  const leadIn = (o: number) =>
    vertical
      ? `M${first.x + o - 12} ${first.y - 46} C${first.x + o - 12} ${first.y - 24} ${first.x + o} ${first.y - 18} ${first.x + o} ${first.y}`
      : `M${first.x - 64} ${first.y + o + 10} C${first.x - 40} ${first.y + o + 10} ${first.x - 22} ${first.y + o} ${first.x} ${first.y + o}`;

  // Monitor runs on into the swirl; on wide screens the swirl lets a current run back to Train
  const toSwirl = (o: number) =>
    vertical
      ? `M${last.x + o} ${last.y} C${last.x + o + 14} ${last.y + 30} ${swirl.x + o + 22} ${swirl.y - swirl.r * 1.6} ${swirl.x} ${swirl.y - swirl.r * 0.86 + o}`
      : `M${last.x} ${last.y + o} C${geo.w + 4} ${last.y + o} ${swirl.x + swirl.r + o} ${swirl.y - swirl.r * 2.2} ${swirl.x + swirl.r + o} ${swirl.y}`;

  const back = (o: number) =>
    ret
      ? `M${swirl.x} ${ret.y + o} C${swirl.x - 80} ${ret.y + o} ${ret.trainX + 120} ${ret.y + o - 4} ${ret.trainX + 30} ${ret.y + o} C${ret.trainX + 6} ${ret.y + o} ${ret.trainX - 6} ${ret.y - 8} ${ret.trainX - 8} ${ret.y - 22}`
      : "";

  return (
    <svg ref={svg} className="pipeline" width={geo.w} height={geo.h} viewBox={`0 0 ${geo.w} ${geo.h}`} aria-hidden="true">
      {STRANDS.map((o, i) => (
        <g key={o} className={`pipeline__strand s${i}`}>
          <path d={leadIn(o)} />
          <path d={throughNodes(nodes, vertical, o)} />
          <path d={toSwirl(o)} />
          <path d={spiral(swirl.x, swirl.y, swirl.r, o * 1.4, vertical ? -Math.PI / 2 : 0)} />
          {ret && <path d={back(o)} className="pipeline__return" />}
        </g>
      ))}
      <path ref={pipe} d={throughNodes(nodes, vertical, 0)} className="pipeline__guide" />
      <path ref={trail} d={throughNodes(nodes, vertical, 0)} className="pipeline__trail" />
      <g ref={koi}>
        <Koi x={0} y={0} size={vertical ? 24 : 30} accent />
      </g>
    </svg>
  );
}
