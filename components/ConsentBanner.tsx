"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSite } from "./SiteProvider";

const LS_KEY = "puls.consent";

export function ConsentBanner() {
  const { t } = useSite();
  // null = not yet checked (avoid SSR/first-paint flash), false = hidden, true = show
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let accepted = false;
    try {
      accepted = localStorage.getItem(LS_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (!accepted) {
      // Small delay so the panel slides in after the page settles.
      const id = setTimeout(() => {
        setMounted(true);
        requestAnimationFrame(() => setVisible(true));
      }, 600);
      return () => clearTimeout(id);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(LS_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
    // Unmount after the slide-out transition finishes.
    setTimeout(() => setMounted(false), 400);
  };

  if (!mounted) return null;

  return (
    <div className={`consent${visible ? " is-visible" : ""}`} role="dialog" aria-live="polite" aria-label={t.consentTitle}>
      <div className="consent__body">
        <div className="consent__text">
          <strong className="consent__title">{t.consentTitle}</strong>
          <p>
            {t.consentText}
            <Link href="/privacy" className="consent__link">
              {t.privacyLink}
            </Link>
            .
          </p>
        </div>
        <button type="button" className="consent__btn" onClick={accept}>
          {t.consentAccept}
        </button>
      </div>
    </div>
  );
}
