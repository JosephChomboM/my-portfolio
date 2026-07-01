import { FlowMotif } from "./FlowMotif";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#121212",
        paddingTop: 80,
        paddingBottom: 48,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Flow motif background */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{ opacity: 0.2 }}
      >
        <FlowMotif className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Top row */}
        <div
          className="flex items-start justify-between flex-wrap gap-10 mb-16"
          style={{ borderBottom: "1px solid rgba(242,238,230,0.1)", paddingBottom: 48 }}
        >
          {/* Left: name + phrase */}
          <div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#F2EEE6",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Joseph Chombo
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                lineHeight: 1.6,
                color: "#F2EEE6",
                opacity: 0.35,
                maxWidth: 360,
              }}
            >
              Building intelligent systems that respect context.
            </div>
          </div>

          {/* Right: links */}
          <div className="flex gap-10 flex-wrap">
            {[
              { label: "Navigation", links: ["Work", "Systems", "Writing", "About"] },
              {
                label: "Connect",
                links: ["LinkedIn", "GitHub", "Email"],
              },
            ].map((group) => (
              <div key={group.label}>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#F2EEE6",
                    opacity: 0.3,
                    marginBottom: 14,
                  }}
                >
                  {group.label}
                </div>
                <div className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        color: "#F2EEE6",
                        opacity: 0.55,
                        textDecoration: "none",
                        transition: "opacity 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#F2EEE6",
              opacity: 0.2,
            }}
          >
            AI / ML Engineering Portfolio
          </div>
          <div className="flex items-center gap-2">
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                backgroundColor: "#E4572E",
                opacity: 0.6,
              }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                color: "#F2EEE6",
                opacity: 0.2,
              }}
            >
              © 2026 Joseph Chombo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
