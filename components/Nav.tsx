"use client";

import { useEffect, useRef } from "react";
import { useSite } from "./SiteProvider";

export function Nav() {
  const { t, lang, setLang, toggleTheme } = useSite();
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      const sc = document.documentElement.scrollTop || document.body.scrollTop || 0;
      nav.classList.toggle("is-scrolled", sc > 16);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} className="nav">
      <a href="#top" className="brand">
        <span className="brand__mark" />
        <span className="brand__name">{t.brand}</span>
      </a>

      <div className="navLinks">
        {t.navLinks.map((nl) => (
          <a key={nl.href} href={nl.href}>
            {nl.label}
          </a>
        ))}
      </div>

      <div className="navRight">
        <div className="langSwitch">
          <button
            className={lang === "ru" ? "is-active" : ""}
            onClick={() => setLang("ru")}
            aria-pressed={lang === "ru"}
          >
            RU
          </button>
          <span>/</span>
          <button
            className={lang === "en" ? "is-active" : ""}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>

        <button className="themeToggle" onClick={toggleTheme} title={t.themeTip} aria-label={t.themeTip}>
          <span className="sun" />
          <span className="moon" />
          <span className="knob" />
        </button>
      </div>
    </nav>
  );
}
