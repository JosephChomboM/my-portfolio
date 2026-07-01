import { OrganicIntelligenceMotif } from "./OrganicIntelligenceMotif";

const PRINCIPLES = [
  {
    label: "Retrieval",
    description: "High-quality retrieval is the foundation. BM25, dense embeddings, and hybrid fusion for precision.",
    color: "#E4572E",
  },
  {
    label: "Ranking",
    description: "Reranking and scoring ensure the most relevant evidence reaches the generation step.",
    color: "#D1985A",
  },
  {
    label: "Evaluation",
    description: "Every system needs evaluation. Retrieval metrics, generation quality, and human review loops.",
    color: "#7A8F72",
  },
  {
    label: "Observability",
    description: "Production AI requires monitoring. Drift detection, score tracking, and alert systems.",
    color: "#4D6A72",
  },
  {
    label: "Context",
    description: "Context assembly matters. Documents, rules, metadata, and memory shape generation quality.",
    color: "#D9A07A",
  },
  {
    label: "Human Review",
    description: "AI augments expert judgment. Human review gates protect against silent model failures.",
    color: "#252739",
  },
];

export function AIEngineering() {
  return (
    <section
      id="systems"
      style={{
        backgroundColor: "#121212",
        paddingTop: 120,
        paddingBottom: 120,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Organic Intelligence SVG background */}
      <div
        className="absolute right-0 top-1/2 pointer-events-none select-none"
        style={{ transform: "translateY(-50%)", width: "45%", opacity: 0.18 }}
      >
        <OrganicIntelligenceMotif className="w-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Section header */}
        <div className="mb-16">
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E4572E",
              marginBottom: 16,
            }}
          >
            03 / AI Engineering Approach
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#F2EEE6",
              maxWidth: 640,
              marginBottom: 20,
            }}
          >
            AI systems are not just prompts.
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 17,
              lineHeight: 1.75,
              color: "#F2EEE6",
              opacity: 0.5,
              maxWidth: 520,
            }}
          >
            They need context, retrieval, ranking, evaluation, observability, and human review. This is how I build them.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: "rgba(242,238,230,0.12)", marginBottom: 56 }} />

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.label}
              style={{
                borderTop: "1px solid rgba(242,238,230,0.1)",
                borderRight: i % 3 !== 2 ? "1px solid rgba(242,238,230,0.1)" : "none",
                padding: "32px 28px",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: p.color,
                  marginBottom: 16,
                }}
              />
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#F2EEE6",
                  marginBottom: 10,
                  letterSpacing: "0.01em",
                }}
              >
                {p.label}
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "#F2EEE6",
                  opacity: 0.45,
                }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
