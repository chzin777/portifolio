"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { pt } from "@/lib/i18n/pt";
import { en } from "@/lib/i18n/en";
import type { Locale, SiteContent } from "@/lib/i18n/types";

const STORAGE_KEY = "portfolio-locale";
const dictionaries: Record<Locale, SiteContent> = { pt, en };

type LanguageContextType = {
  locale: Locale;
  t: SiteContent;
  /** true depois que o idioma foi escolhido (agora ou numa visita anterior) */
  hasChosen: boolean;
  /** false até ler o localStorage, evita piscar o modal durante a hidratação */
  ready: boolean;
  /** idioma sugerido pelo navegador, usado para destacar a opção no modal */
  suggested: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function isLocale(value: unknown): value is Locale {
  return value === "pt" || value === "en";
}

export default function LanguageContextProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [hasChosen, setHasChosen] = useState(false);
  const [ready, setReady] = useState(false);
  const [suggested, setSuggested] = useState<Locale>("pt");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }
    if (isLocale(saved)) {
      setLocaleState(saved);
      setHasChosen(true);
    }
    setSuggested(navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = dictionaries[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    setHasChosen(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* navegação privada: segue só na sessão atual */
    }
  }, []);

  const value = useMemo(
    () => ({ locale, t: dictionaries[locale], hasChosen, ready, suggested, setLocale }),
    [locale, hasChosen, ready, suggested, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }
  return context;
}
