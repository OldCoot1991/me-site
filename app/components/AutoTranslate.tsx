"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
            layout?: number;
          },
          element: string
        ) => void;
      };
    };
  }
}

const supportedLanguages = ["ru", "en", "de", "fr", "es", "tr", "ar"];

function getTargetLanguage(language: string) {
  const shortLanguage = language.toLowerCase().split("-")[0];
  return supportedLanguages.includes(shortLanguage) ? shortLanguage : "en";
}

function setTranslateCookie(targetLanguage: string) {
  const value = `/ru/${targetLanguage}`;
  document.cookie = `googtrans=${value}; path=/; max-age=31536000; SameSite=Lax`;
}

export default function AutoTranslate() {
  useEffect(() => {
    const browserLanguage = navigator.language || "ru";
    const targetLanguage = getTargetLanguage(browserLanguage);
    const shouldTranslate = targetLanguage !== "ru";
    const wasAutoApplied = sessionStorage.getItem("autoTranslateApplied");

    if (shouldTranslate && !wasAutoApplied && !document.cookie.includes("googtrans=")) {
      sessionStorage.setItem("autoTranslateApplied", "true");
      setTranslateCookie(targetLanguage);
      window.location.reload();
    }

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        return;
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ru",
          includedLanguages: supportedLanguages.join(","),
          autoDisplay: false
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="translateDock" aria-label="Автоматический перевод сайта">
      <span>Язык</span>
      <div id="google_translate_element" />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
