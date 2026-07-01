import { DataConnectionsMotif } from "./DataConnectionsMotif";

const PROJECTS = [
  {
    number: "01",
    title: "AI Reviewer for Model Validation",
    type: "AI Engineering / RAG / Databricks / Azure OpenAI",
    description:
      "A system that retrieves model context, control rules, and evidence before generating structured validation observations. Designed for production model risk review at scale.",
    stack: ["Python", "Databricks", "Azure OpenAI", "PySpark", "MLflow"],
    problem: "Manual model validation review is slow, inconsistent, and fails to scale across large model inventories.",
    system: "Retrieval pipeline, rules assembly, LLM generation, structured evaluation, human-review gate.",
    impact: "Reduced review time by 60%. Improved consistency across validation cycles.",
    motifColor: "#E4572E",
    accentBg: "rgba(228, 87, 46, 0.04)",
  },
  {
    number: "02",
    title: "MLOps Deployment Pipeline",
    type: "MLOps / Infrastructure / CI/CD",
    description:
      "A modular MLOps pipeline for training, evaluating, packaging, and deploying models to production with automated monitoring and rollback gates.",
    stack: ["Python", "MLflow", "Docker", "FastAPI", "Azure DevOps", "PostgreSQL"],
    problem: "Inconsistent deployment practices caused model drift and production failures without clear rollback procedures.",
    system: "Versioned training runs, drift detection, staged deployment, automated evaluation gates.",
    impact: "Zero unplanned outages post-deployment. Full traceability from training run to production prediction.",
    motifColor: "#7A8F72",
    accentBg: "rgba(122, 143, 114, 0.04)",
  },
  {
    number: "03",
    title: "RAG Evidence Retrieval System",
    type: "Retrieval / Embeddings / LLM / Evaluation",
    description:
      "A hybrid retrieval system combining BM25 keyword matching with dense embeddings and reranking to surface high-quality evidence for downstream generation.",
    stack: ["Python", "FAISS", "BM25", "Azure OpenAI", "FastAPI", "PostgreSQL"],
    problem: "Naive semantic search returned irrelevant results for precise technical queries. Low retrieval precision degraded generation quality.",
    system: "Hybrid retrieval, cosine similarity + BM25 fusion, cross-encoder reranking, retrieval evaluation metrics.",
    impact: "MRR@10 improved by 38%. Downstream generation accuracy increased significantly.",
    motifColor: "#4D6A72",
    accentBg: "rgba(77, 106, 114, 0.04)",
  },
  {
    number: "04",
    title: "Data Validation Framework",
    type: "Data Engineering / Quality / Observability",
    description:
      "A systematic framework for validating model input and output data pipelines, catching schema drift, distribution shifts, and data quality failures before they propagate.",
    stack: ["Python", "PySpark", "Great Expectations", "Databricks", "Delta Lake"],
    problem: "Silent data quality failures in upstream pipelines caused model score degradation that was only detected weeks later.",
    system: "Schema enforcement, statistical validation, anomaly detection, alerting, Databricks job orchestration.",
    impact: "Caught 12 production-threatening data issues in first month. Reduced incident response time by 80%.",
    motifColor: "#D9A07A",
    accentBg: "rgba(217, 160, 122, 0.04)",
  },
];

export function Work() {
  return (
    <section
      id="work"
      style={{
        backgroundColor: "#F2EEE6",
        paddingTop: 120,
        paddingBottom: 120,
        position: "relative",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="flex items-start justify-between mb-16 flex-wrap gap-6">
          <div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#E4572E",
                marginBottom: 12,
              }}
            >
              02 / Selected Work
            </div>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#121212",
                maxWidth: 480,
              }}
            >
              Projects built at the intersection of ML and production systems.
            </h2>
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              lineHeight: 1.75,
              color: "#121212",
              opacity: 0.55,
              maxWidth: 320,
              marginTop: 8,
            }}
          >
            Each project is a system, not a demo. Built with retrieval, evaluation, and deployment in mind.
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: "#D8D0C4", marginBottom: 48 }} />

        {/* Project list */}
        <div className="flex flex-col gap-0">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.number} project={project} last={i === PROJECTS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, last }: { project: typeof PROJECTS[0]; last: boolean }) {
  return (
    <div
      style={{
        borderBottom: last ? "none" : "1px solid #D8D0C4",
        paddingTop: 40,
        paddingBottom: 40,
        cursor: "default",
        transition: "background-color 0.2s ease",
      }}
      className="group"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = project.accentBg;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start px-0">
        {/* Number */}
        <div className="lg:col-span-1">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: project.motifColor,
              opacity: 0.8,
            }}
          >
            {project.number}
          </span>
        </div>

        {/* Title + Type */}
        <div className="lg:col-span-4">
          <h3
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 20,
              fontWeight: 600,
              lineHeight: 1.3,
              color: "#121212",
              marginBottom: 6,
            }}
          >
            {project.title}
          </h3>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#121212",
              opacity: 0.4,
            }}
          >
            {project.type}
          </div>
        </div>

        {/* Description */}
        <div className="lg:col-span-4">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              lineHeight: 1.7,
              color: "#121212",
              opacity: 0.65,
              marginBottom: 16,
            }}
          >
            {project.description}
          </p>

          {/* Metadata */}
          <div className="flex flex-col gap-2">
            {[
              { label: "Problem", value: project.problem },
              { label: "Impact", value: project.impact },
            ].map((m) => (
              <div key={m.label} className="flex gap-3">
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#E4572E",
                    minWidth: 56,
                    paddingTop: 2,
                  }}
                >
                  {m.label}
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "#121212",
                    opacity: 0.6,
                  }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="lg:col-span-3">
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#121212",
              opacity: 0.4,
              marginBottom: 10,
            }}
          >
            Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#121212",
                  backgroundColor: "transparent",
                  border: "1px solid #D8D0C4",
                  padding: "3px 10px",
                  borderRadius: 6,
                  letterSpacing: "0.02em",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
