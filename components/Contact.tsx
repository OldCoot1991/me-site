"use client";

import { useState } from "react";
import Link from "next/link";
import { useSite } from "./SiteProvider";
import { useReveal } from "./useReveal";

export function Contact() {
  const { t } = useSite();
  const [submitted, setSubmitted] = useState(false);
  const ref = useReveal<HTMLElement>();

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container contactGrid">
        <div>
          <div className="kicker">
            {t.contactSeq} — {t.contactKicker}
          </div>
          <h2 className="contactTitle">{t.contactTitle}</h2>
          <p className="contactLead">{t.contactLead}</p>

          <div className="contactLinks">
            <a href="mailto:hello@puls.digital">
              <span className="contactBig">hello@puls.digital</span>
            </a>
            <span className="contactBig">+7 999 000-00-00</span>
            <div className="socialRow">
              {t.socials.map((so) => (
                <span key={so} className="socialChip">
                  {so}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="formCard">
          {submitted ? (
            <div className="formSuccess">
              <div className="formSuccess__mark">✓</div>
              <p>{t.success}</p>
            </div>
          ) : (
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="field">
                <label htmlFor="c-name">{t.fName}</label>
                <input id="c-name" required />
              </div>
              <div className="field">
                <label htmlFor="c-contact">{t.fContact}</label>
                <input id="c-contact" required />
              </div>
              <div className="field">
                <label htmlFor="c-service">{t.fService}</label>
                <select id="c-service" defaultValue={t.serviceOptions[0]}>
                  {t.serviceOptions.map((op) => (
                    <option key={op}>{op}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-msg">{t.fMsg}</label>
                <textarea id="c-msg" rows={3} />
              </div>
              <button type="submit" className="form__submit">
                {t.fSubmit}
              </button>
              <p className="form__privacy">
                {t.fPrivacy}
                <Link href="/privacy" className="form__privacyLink">
                  {t.fPrivacyLink}
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
