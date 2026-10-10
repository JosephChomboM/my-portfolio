// Every fact a visitor sees about Joseph lives here.
// Values marked PENDING are placeholders. Replace them before the site goes public.

export const profile = {
  name: "Joseph Chombo",
  roles: ["ML Engineer", "AI Engineer", "MLOps Engineer"],
  intro:
    "I deploy, evaluate and monitor machine learning in production, so models keep working long after launch.",
  now: { role: "AI Engineer", org: "[Consumer-finance company]", domain: "Consumer finance" }, // PENDING: employer name
  before: {
    role: "Model validation & automation",
    org: "[Bank]", // PENDING: employer name
    domain: "Banking · IFRS 9",
  },
  education: {
    degree: "Systems Engineering",
    school: "[University]", // PENDING: university name
    graduation: "Dec 2026",
  },
  location: "Peru",
  workStyle: "Remote · overlaps US working hours (UTC−5)",
  stack: [
    { group: "Languages", items: ["Python", "SQL"] },
    { group: "Cloud & data", items: ["Azure", "Databricks"] },
    { group: "Serving", items: ["FastAPI", "Docker"] },
    { group: "Retrieval", items: ["pgvector", "RAG"] },
    { group: "Operations", items: ["CI/CD", "Model monitoring"] },
  ],
  // Empty strings render as clearly marked, non-clickable placeholders.
  links: {
    email: "", // PENDING, e.g. "joseph@domain.com"
    linkedin: "", // PENDING, e.g. "https://www.linkedin.com/in/handle"
    github: "", // PENDING, e.g. "https://github.com/handle"
    cv: "", // PENDING: add public/cv.pdf and set to "cv.pdf"
  },
} as const;

export const emailHref = profile.links.email ? `mailto:${profile.links.email}` : "";
export const cvHref = profile.links.cv ? `${import.meta.env.BASE_URL}${profile.links.cv}` : "";
