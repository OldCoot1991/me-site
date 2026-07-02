"use client";

import { useSite } from "./SiteProvider";
import { useReveal } from "./useReveal";
import type { TechGroup } from "@/lib/content";

export function TechStack() {
  const { t } = useSite();
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="tech" className="section section--alt">
      <div className="container">
        <div className="sectionHead" ref={headRef}>
          <div>
            <div className="kicker">
              {t.techSeq} — {t.techKicker}
            </div>
            <h2 className="h2">{t.techTitle}</h2>
          </div>
          <p className="lead">{t.techLead}</p>
        </div>

        <div className="techGrid">
          {t.techStack.map((g, i) => (
            <TechCard key={g.title} group={g} delay={(i % 3) * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ group, delay }: { group: TechGroup; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div className="techCard" ref={ref}>
      <h3 className="techCard__title">{group.title}</h3>
      <div className="tags">
        {group.items.map((it) => (
          <span key={it} className="tag">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
