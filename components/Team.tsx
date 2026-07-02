"use client";

import { useSite } from "./SiteProvider";
import { useReveal } from "./useReveal";
import { ImageSlot } from "./ImageSlot";
import type { Member } from "@/lib/content";

export function Team() {
  const { t } = useSite();
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="team" className="section section--alt">
      <div className="container">
        <div className="sectionHead" ref={headRef}>
          <div>
            <div className="kicker">
              {t.teamSeq} — {t.teamKicker}
            </div>
            <h2 className="h2">{t.teamTitle}</h2>
          </div>
          <p className="lead">{t.teamLead}</p>
        </div>

        <div className="teamGrid">
          {t.team.map((m, i) => (
            <MemberCard key={i} member={m} slotId={`team-${i + 1}`} delay={(i % 3) * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member, slotId, delay }: { member: Member; slotId: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div className="member" ref={ref}>
      <div className="member__media">
        <div className="member__zoom">
          <ImageSlot storageId={slotId} placeholder={member.ph} />
        </div>
      </div>
      <div className="member__name">{member.name}</div>
      <div className="member__role">{member.role}</div>
    </div>
  );
}
