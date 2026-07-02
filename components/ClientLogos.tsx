"use client";

import { useSite } from "./SiteProvider";
import { LOGOS } from "@/lib/content";

export function ClientLogos() {
  const { t } = useSite();
  const row = [...LOGOS, ...LOGOS];
  return (
    <section className="logosSection">
      <div className="container">
        <span className="logosTitle">{t.logosTitle}</span>
      </div>
      <div className="logoWrap">
        <div className="logoTrack">
          {row.map((lg, i) => (
            <span key={i}>{lg}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
