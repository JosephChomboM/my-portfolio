import { DataConnectionsMotif } from "./DataConnectionsMotif";

const RETRIEVAL_CONCEPTS = [
  {
    label: "BM25",
    description: "Sparse keyword retrieval for precise term matching. Strong baseline for factual, rule-heavy queries.",
    color: "#E4572E",
  },
  {
    label: "Dense Embeddings",
    description: "Semantic vector search using Azure OpenAI embeddings. Captures meaning beyond keyword overlap.",
    color: "#4D6A72",
  },
  {
    label: "Hybrid Fusion",
    description: "Reciprocal Rank Fusion combines BM25 and dense results. Best of both retrieval paradigms.",
    color: "#D1985A",
  },
  {
    label: "Reranking",
    description: "Cross-encoder reranker scores candidate pairs for relevance. Precision over recall.",
    color: "#7A8F72",
  },
  {
    label: "Evidence Assembly",
    description: "Retrieved chunks are structured into coherent evidence packages before generation.",
    color: "#D9A07A",
  },
  {
    label: "Evaluation",
    description: "MRR@K, NDCG, precision@K metrics close the feedback loop. Retrieval quality is measurable.",
    color: "#252739",
  },
];

export function DataRetrieval() {
  return (
    <section
      style={{
        backgroundColor: "#252739",
        paddingTop: 120,
        paddingBottom: 120,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Data connections background */}
      <div
        className="absolute left-0 top-1/2 pointer-events-none select-none"
        style={{ transform: "translateY(-50%)", width: "40%", opacity: 0.12 }}
      >
        <DataConnectionsMotif className="w-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: header */}
          <div className="lg:col-span-4">
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
              05 / Retrieval & Data
            </div>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(24px, 3.5vw, 44px)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#F2EEE6",
                marginBottom: 20,
              }}
            >
              Retrieval is the foundation of trustworthy AI.
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                lineHeight: 1.8,
                color: "#F2EEE6",
                opacity: 0.45,
                marginBottom: 36,
              }}
            >
              Evidence quality determines generation quality. I build retrieval systems that are measurable, tunable, and production-ready.
            </p>

            {/* Metrics */}
            <div className="flex flex-col gap-4">
              {[
                { metric: "MRR@10", gain: "+38%", label: "Retrieval precision improvement" },
                { metric: "Latency", gain: "&lt;200ms", label: "P95 retrieval latency" },
                { metric: "Coverage", gain: "97%", label: "Relevant documents retrieved" },
              ].map((m) => (
                <div
                  key={m.metric}
                  style={{
                    borderLeft: "2px solid #E4572E",
                    paddingLeft: 16,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "#F2EEE6",
                      lineHeight: 1.2,
                    }}
                    dangerouslySetInnerHTML={{ __html: m.gain }}
                  />
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#F2EEE6",
                      opacity: 0.35,
                    }}
                  >
                    {m.metric} — {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: concept grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {RETRIEVAL_CONCEPTS.map((c, i) => (
                <div
                  key={c.label}
                  style={{
                    border: "1px solid rgba(242,238,230,0.08)",
                    padding: "28px 24px",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(242,238,230,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
                  }}
                >
                  <div className="flex items-center gap-2 mb-10">
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: c.color,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#F2EEE6",
                        opacity: 0.4,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#F2EEE6",
                      marginBottom: 8,
                    }}
                  >
                    {c.label}
                  </div>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      lineHeight: 1.7,
                      color: "#F2EEE6",
                      opacity: 0.4,
                    }}
                  >
                    {c.description}
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
