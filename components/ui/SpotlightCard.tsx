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
  /** "salta para frente" no hover: sobe, cresce um pouco e ganha sombra */
  pop?: boolean;
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
  pop = false,
}: SpotlightCardProps) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  const border = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgb(${glow} / 0.65), transparent 70%)`;

  return (
    <motion.div
      onMouseMove={handleMove}
      whileHover={pop ? { y: -10, scale: 1.035 } : lift ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={clsx(
        "group relative rounded-2xl bg-white/10 p-px",
        pop &&
          "hover:z-10 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)]",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: border }}
      />
      <div className={clsx("relative h-full overflow-hidden rounded-[15px] bg-ink-900", innerClassName)}>
        {children}
      </div>
    </motion.div>
  );
}
