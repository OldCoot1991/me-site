"use client";

import { useSite } from "./SiteProvider";
import { useReveal } from "./useReveal";

export function Timelines() {
  const { t } = useSite();
  const headRef = useReveal<HTMLDivElement>();
  const tableRef = useReveal<HTMLDivElement>(70);

  return (
    <section id="timelines" className="section">
      <div className="container">
        <div className="sectionHead" ref={headRef}>
          <div>
            <div className="kicker">
              {t.timeSeq} — {t.timeKicker}
            </div>
            <h2 className="h2">{t.timeTitle}</h2>
          </div>
          <p className="lead">{t.timeLead}</p>
        </div>

        <div className="timeTable" ref={tableRef}>
          <div className="timeRow timeRow--head">
            <span>{t.timeColTask}</span>
            <span>{t.timeColTime}</span>
          </div>
          {t.timelines.map((row) => (
            <div className="timeRow" key={row.task}>
              <span className="timeRow__task">{row.task}</span>
              <span className="timeRow__time">{row.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
