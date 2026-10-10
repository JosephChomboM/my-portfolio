import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "../../content/caseStudies";

const TOC = [
  { id: "problem", label: "Problem" },
  { id: "constraints", label: "Constraints" },
  { id: "architecture", label: "Architecture" },
  { id: "decisions", label: "Decisions and trade-offs" },
  { id: "evaluation", label: "Evaluation and monitoring" },
  { id: "hindsight", label: "What I would do differently" },
];

export function CaseStudy({ slug }: { slug: string }) {
  const c = caseStudies.find((x) => x.slug === slug);
  const [active, setActive] = useState("problem");

  useEffect(() => {
    window.scrollTo(0, 0);
    const els = TOC.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [slug]);

  if (!c) {
    return (
      <main className="wrap case case--missing" id="main">
        <h1 className="h2">That case study does not exist.</h1>
        <a className="case__back" href="#systems">
          <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" /> Back to systems
        </a>
      </main>
    );
  }
  const s = c.sections;
  const draft = c.status === "draft";

  return (
    <main className="case" id="main">
      <div className="wrap">
        <a className="case__back" href="#systems">
          <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" /> All systems
        </a>
        <header className="case__head">
          <h1 className="case__title">{c.title}</h1>
          <p className="case__summary">{c.summary}</p>
          <dl className="case__meta">
            <div><dt>Domain</dt><dd>{c.domain}</dd></div>
            <div><dt>Role</dt><dd>{c.role}</dd></div>
            <div><dt>When</dt><dd>{c.timeframe}</dd></div>
            <div><dt>Stack</dt><dd>{c.stack.join(" · ")}</dd></div>
            {draft && <div><dt>Status</dt><dd>Draft, placeholder content</dd></div>}
          </dl>
        </header>
        <div className="case__layout">
          <nav className="case__toc" aria-label="Case study sections">
            <ol>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#/systems/${c.slug}`} className={active === t.id ? "is-active" : undefined}
                    onClick={(e) => { e.preventDefault(); document.getElementById(t.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="case__body">
            <section id="problem"><h2>Problem</h2><p>{s.problem}</p></section>
            <section id="constraints"><h2>Constraints</h2><ul>{s.constraints.map((x, i) => <li key={i}>{x}</li>)}</ul></section>
            <section id="architecture">
              <h2>Architecture</h2>
              <figure className="arch">
                <ol className="arch__flow">
                  {s.architecture.stages.map((st, i) => <li key={i}>{st}</li>)}
                </ol>
                <figcaption>{s.architecture.caption}</figcaption>
              </figure>
            </section>
            <section id="decisions">
              <h2>Decisions and trade-offs</h2>
              <div className="decisions">
                {s.decisions.map((d, i) => (
                  <div className="decision" key={i}>
                    <p className="decision__choice">{d.choice}</p>
                    <p className="decision__over"><span>over</span> {d.over}</p>
                    <p className="decision__because">{d.because}</p>
                  </div>
                ))}
              </div>
            </section>
            <section id="evaluation">
              <h2>Evaluation and monitoring</h2>
              <div className="evalmon">
                <div><h3>Before release</h3><p>{s.evaluation.evaluated}</p></div>
                <div><h3>In production</h3><p>{s.evaluation.monitored}</p></div>
              </div>
            </section>
            <section id="hindsight"><h2>What I would do differently</h2><p>{s.hindsight}</p></section>
            <p className="case__repo">
              {c.repo ? (
                <a className="cta cta--secondary cta--out" href={c.repo} target="_blank" rel="noopener noreferrer">
                  <span className="cta__label">View the repository</span>
                  <ArrowUpRight className="cta__icon" size={16} strokeWidth={1.75} aria-hidden="true" />
                </a>
              ) : (
                <span className="pending">[Repository link]</span>
              )}
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
