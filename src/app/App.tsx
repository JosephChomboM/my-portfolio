import { useEffect, useRef } from "react";
import { Nav } from "./site/Nav";
import { Hero } from "./site/Hero";
import { Glance, Systems, Practice, Path, Contact, Footer } from "./site/Sections";
import { CaseStudy } from "./site/CaseStudy";
import { scrollToTarget, useRoute, useTheme } from "./site/hooks";

export default function App() {
  const route = useRoute();
  const [theme, toggleTheme] = useTheme();

  // a section hash arriving from load or another page jumps straight there; in-page nav clicks animate (Nav)
  const lastPage = useRef<string | null>(null);
  useEffect(() => {
    const arriving = lastPage.current !== "home";
    lastPage.current = route.page;
    if (route.page !== "home" || !route.section) return;
    const el = document.getElementById(route.section);
    if (!el) return;
    scrollToTarget(el, arriving);
    if (arriving) document.fonts?.ready.then(() => scrollToTarget(el, true));
  }, [route]);

  return (
    <>
      <a
        className="skip"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          const m = document.getElementById("main");
          m?.setAttribute("tabindex", "-1");
          m?.focus();
        }}
      >
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      {route.page === "case" ? (
        <CaseStudy slug={route.slug} />
      ) : (
        <main id="main">
          <Hero />
          <Glance />
          <Systems />
          <Practice />
          <Path />
          <Contact />
        </main>
      )}
      <Footer theme={theme} onToggleTheme={toggleTheme} />
    </>
  );
}
