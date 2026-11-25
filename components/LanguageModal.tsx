"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { LuLanguages } from "react-icons/lu";
import { useLanguage } from "@/context/language-context";
import type { Locale } from "@/lib/i18n/types";

const options: readonly { locale: Locale; flag: string; label: string; hint: string }[] = [
  { locale: "pt", flag: "BR", label: "Português", hint: "Ver o site em português" },
  { locale: "en", flag: "EN", label: "English", hint: "View the site in English" },
];

/** Pergunta o idioma na primeira visita. Bilíngue de propósito: o visitante ainda não escolheu. */
export default function LanguageModal() {
  const { ready, hasChosen, suggested, locale, setLocale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const firstButton = useRef<HTMLButtonElement>(null);
  const open = ready && !hasChosen;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = setTimeout(() => firstButton.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLocale(locale);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, locale, setLocale]);

  if (!mounted) return null;

  const ordered = suggested === "en" ? [...options].reverse() : options;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div aria-hidden className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] sm:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(99,102,241,0.25),transparent_65%)]"
            />

            <div className="relative">
              <span className="inline-flex rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-indigo-200">
                <LuLanguages size={20} aria-hidden />
              </span>
              <h2 id="language-modal-title" className="mt-4 text-2xl font-semibold tracking-tight text-white">
                Escolha o idioma
                <span className="block text-base font-normal text-zinc-400">Choose your language</span>
              </h2>

              <div className="mt-6 grid gap-3">
                {ordered.map((option, i) => (
                  <button
                    key={option.locale}
                    ref={i === 0 ? firstButton : undefined}
                    type="button"
                    onClick={() => setLocale(option.locale)}
                    className={clsx(
                      "group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5",
                      option.locale === suggested
                        ? "border-indigo-400/40 bg-indigo-400/[0.08] hover:border-indigo-300/60"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                    )}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-ink-950 font-mono text-sm font-semibold text-white">
                      {option.flag}
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold text-white">{option.label}</span>
                      <span className="block text-sm text-zinc-400">{option.hint}</span>
                    </span>
                    {option.locale === suggested && (
                      <span className="rounded-full bg-indigo-400/15 px-2 py-0.5 text-[11px] font-medium text-indigo-200">
                        {option.locale === "pt" ? "Sugerido" : "Suggested"}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <p className="mt-5 text-center text-xs text-zinc-500">
                Você pode trocar depois no menu · You can switch later in the menu
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
