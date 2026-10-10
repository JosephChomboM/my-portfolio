---
name: Joseph Chombo · Production ML
description: Still water. A line-art koi school on a deep-ocean ground, a calm serif name, hairline structure, one vermilion spark.
colors:
  ice: "#a8e6da"
  current: "#7fd6c6"
  koi-line: "#c6efe6"
  foam: "#ddf3ee"
  vermilion: "#e8643c"
  deep-water: "#041214"
  deep-water-raised: "#061a1c"
  panel: "#082022"
  hairline: "#12302f"
  hairline-strong: "#1f4744"
  text: "#e4f4f1"
  text-muted: "#9dbfb9"
  text-faint: "#6f938d"
  light-ground: "#f2f7f6"
  light-ground-raised: "#e8f1ef"
  light-panel: "#ffffff"
  light-hairline: "#d3e2df"
  light-hairline-strong: "#a9c6c1"
  light-text: "#06201f"
  light-text-muted: "#2f5552"
  light-text-faint: "#4b6e6a"
  light-ice: "#1d6b62"
  light-koi-line: "#1f5f58"
  light-current: "#3e8c80"
  light-vermilion: "#cc4a22"
  accent-glow: "rgba(232, 100, 60, 0.45)"
  light-accent-glow: "rgba(204, 74, 34, 0.25)"
  ambient-tint: "rgba(40, 140, 140, 0.16)"
  light-ambient-tint: "rgba(62, 140, 128, 0.12)"
typography:
  display:
    fontFamily: "Gilda Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(52px, 9.6vw, 148px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  display-contact:
    fontFamily: "Gilda Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(44px, 7.4vw, 120px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline-case:
    fontFamily: "Gilda Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(40px, 6vw, 88px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Gilda Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(36px, 4.2vw, 60px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Gilda Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(24px, 2.3vw, 32px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  subhead:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.3
  roles:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(17px, 1.55vw, 22px)"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.005em"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-long:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  body-compact:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  intro:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(16px, 1.25vw, 18px)"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(16px, 1.3vw, 19px)"
    fontWeight: 400
    lineHeight: 1.6
  ui-15:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.005em"
  ui-14:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1
  ui-13:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.1em"
  telemetry:
    fontFamily: "Martian Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  focus: "1px"
  scrollbar: "10px"
  dot: "50%"
spacing:
  gutter: "clamp(20px, 4.4vw, 64px)"
  nav-height: "64px"
  container: "1360px"
  section: "clamp(56px, 7vw, 96px)"
  rule-gap: "clamp(56px, 8vw, 104px)"
  row: "24px"
  column-gap: "64px"
components:
  button-primary:
    backgroundColor: "{colors.foam}"
    textColor: "{colors.deep-water}"
    typography: "{typography.ui-15}"
    rounded: "{rounded.none}"
    height: "52px"
    padding: "0 20px 0 22px"
  button-secondary:
    textColor: "{colors.text}"
    typography: "{typography.ui-15}"
    rounded: "{rounded.none}"
    height: "52px"
    padding: "0 20px 0 22px"
  button-pending:
    textColor: "{colors.text-faint}"
    rounded: "{rounded.none}"
    height: "52px"
    padding: "0 20px 0 22px"
  nav:
    textColor: "{colors.text-muted}"
    typography: "{typography.ui-14}"
    height: "64px"
  nav-email:
    textColor: "{colors.text}"
    typography: "{typography.ui-14}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  nav-email-hover:
    backgroundColor: "{colors.panel}"
  drift-inject:
    textColor: "{colors.text-muted}"
    typography: "{typography.telemetry}"
    rounded: "{rounded.none}"
    height: "32px"
    padding: "0 12px"
  drift-inject-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
  badge:
    textColor: "{colors.text-muted}"
    rounded: "{rounded.none}"
    padding: "6px 8px"
  icon-button:
    textColor: "{colors.text-muted}"
    rounded: "{rounded.none}"
    size: "36px"
  system-diagram:
    backgroundColor: "{colors.deep-water-raised}"
    rounded: "{rounded.none}"
    width: "200px"
    padding: "8px 10px"
  system-diagram-hover:
    backgroundColor: "{colors.deep-water}"
  current-rule:
    height: "24px"
---

# Design System: Joseph Chombo · Production ML

> Supersedes the "Organic Intelligence" parchment and vermilion system described in `src/imports/pasted_text/design-system.md`. That file documents a discarded world; none of its tokens, motifs, or rules apply to this build.

## Overview

**Creative North Star: "Still Water"**

A school of line-art koi drifts along hairline currents across a near-black ground with a teal undertone. The name sits large and calm beneath the school in a quiet serif. Everything else is hairline structure: thin three-strand currents between sections, straight rules inside them, small open nodes. The page holds still; only koi move. The world is cool and almost monochrome (aqua, seafoam, ice on deep water), and a single warm vermilion appears only where the school's one odd koi swims.

Density is editorial, not dashboard. Sections run on generous vertical rhythm, lists are ruled rows instead of cards, and depth comes from tonal layering and a faint film grain, never from shadow. Motion is slow. The koi school canvas is the page's one moment, and it acts out one illustrative ML behaviour: drift. "Inject drift" scatters the school, then the currents regroup it, while a quiet status line reads the school's drift value and its state (Stable, Drifting, Regrouping). Otherwise the koi only ease away from the cursor. Reduced motion renders a still frame.

Below the hero the same line language runs through the page, so it reads as one piece: currents replace the straight section dividers, the delivery pipeline is drawn as a current that one vermilion koi travels as the section scrolls, each system carries a small line-art diagram drawn from its own architecture and topology, the career path is drawn as a river that one vermilion koi swims up into the present, and the contact section closes on the school at rest. "The short version" is the one section left without a drawing, a clean breath between the hero and Systems. These drawings explain; they do not decorate, and none of them adds an interaction.

Confirmed rejections: the neon, chrome, and glitch "AI engineer" look, and the headline-over-card-grid template. The sans display alternative (Jost) was tried and rejected.

**Key Characteristics:**
- Dark first on deep water (#041214), with a solid, fully tokened light mode.
- Hairline line work (1px rules, about 1.15px koi strokes) in aqua and seafoam; three-strand currents in place of straight section dividers.
- One vermilion spark, reserved for the one odd koi wherever the school appears (hero, pipeline, path, contact), its trail, a few dots, and the mark's dot.
- Gilda Display for every headline, Archivo for reading and controls, Martian Mono only for the drift status line and the Inject drift button.
- Square corners throughout; only dots and nodes are round.
- Depth by tonal layering and film grain; no box shadows.

## Colors

A cool, near-monochrome sea of teal-tinted neutrals and pale aqua line color, with one warm accent held back almost entirely.

### Primary
- **Ice** (`ice`): the interactive line color. Link underlines on hover, the CTA hover border and scan sweep, focus rings, the roles line under the name, practice-loop, architecture-diagram, and path-river nodes (the last diagram node and the river's Now node filled), the active table-of-contents rule, stack items, the caret, the drift state word (Stable and Regrouping), and the hover border on the nav Email and Inject drift buttons. In light mode it deepens to **Deep Kelp** (`light-ice`).
- **Foam** (`foam`): the filled primary CTA ground (Email), with deep water as its text. In light mode the pairing inverts: the CTA fills with `light-text` and reads in `light-ground`.

### Secondary
- **Current** (`current`): the wave currents on the canvas and every current drawn below the hero (section, principles, and footer rules; the pipeline; architecture diagrams and their tracing strand; the path river and its study strand; the contact school), always as strand bundles with a stronger center strand. Also the resting drift dot, selection tint (45% mix), and the primary CTA's hover sweep (30% mix).
- **Koi Line** (`koi-line`): the stroke of every koi, on canvas and in the static koi glyphs below the hero, and the neutral scattered dots (the contact school's at 50%). The koi mark draws in the surrounding text color; the favicon's stroke is Koi Line exactly.
- **Ambient Tint** (`ambient-tint`; `light-ambient-tint` in light mode): the only color stop in the hero's radial wash (`radial-gradient(90% 70% at 50% -10%, <tint>, transparent 65%)`). Never used as a fill elsewhere.

### Tertiary
- **Vermilion** (`vermilion`; `light-vermilion` in light mode): the single warm voice. The hero's accent koi (1.5px stroke, an 8px soft bloom in `accent-glow` / `light-accent-glow`) and its fading light trail; the pipeline koi (1.5px, no bloom) and the stretch of current it has travelled (1.3px, 60%, round caps); the path river's koi (26px, 1.5px, no bloom, swimming upward past Now, no trail); the contact school's leader koi (1.5px, no bloom) and one accent dot beside it (80%); a few accent dots on the currents (about 6%), the koi mark's dot (read from `--accent`), the drift dot and state word while drifting, and the 1px leading scan line on the primary CTA's hover.

### Neutral
- **Deep Water** (`deep-water`): the page ground. Also the theme-color meta.
- **Raised Water** (`deep-water-raised`): inset figures such as the case-study architecture panel, and the small diagram tile on each system row (it drops to Deep Water when the row takes its panel hover fill, so the tile stays distinct).
- **Panel** (`panel`): hover fill on system rows, the nav Email button, and the Inject drift button.
- **Hairline** (`hairline`): every straight structural rule inside a section: row dividers, the top of the systems list, the nav's bottom border once scrolled, the drift row's top rule, case meta and TOC rails.
- **Strong Hairline** (`hairline-strong`): control borders (CTAs, badges, the nav Email button, the Inject drift button, the theme toggle on hover), dashed pending underlines, and the scrollbar thumb.
- **Text / Muted / Faint** (`text`, `text-muted`, `text-faint`): primary reading, secondary prose (intro, ledes, summaries, case body), and labels, metadata, and pending slots. Text also sets the drift value in the status line. Faint Text is also the stroke of the path river's degree node, the one node not drawn in Ice.
- **Light-mode neutrals** (`light-*`): a cool paper ground with the same roles, one for one. Light mode is a full theme, not an inversion filter.

### Named Rules
**The One Spark Rule.** Vermilion marks the school's one odd koi wherever the school appears, and nothing else: at most one vermilion koi per section (the hero's accent koi, the pipeline koi, the path river's koi, the contact school's leader), its trail (the hero's light trail, the pipeline's travelled stretch), a handful of dots, the koi mark's dot, the Drifting state word and its dot, and the primary CTA's hover scan line. A vermilion line only ever trails a koi. Never use it for text, headings, borders, fills, rules, nodes, or section accents, and never in a system diagram. Its rarity is the point.

**The Cool Sea Rule.** All neutrals carry the teal undertone. Do not introduce warm greys, pure black, or pure white grounds in dark mode.

**The Theme Parity Rule.** Every color is read from a CSS custom property with dark and light values, including the canvas, which reads `--current`, `--koi`, `--accent`, and `--accent-glow` at runtime and redraws on theme change. No hard-coded colors in components. The static favicon is the one exception, and its hexes match `deep-water`, `koi-line`, and `vermilion` exactly.

## Typography

**Display Font:** Gilda Display (with Iowan Old Style, Georgia, serif)
**Body Font:** Archivo (with system-ui, -apple-system, sans-serif)
**Label/Mono Font:** Martian Mono (with ui-monospace, SF Mono, Menlo, monospace)

**Character:** A single-weight, high-contrast serif carries every headline at regular weight with slight negative tracking, calm rather than loud. Archivo does all the reading, labelling, and controls in a clean grotesque. The monospace is a narrow instrument voice for the drift readout only.

### Hierarchy
- **Display** (400, clamp(52px, 9.6vw, 148px), 0.98): the name in the hero. Balanced wrapping.
- **Display Contact** (400, clamp(44px, 7.4vw, 120px), 1): the closing contact headline, max 13ch.
- **Headline Case** (400, clamp(40px, 6vw, 88px), 1): the case-study title.
- **Headline** (400, clamp(36px, 4.2vw, 60px), 1.05): section headings.
- **Title** (400, clamp(24px, 2.3vw, 32px), 1.15): system row titles. Case-study section headings use the same face at clamp(26px, 2.6vw, 34px).
- **Roles** (500, clamp(17px, 1.55vw, 22px), Ice): the roles line under the name, separated by 4px round dots in faint text.
- **Subhead** (Archivo 600, 18px, 1.2 to 1.3): loop stage names, principles, career entries (19px).
- **Body** (400, 17px, 1.6; drops to Body Compact, 16px, under 560px): default reading. Body Compact also sets principle text and stack items (500, 1.8, Ice).
- **Intro** (400, clamp(16px, 1.25vw, 18px), 1.65, muted): the hero intro, 58ch.
- **Lede** (400, clamp(16px, 1.3vw, 19px), muted): section ledes and the contact lede, 60ch.
- **Body Long** (400, 18px, 1.65): case-study prose, 72ch column. Fact values also run 18px.
- **UI 15** (500, 15px): CTA labels (14px on phones), loop notes, case meta values, figure captions, and the roles line on phones.
- **UI 14** (400 for links and metadata, 500 for architecture steps, 600 for the nav Email button, 14px): nav links, the nav Email button, system stacks, footer, TOC, back link, architecture steps.
- **UI 13** (13px): the drift row's illustrative note, the loop's return caption (500, 0.02em), career dates (500, 0.08em, uppercase, Ice), and the nav brand "JC" (600, 0.14em).
- **Label** (500, 12px, 0.1em, uppercase, faint text): fact terms, stack groups, case meta terms, case subsection heads. Badges and pending tags use 11px (badges 600).
- **Telemetry** (Martian Mono 400, 11px, 0.1em, uppercase, tabular numerals): the hero drift status line ("School drift" in faint text, the 0.xx value in text, the state word in Ice) and the Inject drift button label.

### Named Rules
**The One Serif Weight Rule.** Gilda Display is always weight 400 with -0.01em tracking. No bold, italic, or faux weights, and no sans display face.

**The Instrument Voice Rule.** Martian Mono is reserved for the drift readout: the hero status line and the Inject drift button. Everything else, including the illustrative note, labels, and metadata, is Archivo.

## Layout

A single centered container (max 1360px) with a fluid gutter of clamp(20px, 4.4vw, 64px). A fixed 64px nav sits above everything. It is transparent at the top of the page and turns solid ground with a hairline bottom border only after the page scrolls past 8px, so nothing from the section above shows through; there is no backdrop blur. Section anchors sit on the headings, and every anchor lands at the nav height plus 24px (`scroll-margin-top`, matched by the site's own short ease-out scroll of at most 600ms, instant under reduced motion).

The hero fills the small viewport height and is padded by the nav height. The koi school canvas covers the whole hero (inset 0), including the band behind the transparent nav. The school occupies the upper band, and the text block sits low: the name, roles, and a two-column body (intro beside the CTA cluster), closed by one hairline-topped drift row. Each section opens with its top padding (`spacing.section`), then a current rule across the container, then `spacing.rule-gap` before the section head. Section heads are an asymmetric 5:6 grid with the headline and lede bottom-aligned. Content uses asymmetric 4:8 grids with a 64px column gap.

Lists are ruled rows, not cards: facts, systems, and career entries are grids divided by 1px hairlines with 18 to 30px vertical padding. System rows lead with a 200px diagram column (four columns: diagram, main, meta, arrow); under 820px the diagram stacks above the title at up to 220px. The practice loop is a six-column row of stages threaded by the pipeline current, with the retrain caption under the third column; under 820px it becomes a vertical rail with the current running down the nodes. The principles sit under their own current rule (clamp(72px, 9vw, 120px) above it, 32px below). The footer opens with a current rule and 24px below it. The contact section ends flush with the contact school (clamp(140px, 15vw, 200px) tall, clamp(48px, 7vw, 88px) above it, clipped at the sides). The case study pairs a 240px sticky table of contents with a 72ch reading column.

Path is a 4:8 grid like the others: the headline on the left, the ruled career list on the right, with the path river drawn beside the list. On desktop the river sits in the 64px grid gap, about 30px left of the list, and the study strand about 22px further left. Under 1080px, where the grid stacks, the list takes 46px of left padding so the river keeps its place beside the rows.

Breakpoints: 1080px (principles and stack reflow, 4:8 grids stack, the path list makes room for the river), 820px (nav links hide, hero and section heads go single column, loop goes vertical, case TOC hides), 560px (body to 16px, hero CTAs pair two per row).

### Named Rules
**The Clean Breath Rule.** "The short version" carries no line art beyond its opening current rule. It is the recruiter's scanning section, facts and stack in ruled rows, and stays a clean breath between the hero and Systems. Do not add a diagram, koi, or current inside it.

## Elevation & Depth

The system is flat. There are no box shadows. Depth comes from four things: tonal layering (ground, raised water, panel), a radial ambient wash at the top of the hero in `ambient-tint`, the scrolled nav's solid ground (no blur), and a fixed fractal-noise film grain over the whole page at 5% opacity in dark mode and 3% in light, blended with overlay. No surface uses a backdrop blur; the hero accent koi's 8px bloom is the only glow.

### Named Rules
**The No-Shadow Rule.** Surfaces never cast shadows. A hover state shifts tone (panel fill) or line color (ice border), never elevation.

**The Single Bloom Rule.** The soft bloom on the hero's vermilion koi is the only glow. Text, buttons, headings, the other koi, and the vermilion koi drawn below the hero never glow.

## Shapes

Square corners everywhere: buttons (including the nav Email and Inject drift buttons), badges, panels, decision boxes, and the icon button all use 0 radius. Two utility radii exist and go nowhere else: the focus ring softens by 1px (`rounded.focus`), and the scrollbar thumb is a 10px pill (`rounded.scrollbar`) inset by a 3px ground border. Round shapes are reserved for points: the drift dot (6px), the roles separators (4px), loop nodes (13px open circles, with the evaluation gate drawn as a filled diamond), architecture-diagram nodes (small open circles, the last slightly larger and filled; review gates drawn as open 8px diamonds), and path-river nodes (open circles about 7px across, the Now node slightly larger and filled Ice). Borders are 1px hairlines. Dashed hairlines carry one meaning: pending or placeholder content. Return and feedback paths are drawn as currents (the pipeline's retrain loop), not dashes.

Currents are the system's curve: three near-parallel strands about 2.5 units apart, the center strand roughly twice as strong as the outer two (outer about 22%, center about 42 to 50%), 1px non-scaling strokes, no fills. A swirl is a current winding inward 1.25 turns. One finer variant exists: the path river's study strand is two strands about 2.8 units apart at about 30%, read as a tributary rather than a current. A diagram's tracing strand is a single strand (about 35%) with fainter vertical taps (about 18%).

The koi mark is a five-stroke line drawing at stroke width 7 on a 100 grid with round caps, plus one vermilion dot. The same five strokes, without the dot, are the koi glyph drawn in the sections below the hero (21 to 30px long, a 1.15px non-scaling stroke in Koi Line, 1.5px in Vermilion for the odd koi). The favicon puts it on a deep-water tile with a 22 radius, the one rounded container in the system.

### Named Rules
**The Dashed Means Pending Rule.** A dashed border or underline marks something not yet real (a pending link, an unnamed employer). Never use dashes decoratively or for return paths.

**The Current Divider Rule.** Section boundaries are currents, not straight lines: the top of every section, the line above the principles, and the top of the footer are thin static three-strand currents, each with its own phase so no two match. Hairlines inside a section (list rows, table rows, meta rails) stay straight.

## Components

### Buttons (CTA)
Quiet, square, and instrument-like. Each CTA has a label and a 16px line icon whose motion hints at the destination.
- **Shape:** square (0 radius), 52px tall, 0 20px 0 22px padding, 12px label-to-icon gap.
- **Focus:** 2px Ice outline at 3px offset with a 1px radius, shared by every focusable element.
- **Primary (Email):** Foam fill with deep-water text, weight 600. Light mode inverts to dark fill on paper.
- **Secondary (CV, LinkedIn, GitHub):** transparent with a strong-hairline border and text color, weight 500, 15px.
- **Hover:** border turns Ice, and a soft gradient sweeps in from the left over 0.5s (Ice at 14% on secondary, Current at 30% on primary). A 1px scan line runs across once: Ice on secondary, Vermilion on primary. Icons nudge: forward arrows right 3px, outbound arrows up-right 2px, download down 2px.
- **Active:** scale(0.985).
- **Pending:** a link not yet supplied renders as a non-interactive span with `aria-disabled="true"`, a dashed strong-hairline border, faint text, no hover effects, and a small "pending" tag with a dashed underline in place of the icon. Email keeps its filled primary treatment while pending, with the tag muted to 62% of its text color.

### Badge
- **Style:** 600, 11px, 0.1em uppercase Archivo, muted text, 1px strong-hairline border, 6px 8px padding, square. Used for "Draft" on system rows.

### Navigation
- **Style:** fixed, 64px. Transparent with a transparent border at the top of the page; past 8px of scroll (the scrolled state) it turns solid ground with a hairline bottom border, eased over 0.3s. No backdrop blur. Nav links scroll to their section heading in at most 600ms.
- **Brand:** the koi mark (22px) beside "JC" in Archivo 600, 13px, 0.14em tracking.
- **Links:** Systems, Practice, Path, Contact in 14px muted text; on hover the text brightens and a 1px Ice underline draws in from the left over 0.35s.
- **End:** a 36px square theme toggle (border appears on hover), then an "Email" text button: Archivo 600, 14px, 8px 14px padding, square, 1px strong-hairline border; on hover the border turns Ice and the panel fill comes in. It links to the email address, or to the contact section while the address is pending.
- **Mobile:** section links hide under 820px; the toggle and Email remain, pushed to the right.

### System Rows
Ruled rows instead of cards. Each row opens with a small architecture diagram on a square Raised Water tile, then a serif title and muted summary, the stack and an optional Draft badge on the right, and an arrow. On hover the row takes the panel fill, indents 20px, the title turns Ice, the arrow moves right 4px, and the diagram tile drops to Deep Water. System rows carry no Vermilion.

### Architecture Diagram
A small line-art sketch drawn from a case study's own architecture stages and its optional topology, so every system shows its real shape in one style. The stages sit as nodes on one three-strand current that bows gently between them (alternating slightly above and below the line); nodes are open Ice circles filled with Raised Water, and the last node is slightly larger and filled Ice. The current enters from the left with a short lead-in. The topology changes the shape, never the style:
- **Gate:** a review or acceptance step is an open Ice diamond (8px, Raised Water fill) in place of its circle. When the gate is the last node on the flow it stays an open diamond.
- **Sidecar:** a tracing or logging stage leaves the main flow and runs as a single fainter strand under the whole diagram, with a vertical tap down from each node and its own small open end node.
- **Join:** the stages before the join run on an upper offline lane of open nodes and merge into the main flow at its first node; the main lane starts later to leave room.
- **Split:** the last stage fans out into two outputs, each a filled Ice end node.
It draws at 200px wide in the system row and up to 560px in the case-study architecture figure, above the step labels; both use the same topology. It carries no Vermilion. It is never decorative: no diagram without stages behind it.

### Practice Loop (Pipeline Current)
"How I ship models" as a current. Six stages (open Ice circles on the ground, the evaluation gate a filled Ice diamond, the final stage filled) are threaded by a three-strand current measured through the node centres, bowing between them, with a short lead-in before the first stage. After Monitor the current runs into a swirl in the hero's style; on wide screens a strand runs back from the swirl under the stages and rises into Train as the retrain loop, with the Ice caption above it (no icon). On narrow screens the current runs down the stages into a small swirl beside the retrain caption.
- **Koi:** one vermilion koi (30px wide, 24px narrow) travels Ingest to Monitor, tied to scroll position: it starts as the loop's top reaches 82% of the viewport and arrives over the next 62% of the viewport height, eased toward its target each frame. The stretch it has travelled warms in Vermilion (1.3px, 60%). Scroll-linked, not an interaction; nothing to click or hover.
- **Reduced motion:** the koi rests at Monitor with the whole stretch warmed.

### Path River
Path drawn as a river: the jobs are nodes on one static three-strand current running down beside the list, newest at the top, each node level with its row's date. The current bows between nodes (alternating sides), fades in about 70px above "Now" and fades out about 34px below the oldest job (a vertical Current gradient). Nodes are open Ice circles on the ground; "Now" is slightly larger and filled Ice. Study runs as the finer two-strand tributary to the left: it starts at the degree node (open, Faint Text stroke), rises beside the jobs, and joins the river just below "Now", showing he studied while working. One vermilion koi (26px) swims upward past "Now" into the present; it is the section's only accent and has no trail. Positions are measured from the list, so the river re-fits on resize and once fonts load. Nothing moves and nothing is interactive.

### Current Rule
A thin static divider, 24px tall and full container width: three strands of Current (outer 22%, center 42%), 1px non-scaling, each instance seeded to a different phase and wavelength. Used at the top of every section, above the principles, and at the top of the footer, in place of a straight hairline.

### Contact School
The close of the page: the school at rest, regrouped. A full-width band (clamp(140px, 15vw, 200px), cropped to fill) under the contact CTAs: five strands of one current (center strongest), a few Koi Line dots at 50% with one Vermilion dot, and a shoal of nine koi glyphs in loose formation along the current, led by the vermilion koi at the front. Each koi bobs 3px over 7s, ease-in-out, staggered by 0.7s. Static otherwise; the bob stops under reduced motion.

### Koi School (Signature)
A full-width hero canvas below the nav, and the source of the line language the rest of the page draws statically: six lanes of bundled hairline currents (five near-parallel lines each, 7 to 21% opacity), a two-arm hairline vortex at about two-thirds width, dots riding the currents, and line-art koi (about 1.15px) travelling in loose shoals. One accent koi swims in Vermilion with its light trail. The canvas covers the whole hero, fades in over 2.4s, and has one interaction:
- **Drift:** Inject drift kicks every koi and dot in a random direction; the regrouping spring is released for 0.9s, then restored over 2.6s, and the currents bring the school back.
- **Cursor:** koi within about 150px of the mouse cursor ease away from it. There is no tap handling.

Under reduced motion the canvas renders one still frame, and Inject drift reports Drifting, Regrouping, and Stable in the status line only, with no movement.

### Drift Row
One quiet, hairline-topped row closing the hero (10px 22px gaps, 16px top padding):
- **Status line** (Telemetry): 6px dot, "School drift" in faint text, the drift value (0.xx) in text, and the state word. Stable: Current dot, Ice word. Drifting: dot and word in Vermilion. Regrouping: Ice word, dot breathes.
- **Inject drift:** the one control, square, 32px tall, 0 12px padding, 1px strong-hairline border, a 14px Waves line icon at an 8px gap, label in Telemetry. Hover turns the border Ice, the label `text`, and brings in the panel fill. While the school is away it is disabled at 60% opacity and its label reads Scattering, then Regrouping.
- **Note:** a 13px faint Archivo line, right-aligned on desktop (left under 820px), stating that the behaviour is illustrative.

### Case Study Elements
- **Table of contents:** a 1px hairline rail; the active item gets a 1px Ice segment and full text color.
- **Architecture figure:** raised-water panel with a hairline border and 28px padding, holding the Architecture Diagram at large size (up to 560px) and, below it, the step labels as a wrapping run (UI 14, 500, muted, 8px by 28px gaps).
- **Decision boxes:** hairline-bordered, square, 20px 22px padding, with the choice in 600 text and the rejected option introduced by a small uppercase label.
- **Bulleted lists:** hairline-ruled rows with an 8px Ice dash as the marker.

## Do's and Don'ts

### Do:
- **Do** read every color from the themed custom properties so dark and light stay in parity, including on canvas.
- **Do** set every headline in Gilda Display at 400 with -0.01em tracking and balanced wrapping.
- **Do** separate content inside a section with 1px hairlines and ruled rows, and open each section, the principles, and the footer with a current rule; reach for a bordered box only for figures and decisions.
- **Do** keep corners square; reserve round shapes for dots and nodes.
- **Do** render missing links and names as marked pending slots (dashed, faint, `aria-disabled`), never as fake values.
- **Do** keep motion slow (ease `cubic-bezier(0.16, 1, 0.3, 1)`, 0.2 to 0.5s for states) and honor reduced motion with a still frame, reporting drift states in the status line only, resting the pipeline koi at Monitor, and stilling the contact school.
- **Do** draw diagrams below the hero from real data (stages, topology, career dates) in the hero's line language: strand-bundled currents, open Ice nodes, the last or present node filled, gates as diamonds.
- **Do** let the koi canvas fill the whole hero, behind the nav; keep the nav transparent at the top and make it solid ground (hairline border) only once scrolled.
- **Do** keep the hero's bottom row to the drift status line, the one Inject drift button, and the illustrative note.

### Don't:
- **Don't** use Vermilion for text, headings, borders, fills, rules, nodes, or section accents. It belongs to the one odd koi per section, its trail, a few dots, the mark's dot, and the drifting state.
- **Don't** use Martian Mono anywhere outside the drift status line and the Inject drift button.
- **Don't** add koi behaviours beyond the hero's drift and cursor easing, the pipeline koi's scroll-linked travel, and the contact school's slow rest bob. The path river and its koi are static. Nothing below the hero is interactive.
- **Don't** add box shadows, glows on text or buttons, neon, chrome, or glitch effects.
- **Don't** set a sans-serif display face or bold the serif.
- **Don't** add line art to "The short version"; it stays a clean breath for scanning.
- **Don't** lay content out as a headline over a grid of cards.
- **Don't** use dashed lines decoratively or for return paths; dashes mean pending.
