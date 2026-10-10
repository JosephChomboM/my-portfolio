import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./hooks";

export type SchoolPhase = "stable" | "drifting" | "regrouping";
export type SchoolStatus = { drift: number; phase: SchoolPhase };

// The koi from Joseph's mark: head at (18,8), tail near (52,94), in a 100-unit box.
const KOI_D = "M18 8C50 10 80 34 84 70M18 8C12 34 22 58 46 70M84 70C74 52 56 50 48 62M48 62C42 74 44 86 52 94M60 66C64 76 64 86 58 94";
const KOI_BASE = Math.atan2(8 - 94, 18 - 52);
const LANES = 6;
const TAU = Math.PI * 2;

type Koi = {
  lane: number; // -1 = orbiting the swirl
  x: number;
  speed: number;
  size: number;
  offset: number;
  wiggle: number;
  angle: number;
  radius: number;
  spin: number;
  dx: number; dy: number; vx: number; vy: number;
  heading: number;
  accent: boolean;
  px: number; py: number;
};
type Dot = { lane: number; x: number; off: number; vx: number; r: number; a: number; tw: number; accent: boolean; dx: number; dy: number; vx2: number; vy2: number };

const rand = (a: number, b: number) => a + Math.random() * (b - a);
/** The same colour at zero alpha, so gradients fade without darkening. */
const transparentOf = (c: string) => {
  const h = c.replace("#", "");
  const full = h.length === 3 ? h.split("").map((x) => x + x).join("") : h;
  if (!/^[0-9a-f]{6}$/i.test(full)) return "rgba(0,0,0,0)";
  const n = parseInt(full, 16);
  return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},0)`;
};
const lerpAngle = (a: number, b: number, t: number) => a + ((((b - a) % TAU) + TAU + Math.PI) % TAU - Math.PI) * t;

export function KoiSchool({ scatterKey, onStatus }: { scatterKey: number; onStatus: (s: SchoolStatus) => void }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const api = useRef<{ scatter: () => void } | null>(null);
  const statusCb = useRef(onStatus);
  statusCb.current = onStatus;

  useEffect(() => {
    if (scatterKey > 0) api.current?.scatter();
  }, [scatterKey]);

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const koiPath = new Path2D(KOI_D);
    const reduced = prefersReducedMotion();

    let w = 0, h = 0, top = 0, bh = 0, lambda = 600, amp = 40, cx = 0, cy = 0, R = 80;
    let koi: Koi[] = [];
    let dots: Dot[] = [];
    let trail: { x: number; y: number }[] = [];
    let colors = { line: "", fish: "", accent: "", glow: "" };
    const mouse = { x: -9999, y: -9999 };
    let scatterAt = -Infinity;
    let t = 0;
    let visible = true;
    let lastReport = 0;
    let lastStatus = "";

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      colors = {
        line: s.getPropertyValue("--current").trim(),
        fish: s.getPropertyValue("--koi").trim(),
        accent: s.getPropertyValue("--accent").trim(),
        glow: s.getPropertyValue("--accent-glow").trim(),
      };
    };

    // currents part around the vortex: inner lanes wrap it, outer lanes only bow
    const DEFLECT = [0.45, 0.75, 1.0, 1.0, 0.75, 0.45];
    const laneY = (i: number, x: number, time: number) => {
      const side = i - (LANES - 1) / 2;
      const g = Math.exp(-(((x - cx) / (R * 1.3)) ** 2));
      return (
        top + bh * (0.16 + (0.68 * i) / (LANES - 1)) +
        amp * (1 - g) * Math.sin((x * TAU) / lambda + i * 0.55 + time * 0.11) +
        amp * 0.34 * Math.sin((x * TAU) / (lambda * 0.47) - time * 0.07 + i * 1.3) +
        Math.sign(side) * g * R * DEFLECT[i]
      );
    };

    const build = () => {
      const narrow = w < 720;
      top = h * (narrow ? 0.09 : 0.1);
      bh = h * (narrow ? 0.34 : 0.42);
      lambda = Math.max(w * 0.78, 520);
      amp = bh * 0.12;
      cx = w * (narrow ? 0.72 : 0.68);
      cy = top + bh * 0.5;
      R = bh * 0.3;
      const scale = Math.min(1.15, Math.max(0.7, w / 1440));
      const laneCount = narrow ? 13 : 24;
      const orbitCount = narrow ? 4 : 8;
      koi = [];
      // shoals: koi travel in loose groups that share a lane band and a pace
      const shoals = Array.from({ length: narrow ? 3 : 5 }, (_, j) => ({
        x: (w / (narrow ? 3 : 5)) * j + rand(0, w / 6),
        lane: Math.floor(rand(0, LANES)),
        speed: rand(15, 26) * Math.sqrt(scale),
      }));
      for (let i = 0; i < laneCount + orbitCount; i++) {
        const orbit = i >= laneCount;
        const sh = shoals[i % shoals.length];
        const lane = Math.min(LANES - 1, Math.max(0, sh.lane + Math.round(rand(-1, 1))));
        const size = rand(orbit ? 16 : 20, orbit ? 26 : 38) * scale;
        let x = sh.x, off = 0;
        for (let tries = 0; tries < 14; tries++) {
          x = sh.x + rand(-150, 150) * scale;
          off = rand(-16, 16);
          const clash = koi.some((o) => o.lane === lane && Math.hypot(o.x - x, (o.offset - off) * 2.2) < (o.size + size) * 0.62);
          if (!clash) break;
        }
        koi.push({
          lane: orbit ? -1 : lane,
          x,
          speed: sh.speed * rand(0.94, 1.06),
          size,
          offset: off,
          wiggle: rand(0, TAU),
          angle: rand(0, TAU),
          radius: R * rand(0.72, 1.22),
          spin: rand(0.07, 0.12),
          dx: 0, dy: 0, vx: 0, vy: 0,
          heading: 0,
          accent: i === 3,
          px: 0, py: 0,
        });
      }
      const k = koi[3];
      if (k) { k.size = 34 * scale; }
      dots = [];
      const dotCount = narrow ? 44 : 90;
      for (let i = 0; i < dotCount; i++) {
        dots.push({
          lane: Math.floor(rand(0, LANES)), x: rand(0, w), off: rand(-18, 18), vx: rand(8, 22),
          r: rand(1, 2), a: rand(0.35, 0.75), tw: rand(0, TAU), accent: Math.random() < 0.06,
          dx: 0, dy: 0, vx2: 0, vy2: 0,
        });
      }
      trail = [];
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = c.getBoundingClientRect();
      w = r.width; h = r.height;
      c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      if (reduced) frame(0);
    };

    const step = (dt: number) => {
      t += dt;
      const since = t - scatterAt;
      const regroup = since < 0.9 ? 0 : Math.min(1, ((since - 0.9) / 2.6) ** 2);
      const K = 3.2 * regroup + 0.02;
      const C = since < 0.9 ? 0.9 : 2.6;
      let total = 0;
      for (const f of koi) {
        let bx: number, by: number, bvx: number, bvy: number;
        if (f.lane >= 0) {
          f.x += f.speed * dt;
          if (f.x > w + 60) f.x = -60;
          bx = f.x;
          by = laneY(f.lane, bx, t) + f.offset + Math.sin(t * 0.6 + f.wiggle) * 3;
          const ahead = laneY(f.lane, bx + 4, t) + f.offset;
          bvx = f.speed; bvy = ((ahead - (by - Math.sin(t * 0.6 + f.wiggle) * 3)) / 4) * f.speed;
        } else {
          f.angle -= f.spin * dt;
          bx = cx + Math.cos(f.angle) * f.radius;
          by = cy + Math.sin(f.angle) * f.radius * 0.82;
          bvx = Math.sin(f.angle) * f.radius * f.spin;
          bvy = -Math.cos(f.angle) * f.radius * 0.82 * f.spin;
        }
        // gentle avoidance of the cursor
        const ex = bx + f.dx - mouse.x, ey = by + f.dy - mouse.y;
        const d = Math.hypot(ex, ey);
        let ax = 0, ay = 0;
        if (d < 150 && d > 0.01) {
          const s = (1 - d / 150) ** 2 * 520;
          ax += (ex / d) * s; ay += (ey / d) * s;
        }
        for (const o of koi) {
          if (o === f || o.px === 0) continue;
          const sx = f.px - o.px, sy = f.py - o.py;
          const sd = Math.hypot(sx, sy), min = (f.size + o.size) * 0.55;
          if (sd < min && sd > 0.01) { const push = (1 - sd / min) * 140; ax += (sx / sd) * push; ay += (sy / sd) * push; }
        }
        ax += -K * f.dx - C * f.vx;
        ay += -K * f.dy - C * f.vy;
        f.vx += ax * dt; f.vy += ay * dt;
        f.dx += f.vx * dt; f.dy += f.vy * dt;
        f.px = bx + f.dx; f.py = by + f.dy;
        const target = Math.atan2(bvy + f.vy, bvx + f.vx);
        f.heading = f.heading === 0 ? target : lerpAngle(f.heading, target, Math.min(1, dt * 3));
        total += Math.hypot(f.dx, f.dy);
      }
      for (const p of dots) {
        p.x += p.vx * dt;
        if (p.x > w + 10) p.x = -10;
        if (Math.abs(p.x - cx) < R * 1.4) p.x += p.vx * dt * 0.6; // hurry through the vortex
        p.vx2 += (-K * p.dx - C * p.vx2) * dt; p.vy2 += (-K * p.dy - C * p.vy2) * dt;
        p.dx += p.vx2 * dt; p.dy += p.vy2 * dt;
      }
      const accent = koi[3];
      if (accent) {
        trail.push({ x: accent.px, y: accent.py });
        if (trail.length > 70) trail.shift();
        if (trail.length > 1 && Math.abs(trail[trail.length - 1].x - trail[trail.length - 2].x) > 100) trail = [];
      }
      const drift = Math.min(0.6, total / koi.length / (bh * 0.55));
      if (t - lastReport > 0.2) {
        lastReport = t;
        const phase: SchoolPhase = since < 0.9 ? "drifting" : drift > 0.06 ? "regrouping" : "stable";
        const key = `${phase}${drift.toFixed(2)}`;
        if (key !== lastStatus) { lastStatus = key; statusCb.current({ drift, phase }); }
      }
    };

    const frame = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      // currents: each lane is a bundle of near-parallel hairlines
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.line;
      for (let i = 0; i < LANES; i++) {
        for (let k = -2; k <= 2; k++) {
          ctx.globalAlpha = 0.07 + 0.14 * (1 - Math.abs(k) / 2.6) * (0.75 + 0.25 * Math.sin(i * 1.9));
          ctx.beginPath();
          for (let x = -20; x <= w + 20; x += 10) {
            const y = laneY(i, x, time) + k * 4.2 + Math.sin(x * 0.006 + k * 1.7 + time * 0.2) * 1.6;
            x === -20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }
      // the vortex: two hairline arms. Arm A draws the upper inner current in from the left,
      // arm B lets the lower inner current out to the right, so the swirl is part of the flow.
      const turns = TAU * 1.25;
      const arm = (end: number, k: number) => {
        for (let th = end - turns; th <= end + 0.001; th += 0.05) {
          const r = R * (0.14 + 0.86 * ((th - (end - turns)) / turns)) + k;
          const x = cx + Math.cos(th) * r;
          const y = cy + Math.sin(th) * r * 0.82;
          th === end - turns ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
      };
      const clear = transparentOf(colors.line);
      for (let k = -1; k <= 1; k++) {
        const o = k * 5;
        ctx.globalAlpha = 0.16 + 0.08 * (1 - Math.abs(k)) + 0.03 * Math.sin(time * 0.4 + k);
        // arm A: lane 2 (upper inner) → spiral, ending at angle π (left)
        // connectors fade in from (and out to) the current they share, so no seam doubles up the line
        const ax0 = cx - R * 2.4, bx1 = cx + R * 2.4;
        const fadeIn = ctx.createLinearGradient(ax0, 0, cx - R * 1.5, 0);
        fadeIn.addColorStop(0, clear);
        fadeIn.addColorStop(1, colors.line);
        ctx.strokeStyle = fadeIn;
        ctx.beginPath();
        ctx.moveTo(ax0, laneY(2, ax0, time) + o);
        ctx.bezierCurveTo(cx - R * 1.6, laneY(2, cx - R * 1.6, time) + o, cx - R * 1.05 - o, cy - R * 0.62, cx - R - o, cy);
        ctx.stroke();
        ctx.strokeStyle = colors.line;
        ctx.beginPath();
        arm(Math.PI, o);
        ctx.stroke();
        // arm B: spiral → lane 3 (lower inner), leaving at angle 0 (right)
        ctx.beginPath();
        arm(0, o);
        ctx.stroke();
        const fadeOut = ctx.createLinearGradient(cx + R * 1.5, 0, bx1, 0);
        fadeOut.addColorStop(0, colors.line);
        fadeOut.addColorStop(1, clear);
        ctx.strokeStyle = fadeOut;
        ctx.beginPath();
        ctx.moveTo(cx + R + o, cy);
        ctx.bezierCurveTo(cx + R * 1.05 + o, cy + R * 0.62, cx + R * 1.6, laneY(3, cx + R * 1.6, time) + o, bx1, laneY(3, bx1, time) + o);
        ctx.stroke();
        ctx.strokeStyle = colors.line;
      }
      // dots ride the currents
      for (const p of dots) {
        ctx.globalAlpha = p.a * (0.75 + 0.25 * Math.sin(time * 0.8 + p.tw));
        ctx.fillStyle = p.accent ? colors.accent : colors.fish;
        ctx.beginPath();
        ctx.arc(p.x + p.dx, laneY(p.lane, p.x, time) + p.off + p.dy, p.r, 0, TAU);
        ctx.fill();
      }
      // the warm light trail
      if (trail.length > 2) {
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;
        for (let i = 1; i < trail.length; i++) {
          ctx.globalAlpha = (i / trail.length) * 0.4;
          ctx.beginPath();
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.stroke();
        }
      }
      // koi
      for (const f of koi) {
        const s = f.size / 100;
        ctx.save();
        ctx.translate(f.px, f.py);
        ctx.rotate(f.heading - KOI_BASE);
        ctx.scale(s, s);
        ctx.translate(-50, -52);
        ctx.lineWidth = (f.accent ? 1.5 : 1.15) / s;
        ctx.lineCap = "round";
        ctx.globalAlpha = f.lane < 0 ? 0.75 : 0.92;
        ctx.strokeStyle = f.accent ? colors.accent : colors.fish;
        if (f.accent) { ctx.shadowColor = colors.glow; ctx.shadowBlur = 8; }
        ctx.stroke(koiPath);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    };

    readColors();
    resize();
    // place every fish once so the first painted frame is already composed
    step(0.001);
    frame(0);
    const mo = new MutationObserver(() => { readColors(); if (reduced) frame(t); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const ro = new ResizeObserver(resize);
    ro.observe(c);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(c);

    const onMove = (e: PointerEvent) => {
      const r = c.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    api.current = {
      scatter: () => {
        for (const f of koi) {
          const a = rand(0, TAU), m = rand(150, 300);
          f.vx += Math.cos(a) * m; f.vy += Math.sin(a) * m;
        }
        for (const p of dots) {
          const a = rand(0, TAU), m = rand(40, 120);
          p.vx2 += Math.cos(a) * m; p.vy2 += Math.sin(a) * m;
        }
        scatterAt = t;
        if (reduced) {
          // no motion: show the outcome as states only
          statusCb.current({ drift: 0.31, phase: "drifting" });
          window.setTimeout(() => statusCb.current({ drift: 0.12, phase: "regrouping" }), 1200);
          window.setTimeout(() => { for (const f of koi) { f.vx = f.vy = 0; } for (const p of dots) { p.vx2 = p.vy2 = 0; } statusCb.current({ drift: 0.02, phase: "stable" }); }, 2600);
        }
      },
    };

    let raf = 0;
    let prev = performance.now();
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      if (!visible || document.hidden) return;
      step(dt);
      frame(t);
    };
    if (!reduced) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect(); ro.disconnect(); io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      api.current = null;
    };
  }, []);

  return <canvas ref={canvas} className="school" aria-hidden="true" />;
}
