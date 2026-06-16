"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type Lang, translations } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)["en"];
};

const LanguageContext = createContext<Ctx | null>(null);

const normalizeLang = (lang: string): Lang => {
  if (lang === "uk") return "ua";
  if (lang === "pl") return "pl";
  if (lang === "en") return "en";
  return "en";
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;

    if (saved && ["ua", "pl", "en"].includes(saved)) {
      setLangState(saved);
    } else {
      // 🌍 авто-визначення мови браузера
      const browserLang = normalizeLang(navigator.language.slice(0, 2));

      setLangState(browserLang);
      localStorage.setItem("lang", browserLang);
    }

    setReady(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  // (опційно) щоб не миготів англійський текст
  if (!ready) return null;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
