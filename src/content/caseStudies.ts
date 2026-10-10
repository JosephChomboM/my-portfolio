// Joseph's real projects. Facts come from his CVs; anything in [brackets] is still his to write.
// Bracketed text renders as a visible placeholder, so nothing unwritten passes as fact.

/**
 * The shape of a system, so each diagram shows its own architecture:
 * gate = a review/acceptance step (drawn as a diamond); sidecar = a stage that runs alongside the whole flow
 * (tracing, logging); joinAt = stages before it arrive on a second lane (an offline path) and merge there;
 * split = the last stage fans out into two outputs.
 */
export type Topology = { gate?: number; sidecar?: number; joinAt?: number; split?: boolean };

export type CaseStudy = {
  slug: string;
  status: "draft" | "published";
  title: string;
  summary: string;
  domain: string;
  role: string;
  timeframe: string;
  stack: string[];
  repo?: string;
  sections: {
    problem: string;
    constraints: string[];
    // stages (and topology) draw the line-art diagram on this system's row and case-study page
    architecture: { caption: string; stages: string[]; topology?: Topology };
    decisions: { choice: string; over: string; because: string }[];
    evaluation: { evaluated: string; monitored: string };
    hindsight: string;
  };
};

const TODO_DECISIONS = [
  { choice: "[What you chose]", over: "[The alternative]", because: "[The trade-off that decided it]" },
  { choice: "[What you chose]", over: "[The alternative]", because: "[The trade-off that decided it]" },
];
const TODO_HINDSIGHT = "[What you would do differently now, and why.]";

export const caseStudies: CaseStudy[] = [
  {
    slug: "softia",
    status: "draft",
    title: "SoftIA",
    summary:
      "A GenAI platform that automated model validation reports at BCP, cutting validation time-to-market by about 70%. Recognized two consecutive quarters for impact.",
    domain: "Banking · Model Risk Management",
    role: "ML Engineer Intern, BCP",
    timeframe: "2025 – 2026",
    stack: ["Python", "Azure AI Foundry", "OpenAI", "Databricks", "Streamlit"],
    sections: {
      problem:
        "Model validation in Model Risk Management ended in written conclusions and executive reports that were slow to produce. SoftIA automated the validation write-up, including conclusions and executive reports.",
      constraints: ["[Data access and confidentiality inside the bank]", "[Review requirements for validation reports]", "[Latency, cost or model limits]"],
      architecture: {
        caption: "Validation outputs from Databricks feed LLM generation in Azure AI Foundry; reports are reviewed in a Streamlit app, with every run, its tokens and its cost tracked.",
        stages: ["Validation data (Databricks)", "Prompting and generation (Azure OpenAI)", "Conclusions and reports", "Streamlit review app", "Run, token and cost tracking"],
        topology: { gate: 3, sidecar: 4 },
      },
      decisions: TODO_DECISIONS,
      evaluation: {
        evaluated: "[How report quality was checked before teams relied on it.]",
        monitored: "Execution traceability, token and cost tracking, and result logs for each run.",
      },
      hindsight: TODO_HINDSIGHT,
    },
  },
  {
    slug: "qna-end-to-end-service",
    status: "draft",
    title: "QnA End-to-End Service",
    summary: "A retrieval service from corpus ingestion to LLM answers behind FastAPI, with its evaluation tracked in MLflow and deployed through CI/CD.",
    domain: "Personal project · RAG",
    role: "Sole engineer",
    timeframe: "[Year]",
    stack: ["FastAPI", "Docker", "Kubernetes", "MLflow", "GitHub Actions"],
    repo: "https://github.com/JosephChomboM/qna-end-to-end-service",
    sections: {
      problem: "An end-to-end question-answering service: ingest a corpus, embed it, search it, and generate grounded answers through an API that can be evaluated and redeployed safely.",
      constraints: ["[Corpus size and update frequency]", "[Latency target for an answer]", "[Hosting and cost limits]"],
      architecture: {
        caption: "Documents are ingested and embedded, retrieved by vector search, and answered by an LLM behind a FastAPI backend.",
        stages: ["Corpus ingestion", "Embeddings", "Vector search", "LLM answer", "FastAPI service"],
        topology: { joinAt: 2 },
      },
      decisions: TODO_DECISIONS,
      evaluation: {
        evaluated: "An evaluation pipeline tracked in MLflow. [Which metrics and test set.]",
        monitored: "CI/CD with GitHub Actions; deployed with Docker and Kubernetes. [What is watched once it runs.]",
      },
      hindsight: TODO_HINDSIGHT,
    },
  },
  {
    slug: "churn-mlops-pipeline",
    status: "draft",
    title: "MLOps Pipeline for Churn Prediction",
    summary: "An end-to-end churn classifier: features, training, reproducible evaluation and versioning in MLflow, then batch inference and a containerized FastAPI serving API.",
    domain: "Personal project · MLOps",
    role: "Sole engineer",
    timeframe: "[Year]",
    stack: ["Python", "scikit-learn", "MLflow", "FastAPI", "Docker"],
    sections: {
      problem: "Churn models are easy to train once and hard to keep reproducible. This pipeline takes one from data preparation to a versioned, served model.",
      constraints: ["[Dataset and class balance]", "[Batch versus real-time needs]", "[Deployment target]"],
      architecture: {
        caption: "Data preparation and feature engineering feed tracked training runs; the selected model is versioned in MLflow and served in batch and through a FastAPI API.",
        stages: ["Data preparation", "Feature engineering", "Training and comparison", "MLflow registry", "Batch and API serving"],
        topology: { split: true },
      },
      decisions: TODO_DECISIONS,
      evaluation: {
        evaluated: "Reproducible evaluation with model, metric and hyperparameter comparison in MLflow.",
        monitored: "Input validation and logging in the FastAPI serving API. [Drift or performance checks.]",
      },
      hindsight: TODO_HINDSIGHT,
    },
  },
  {
    slug: "ai-operational-workflow-assistant",
    status: "draft",
    title: "AI Operational Workflow Assistant",
    summary: "A GenAI assistant that classifies and prioritizes operational requests with LLMs, business rules, retrieval and human-in-the-loop review, observed end to end in Langfuse.",
    domain: "Personal project · GenAI",
    role: "Sole engineer",
    timeframe: "[Year]",
    stack: ["FastAPI", "PostgreSQL", "pgvector", "Docker", "Langfuse", "n8n"],
    sections: {
      problem: "Operational requests arrive unsorted. The assistant classifies, prioritizes and analyses them, keeping a person in the loop for the final call.",
      constraints: ["[Volume and variety of requests]", "[What must stay under human review]", "[Cost per request]"],
      architecture: {
        caption: "Requests enter a FastAPI backend that manages workflow state and auditing, retrieve context from pgvector, are classified by an LLM with business rules, and go to human review.",
        stages: ["Request intake (FastAPI)", "Context retrieval (pgvector)", "LLM and business rules", "Human review", "Audit and Langfuse tracing"],
        topology: { gate: 3, sidecar: 4 },
      },
      decisions: TODO_DECISIONS,
      evaluation: {
        evaluated: "[How classification and prioritization quality were checked.]",
        monitored: "Prompts, responses, latency, cost and response quality monitored in Langfuse; results and executions logged.",
      },
      hindsight: TODO_HINDSIGHT,
    },
  },
];
