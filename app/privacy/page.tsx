"use client";

import Link from "next/link";
import { useSite } from "@/components/SiteProvider";

export default function PrivacyPage() {
  const { t } = useSite();

  return (
    <main className="legal">
      <div className="container legal__inner">
        <Link href="/#top" className="legal__back">
          {t.privacyBack}
        </Link>

        <h1 className="legal__title">{t.privacyTitle}</h1>
        <p className="legal__updated">{t.privacyUpdated}</p>
        <p className="legal__intro">{t.privacyIntro}</p>

        {t.privacySections.map((s) => (
          <section className="legal__section" key={s.heading}>
            <h2 className="legal__heading">{s.heading}</h2>
            {s.body.map((p, i) => (
              <p className="legal__p" key={i}>
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
