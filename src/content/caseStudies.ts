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
    status: "published",
    title: "QnA End-to-End Service",
    summary: "A retrieval service from corpus ingestion to LLM answers behind FastAPI, with its evaluation tracked in MLflow and deployed through CI/CD.",
    domain: "Personal project · RAG",
    role: "Sole engineer",
    timeframe: "2026",
    stack: ["FastAPI", "Docker", "Kubernetes", "MLflow", "GitHub Actions"],
    repo: "https://github.com/JosephChomboM/qna-end-to-end-service",
    sections: {
      problem: "An end-to-end question-answering service: ingest a corpus, embed it, search it, and generate grounded answers through an API that can be evaluated and redeployed safely. It is built to show one problem pulling in each layer of a modern AI system only when it demands it, and to keep three things apart that are easy to confuse: a pass/fail eval gate in CI, offline run comparison in MLflow, and live request monitoring in Langfuse.",
      constraints: [
        "A synthetic knowledge base for a fictional fintech: 15 markdown documents, about 2,700 words, 30 chunks. I own every fact, so the eval has unambiguous ground truth and there is nothing to license. The corpus is static: an update means a full re-ingest that rebuilds the table.",
        "Answers must come only from the retrieved context. When the context does not contain the answer, the model is told to say it does not have that information instead of guessing.",
        "Every question spends two paid Azure OpenAI calls, one embedding and one chat completion, so a public endpoint needs per-IP and global rate limits, and the ingest endpoint, which drops and rebuilds the table, needs an admin token.",
        "It runs locally on Docker Compose and on kind or minikube. It is not hosted publicly and no latency target was set; Langfuse records per-request latency instead.",
      ],
      architecture: {
        caption: "Documents are ingested and embedded, retrieved by vector search, and answered by an LLM behind a FastAPI backend.",
        stages: ["Corpus ingestion", "Embeddings", "Vector search", "LLM answer", "FastAPI service"],
        topology: { joinAt: 2 },
      },
      decisions: [
        {
          choice: "A frozen eval set over a synthetic corpus",
          over: "Real documents and a question set that evolves",
          because:
            "With a corpus I wrote, every expected answer and its source document are known, so the gate measures the pipeline and not my labelling. The 20 questions are frozen on purpose: if they drift, MLflow runs stop being comparable and the CI gate turns into noise. The cost is an easy setting, which I come back to below.",
        },
        {
          choice: "A thin hand-written pipeline on PostgreSQL and pgvector",
          over: "A RAG framework or a managed vector database",
          because:
            "Ingest, chunk, embed, store, retrieve and answer fit in one module of plain Python and SQL, so each step stays visible and testable. At 30 chunks an exact cosine scan returns instantly, so there is no index to tune. The price is that nothing here would scale past a small corpus without adding one.",
        },
        {
          choice: "Three tools for three lifecycle stages",
          over: "One tool for all validation",
          because:
            "The same metrics, faithfulness and relevance, answer different questions at different times. The pytest eval gates a merge, MLflow compares chunk size, top-k and prompt across runs on the same frozen set, and Langfuse watches the running service request by request. Merging them would blur what each result means.",
        },
        {
          choice: "Azure OpenAI for generation and embeddings",
          over: "Gemini's free tier",
          because:
            "I tried Gemini through its OpenAI-compatible endpoint to run the demo for free. The model I started with had been retired for new users, and the replacement allowed 5 chat requests per minute. One eval run makes about 40 chat calls, so it would take close to ten minutes and could not serve as a CI gate. I kept Azure and capped the public endpoint with rate limits instead.",
        },
      ],
      evaluation: {
        evaluated:
          "20 frozen question and answer pairs, each with its gold source document, run through the real pipeline. Three scores: retrieval hit rate (did the gold document appear in the retrieved chunks, deterministic), faithfulness (is every claim supported by the retrieved context, LLM judge) and relevance (does the answer match the reference, LLM judge). Each must reach 0.8, and the same pytest is the merge gate in CI. MLflow compared three configurations on that set: 800-character chunks with top-4, 400-character chunks with top-4, and top-8 with a stricter prompt. All three scored 1.0 on all three metrics.",
        monitored:
          "Langfuse traces every /query: the embedding and chat calls with token usage, cost and latency, plus the retrieved documents and the minimum and maximum vector distance per request. GitHub Actions lints and tests on every push, and on main builds the image and pushes it to GHCR. The Kubernetes manifests run the same image with the keys held in a Secret.",
      },
      hindsight:
        "The eval is saturated. Three different configurations all scored 1.0, so it cannot tell a better setup from a worse one, and the 0.8 gate would only catch a broken pipeline. I'd add harder questions, ones that span several documents and ones with no answer in the corpus, and revise the frozen file once, deliberately, so later runs stay comparable. The judge is also the same model that wrote the answers, which favors it; I'd judge with a different model. And I'd lock down the ingest endpoint from the first version: it was open until I started planning a public demo.",
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
