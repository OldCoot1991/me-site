"use client";

import { ReactNode, useEffect, useState } from "react";

const supportedLanguages = ["ru", "en", "de", "fr", "es", "tr", "ar"];

function isSupportedLanguage(language: string) {
  return supportedLanguages.includes(language);
}

function getCookieLanguage() {
  if (typeof document === "undefined") {
    return "ru";
  }

  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/ru\/([^;]+)/);
  const cookieLanguage = match?.[1] ? decodeURIComponent(match[1]) : "ru";
  return isSupportedLanguage(cookieLanguage) ? cookieLanguage : "ru";
}

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "ru";
  }

  const savedLanguage = window.localStorage.getItem("language");

  if (savedLanguage && isSupportedLanguage(savedLanguage)) {
    return savedLanguage;
  }

  return getCookieLanguage();
}

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
      const language = getInitialLanguage();

      void waitForTranslation(language).then(() => {
        if (!isCancelled) {
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
          <div className="pageSkeletonNav">
            <span />
            <span />
            <span />
          </div>
          <div className="pageSkeletonHero">
            <div>
              <span className="skeletonLine short" />
              <span className="skeletonLine title" />
              <span className="skeletonLine title small" />
              <span className="skeletonLine text" />
              <span className="skeletonLine text medium" />
              <div className="skeletonActions">
                <span />
                <span />
              </div>
            </div>
            <div className="skeletonPanel">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="pageSkeletonCards">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
    </>
  );
}
