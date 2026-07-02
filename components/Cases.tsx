"use client";

import { useSite } from "./SiteProvider";
import { useReveal } from "./useReveal";
import type { CaseItem } from "@/lib/content";

export function Cases() {
  const { t } = useSite();
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="cases" className="section section--alt">
      <div className="container">
        <div className="sectionHead" ref={headRef}>
          <div>
            <div className="kicker">
              {t.caseSeq} — {t.caseKicker}
            </div>
            <h2 className="h2">{t.caseTitle}</h2>
          </div>
          <p className="lead">{t.caseLead}</p>
        </div>

        <div className="caseGrid">
          {t.cases.map((c, i) => (
            <CaseCard key={i} item={c} delay={(i % 3) * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ item, delay }: { item: CaseItem; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div className="caseCard" ref={ref}>
      <div className="caseCard__media">
        <div className="caseCard__zoom">
          <div className="caseCard__ph">
            <span>{item.ph}</span>
          </div>
        </div>
        <span className="caseCard__cat">{item.cat}</span>
      </div>
      <div className="caseCard__body">
        <h3>{item.title}</h3>
        <div className="caseCard__metric">
          <span>↑</span>
          {item.metric}
        </div>
        {item.url && (
          <a
            className="caseCard__link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.url.replace(/^https?:\/\//, "")} ↗
          </a>
        )}
      </div>
    </div>
  );
}
