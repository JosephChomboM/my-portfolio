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

- **Stack:** Vite 6 + React 18 + TypeScript, Tailwind 4 installed (components mostly use inline styles), shadcn/Radix UI kit in `src/app/components/ui/`, `motion` available. Exported from a Figma Make file (`figma:asset/` resolver in `vite.config.ts`; the React and Tailwind plugins must stay).
- **Deploy:** GitHub Pages via `.github/workflows/deploy.yml`, served under the base path `/my-portfolio/`.
- **Structure today:** a single page with sections Hero, Selected Work, AI Engineering Approach, Systems Architecture, Retrieval & Data, Technical Stack, About, Footer. The nav and footer mention "Writing", which does not exist yet.
- **Open decisions:**
  - Real project case studies have not been chosen yet (see Evidence on Hand).
  - The footer lists a "Writing" section that has not been decided on.

## Brand Commitments

- **Name:** Joseph Chombo. A logo mark exists (`src/imports/logo.jpg`).
- **Role framing:** currently an AI Engineer in consumer finance and open to offers. Before that: model validation and automation in banking (IFRS 9). Systems Engineering student, graduating Dec 2026. The old "AI / ML engineering intern" copy is out of date.
- **Location:** based in Peru, working remotely; overlaps US working hours.
- **Employers:** may be named. Names are **pending** (bank; consumer-finance company); use marked slots until supplied.
- **Voice:** calm, precise, systems-oriented, and confident without hype. Short declarative statements. Not a neon AI-startup or SaaS tone.
- **Existing visual identity:** "Organic Intelligence", documented in `src/imports/pasted_text/design-system.md` with brand boards in `src/imports/`. That is visual authority for the next design pass to keep or replace. It is not product truth and is not recorded here.

## Evidence on Hand

- **Projects:** the four projects in the old copy are **mostly illustrative**. Case studies ship as **structure only**: the full case-study template with clearly marked placeholder slots, no written project content, until Joseph supplies real projects.
- **Metrics:** every number on the site is a **placeholder**: 60% faster review, zero outages, +38% MRR@10, <200ms P95, 97% coverage, 12 issues caught, 80% faster incident response. Do not show them as real results, and never invent new ones.
- **Tech stack list** (`TechStack.tsx`): Python, SQL, PySpark, Azure OpenAI, RAG, FAISS, BM25, MLflow, Databricks, Docker, FastAPI, PostgreSQL, and others. It is taken as Joseph's real toolset but has not been checked line by line.
- **Contact and proof links:** Joseph will supply a real email, LinkedIn URL, GitHub URL, and a CV PDF. **Pending.** Current values (`joseph@example.com`, bare `linkedin.com`, `#`) are placeholders and must not ship as if they were real.
- **No testimonials, employers, clients, press, or writing exist yet.** Do not invent any.

## Product Principles

1. **Proof over adjectives.** Every claim about systems thinking should point to a concrete artifact: a project, a diagram, code, or a real metric. When the proof doesn't exist yet, say less rather than fake it.
2. **Skim first, depth on demand.** Role, focus, availability, and contact must land in seconds. Technical depth sits one step deeper for the engineers who want it.
3. **Show the system, not the model call.** Present work as pipelines with explicit retrieval, evaluation, and human-review stages. That is the positioning, so the presentation should make it visible.
4. **Honest about status.** Placeholder content is marked as placeholder until real material replaces it. Current role and availability stay accurate.
5. **Make contact effortless.** A clear route to email, LinkedIn, GitHub, and the CV from every part of the page.
