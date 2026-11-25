"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import type { CSSProperties } from "react";
import { LuArrowUpRight, LuCheck } from "react-icons/lu";
import { experienceBase, techStack } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

const techByName = new Map(techStack.map((tech) => [tech.name, tech]));

export default function Experience() {
  const { ref } = useSectionInView("experience");
  const { t } = useLanguage();

  return (
    <section ref={ref} id="experience" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-10">
          {experienceBase.map((exp, index) => {
            const text = t.experience.items[exp.id];
            const accentStyle = { "--accent": exp.accent } as CSSProperties;

            return (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: Math.min(index * 0.04, 0.12) }}
                className="relative hover:z-10"
                style={accentStyle}
              >
                <span
                  aria-hidden
                  className={clsx(
                    "absolute -left-[31px] top-8 h-3 w-3 rounded-full border-2 sm:-left-[47px]",
                    exp.current
                      ? "border-emerald-400 bg-emerald-400/30 shadow-[0_0_12px_rgba(52,211,153,0.7)]"
                      : "border-zinc-600 bg-ink-950"
                  )}
                />

                <SpotlightCard pop glow={exp.accent} innerClassName="p-0">
                  {/* faixa de cor no topo do card */}
                  <div
                    aria-hidden
                    className="h-px w-full bg-[linear-gradient(90deg,transparent,rgb(var(--accent)/0.8),transparent)]"
                  />

                  <div className="p-5 sm:p-7">
                    {/* Cabeçalho */}
                    <div className="flex items-start gap-4">
                      {exp.logo ? (
                        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[rgb(var(--accent)/0.35)] bg-white p-1.5 shadow-[0_0_24px_-6px_rgb(var(--accent)/0.6)] sm:h-14 sm:w-14">
                          <Image
                            src={exp.logo}
                            alt={`Logo ${exp.company}`}
                            width={56}
                            height={56}
                            className="h-full w-full object-contain"
                          />
                        </span>
                      ) : (
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgb(var(--accent)/0.3)] bg-[rgb(var(--accent)/0.1)] text-sm font-bold tracking-tight text-[rgb(var(--accent))] sm:h-14 sm:w-14 sm:text-base">
                          {exp.initials}
                        </span>
                      )}

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                            {exp.url ? (
                              <a
                                href={exp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 transition-colors hover:text-[rgb(var(--accent))]"
                              >
                                {exp.company}
                                <LuArrowUpRight className="text-zinc-500" aria-hidden />
                              </a>
                            ) : (
                              exp.company
                            )}
                          </h3>
                          <span
                            className={clsx(
                              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
                              exp.current
                                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                                : "border-white/10 bg-white/[0.03] text-zinc-400"
                            )}
                          >
                            {exp.current && (
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              </span>
                            )}
                            {text.period}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm font-medium text-[rgb(var(--accent)/0.9)]">{text.role}</p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">{text.summary}</p>
                      </div>
                    </div>

                    {/* Entregas em chips: leitura de 3 segundos */}
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {text.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-zinc-200 sm:text-sm"
                        >
                          <LuCheck className="shrink-0 text-[rgb(var(--accent))]" aria-hidden />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Stack com ícones */}
                    <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-white/[0.06] pt-4">
                      {exp.tags.map((tag) => {
                        const tech = techByName.get(tag);
                        if (!tech) {
                          return (
                            <span
                              key={tag}
                              className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-zinc-400"
                            >
                              {tag}
                            </span>
                          );
                        }
                        const Icon = tech.icon;
                        return (
                          <span
                            key={tag}
                            title={tag}
                            className="inline-flex items-center gap-1.5 rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-zinc-400"
                          >
                            <Icon style={{ color: tech.color }} aria-hidden />
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
