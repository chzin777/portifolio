"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import clsx from "clsx";
import { profile } from "@/lib/data";

type CopyEmailButtonProps = {
  className?: string;
  showAddress?: boolean;
};

export default function CopyEmailButton({ className, showAddress = true }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      window.location.href = `mailto:${profile.email}`;
      return;
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copiar e-mail ${profile.email}`}
      className={clsx(
        "group relative inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition-colors duration-300",
        copied
          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
          : "border-white/10 bg-white/[0.03] text-zinc-200 hover:border-white/20 hover:bg-white/[0.06]",
        className
      )}
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="absolute text-emerald-400"
            >
              <LuCheck />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute"
            >
              <LuCopy />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span className="break-all text-left">{showAddress ? profile.email : "Copiar e-mail"}</span>

      <AnimatePresence>
        {copied && (
          <motion.span
            role="status"
            initial={{ opacity: 0, y: 6, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 6, x: "-50%" }}
            className="pointer-events-none absolute -top-10 left-1/2 whitespace-nowrap rounded-md border border-emerald-400/30 bg-ink-900 px-2.5 py-1 text-xs text-emerald-300 shadow-lg"
          >
            E-mail copiado!
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
