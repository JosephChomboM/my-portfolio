import { BranchingMotif } from "./BranchingMotif";

export function Architecture() {
  return (
    <section
      style={{
        backgroundColor: "#F2EEE6",
        paddingTop: 120,
        paddingBottom: 120,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-start">
          <div>
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
              04 / Systems Architecture
            </div>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#121212",
                marginBottom: 20,
              }}
            >
              AI engineering is a system, not a single model call.
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.75,
                color: "#121212",
                opacity: 0.6,
                marginBottom: 32,
              }}
            >
              Every production AI system I build is designed as a graph: inputs, retrieval, rules, ranking, generation, evaluation, and human oversight. The structure shows that every decision point is intentional.
            </p>

            {/* System steps */}
            <div className="flex flex-col gap-3">
              {[
                { step: "01", label: "Inputs", detail: "Documents, rules, user context, metadata" },
                { step: "02", label: "Retrieval", detail: "Hybrid BM25 + dense embeddings" },
                { step: "03", label: "Ranking", detail: "Cross-encoder reranking, evidence scoring" },
                { step: "04", label: "LLM Generation", detail: "Structured prompt assembly, constrained output" },
                { step: "05", label: "Evaluation", detail: "Automated checks, hallucination detection" },
                { step: "06", label: "Human Review", detail: "Expert validation gate, feedback loop" },
                { step: "07", label: "Output", detail: "Structured, auditable, production-ready" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      color: "#E4572E",
                      minWidth: 24,
                      paddingTop: 2,
                    }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#121212",
                        marginRight: 8,
                      }}
                    >
                      {s.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        color: "#121212",
                        opacity: 0.45,
                      }}
                    >
                      — {s.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Branching motif */}
          <div className="flex items-center justify-center">
            <div
              style={{
                width: "100%",
                maxWidth: 580,
                padding: 32,
                backgroundColor: "rgba(18,18,18,0.03)",
                border: "1px solid #D8D0C4",
                borderRadius: 24,
              }}
            >
              <BranchingMotif className="w-full" />
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#121212",
                  opacity: 0.3,
                  textAlign: "center",
                  marginTop: 16,
                }}
              >
                RAG System Architecture — Branching Flow
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
