"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CONTENT, onAccentColor, type Content, type Lang, type Theme } from "@/lib/content";

interface SiteState {
  theme: Theme;
  lang: Lang;
  accent: string;
  t: Content;
  toggleTheme: () => void;
  setLang: (l: Lang) => void;
  setAccent: (c: string) => void;
}

const SiteContext = createContext<SiteState | null>(null);

const LS_KEY = "puls.prefs";

interface Props {
  defaultTheme?: Theme;
  defaultLang?: Lang;
  defaultAccent?: string;
  children: React.ReactNode;
}

export function SiteProvider({
  defaultTheme = "dark",
  defaultLang = "ru",
  defaultAccent = "#C6F932",
  children,
}: Props) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [lang, setLangState] = useState<Lang>(defaultLang);
  const [accent, setAccentState] = useState<string>(defaultAccent);

  // Restore persisted preferences on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return;
      const p = JSON.parse(raw) as Partial<SiteState>;
      if (p.theme === "dark" || p.theme === "light") setTheme(p.theme);
      if (p.lang === "ru" || p.lang === "en") setLangState(p.lang);
      if (typeof p.accent === "string") setAccentState(p.accent);
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  // Reflect state onto <html> so CSS variables cascade, and persist.
  useEffect(() => {
    const el = document.documentElement;
    el.setAttribute("data-theme", theme);
    el.setAttribute("lang", lang);
    el.style.setProperty("--accent", accent);
    el.style.setProperty("--on-accent", onAccentColor(accent));
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ theme, lang, accent }));
    } catch {
      /* ignore */
    }
  }, [theme, lang, accent]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const setAccent = useCallback((c: string) => setAccentState(c), []);

  const value = useMemo<SiteState>(
    () => ({ theme, lang, accent, t: CONTENT[lang], toggleTheme, setLang, setAccent }),
    [theme, lang, accent, toggleTheme, setLang, setAccent]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteState {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within <SiteProvider>");
  return ctx;
}
