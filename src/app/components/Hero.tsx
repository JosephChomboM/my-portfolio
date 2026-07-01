import { FlowMotif } from "./FlowMotif";

export function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#F2EEE6",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Flow motif background */}
      <FlowMotif
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* Content */}
      <div
        className="relative max-w-7xl mx-auto px-8 flex flex-col justify-center"
        style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80 }}
      >
        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#E4572E",
            }}
          />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E4572E",
            }}
          >
            AI / ML Engineering Portfolio
          </span>
        </div>

        {/* Name */}
        <div className="mb-4">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#121212",
              opacity: 0.5,
            }}
          >
            Joseph Chombo
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(38px, 6vw, 80px)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#121212",
            maxWidth: 900,
            marginBottom: 28,
          }}
        >
          Building intelligent systems with context, evaluation, and deployment discipline.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 17,
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#121212",
            opacity: 0.65,
            maxWidth: 560,
            marginBottom: 48,
          }}
        >
          I work across machine learning, RAG, MLOps, Databricks, Azure OpenAI, and production-oriented AI systems.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#work"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#F2EEE6",
              backgroundColor: "#121212",
              padding: "14px 32px",
              borderRadius: 12,
              textDecoration: "none",
              display: "inline-block",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E4572E")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#121212")}
          >
            View Work
          </a>
          <a
            href="#about"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#121212",
              backgroundColor: "transparent",
              padding: "13px 32px",
              borderRadius: 12,
              textDecoration: "none",
              display: "inline-block",
              border: "1px solid #121212",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(18,18,18,0.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            About Me
          </a>
        </div>

        {/* Bottom metadata row */}
        <div
          className="flex items-center gap-8 mt-auto pt-16 flex-wrap"
          style={{ borderTop: "1px solid #D8D0C4", marginTop: 80 }}
        >
          {[
            { label: "Focus", value: "AI / ML Engineering" },
            { label: "Status", value: "Open to Roles" },
            { label: "Location", value: "London, UK" },
          ].map((item) => (
            <div key={item.label}>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#E4572E",
                  marginBottom: 4,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#121212",
                  opacity: 0.75,
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right-side section number */}
      <div
        style={{
          position: "absolute",
          right: 32,
          bottom: 40,
          writingMode: "vertical-rl",
          fontFamily: "Inter, sans-serif",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#121212",
          opacity: 0.25,
        }}
      >
        01 / Flow Movement
      </div>
    </section>
  );
}
