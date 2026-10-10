import { useCallback, useState } from "react";
import { Waves } from "lucide-react";
import { KoiSchool, type SchoolStatus } from "./KoiSchool";
import { Cta } from "./Cta";
import { cvHref, emailHref, profile } from "../../content/profile";

const PHASE_LABEL = { stable: "Stable", drifting: "Drifting", regrouping: "Regrouping" } as const;

export function Hero() {
  const [scatterKey, setScatterKey] = useState(0);
  const [status, setStatus] = useState<SchoolStatus>({ drift: 0.02, phase: "stable" });
  const onStatus = useCallback((s: SchoolStatus) => setStatus(s), []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <KoiSchool scatterKey={scatterKey} onStatus={onStatus} />
      <div className="wrap hero__inner">
        <h1 id="hero-title" className="hero__title">
          {profile.name}
        </h1>
        <p className="hero__roles">
          {profile.roles.map((role, i) => (
            <span key={role}>
              {i > 0 && <span className="hero__sep" aria-hidden="true" />}
              {role}
            </span>
          ))}
        </p>
        <div className="hero__body">
          <p className="hero__intro">
            {profile.intro} AI Engineer in consumer finance; before that, IFRS 9 model validation in banking.{" "}
            <span className="hero__where">{profile.location} · remote · US hours</span>
          </p>
          <div className="hero__ctas">
            <Cta href={emailHref} kind="primary">
              Email me
            </Cta>
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
        <div className="drift">
          <p className={`drift__status is-${status.phase}`} role="status" aria-live="polite">
            <span className="drift__dot" aria-hidden="true" />
            <span className="drift__label">School drift</span>
            <span className="drift__value">{status.drift.toFixed(2)}</span>
            <span className="drift__phase">{PHASE_LABEL[status.phase]}</span>
          </p>
          <button
            type="button"
            className="drift__inject"
            onClick={() => setScatterKey((k) => k + 1)}
            disabled={status.phase !== "stable"}
          >
            <Waves size={14} strokeWidth={1.6} aria-hidden="true" />
            {status.phase === "stable" ? "Inject drift" : status.phase === "drifting" ? "Scattering" : "Regrouping"}
          </button>
          <p className="drift__note">Illustrative. The school scatters like drifting data, then the currents bring it back.</p>
        </div>
      </div>
    </section>
  );
}
