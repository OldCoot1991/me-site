"use client";

import { useEffect, useRef } from "react";
import { useSite } from "./SiteProvider";
import { parseStat } from "@/lib/content";
import { MagneticLink } from "./MagneticLink";
import { Counter } from "./Counter";

export function Hero() {
  const { t } = useSite();
  const decorRef = useRef<HTMLDivElement | null>(null);

  // Pointer parallax on the decorative layers.
  useEffect(() => {
    const root = decorRef.current;
    if (!root) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-px]"));
    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - window.innerWidth / 2;
      const dy = ev.clientY - window.innerHeight / 2;
      els.forEach((el) => {
        const f = parseFloat(el.dataset.px || "0");
        el.style.transform = `translate(${dx * f}px, ${dy * f}px)`;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const stats = t.stats.map(parseStat);

  return (
    <section id="top" className="hero">
      <div className="hero__dots" />
      <div className="hero__decor" ref={decorRef}>
        <div
          data-px="0.05"
          style={{ position: "absolute", left: -130, top: "24%", width: 380, height: 380 }}
        >
          <div className="glow glow--a" />
        </div>
        <div
          data-px="0.09"
          style={{ position: "absolute", right: "6%", bottom: "6%", width: 300, height: 300 }}
        >
          <div className="glow glow--b" />
        </div>
        <div
          className="ring-holder"
          data-px="0.03"
          style={{ position: "absolute", right: -150, top: 50, width: 560, height: 560 }}
        >
          <div className="ring">
            <div className="ring__inner" />
            <div className="ring__dot" />
          </div>
        </div>
      </div>

      <div className="container hero__inner">
        <div className="badge">
          <span className="badge__dot" />
          {t.heroEyebrow}
        </div>

        <h1 className="hero__title">
          {t.heroPre}{" "}
          <span className="hl">
            <span className="hl__sheen" />
            <span className="hl__text">{t.heroAccent}</span>
          </span>
        </h1>

        <p className="hero__sub">{t.heroSub}</p>

        <div className="hero__cta">
          <MagneticLink href="#contact" className="btn btn--primary">
            {t.cta1} <span>→</span>
          </MagneticLink>
          <MagneticLink href="#cases" className="btn btn--ghost">
            {t.cta2}
          </MagneticLink>
        </div>

        <div className="hero__stats">
          {stats.map((st, i) => (
            <div key={i}>
              <div className="stat__num">
                <Counter to={st.count} suffix={st.suffix} />
              </div>
              <div className="stat__label">{st.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="marqueeWrap">
        <div className="marqueeTrack">
          <span>{t.marquee}</span>
          <span>{t.marquee}</span>
        </div>
      </div>
    </section>
  );
}
