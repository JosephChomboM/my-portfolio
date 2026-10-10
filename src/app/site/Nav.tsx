import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { KoiMark } from "./KoiMark";
import { emailHref } from "../../content/profile";

const LINKS = [
  { id: "systems", label: "Systems" },
  { id: "practice", label: "Practice" },
  { id: "path", label: "Path" },
  { id: "contact", label: "Contact" },
];

export function Nav({ theme, onToggleTheme }: { theme: "dark" | "light"; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap nav__inner">
        <a className="nav__brand" href="#top" aria-label="Joseph Chombo, home">
          <KoiMark size={22} />
          <span>JC</span>
        </a>
        <nav aria-label="Sections" className="nav__links">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__end">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
          </button>
          <a className="nav__email" href={emailHref || "#contact"}>
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
