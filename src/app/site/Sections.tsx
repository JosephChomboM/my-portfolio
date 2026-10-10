import { ArrowRight } from "lucide-react";
import { CopyCta, Cta } from "./Cta";
import { KoiMark } from "./KoiMark";
import { ContactSchool, CurrentRule, MiniFlow } from "./Lines";
import { PipelineCurrent } from "./PipelineCurrent";
import { caseStudies } from "../../content/caseStudies";
import { cvHref, emailHref, profile } from "../../content/profile";

export function Glance() {
  const rows = [
    { k: "Roles", v: <span className="glance__roles">{profile.roles.join(" · ")}</span> },
    { k: "Now", v: <>{profile.now.role}, {profile.now.org} <span className="facts__aside">{profile.now.via}</span></> },
    { k: "Before", v: <>{profile.before.role}, {profile.before.org}</> },
    { k: "Education", v: <>{profile.education.degree}, USIL <span className="facts__aside">expected {profile.education.graduation} · {profile.education.note.toLowerCase()}</span></> },
    { k: "Certified", v: <>{profile.certifications.join(" · ")}</> },
    { k: "Languages", v: <>{profile.languages}</> },
    { k: "Based", v: <>{profile.location} · {profile.workStyle}</> },
  ];
  return (
    <section className="section glance" aria-labelledby="glance-title">
      <div className="wrap">
        <CurrentRule seed={1} className="section__rule" />
      </div>
      <div className="wrap glance__grid">
        <h2 id="glance-title" className="h2">
          The short version.
        </h2>
        <div className="glance__body">
          <dl className="facts">
            {rows.map((r) => (
              <div className="facts__row" key={r.k}>
                <dt>{r.k}</dt>
                <dd>{r.v}</dd>
              </div>
            ))}
          </dl>
          <div className="stack" aria-label="Stack">
            {profile.stack.map((g) => (
              <div className="stack__group" key={g.group}>
                <span className="stack__label">{g.group}</span>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Systems() {
  return (
    <section className="section" id="systems" aria-labelledby="systems-title">
      <div className="wrap">
        <CurrentRule seed={2} className="section__rule" />
      </div>
      <div className="wrap">
        <div className="section__head">
          <h2 id="systems-title" className="h2">
            Systems
          </h2>
          <p className="lede">
            Each one opens into a full case study: the problem, the constraints, the architecture, the trade-offs, how it
            was evaluated and monitored, and what I would change.
          </p>
        </div>
        <ol className="systems">
          {caseStudies.map((c) => {
            return (
              <li key={c.slug}>
                <a className="system" href={`#/systems/${c.slug}`}>
                  <span className="system__diagram">
                    <MiniFlow stages={c.sections.architecture.stages} />
                  </span>
                  <span className="system__main">
                    <span className="system__title">{c.title}</span>
                    <span className="system__summary">{c.summary}</span>
                    <span className="system__domain">{c.domain}</span>
                  </span>
                  <span className="system__meta">
                    <span className="system__stack">{c.stack.join(" · ")}</span>
                    {c.status === "draft" && <span className="badge">Write-up in progress</span>}
                  </span>
                  <ArrowRight className="system__arrow" size={20} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

const STAGES = [
  { name: "Ingest", note: "Contracts on schema and freshness" },
  { name: "Validate", note: "Data checks before anything trains" },
  { name: "Train", note: "Tracked, reproducible runs" },
  { name: "Evaluate", note: "A release gate, not a report", gate: true },
  { name: "Deploy", note: "Shadow or canary, with a rollback" },
  { name: "Monitor", note: "Drift, latency and quality in production" },
];

const PRINCIPLES = [
  { t: "Evaluation is a gate.", d: "A model that has not passed its checks does not reach traffic, however good the notebook looked." },
  { t: "Every deploy has a way back.", d: "Versioned artifacts and a tested rollback path come before the first release, not after the first incident." },
  { t: "Watch the inputs, not just the outputs.", d: "Most production failures start as quiet shifts in the data. Drift monitoring catches them before users do." },
  { t: "Build it to be questioned.", d: "Model validation in banking (IFRS 9) taught me to build models a validator can reproduce, challenge and sign off." },
];

export function Practice() {
  return (
    <section className="section practice" id="practice" aria-labelledby="practice-title">
      <div className="wrap">
        <CurrentRule seed={3} className="section__rule" />
      </div>
      <div className="wrap">
        <div className="section__head">
          <h2 id="practice-title" className="h2">
            How I ship models.
          </h2>
          <p className="lede">The loop I build around every model, from raw data to a monitored service that retrains itself when the world moves.</p>
        </div>
        <div className="loop">
          <PipelineCurrent />
          <ol className="loop__stages">
            {STAGES.map((s) => (
              <li key={s.name} className={s.gate ? "is-gate" : undefined}>
                <span className="loop__node" aria-hidden="true" />
                <span className="loop__name">{s.name}</span>
                <span className="loop__note">{s.note}</span>
              </li>
            ))}
          </ol>
          <p className="loop__return">
            Retrain when monitored drift crosses its threshold
          </p>
        </div>
        <CurrentRule seed={7} className="principles__rule" />
        <div className="principles">
          {PRINCIPLES.map((p) => (
            <div key={p.t} className="principle">
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Path() {
  const steps = [
    ...profile.experience.map((e) => ({ when: e.when, what: e.role, where: e.org, detail: e.detail })),
    {
      when: profile.education.graduation,
      what: profile.education.degree,
      where: profile.education.school,
      detail: `Expected graduation. ${profile.education.note}.`,
    },
  ];
  return (
    <section className="section" id="path" aria-labelledby="path-title">
      <div className="wrap">
        <CurrentRule seed={4} className="section__rule" />
      </div>
      <div className="wrap path">
        <h2 id="path-title" className="h2">
          Path.
        </h2>
        <ol className="path__list">
          {steps.map((s) => (
            <li key={s.when}>
              <span className="path__when">{s.when}</span>
              <span className="path__what">
                {s.what} <span className="path__at">at</span> {s.where}
              </span>
              <span className="path__detail">{s.detail}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <CurrentRule seed={5} className="section__rule" />
      </div>
      <div className="wrap">
        <h2 id="contact-title" className="contact__title">
          Let’s build models that last.
        </h2>
        <p className="lede contact__lede">
          I am open to MLOps, AI and ML Engineer roles at product companies. Remote, from {profile.location}, on US working
          hours.
        </p>
        <div className="hero__ctas contact__ctas">
          <Cta href={emailHref} kind="primary">
            {profile.links.email || "Email me"}
          </Cta>
          <CopyCta text={profile.links.email} />
          <Cta href={cvHref} icon="down" download>
            Download CV
          </Cta>
          <Cta href={profile.links.linkedin} icon="out" external>
            LinkedIn
          </Cta>
          <Cta href={profile.links.github} icon="out" external>
            GitHub
          </Cta>
        </div>
      </div>
      <ContactSchool />
    </section>
  );
}

export function Footer({ onToggleTheme, theme }: { onToggleTheme: () => void; theme: "dark" | "light" }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <CurrentRule seed={9} className="footer__rule" />
      </div>
      <div className="wrap footer__inner">
        <span className="footer__brand">
          <KoiMark size={18} /> {profile.name}
        </span>
        <span className="footer__note">Telemetry on this site is illustrative.</span>
        <button type="button" className="footer__theme" onClick={onToggleTheme}>
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
        <span className="footer__copy">© 2026</span>
      </div>
    </footer>
  );
}
