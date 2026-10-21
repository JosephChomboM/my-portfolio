# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two readers, in this order:

1. **Recruiters and talent screeners** skim first. They are often non-specialists checking role fit fast: current role, focus area, location, availability, and an easy way to make contact or get a CV.
2. **Engineers and hiring managers** read next, usually before or after a screening call. They dig into projects to judge technical depth, systems thinking, and whether the work holds up under scrutiny.

The site has to pass the 30-second skim and still reward the deeper technical read.

## Product Purpose

A personal portfolio for Joseph Chombo, an AI / ML engineer. It has one outcome: the visitor moves Joseph to the next interview round. Every section has to earn its place toward that. Success means a recruiter or engineer reaches out, downloads the CV, or follows through to LinkedIn or GitHub.

**Target roles:** MLOps Engineer (lead angle), AI Engineer, ML Engineer, at product-focused tech companies. Remote and international, with the US as the primary market.

## Positioning

MLOps comes first: production deployment, pipelines, evaluation, observability, reliability. AI and LLM work (RAG, agents) is framed as production systems, not demos. Joseph presents himself as a systems-minded AI engineer, not a prompt demo builder. The claim the work has to back up: production AI is a pipeline of inputs, retrieval, ranking, generation, evaluation, and human review, and he builds each stage to be measurable and auditable. The current copy puts it as "AI systems are not just prompts" and "each project is a system, not a demo."

## Operating Context

- Visitors usually arrive from a LinkedIn profile, a job application, or a recruiter's message, and switch between desktop and phone.
- Recruiters compare candidates side by side; engineers may read a project before an interview.
- Contact happens through email or LinkedIn; a CV PDF is expected as a takeaway.
- **Two reading layers.** Recruiters need who he is, which roles he fits, and why he's credible inside the first screen, with role titles and stack keywords easy to scan: Python, SQL, Azure, Databricks, FastAPI, Docker, pgvector, RAG, CI/CD, model monitoring. Engineers open each project into a case study laid out as problem → constraints → architecture diagram → key decisions and trade-offs → evaluation and monitoring → what he'd do differently → repo link. It should show judgment, not a list of tools.

## Capabilities and Constraints

- **Stack:** Vite 6 + React 18 + TypeScript. The site lives in `src/app/site/` with plain CSS in `src/styles/site.css`; all visitor-facing facts live in `src/content/profile.ts` and `src/content/caseStudies.ts`. Tailwind and the React plugin must stay in `vite.config.ts` (Figma Make export).
- **Deploy:** Vercel (Vite preset, `pnpm build` → `dist`), served from the root path `/`. GitHub Pages is retired.
- **Structure today:** one page (Hero, The short version, Systems, How I ship models, Path, Contact) plus a case-study route per system at `#/systems/<slug>`.

## Brand Commitments

- **Name:** Joseph Chombo (full name Joseph Chombo Morocho). A koi logo mark exists (`src/imports/logo.jpg`).
- **Role framing (from his CVs):** AI Engineer at Santander Consumer Peru (via Experis / ManpowerGroup), Sep 2026 to present. Before that: Machine Learning Engineer Intern, Model Risk Management, at Banco de Crédito del Perú (BCP), Jan 2025 to Aug 2026, which Joseph also describes as model validation and automation (IFRS 9). Earlier: freelance Full Stack Developer, Aug 2023 to Jan 2024. Open to offers.
- **Education:** B.S. Information Systems Engineering, Universidad San Ignacio de Loyola (USIL), expected Nov 2026, top 20% of class.
- **Credentials:** Microsoft Certified: SQL AI Developer Associate (DP-800); AWS Fundamentals; IBM Machine Learning. English professional (ICPNA certified), Spanish native.
- **Location:** Lima, Peru, working remotely; overlaps US working hours.
- **Employers:** named (Santander Consumer Peru, BCP).
- **Voice:** calm, precise, systems-oriented, and confident without hype. Short declarative statements. Not a neon AI-startup or SaaS tone.
- **Visual identity:** recorded in DESIGN.md (the still-water koi world). The older "Organic Intelligence" file in `src/imports/pasted_text/` is superseded.

## Evidence on Hand

- **Source of truth:** Joseph's CVs (MLOps, ML Engineer and AI Engineer versions, Oct 2026). The MLOps CV ships as `public/Joseph_Chombo_CV.pdf`; it includes his phone number.
- **Real metrics (publishable):** about 60% less manual execution from automated model validation at BCP; the AI Model-Validation Assistant cut validation time-to-market by about 70% and was recognized two consecutive quarters. Never invent others.
- **Real projects:** AI Model-Validation Assistant (built at BCP, formerly the internal "SoftIA"; its case study stays generic and names neither, and its write-up comes from the system's own architecture docs), QnA End-to-End Service (public repo github.com/JosephChomboM/qna-end-to-end-service), MLOps Pipeline for Churn Prediction, AI Operational Workflow Assistant. Problems, stacks, architecture stages and the evaluation/monitoring facts come from the CVs. **Still Joseph's to write:** constraints, key decisions and trade-offs, what he would do differently, project years, and the remaining evaluation details. These render as visible [bracketed] placeholders.
- **Links:** email josephalexander0704@gmail.com, linkedin.com/in/josephchombomorocho, github.com/JosephChomboM.
- **No testimonials, clients, press or writing exist.** Do not invent any.

## Product Principles

1. **Proof over adjectives.** Every claim about systems thinking should point to a concrete artifact: a project, a diagram, code, or a real metric. When the proof doesn't exist yet, say less rather than fake it.
2. **Skim first, depth on demand.** Role, focus, availability, and contact must land in seconds. Technical depth sits one step deeper for the engineers who want it.
3. **Show the system, not the model call.** Present work as pipelines with explicit retrieval, evaluation, and human-review stages. That is the positioning, so the presentation should make it visible.
4. **Honest about status.** Placeholder content is marked as placeholder until real material replaces it. Current role and availability stay accurate.
5. **Make contact effortless.** A clear route to email, LinkedIn, GitHub, and the CV from every part of the page.
