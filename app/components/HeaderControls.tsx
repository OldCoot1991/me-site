"use client";

import { useEffect, useState } from "react";

const languages = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "tr", label: "TR" },
  { code: "ar", label: "AR" }
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
      <select
        aria-label="Выбор языка"
        className="languageSelect"
        value={language}
        onChange={(event) => handleLanguageChange(event.target.value)}
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>

      <button
        aria-label={theme === "dark" ? "Включить светлую тему" : "Включить темную тему"}
        aria-pressed={theme === "dark"}
        className="themeToggle"
        type="button"
        onClick={toggleTheme}
      >
        <span />
      </button>
    </div>
  );
}
