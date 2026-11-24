"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-1.5 sm:top-5 sm:px-3"
    >
      <nav
        aria-label="Navegação principal"
        className="no-scrollbar max-w-full overflow-x-auto rounded-full border border-white/10 bg-ink-950/60 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
      >
        <ul className="flex items-center gap-0.5">
          {links.map((link) => {
            const active = activeSection === link.name;
            return (
              <li key={link.hash} className="shrink-0">
                <a
                  href={link.hash}
                  aria-current={active ? "true" : undefined}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "relative block rounded-full px-2 py-1.5 text-[11px] font-medium min-[400px]:px-3 min-[400px]:text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm",
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
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
