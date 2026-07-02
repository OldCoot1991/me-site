"use client";

import { useSite } from "./SiteProvider";
import { useReveal } from "./useReveal";
import type { Plan } from "@/lib/content";

export function Pricing() {
  const { t } = useSite();
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="pricingHead" ref={headRef}>
          <div className="kicker">
            {t.priceSeq} — {t.priceKicker}
          </div>
          <h2 className="h2">{t.priceTitle}</h2>
          <p>{t.priceLead}</p>
        </div>

        <div className="planGrid">
          {t.plans.map((p, i) => (
            <PlanCard key={p.name} plan={p} popularLabel={t.popular} delay={(i % 4) * 70} />
          ))}
        </div>

        <p className="priceNote">{t.priceNote}</p>
      </div>
    </section>
  );
}

function PlanCard({ plan, popularLabel, delay }: { plan: Plan; popularLabel: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div className="plan" ref={ref}>
      {plan.featured && <div className="plan__flag" />}
      <div className="plan__head">
        <span className="plan__name">{plan.name}</span>
        {plan.featured && <span className="plan__badge">{popularLabel}</span>}
      </div>
      <div className="plan__price">{plan.price}</div>
      <p className="plan__tag">{plan.tag}</p>
      <div className="plan__features">
        {plan.features.map((f) => (
          <div key={f} className="plan__feature">
            <span>✓</span>
            {f}
          </div>
        ))}
      </div>
      <a href="#contact" className="plan__cta">
        {plan.cta}
      </a>
    </div>
  );
}
