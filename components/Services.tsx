"use client";

import { useSite } from "./SiteProvider";
import { useReveal } from "./useReveal";

export function Services() {
  const { t } = useSite();
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="sectionHead" ref={headRef}>
          <div>
            <div className="kicker">
              {t.servSeq} — {t.servKicker}
            </div>
            <h2 className="h2">{t.servTitle}</h2>
          </div>
          <p className="lead">{t.servLead}</p>
        </div>

        <div className="serviceGrid">
          {t.services.map((s, i) => (
            <ServiceCard key={s.num} num={s.num} title={s.title} desc={s.desc} tags={s.tags} delay={(i % 4) * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  num,
  title,
  desc,
  tags,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div className="serviceCard" ref={ref}>
      <div className="serviceCard__top">
        <span className="serviceCard__num">{num}</span>
        <span style={{ fontSize: 20 }}>↗</span>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="tags">
        {tags.map((tg) => (
          <span key={tg} className="tag">
            {tg}
          </span>
        ))}
      </div>
    </div>
  );
}
