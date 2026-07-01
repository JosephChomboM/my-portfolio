const STACK_CATEGORIES = [
  {
    category: "Languages",
    color: "#E4572E",
    items: ["Python", "SQL", "PySpark", "Bash"],
  },
  {
    category: "AI / ML",
    color: "#7A8F72",
    items: ["scikit-learn", "Azure OpenAI", "RAG", "Embeddings", "FAISS", "BM25"],
  },
  {
    category: "MLOps",
    color: "#D1985A",
    items: ["MLflow", "Databricks", "Docker", "CI/CD", "Delta Lake"],
  },
  {
    category: "Backend",
    color: "#4D6A72",
    items: ["FastAPI", "PostgreSQL", "REST APIs", "Azure"],
  },
  {
    category: "Evaluation",
    color: "#D9A07A",
    items: ["Retrieval Metrics", "MRR@K", "NDCG", "Model Monitoring", "Data Validation"],
  },
];

export function TechStack() {
  return (
    <section
      style={{
        backgroundColor: "#F2EEE6",
        paddingTop: 120,
        paddingBottom: 120,
        borderTop: "1px solid #D8D0C4",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E4572E",
              marginBottom: 14,
            }}
          >
            06 / Technical Stack
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#121212",
              maxWidth: 480,
            }}
          >
            Tools chosen for production discipline, not trend.
          </h2>
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: "#D8D0C4", marginBottom: 48 }} />

        {/* Stack grid */}
        <div className="flex flex-col gap-0">
          {STACK_CATEGORIES.map((cat, i) => (
            <div
              key={cat.category}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: 32,
                alignItems: "start",
                paddingTop: 28,
                paddingBottom: 28,
                borderBottom: i < STACK_CATEGORIES.length - 1 ? "1px solid #D8D0C4" : "none",
              }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: cat.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#121212",
                    opacity: 0.55,
                  }}
                >
                  {cat.category}
                </span>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      fontWeight: 400,
                      color: "#121212",
                      border: "1px solid #D8D0C4",
                      padding: "5px 14px",
                      borderRadius: 6,
                      letterSpacing: "0.01em",
                      transition: "border-color 0.2s ease, color 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.borderColor = cat.color;
                      (e.currentTarget as HTMLSpanElement).style.color = cat.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.borderColor = "#D8D0C4";
                      (e.currentTarget as HTMLSpanElement).style.color = "#121212";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
