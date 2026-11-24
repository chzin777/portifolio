"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import clsx from "clsx";
import type { MouseEvent, ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** cor do brilho (rgb sem parênteses, ex.: "129 140 248") */
  glow?: string;
  lift?: boolean;
};

/**
 * Card com borda iluminada que segue o cursor + micro-elevação no hover.
 * A borda é um wrapper de 1px cujo fundo recebe um radial-gradient na posição do mouse.
 */
export default function SpotlightCard({
  children,
  className,
  innerClassName,
  glow = "129 140 248",
  lift = true,
}: SpotlightCardProps) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  const border = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgb(${glow} / 0.65), transparent 70%)`;
  const surface = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgb(${glow} / 0.08), transparent 70%)`;

  return (
    <motion.div
      onMouseMove={handleMove}
      whileHover={lift ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={clsx(
        "group relative rounded-2xl bg-white/10 p-px transition-shadow duration-300 hover:shadow-[0_20px_60px_-30px_rgba(99,102,241,0.45)]",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: border }}
      />
      <div
        className={clsx(
          "relative h-full overflow-hidden rounded-[15px] bg-ink-900/95 backdrop-blur-sm",
          innerClassName
        )}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: surface }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </motion.div>
  );
}
