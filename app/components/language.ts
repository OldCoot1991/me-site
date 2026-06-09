export const languages = [
  { code: "ru", label: "RU", name: "Русский" },
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "es", label: "ES", name: "Español" },
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "ar", label: "AR", name: "العربية" }
] as const;

export type SupportedLanguage = (typeof languages)[number]["code"];

export const supportedLanguages = languages.map((item) => item.code);

export function isSupportedLanguage(language: string): language is SupportedLanguage {
  return supportedLanguages.includes(language as SupportedLanguage);
}

export function getSupportedLanguage(language: string, fallback: SupportedLanguage = "ru") {
  const shortLanguage = language.toLowerCase().split("-")[0];
  return isSupportedLanguage(shortLanguage) ? shortLanguage : fallback;
}

export function getCookieLanguage() {
  if (typeof document === "undefined") {
    return "ru";
  }

  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/ru\/([^;]+)/);
  const cookieLanguage = match?.[1] ? decodeURIComponent(match[1]) : "ru";
  return isSupportedLanguage(cookieLanguage) ? cookieLanguage : "ru";
}

export function getSavedLanguage() {
  if (typeof window === "undefined") {
    return "ru";
  }

  const savedLanguage = window.localStorage.getItem("language");
  return savedLanguage && isSupportedLanguage(savedLanguage) ? savedLanguage : getCookieLanguage();
}

export function setTranslateCookie(language: SupportedLanguage) {
  const value = `/ru/${language}`;
  document.cookie = `googtrans=${value}; path=/; max-age=31536000; SameSite=Lax`;
}

export function setDocumentLanguage(language: SupportedLanguage) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}
