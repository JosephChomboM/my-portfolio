// Case studies ship as structure only until Joseph supplies the real projects.
// Fill one in by replacing the bracketed text and setting status to "published".

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
    architecture: { caption: string; stages: string[] };
    decisions: { choice: string; over: string; because: string }[];
    evaluation: { evaluated: string; monitored: string };
    hindsight: string;
  };
};

const draft = (slug: string): CaseStudy => ({
  slug,
  status: "draft",
  title: "[Case study title]",
  summary: "[One line: the production problem this system solved, and for whom.]",
  domain: "[Domain]",
  role: "[Your role]",
  timeframe: "[Year]",
  stack: ["[Tool]", "[Tool]", "[Tool]"],
  repo: undefined,
  sections: {
    problem:
      "[What was failing or missing, who felt it, and why it mattered to the business. Two or three sentences.]",
    constraints: [
      "[Data: volume, freshness, quality, privacy]",
      "[Latency or cost budget]",
      "[Regulatory, team or infrastructure limits]",
    ],
    architecture: {
      caption: "[One sentence describing the flow from input to monitored output.]",
      stages: ["[Source]", "[Processing]", "[Model]", "[Serving]", "[Monitoring]"],
    },
    decisions: [
      { choice: "[What you chose]", over: "[The alternative]", because: "[The trade-off that decided it]" },
      { choice: "[What you chose]", over: "[The alternative]", because: "[The trade-off that decided it]" },
    ],
    evaluation: {
      evaluated: "[Offline metrics, test sets, acceptance gates before release.]",
      monitored: "[What is watched in production, thresholds, and what happens when they trip.]",
    },
    hindsight: "[What you would do differently now, and why.]",
  },
});

export const caseStudies: CaseStudy[] = [draft("system-one"), draft("system-two"), draft("system-three")];
