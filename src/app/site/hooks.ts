import { useEffect, useState } from "react";

export type Route = { page: "home"; section?: string } | { page: "case"; slug: string };

function parse(hash: string): Route {
  const m = hash.match(/^#\/systems\/([\w-]+)/);
  if (m) return { page: "case", slug: m[1] };
  const section = hash.startsWith("#") && !hash.startsWith("#/") ? hash.slice(1) : undefined;
  return { page: "home", section: section || undefined };
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));
  useEffect(() => {
    const on = () => setRoute(parse(window.location.hash));
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(
    () => (document.documentElement.dataset.theme as "dark" | "light") || "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#041214" : "#F2F7F6");
    try {
      localStorage.setItem("jc-theme", theme);
    } catch {}
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))] as const;
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let scrollRaf = 0;

/**
 * Bring a target just below the sticky nav: a short ease-out (≤600ms) that any wheel, touch or key
 * input interrupts; an instant jump under reduced motion or when `instant` is set.
 */
export function scrollToTarget(el: HTMLElement, instant = false) {
  cancelAnimationFrame(scrollRaf);
  const navH = document.querySelector<HTMLElement>(".nav")?.offsetHeight ?? 64;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  // a heading that shares its row with a taller lede lands by the row, so neither touches the nav
  const anchor = el.closest<HTMLElement>(".section__head") ?? el;
  const y = Math.min(max, Math.max(0, anchor.getBoundingClientRect().top + window.scrollY - navH - 24));
  if (instant || prefersReducedMotion()) {
    window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
    return;
  }
  const start = window.scrollY;
  const dist = y - start;
  const dur = Math.min(600, 240 + Math.abs(dist) * 0.06);
  let t0 = 0;
  const stop = () => {
    cancelAnimationFrame(scrollRaf);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
  };
  window.addEventListener("wheel", stop, { passive: true, once: true });
  window.addEventListener("touchstart", stop, { passive: true, once: true });
  window.addEventListener("keydown", stop, { once: true });
  const step = (now: number) => {
    if (!t0) t0 = now;
    const p = Math.min(1, (now - t0) / dur);
    window.scrollTo({ top: start + dist * (1 - Math.pow(1 - p, 3)), behavior: "instant" as ScrollBehavior });
    if (p < 1) scrollRaf = requestAnimationFrame(step);
    else stop();
  };
  scrollRaf = requestAnimationFrame(step);
}
