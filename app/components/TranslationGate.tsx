"use client";

import { ReactNode, useEffect, useState } from "react";
import { getSavedLanguage, setDocumentLanguage } from "./language";

function hasGoogleTranslationApplied() {
  return (
    document.documentElement.classList.contains("translated-ltr") ||
    document.documentElement.classList.contains("translated-rtl") ||
    document.body.classList.contains("translated-ltr") ||
    document.body.classList.contains("translated-rtl")
  );
}

function waitForTranslation(language: string) {
  if (language === "ru") {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    const startedAt = Date.now();
    const minWait = 1400;
    const maxWait = 4600;

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const isTranslated = hasGoogleTranslationApplied();

      if ((isTranslated && elapsed >= minWait) || elapsed >= maxWait) {
        window.clearInterval(interval);
        resolve();
      }
    }, 120);
  });
}

export default function TranslationGate({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const id = window.setTimeout(() => {
      const language = getSavedLanguage();

      setDocumentLanguage(language);

      void waitForTranslation(language).then(() => {
        if (!isCancelled) {
          setDocumentLanguage(language);
          setIsReady(true);
        }
      });
    }, 0);

    return () => {
      isCancelled = true;
      window.clearTimeout(id);
    };
  }, []);

  return (
    <>
      <div className="translationContent" data-ready={isReady}>
        {children}
      </div>

      {!isReady && (
        <div className="pageSkeleton" role="status" aria-live="polite">
          <span className="srOnly">Загрузка перевода</span>
          
          <nav className="nav" style={{ pointerEvents: "none" }}>
            <div className="brand" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span className="brandMark skeletonBlock" style={{ width: 38, height: 38 }} />
              <span className="skeletonBlock" style={{ width: 150, height: 16 }} />
            </div>
            <div className="navLinks">
              <span className="skeletonBlock" style={{ width: 60, height: 14 }} />
              <span className="skeletonBlock" style={{ width: 60, height: 14 }} />
              <span className="skeletonBlock" style={{ width: 95, height: 14 }} />
              <span className="skeletonBlock" style={{ width: 105, height: 14 }} />
              <span className="skeletonBlock" style={{ width: 60, height: 14 }} />
            </div>
            <div className="headerControls">
              <div className="skeletonBlock" style={{ width: 154, height: 46, borderRadius: "var(--radius)" }} />
              <div className="skeletonBlock" style={{ width: 82, height: 46, borderRadius: "999px" }} />
            </div>
          </nav>

          <div className="heroGrid">
            <div className="heroContent">
              <p className="eyebrow" style={{ margin: "0 0 12px" }}>
                <span className="skeletonBlock" style={{ width: 220, height: 12 }} />
              </p>
              <h1 style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span className="skeletonBlock" style={{ width: "90%", height: 32 }} />
                <span className="skeletonBlock" style={{ width: "75%", height: 32 }} />
              </h1>
              <p className="lead" style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
                <span className="skeletonBlock" style={{ width: "100%", height: 14 }} />
                <span className="skeletonBlock" style={{ width: "95%", height: 14 }} />
                <span className="skeletonBlock" style={{ width: "60%", height: 14 }} />
              </p>
              
              <div className="regionNote" style={{ borderLeftColor: "var(--line)", display: "flex", flexDirection: "column", gap: 6, marginTop: 18 }}>
                <span className="skeletonBlock" style={{ width: "85%", height: 14 }} />
                <span className="skeletonBlock" style={{ width: "45%", height: 14 }} />
              </div>

              <div className="heroActions" style={{ marginTop: 30 }}>
                <span className="skeletonBlock" style={{ width: 160, height: 48, borderRadius: "var(--radius)" }} />
                <span className="skeletonBlock" style={{ width: 180, height: 48, borderRadius: "var(--radius)" }} />
                <span className="skeletonBlock" style={{ width: 140, height: 48, borderRadius: "var(--radius)" }} />
              </div>

              <div className="heroStats" style={{ marginTop: 30 }}>
                <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                  <span className="skeletonBlock" style={{ width: 20, height: 20 }} />
                  <span className="skeletonBlock" style={{ width: 120, height: 14 }} />
                </span>
                <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                  <span className="skeletonBlock" style={{ width: 40, height: 20 }} />
                  <span className="skeletonBlock" style={{ width: 110, height: 14 }} />
                </span>
                <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                  <span className="skeletonBlock" style={{ width: 35, height: 20 }} />
                  <span className="skeletonBlock" style={{ width: 125, height: 14 }} />
                </span>
              </div>
            </div>

            <div className="workbench">
              <div className="workbenchTop">
                <span className="skeletonBlock" style={{ width: 10, height: 10, borderRadius: "999px", background: "var(--line)" }} />
                <span className="skeletonBlock" style={{ width: 10, height: 10, borderRadius: "999px", background: "var(--line)" }} />
                <span className="skeletonBlock" style={{ width: 10, height: 10, borderRadius: "999px", background: "var(--line)" }} />
              </div>
              <div className="workbenchBody">
                <div className="pipeline">
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
                    <span className="skeletonBlock" style={{ width: "40%", height: 10 }} />
                    <span className="skeletonBlock" style={{ width: "70%", height: 18 }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
                    <span className="skeletonBlock" style={{ width: "50%", height: 10 }} />
                    <span className="skeletonBlock" style={{ width: "60%", height: 18 }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
                    <span className="skeletonBlock" style={{ width: "35%", height: 10 }} />
                    <span className="skeletonBlock" style={{ width: "80%", height: 18 }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
                    <span className="skeletonBlock" style={{ width: "45%", height: 10 }} />
                    <span className="skeletonBlock" style={{ width: "65%", height: 18 }} />
                  </div>
                </div>
                <div className="terminal" style={{ color: "var(--line)" }}>
                  <span className="skeletonBlock" style={{ width: "80%", height: 12, marginBottom: 8 }} />
                  <span className="skeletonBlock" style={{ width: "60%", height: 12, marginBottom: 8 }} />
                  <span className="skeletonBlock" style={{ width: "75%", height: 12 }} />
                </div>
                <div className="meter">
                  <span className="skeletonBlock" style={{ width: "45%", height: 14 }} />
                  <span className="skeletonBlock" style={{ width: 60, height: 28 }} />
                </div>
              </div>
            </div>
          </div>

          <section className="section intro">
            <div className="sectionHead">
              <p className="eyebrow" style={{ margin: "0 0 12px" }}>
                <span className="skeletonBlock" style={{ width: 180, height: 12 }} />
              </p>
              <h2 style={{ margin: 0 }}>
                <span className="skeletonBlock" style={{ width: "65%", height: 32 }} />
              </h2>
            </div>
            <div className="proofGrid">
              {[1, 2, 3, 4].map((i) => (
                <article className="proofCard" key={i}>
                  <span className="check skeletonBlock" style={{ width: 32, height: 32, display: "grid", placeItems: "center", border: "none" }} />
                  <p style={{ marginTop: 16 }}>
                    <span className="skeletonBlock" style={{ width: "95%", height: 14, marginBottom: 8 }} />
                    <span className="skeletonBlock" style={{ width: "70%", height: 14 }} />
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="sectionHead">
              <p className="eyebrow" style={{ margin: "0 0 12px" }}>
                <span className="skeletonBlock" style={{ width: 140, height: 12 }} />
              </p>
              <h2 style={{ margin: 0 }}>
                <span className="skeletonBlock" style={{ width: "55%", height: 32 }} />
              </h2>
            </div>
            <div className="serviceStack">
              {[1, 2].map((groupIndex) => (
                <section className="serviceGroup" key={groupIndex}>
                  <div className="groupHead">
                    <h3><span className="skeletonBlock" style={{ width: 160, height: 22 }} /></h3>
                    <p style={{ marginTop: 10 }}><span className="skeletonBlock" style={{ width: 100, height: 14 }} /></p>
                  </div>
                  <div className="cards">
                    {[1, 2, 3, 4].map((cardIndex) => (
                      <div className="priceCard" key={cardIndex} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                          <h4><span className="skeletonBlock" style={{ width: "70%", height: 18 }} /></h4>
                          <p style={{ marginTop: 9 }}>
                            <span className="skeletonBlock" style={{ width: "90%", height: 12, marginBottom: 6 }} />
                            <span className="skeletonBlock" style={{ width: "80%", height: 12 }} />
                          </p>
                        </div>
                        <strong style={{ marginTop: 16 }}><span className="skeletonBlock" style={{ width: 100, height: 22 }} /></strong>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
