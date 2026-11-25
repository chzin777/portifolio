"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { techStack, type Tech } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

function TechTile({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <motion.li
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group relative"
      style={{ "--tech": tech.color } as CSSProperties}
    >
      <div
        tabIndex={0}
        aria-label={tech.name}
        className="relative flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-[border-color,color,box-shadow,background-color] duration-300 group-hover:border-[color:var(--tech)] group-hover:bg-white/[0.05] group-hover:text-[color:var(--tech)] group-hover:shadow-[0_0_28px_-6px_var(--tech)] focus-visible:border-[color:var(--tech)] focus-visible:text-[color:var(--tech)]"
      >
        <Icon size={30} aria-hidden />
      </div>
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-ink-850 px-2.5 py-1 text-xs text-zinc-100 opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        {tech.name}
      </span>
    </motion.li>
  );
}

function MarqueeRow({ items, reverse = false }: { items: readonly Tech[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="mask-fade-x group/marquee flex overflow-hidden">
      <ul
        aria-hidden
        className={`flex w-max shrink-0 gap-3 py-1.5 will-change-transform group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <li
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
            >
              <Icon style={{ color: tech.color }} />
              {tech.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function TechStack() {
  const { ref } = useSectionInView("stack");
  const { t } = useLanguage();
  const half = Math.ceil(techStack.length / 2);

  return (
    <section ref={ref} id="stack" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          description={t.stack.description}
        />
      </div>

      <Reveal className="space-y-3">
        <MarqueeRow items={techStack.slice(0, half)} />
        <MarqueeRow items={techStack.slice(half)} reverse />
      </Reveal>

      <div className="mx-auto mt-14 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <ul className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-10">
            {techStack.map((tech) => (
              <TechTile key={tech.name} tech={tech} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
