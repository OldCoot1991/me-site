"use client";

import Link from "next/link";
import { useSite } from "./SiteProvider";

export function Footer() {
  const { t } = useSite();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__brandRow">
            <span className="brand__mark" />
            <span className="brand__name">{t.brand}</span>
          </div>
          <p>{t.footTagline}</p>
        </div>

        <div>
          <div className="footer__colTitle">{t.footNav}</div>
          <div className="footer__list">
            {t.navLinks.map((nl) => (
              <a key={nl.href} href={nl.href}>
                {nl.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer__colTitle">{t.footSocialTitle}</div>
          <div className="footer__list">
            {t.socials.map((so) => (
              <span key={so} className="footer__contactSocial">
                {so}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="footer__colTitle">{t.footContactTitle}</div>
          <div className="footer__list">
            <span>hello@puls.digital</span>
            <span>+7 999 000-00-00</span>
            <span>{t.footCity}</span>
          </div>

          <div className="footer__colTitle footer__colTitle--legal">{t.footLegal}</div>
          <div className="footer__list">
            <Link href="/privacy" className="footer__legalLink">
              {t.privacyLink}
            </Link>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <span>
          © {year} {t.brand}. {t.footRights}
        </span>
        <span>{t.footMade}</span>
      </div>
    </footer>
  );
}
