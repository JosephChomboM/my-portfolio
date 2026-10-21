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
    status: "published",
    title: "MLOps Pipeline for Churn Prediction",
    summary:
      "A churn model built like a regulated model and run like a production system: validated inputs, calibrated probabilities, priced decisions, drift and delayed-label monitoring, and retraining that ships only when the challenger is significantly better than the champion.",
    domain: "Personal project · MLOps",
    role: "Sole engineer",
    timeframe: "2026",
    stack: ["Python", "scikit-learn", "MLflow", "Pandera", "SHAP", "FastAPI", "Docker", "GitHub Actions"],
    repo: "https://github.com/JosephChomboM/mlops-pipeline-churn",
    sections: {
      problem:
        "Churn models are easy to train once and hard to keep right. The customer base shifts, a churn label only exists a month after the prediction, a model that ranks better can still make worse retention decisions, and a retrained model that looks better on one holdout number may just be noise. This pipeline covers the full lifecycle, from validated data to a model card, and closes the loop in production with statistical guardrails at every decision point.",
      constraints: [
        "IBM Telco: 7,043 customers, 26.5% churn. Imbalanced, so Gini, KS and recall count for more than accuracy. The data is a static snapshot, so six months of production are simulated with the real labels.",
        "Retention teams act on monthly lists: batch scoring is the primary path and the API is secondary. Auditability matters more than latency.",
        "Labels arrive 30 days late, so realized performance can only be measured on cohorts whose label window has closed.",
        "Runs anywhere: a slim serving image and a pipeline image. CI runs lint, tests and the full simulation on every push, CD publishes both images to GHCR, and a scheduled workflow retrains monthly.",
      ],
      architecture: {
        caption:
          "Every batch is validated before scoring. Calibrated candidates pass absolute gates (Gini, recall, overfit gap, calibration error, a per-segment calibration z-test), then must beat the champion's business value in 95% of paired bootstrap resamples of a frozen holdout. Drift and matured-label performance feed the retraining trigger, which closes the loop.",
        stages: [
          "Data validation (Pandera)",
          "Training and calibration (MLflow)",
          "Champion vs challenger",
          "Batch scoring and FastAPI",
          "Drift and delayed-label monitoring",
        ],
        topology: { gate: 2, sidecar: 4 },
      },
      decisions: [
        {
          choice: "Significance-tested promotion",
          over: "Comparing two holdout totals",
          because:
            "The first version promoted a challenger whenever it earned more on the holdout. A paired bootstrap showed those wins held up in only 62-63% of resamples, so it was promoting on noise. Now a challenger needs 95%. Under that rule three drift-triggered challengers were rejected, and they turned out to be genuinely worse, by up to $990 on the holdout.",
        },
        {
          choice: "Calibrated probabilities with an expected-value rule",
          over: "A fixed 0.5 threshold",
          because:
            "Class weighting inflated logistic-regression probabilities (ECE 0.135); Platt scaling on out-of-fold scores brought it to 0.04. With real probabilities, contacting a customer only when p × acceptance × CLV exceeds the offer cost earned $62.7k on the holdout against $48.2k at 0.5, and it stays profitable under every cost assumption tested because it contacts fewer people when offers get expensive.",
        },
        {
          choice: "Testing segment calibration",
          over: "Correcting it",
          because:
            "The model looked slightly low on brand-new customers, so I tried per-segment calibration. It made the worst segment worse for all three models, because the gaps were noise (z ≈ 1). The pipeline now runs a z-test per segment and fails a model only on a real bias (|z| > 3).",
        },
        {
          choice: "A bootstrap interval on realized Gini",
          over: "Point-estimate alerts",
          because:
            "Monthly cohorts of 250 customers swing about ±0.1 Gini from sampling alone, so the retraining trigger fires only when the whole 95% interval falls below the gate.",
        },
      ],
      evaluation: {
        evaluated:
          "Frozen, hashed train/test/holdout split and an automatic data quality report. Three calibrated candidates per run, tracked in MLflow, against gates of Gini ≥ 0.60, recall ≥ 0.60, a train-test gap of at most 10 Gini points, ECE ≤ 0.05 and no segment more than 3 standard errors off. The champion gets SHAP, a ±1σ stress test and a performance breakdown by driver in an auto-generated model card. Five notebooks document the analysis behind each choice: a two-column business rule already reaches 0.62 Gini against the model's 0.74, and the top 30% of the ranked list holds 70% of churners.",
        monitored:
          "Pandera validation on every batch: a corrupted delivery, with cents instead of dollars and a renamed category, was quarantined and never scored. Feature and prediction drift are measured with PSI, and realized Gini and predicted vs actual churn only on matured cohorts. Over six simulated months drift fired three times and all three retrained challengers were rejected: the shift changed who the customers were, not how churn works, and the original model kept tracking the real churn rate (43% predicted vs 41% actual). Drift is a reason to look, not a reason to replace the model.",
      },
      hindsight:
        "I'd add a concept-drift scenario, where the churn mechanism itself changes, because that is where retraining should pay off and the pipeline has only been tested on covariate shift. The 1,409-customer holdout can't detect improvements under about $1k, so a larger or periodically refreshed holdout would make promotion more sensitive. And I'd move the orchestrator onto Prefect or Airflow, with scheduled retraining running against persistent storage instead of replaying the simulation.",
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
