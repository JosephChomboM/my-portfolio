import { useEffect } from "react";
import { Nav } from "./site/Nav";
import { Hero } from "./site/Hero";
import { Glance, Systems, Practice, Path, Contact, Footer } from "./site/Sections";
import { CaseStudy } from "./site/CaseStudy";
import { useRoute, useTheme } from "./site/hooks";

export default function App() {
  const route = useRoute();
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    if (route.page === "home" && route.section) {
      document.getElementById(route.section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
