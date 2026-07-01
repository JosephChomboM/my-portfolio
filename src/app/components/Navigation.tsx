import { useState, useEffect } from "react";

const NAV_ITEMS = ["Work", "Systems", "Writing", "About", "Contact"];

export function Navigation() {
  const [active, setActive] = useState("Work");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "rgba(242,238,230,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid #D8D0C4" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="max-w-7xl mx-auto px-8 flex items-center justify-between"
        style={{ height: 64 }}
      >
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#E4572E",
            }}
          />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#121212",
              textTransform: "uppercase",
            }}
          >
            Joseph Chombo
          </span>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: active === item ? "#E4572E" : "#121212",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 0",
                position: "relative",
                transition: "color 0.2s ease",
              }}
            >
              {item}
              {active === item && (
                <span
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 1,
                    backgroundColor: "#E4572E",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:joseph@example.com"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#F2EEE6",
            backgroundColor: "#121212",
            padding: "8px 20px",
            borderRadius: 12,
            textDecoration: "none",
            transition: "opacity 0.2s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
