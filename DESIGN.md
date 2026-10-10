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
  section: "clamp(88px, 12vw, 168px)"
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
---

# Design System: Joseph Chombo · Production ML

> Supersedes the "Organic Intelligence" parchment and vermilion system described in `src/imports/pasted_text/design-system.md`. That file documents a discarded world; none of its tokens, motifs, or rules apply to this build.

## Overview

**Creative North Star: "Still Water"**

A school of line-art koi drifts along hairline currents across a near-black ground with a teal undertone. The name sits large and calm beneath the school in a quiet serif. Everything else is hairline structure: rules, dashed connectors, small open nodes. The page holds still, and one living thing moves. The world is cool and almost monochrome (aqua, seafoam, ice on deep water), and a single warm vermilion appears only where the school's one odd koi swims.

Density is editorial, not dashboard. Sections run on generous vertical rhythm, lists are ruled rows instead of cards, and depth comes from tonal layering and a faint film grain, never from shadow. Motion is slow. The koi school canvas is the page's one moment, and it acts out one illustrative ML behaviour: drift. "Inject drift" scatters the school, then the currents regroup it, while a quiet status line reads the school's drift value and its state (Stable, Drifting, Regrouping). Otherwise the koi only ease away from the cursor. Reduced motion renders a still frame.

Confirmed rejections: the neon, chrome, and glitch "AI engineer" look, and the headline-over-card-grid template. The sans display alternative (Jost) was tried and rejected.

**Key Characteristics:**
- Dark first on deep water (#041214), with a solid, fully tokened light mode.
- Hairline line work (1px rules, about 1.15px koi strokes) in aqua and seafoam.
- One vermilion spark, reserved for the accent koi, its light trail, a few dots, and the mark's dot.
- Gilda Display for every headline, Archivo for reading and controls, Martian Mono only for the drift status line and the Inject drift button.
- Square corners throughout; only dots and nodes are round.
- Depth by tonal layering and film grain; no box shadows.

## Colors

A cool, near-monochrome sea of teal-tinted neutrals and pale aqua line color, with one warm accent held back almost entirely.

### Primary
- **Ice** (`ice`): the interactive line color. Link underlines on hover, the CTA hover border and scan sweep, focus rings, the roles line under the name, timeline and architecture nodes, the active table-of-contents rule, stack items, the caret, the drift state word (Stable and Regrouping), and the hover border on the nav Email and Inject drift buttons. In light mode it deepens to **Deep Kelp** (`light-ice`).
- **Foam** (`foam`): the filled primary CTA ground (Email), with deep water as its text. In light mode the pairing inverts: the CTA fills with `light-text` and reads in `light-ground`.

### Secondary
- **Current** (`current`): the wave currents on the canvas, the resting drift dot, selection tint (45% mix), and the primary CTA's hover sweep (30% mix).
- **Koi Line** (`koi-line`): the stroke of every koi and the neutral scattered dots. The koi mark draws in the surrounding text color; the favicon's stroke is Koi Line exactly.
- **Ambient Tint** (`ambient-tint`; `light-ambient-tint` in light mode): the only color stop in the hero's radial wash (`radial-gradient(90% 70% at 50% -10%, <tint>, transparent 65%)`). Never used as a fill elsewhere.

### Tertiary
- **Vermilion** (`vermilion`; `light-vermilion` in light mode): the single warm voice. The accent koi (1.5px stroke, an 8px soft bloom in `accent-glow` / `light-accent-glow`), its fading light trail, a few accent dots on the currents (about 6%), the koi mark's dot (read from `--accent`), the drift dot and state word while drifting, and the 1px leading scan line on the primary CTA's hover.

### Neutral
- **Deep Water** (`deep-water`): the page ground. Also the theme-color meta.
- **Raised Water** (`deep-water-raised`): inset figures such as the case-study architecture panel.
- **Panel** (`panel`): hover fill on system rows, the nav Email button, and the Inject drift button.
- **Hairline** (`hairline`): every structural rule: row dividers, section tops, the nav's bottom border once scrolled, the drift row's top rule, case meta and TOC rails.
- **Strong Hairline** (`hairline-strong`): control borders (CTAs, badges, the nav Email button, the Inject drift button, the theme toggle on hover), dashed pending underlines, the loop's connector line, and the scrollbar thumb.
- **Text / Muted / Faint** (`text`, `text-muted`, `text-faint`): primary reading, secondary prose (intro, ledes, summaries, case body), and labels, metadata, and pending slots. Text also sets the drift value in the status line.
- **Light-mode neutrals** (`light-*`): a cool paper ground with the same roles, one for one. Light mode is a full theme, not an inversion filter.

### Named Rules
**The One Spark Rule.** Vermilion appears only on the accent koi, its trail, a handful of dots, the koi mark's dot, the Drifting state word and its dot, and the primary CTA's hover scan line. Never use it for text, headings, borders, fills, or section accents. Its rarity is the point.

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

A single centered container (max 1360px) with a fluid gutter of clamp(20px, 4.4vw, 64px). A fixed 64px nav sits above everything. It is transparent at the top of the page and takes a 94% ground-mix tint with a hairline bottom border only after the page scrolls past 8px; there is no backdrop blur. Anchor scrolling offsets by the nav height plus 16px.

The hero fills the small viewport height and is padded by the nav height. The koi school canvas covers the whole hero (inset 0), including the band behind the transparent nav. The school occupies the upper band, and the text block sits low: the name, roles, and a two-column body (intro beside the CTA cluster), closed by one hairline-topped drift row. Sections open at clamp(88px, 12vw, 168px) of top padding. Section heads are an asymmetric 5:6 grid with the headline and lede bottom-aligned. Content uses asymmetric 4:8 grids with a 64px column gap.

Lists are ruled rows, not cards: facts, systems, and career entries are grids divided by 1px hairlines with 18 to 30px vertical padding. The practice loop is a six-column timeline on a single hairline with a dashed return path; under 820px it becomes a vertical rail. The case study pairs a 240px sticky table of contents with a 72ch reading column.

Breakpoints: 1080px (principles and stack reflow, 4:8 grids stack), 820px (nav links hide, hero and section heads go single column, loop goes vertical, case TOC hides), 560px (body to 16px, hero CTAs pair two per row).

## Elevation & Depth

The system is flat. There are no box shadows. Depth comes from four things: tonal layering (ground, raised water, panel), a radial ambient wash at the top of the hero in `ambient-tint`, the scrolled nav's flat tint (94% ground mix, no blur), and a fixed fractal-noise film grain over the whole page at 5% opacity in dark mode and 3% in light, blended with overlay. No surface uses a backdrop blur; the accent koi's 8px bloom is the only glow.

### Named Rules
**The No-Shadow Rule.** Surfaces never cast shadows. A hover state shifts tone (panel fill) or line color (ice border), never elevation.

**The Single Bloom Rule.** The soft bloom on the vermilion koi is the only glow. Text, buttons, headings, and the other koi never glow.

## Shapes

Square corners everywhere: buttons (including the nav Email and Inject drift buttons), badges, panels, decision boxes, and the icon button all use 0 radius. Two utility radii exist and go nowhere else: the focus ring softens by 1px (`rounded.focus`), and the scrollbar thumb is a 10px pill (`rounded.scrollbar`) inset by a 3px ground border. Round shapes are reserved for points: the drift dot (6px), the roles separators (4px), loop nodes (13px open circles, with the evaluation gate drawn as a filled diamond), and architecture nodes (9px). Borders are 1px hairlines. Dashed hairlines carry a specific meaning: a return or feedback path (the loop's retrain arc), and pending or placeholder content.

The koi mark is a five-stroke line drawing at stroke width 7 on a 100 grid with round caps, plus one vermilion dot. The favicon puts it on a deep-water tile with a 22 radius, the one rounded container in the system.

### Named Rules
**The Dashed Means Pending Rule.** A dashed border or underline marks something not yet real (a pending link, an unnamed employer) or a return path. Never use dashes decoratively.

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
- **Style:** fixed, 64px. Transparent with a transparent border at the top of the page; past 8px of scroll (the scrolled state) it takes a 94% ground-mix tint and a hairline bottom border, eased over 0.3s. No backdrop blur.
- **Brand:** the koi mark (22px) beside "JC" in Archivo 600, 13px, 0.14em tracking.
- **Links:** Systems, Practice, Path, Contact in 14px muted text; on hover the text brightens and a 1px Ice underline draws in from the left over 0.35s.
- **End:** a 36px square theme toggle (border appears on hover), then an "Email" text button: Archivo 600, 14px, 8px 14px padding, square, 1px strong-hairline border; on hover the border turns Ice and the panel fill comes in. It links to the email address, or to the contact section while the address is pending.
- **Mobile:** section links hide under 820px; the toggle and Email remain, pushed to the right.

### System Rows
Ruled rows instead of cards. Each row holds a serif title and muted summary, the stack and an optional Draft badge on the right, and an arrow. On hover the row takes the panel fill, indents 20px, the title turns Ice, and the arrow moves right 4px.

### Practice Loop
A six-stage timeline on one strong hairline. Stages are open Ice circles on the ground; the evaluation gate is a filled Ice diamond; the final stage is filled. A dashed return path with dashed risers links the last stages back to training, captioned in Ice.

### Koi School (Signature)
A full-width hero canvas below the nav: six lanes of bundled hairline currents (five near-parallel lines each, 7 to 21% opacity), a two-arm hairline vortex at about two-thirds width, dots riding the currents, and line-art koi (about 1.15px) travelling in loose shoals. One accent koi swims in Vermilion with its light trail. The canvas covers the whole hero, fades in over 2.4s, and has one interaction:
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
- **Architecture figure:** raised-water panel with a hairline border and 28px padding; the flow is a run of steps on a 1px Ice line with 9px open nodes.
- **Decision boxes:** hairline-bordered, square, 20px 22px padding, with the choice in 600 text and the rejected option introduced by a small uppercase label.
- **Bulleted lists:** hairline-ruled rows with an 8px Ice dash as the marker.

## Do's and Don'ts

### Do:
- **Do** read every color from the themed custom properties so dark and light stay in parity, including on canvas.
- **Do** set every headline in Gilda Display at 400 with -0.01em tracking and balanced wrapping.
- **Do** separate content with 1px hairlines and ruled rows; reach for a bordered box only for figures and decisions.
- **Do** keep corners square; reserve round shapes for dots and nodes.
- **Do** render missing links and names as marked pending slots (dashed, faint, `aria-disabled`), never as fake values.
- **Do** keep motion slow (ease `cubic-bezier(0.16, 1, 0.3, 1)`, 0.2 to 0.5s for states) and honor reduced motion with a still frame, reporting drift states in the status line only.
- **Do** let the koi canvas fill the whole hero, behind the nav; keep the nav transparent at the top and tint it (94% ground mix, hairline border) only once scrolled.
- **Do** keep the hero's bottom row to the drift status line, the one Inject drift button, and the illustrative note.

### Don't:
- **Don't** use Vermilion for text, headings, borders, fills, or section accents. It belongs to the koi, its trail, a few dots, the mark's dot, and the drifting state.
- **Don't** use Martian Mono anywhere outside the drift status line and the Inject drift button.
- **Don't** add koi behaviours beyond drift and easing away from the cursor.
- **Don't** add box shadows, glows on text or buttons, neon, chrome, or glitch effects.
- **Don't** set a sans-serif display face or bold the serif.
- **Don't** lay content out as a headline over a grid of cards.
- **Don't** use dashed lines decoratively; dashes mean pending or a return path.
