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
            {profile.intro} AI Engineer at {profile.now.org}; before that, ML model validation and automation at {profile.before.org}.{" "}
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
          {/* the readout updates several times a second; only phase changes are announced */}
          <p className={`drift__status is-${status.phase}`} aria-hidden="true">
            <span className="drift__dot" />
            <span className="drift__label">School drift</span>
            <span className="drift__value">{status.drift.toFixed(2)}</span>
            <span className="drift__phase">{PHASE_LABEL[status.phase]}</span>
          </p>
          <span className="sr-only" role="status" aria-live="polite">
            {status.phase === "stable" ? "School stable" : status.phase === "drifting" ? "Drift injected, school scattering" : "School regrouping"}
          </span>
          <button
            type="button"
            className="drift__inject"
            onClick={() => { if (status.phase === "stable") setScatterKey((k) => k + 1); }}
            aria-disabled={status.phase !== "stable"}
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
