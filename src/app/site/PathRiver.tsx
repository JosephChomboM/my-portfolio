import { useLayoutEffect, useRef, useState } from "react";
import { Koi } from "./Lines";

type Geo = { w: number; h: number; x: number; nodes: number[]; edu: number | null };

const MAIN = [-2.6, 0, 2.6];
const EDU = [-1.4, 1.4];

/**
 * Path drawn as a river: the jobs are nodes on one current, newest at the top, where the vermilion koi swims on
 * into the present. Study runs as a second, finer strand beside the work and joins the river at Now.
 * Static: it explains the timeline, it does not perform.
 */
export function PathRiver() {
  const svg = useRef<SVGSVGElement>(null);
  const [geo, setGeo] = useState<Geo | null>(null);

  // measure the list this sits beside (a parent ref is not attached yet when this runs)
  useLayoutEffect(() => {
    const host = svg.current?.parentElement;
    const list = host?.querySelector<HTMLElement>(".path__list");
    if (!host || !list) return;
    const measure = () => {
      const box = host.getBoundingClientRect();
      const items = Array.from(list.querySelectorAll<HTMLElement>("li"));
      if (items.length < 2) return;
      const ys = items.map((li) => {
        const when = li.querySelector<HTMLElement>(".path__when")?.getBoundingClientRect();
        return (when ? when.top : li.getBoundingClientRect().top + 24) - box.top + 12;
      });
      const listLeft = list.getBoundingClientRect().left - box.left;
      // the last item is the degree; the rest are jobs
      setGeo({ w: box.width, h: box.height, x: listLeft - 30, nodes: ys.slice(0, -1), edu: ys[ys.length - 1] });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);

  if (!geo) return <svg ref={svg} className="river" width="0" height="0" aria-hidden="true" />;
  const { x, nodes, edu } = geo;
  const top = nodes[0], bottom = nodes[nodes.length - 1];
  const ex = x - 22;

  // a vertical current that bows gently between two heights
  const seg = (cx: number, a: number, b: number, bow: number) => {
    const d = (b - a) * 0.36;
    return `C${cx + bow} ${a + d} ${cx + bow} ${b - d} ${cx} ${b}`;
  };
  const river = (o: number) =>
    `M${x + o} ${top - 70}` +
    ` ${seg(x + o, top - 70, top, -6)}` +
    nodes.slice(1).map((y, k) => ` ${seg(x + o, nodes[k], y, k % 2 ? -18 : 18)}`).join("") +
    ` ${seg(x + o, bottom, bottom + 34, -6)}`;
  // study: up from the degree, beside the jobs, then into the river just below Now
  const study = (o: number) =>
    edu === null
      ? ""
      : `M${ex + o} ${edu}` +
        ` ${seg(ex + o, edu, bottom, 9)}` +
        ` ${seg(ex + o, bottom, nodes[Math.min(1, nodes.length - 1)], -12)}` +
        ` C${ex + o} ${top + 54} ${x + o * 0.5} ${top + 46} ${x + o * 0.5} ${top + 22}`;

  return (
    <svg ref={svg} className="river" width={geo.w} height={geo.h} viewBox={`0 0 ${geo.w} ${geo.h}`} aria-hidden="true">
      <defs>
        <linearGradient id="river-fade" gradientUnits="userSpaceOnUse" x1="0" y1={top - 70} x2="0" y2={bottom + 34}>
          <stop offset="0" stopColor="var(--current)" stopOpacity="0" />
          <stop offset={(70 / (bottom - top + 104)).toFixed(3)} stopColor="var(--current)" stopOpacity="1" />
          <stop offset={(1 - 34 / (bottom - top + 104)).toFixed(3)} stopColor="var(--current)" stopOpacity="1" />
          <stop offset="1" stopColor="var(--current)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {MAIN.map((o, k) => (
        <path key={o} d={river(o)} className={`river__strand s${k}`} stroke="url(#river-fade)" />
      ))}
      {edu !== null && EDU.map((o) => <path key={o} d={study(o)} className="river__study" />)}
      {nodes.map((y, k) => (
        <circle key={y} cx={x} cy={y} r={k === 0 ? 4 : 3.4} className={k === 0 ? "river__node is-now" : "river__node"} />
      ))}
      {edu !== null && <circle cx={ex} cy={edu} r={3.2} className="river__node is-study" />}
      <Koi x={x} y={top - 30} deg={-90} size={26} accent />
    </svg>
  );
}
