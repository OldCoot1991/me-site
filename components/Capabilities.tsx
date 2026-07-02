"use client";

import { useSite } from "./SiteProvider";
import { useReveal } from "./useReveal";
import type { Capability } from "@/lib/content";

export function Capabilities() {
  const { t } = useSite();
  const headRef = useReveal<HTMLDivElement>();
  const princRef = useReveal<HTMLDivElement>(70);

  return (
    <section id="capabilities" className="section">
      <div className="container">
        <div className="sectionHead" ref={headRef}>
          <div>
            <div className="kicker">
              {t.capSeq} — {t.capKicker}
            </div>
            <h2 className="h2">{t.capTitle}</h2>
          </div>
          <p className="lead">{t.capLead}</p>
        </div>

        <div className="principles" ref={princRef}>
          <h3 className="principles__title">{t.principlesTitle}</h3>
          <ul className="principles__list">
            {t.principles.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="capGrid">
          {t.capabilities.map((c, i) => (
            <CapCard key={c.title} cap={c} delay={(i % 3) * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapCard({ cap, delay }: { cap: Capability; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div className="capCard" ref={ref}>
      <h3 className="capCard__title">{cap.title}</h3>
      <ul className="capCard__list">
        {cap.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
