---
version: 1
slug: "src-app-app-tsx"
primary_target: "src/app/App.tsx"
related_targets: ["index.html"]
---

# Surface brief: portfolio home + case-study template

## Scope and mode
Home page (Persuade) plus a case-study route template (Read). Visitor success: a recruiter moves Joseph to the next interview round within a 30-second skim; an engineer opens a case study and finds judgment.

## Audience, action, proof, constraints
- Recruiters first, engineers second. Primary action: email; then CV, LinkedIn, GitHub. All links pending, centralised in src/content/profile.ts.
- Proof on hand: role history only. Case studies are structure only. Hero telemetry is illustrative and labelled.
- Dark first, solid light mode. Respect prefers-reduced-motion.

## Direction contract
THESIS: Still water. A school of line-art koi drifts along flowing wave currents across a deep-ocean ground, and the name sits calm and large beneath it. Refuses the neon / chrome / glitch "AI engineer" look and the headline-over-card-grid template.
OWN-WORLD: Near-black ground with a teal undertone (#041214), pale aqua and seafoam hairline line work (koi, currents, swirls, scattered dots, ~1.2px), one warm vermilion accent used sparingly (the school's one odd koi wherever the school appears, at most one per section, with its trail; a few dots; the mark's dot). Display face is Gilda Display, a calm serif; Archivo for reading; Martian Mono only for the small telemetry line. No glow beyond a faint soft bloom on the vermilion koi.
STORY: Visitors read Joseph Chombo → ML Engineer · AI Engineer · MLOps Engineer → the intro → CTAs; they believe he builds ML that holds steady in production; they email, take the CV, or open a case study.
FIRST VIEWPORT: Upper band: the school streams left to right along six wave currents into a swirl at ~two-thirds width, dots scattered through it. Lower half: "Joseph Chombo" large, the roles line, the intro beside four CTAs (Email primary), and a quiet bottom row with the school-drift readout and the Inject drift control.
FORM: Brief-pinned by Joseph (supersedes The Drift Event, seed 51eae265). Signature interaction: Inject drift scatters the school and it regroups along the currents while the readout goes drifting → regrouping → stable; koi ease away from the cursor. Motion is slow; reduced motion renders a still frame.
BELOW THE HERO: the same line language explains, never decorates: current-line dividers, the pipeline as a current that one koi travels on scroll into the retrain swirl, line-art diagrams on system rows, and the school at rest closing Contact. No new interactions.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- Display face: decided, Gilda Display (serif).
- Employer names, links, CV file, real case studies: pending from Joseph.
