"use client";

import { useEffect, useState } from "react";
import {
  getSavedLanguage,
  languages,
  setDocumentLanguage,
  setTranslateCookie,
  type SupportedLanguage
} from "./language";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
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
    const minWait = 1200;
    const maxWait = 3600;

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

export default function HeaderControls() {
  const [isReady, setIsReady] = useState(false);
  const [language, setLanguage] = useState("ru");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    let isCancelled = false;

    const id = window.setTimeout(() => {
      const initialTheme = getInitialTheme();
      const initialLanguage = getSavedLanguage();

      setLanguage(initialLanguage);
      setTheme(initialTheme);
      setDocumentLanguage(initialLanguage);
      document.documentElement.dataset.theme = initialTheme;

      void waitForTranslation(initialLanguage).then(() => {
        if (!isCancelled) {
          setDocumentLanguage(initialLanguage);
          setIsReady(true);
        }
      });
    }, 0);

    return () => {
      isCancelled = true;
      window.clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function handleLanguageChange(nextLanguage: SupportedLanguage) {
    setLanguage(nextLanguage);
    setDocumentLanguage(nextLanguage);
    window.localStorage.setItem("language", nextLanguage);
    setTranslateCookie(nextLanguage);
    window.location.reload();
  }

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  }

  if (!isReady) {
    return (
      <div className="headerControls" aria-label="Настройки сайта загружаются">
        <div className="languageSkeleton" aria-hidden="true" />
        <div className="themeSkeleton" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="headerControls" aria-label="Настройки сайта">
      <label className="languageControl">
        <span>Язык</span>
        <select
          aria-label="Выбор языка"
          className="languageSelect"
          value={language}
          onChange={(event) => handleLanguageChange(event.target.value as SupportedLanguage)}
        >
          {languages.map((item) => (
            <option key={item.code} value={item.code}>
              {item.label} · {item.name}
            </option>
          ))}
        </select>
      </label>

      <button
        aria-label={theme === "dark" ? "Включить светлую тему" : "Включить темную тему"}
        aria-pressed={theme === "dark"}
        className="themeToggle"
        type="button"
        onClick={toggleTheme}
      >
        <span className="themeIcon sunIcon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 4V2" />
            <path d="M12 22v-2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M4 12H2" />
            <path d="M22 12h-2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </span>
        <span className="themeThumb" />
        <span className="themeIcon moonIcon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 7 7 0 1 0 20.5 14.5Z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
