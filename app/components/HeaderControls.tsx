"use client";

import { useEffect, useState } from "react";

const languages = [
  { code: "ru", label: "RU", name: "Русский" },
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "es", label: "ES", name: "Español" },
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "ar", label: "AR", name: "العربية" }
];

type Theme = "light" | "dark";

function getCookieLanguage() {
  if (typeof document === "undefined") {
    return "ru";
  }

  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/ru\/([^;]+)/);
  return match?.[1] || "ru";
}

function setTranslateCookie(language: string) {
  const value = `/ru/${language}`;
  document.cookie = `googtrans=${value}; path=/; max-age=31536000; SameSite=Lax`;
}

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

export default function HeaderControls() {
  const [language, setLanguage] = useState(() => getCookieLanguage());
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function handleLanguageChange(nextLanguage: string) {
    setLanguage(nextLanguage);
    setTranslateCookie(nextLanguage);
    window.location.reload();
  }

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <div className="headerControls" aria-label="Настройки сайта">
      <label className="languageControl">
        <span>Язык</span>
        <select
          aria-label="Выбор языка"
          className="languageSelect"
          value={language}
          onChange={(event) => handleLanguageChange(event.target.value)}
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
