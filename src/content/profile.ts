// Every fact a visitor sees about Joseph lives here. Source: Joseph's CVs (Oct 2026).

export const profile = {
  name: "Joseph Chombo",
  fullName: "Joseph Chombo Morocho",
  roles: ["ML Engineer", "AI Engineer", "MLOps Engineer"],
  intro:
    "I deploy, evaluate and monitor machine learning in production, so models keep working long after launch.",
  now: { role: "AI Engineer", org: "Santander Consumer Peru", via: "via Experis / ManpowerGroup", domain: "Consumer finance" },
  before: { role: "ML & AI Engineer Intern", org: "Banco de Crédito del Perú (BCP)", domain: "Banking" },
  education: {
    degree: "B.S. Information Systems Engineering",
    school: "Universidad San Ignacio de Loyola (USIL)",
    graduation: "Nov 2026",
    note: "Top 20% of class",
  },
  // newest first; drives the Path section
  experience: [
    {
      when: "Sep 2026 – now",
      role: "AI Engineer",
      org: "Santander Consumer Peru",
      detail:
        "Backend APIs that connect internal databases and web apps to AI services, an LLM assistant on WhatsApp that answers sales KPI questions in plain language with automatic charts, RAG flows for grounded, traceable answers, and internal agents in Copilot Studio.",
    },
    {
      when: "Jan 2025 – Aug 2026",
      role: "ML & AI Engineer Intern, Model Risk Management",
      org: "Banco de Crédito del Perú (BCP)",
      detail:
        "Automated model validation on Databricks and PySpark, cutting manual execution by about 60%. MLflow tracking and versioning, Feature Store components, and monitoring for discrimination, stability and calibration (Gini, ROC-AUC, PSI). Built an AI model-validation assistant that cut validation time-to-market by about 70%.",
    },
    {
      when: "Aug 2023 – Jan 2024",
      role: "Full Stack Developer",
      org: "Freelance",
      detail: "An e-commerce platform in C#, .NET MVC, WebAssembly and SQL Server: products, users, inventory and purchase flows.",
    },
  ],
  certifications: [
    "Microsoft Certified: SQL AI Developer Associate (DP-800)",
    "AWS Fundamentals Specialization",
    "IBM Machine Learning Specialization",
    "Inferential Statistics with Python (U. Michigan)",
  ],
  languages: "English, professional · Spanish, native",
  location: "Lima, Peru",
  workStyle: "Remote · overlaps US working hours (UTC−5)",
  // Broad, recognizable skills a recruiter scans for; niche libraries stay in each case study's stack
  stack: [
    { group: "Languages & data", items: ["Python", "SQL", "PySpark", "PostgreSQL"] },
    { group: "Machine learning", items: ["scikit-learn", "TensorFlow", "Pandas", "Gradient boosting"] },
    { group: "Generative AI", items: ["Azure OpenAI", "RAG", "Vector search", "AI agents"] },
    { group: "MLOps & CI/CD", items: ["MLflow", "Databricks", "Model monitoring", "GitHub Actions"] },
    { group: "Backend & cloud", items: ["FastAPI", "Docker", "Kubernetes", "Azure & AWS"] },
  ],
  // Empty strings render as clearly marked, non-clickable placeholders.
  links: {
    email: "josephalexander0704@gmail.com",
    linkedin: "https://www.linkedin.com/in/josephchombomorocho",
    github: "https://github.com/JosephChomboM",
    cv: "Joseph_Chombo_CV.pdf",
  },
} as const;

export const emailHref = profile.links.email ? `mailto:${profile.links.email}` : "";
export const cvHref = profile.links.cv ? `${import.meta.env.BASE_URL}${profile.links.cv}` : "";
