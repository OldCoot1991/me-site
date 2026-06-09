"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  getSavedLanguage,
  getSupportedLanguage,
  setDocumentLanguage,
  setTranslateCookie,
  supportedLanguages
} from "./language";

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

export default function AutoTranslate() {
  useEffect(() => {
    const browserLanguage = navigator.language || "ru";
    const targetLanguage = getSupportedLanguage(browserLanguage, "en");
    const shouldTranslate = targetLanguage !== "ru";
    const wasAutoApplied = sessionStorage.getItem("autoTranslateApplied");

    setDocumentLanguage(getSavedLanguage());

    if (shouldTranslate && !wasAutoApplied && !document.cookie.includes("googtrans=")) {
      sessionStorage.setItem("autoTranslateApplied", "true");
      localStorage.setItem("language", targetLanguage);
      setDocumentLanguage(targetLanguage);
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
    <div className="autoTranslateRuntime" aria-hidden="true">
      <div id="google_translate_element" />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
