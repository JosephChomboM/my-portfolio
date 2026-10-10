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
