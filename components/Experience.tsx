"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { LuArrowUpRight } from "react-icons/lu";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

export default function Experience() {
  const { ref } = useSectionInView("Experiência");

  return (
    <section ref={ref} id="experience" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experiência"
          title="Onde venho construindo."
          description="Três frentes ativas hoje e uma trajetória sempre perto da operação do negócio."
        />

        <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-10">
          {experiencesData.map((exp, index) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: Math.min(index * 0.04, 0.12) }}
              className="relative"
            >
              <span
                aria-hidden
                className={clsx(
                  "absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 sm:-left-[47px]",
                  exp.current
                    ? "border-emerald-400 bg-emerald-400/30 shadow-[0_0_12px_rgba(52,211,153,0.7)]"
                    : "border-zinc-600 bg-ink-950"
                )}
              />

              <SpotlightCard innerClassName="p-6 sm:p-7" glow={exp.current ? "52 211 153" : "129 140 248"}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-indigo-200"
                        >
                          {exp.company}
                          <LuArrowUpRight className="text-zinc-500" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <p className="text-sm text-zinc-400">{exp.role}</p>
                  </div>
                  <span
                    className={clsx(
                      "w-fit shrink-0 rounded-full border px-3 py-1 font-mono text-xs",
                      exp.current
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                        : "border-white/10 bg-white/[0.03] text-zinc-400"
                    )}
                  >
                    {exp.period}
                  </span>
                </div>

                <p className="mt-4 leading-relaxed text-zinc-300">{exp.summary}</p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-zinc-400">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-300/70" />
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <li key={tag} className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-zinc-400">
                      {tag}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
