export function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#F2EEE6",
        paddingTop: 120,
        paddingBottom: 120,
        borderTop: "1px solid #D8D0C4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Sparse pattern background hint */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 320,
          height: 320,
          opacity: 0.04,
          backgroundImage: `radial-gradient(circle, #121212 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-5">
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
              07 / About
            </div>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#121212",
                marginBottom: 24,
              }}
            >
              Joseph Chombo
            </h2>

            {/* Accent bar */}
            <div
              style={{
                width: 48,
                height: 3,
                backgroundColor: "#E4572E",
                borderRadius: 2,
                marginBottom: 28,
              }}
            />

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.8,
                color: "#121212",
                opacity: 0.65,
                marginBottom: 20,
              }}
            >
              I'm an AI / ML engineering intern working at the intersection of machine learning, retrieval systems, and production deployment. My work focuses on building intelligent systems that are measurable, auditable, and context-aware.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.8,
                color: "#121212",
                opacity: 0.65,
                marginBottom: 32,
              }}
            >
              I think in systems. Every model I deploy has retrieval, evaluation, and human review built in — not added after the fact.
            </p>

            {/* Contact */}
            <div className="flex gap-4 flex-wrap">
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
                  padding: "12px 24px",
                  borderRadius: 12,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E4572E")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#121212")}
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#121212",
                  border: "1px solid #D8D0C4",
                  padding: "11px 24px",
                  borderRadius: 12,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right column — focus areas */}
          <div className="lg:col-span-7 lg:pl-8">
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#121212",
                opacity: 0.4,
                marginBottom: 20,
              }}
            >
              Technical Focus
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {[
                {
                  title: "Machine Learning",
                  detail: "Classification, regression, model selection, hyperparameter tuning, and validation.",
                  color: "#E4572E",
                },
                {
                  title: "AI Engineering",
                  detail: "RAG systems, LLM integration, prompt engineering, structured generation, and evaluation.",
                  color: "#7A8F72",
                },
                {
                  title: "MLOps",
                  detail: "MLflow, Databricks, Docker, CI/CD pipelines, model versioning, and monitoring.",
                  color: "#D1985A",
                },
                {
                  title: "Model Validation",
                  detail: "Evidence-based review, regulatory compliance, model risk, and automated checking.",
                  color: "#4D6A72",
                },
                {
                  title: "Retrieval Systems",
                  detail: "Hybrid retrieval, embedding pipelines, reranking, and retrieval evaluation metrics.",
                  color: "#D9A07A",
                },
                {
                  title: "Data Engineering",
                  detail: "PySpark, Delta Lake, data quality validation, schema enforcement, and pipeline observability.",
                  color: "#252739",
                },
              ].map((area, i) => (
                <div
                  key={area.title}
                  style={{
                    borderTop: "1px solid #D8D0C4",
                    borderRight: i % 2 === 0 ? "1px solid #D8D0C4" : "none",
                    padding: "24px 20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: area.color,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#121212",
                      }}
                    >
                      {area.title}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      lineHeight: 1.65,
                      color: "#121212",
                      opacity: 0.5,
                    }}
                  >
                    {area.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
