"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { sectionIds } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t, locale, setLocale } = useLanguage();
  const nextLocale = locale === "pt" ? "en" : "pt";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-1.5 sm:top-5 sm:px-3"
    >
      <nav
        aria-label={t.navLabel}
        className="flex max-w-full items-center rounded-full border border-white/10 bg-ink-950/60 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
      >
        <ul className="no-scrollbar flex min-w-0 items-center gap-0.5 overflow-x-auto">
          {sectionIds.map((id) => {
            const active = activeSection === id;
            return (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  aria-current={active ? "true" : undefined}
                  onClick={() => {
                    setActiveSection(id);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "relative block rounded-full px-2 py-1.5 text-[11px] font-medium transition-colors min-[400px]:px-2.5 min-[400px]:text-xs sm:px-4 sm:py-2 sm:text-sm",
                    active ? "text-white" : "text-zinc-400 hover:text-zinc-100"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {t.nav[id]}
                </a>
              </li>
            );
          })}
        </ul>

        <span aria-hidden className="mx-1 h-5 w-px shrink-0 bg-white/10" />

        <button
          type="button"
          onClick={() => setLocale(nextLocale)}
          aria-label={`${t.languageSwitch}: ${nextLocale === "en" ? "English" : "Português"}`}
          className="mr-0.5 shrink-0 rounded-full px-2 py-1.5 font-mono text-[11px] font-semibold text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white sm:px-3 sm:py-2 sm:text-xs"
        >
          {/* celular: mostra só o idioma para o qual vai trocar */}
          <span className="sm:hidden">{nextLocale.toUpperCase()}</span>
          <span className="hidden sm:inline">
            <span className={locale === "pt" ? "text-white" : "text-zinc-500"}>PT</span>
            <span className="text-zinc-600">/</span>
            <span className={locale === "en" ? "text-white" : "text-zinc-500"}>EN</span>
          </span>
        </button>
      </nav>
    </motion.header>
  );
}
