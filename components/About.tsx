"use client";

import Image from "next/image";
import type { IconType } from "react-icons";
import { BsWhatsapp } from "react-icons/bs";
import {
  LuArrowRight,
  LuBriefcase,
  LuDownload,
  LuGraduationCap,
  LuLayers,
  LuLightbulb,
  LuMapPin,
  LuPlug,
  LuServer,
  LuSparkles,
} from "react-icons/lu";
import { experienceBase, profile, techStack } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import Reveal from "./ui/Reveal";

const currentRoles = experienceBase.filter((exp) => exp.current);
const coreStack = techStack.slice(0, 10);
const strengthIcons: readonly IconType[] = [LuLayers, LuPlug, LuServer, LuLightbulb];

/** Wrapper de cada célula do bento: sobe de camada no hover para o card "saltar" por cima dos vizinhos. */
const cell = "relative hover:z-10";

export default function About() {
  const { ref } = useSectionInView("about");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section ref={ref} id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={a.eyebrow} title={a.title} description={a.description} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* Bio + CTAs */}
          <Reveal className={`${cell} md:col-span-4 md:row-span-2`}>
            <SpotlightCard pop className="h-full" innerClassName="p-6 sm:p-8">
              <div className="flex h-full flex-col">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-28 sm:w-28">
                    <Image
                      src={profile.photo}
                      alt={profile.name}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4 text-zinc-400">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {a.greeting} {profile.firstName}.
                      </h3>
                      <p className="mt-1 text-sm text-indigo-200/80">{a.tagline}</p>
                    </div>
                    <p className="leading-relaxed">
                      {a.bio1Before} <span className="text-zinc-100">Óticas Brasil</span>
                      {a.bio1After}
                    </p>
                    <p className="leading-relaxed">
                      {a.bio2Before} <span className="text-zinc-100">Avodah SAC</span> {a.bio2Middle}{" "}
                      <span className="text-zinc-100">Comply</span>
                      {a.bio2After}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:mt-auto sm:flex-row sm:flex-wrap sm:pt-8">
                  <a
                    href={`${profile.whatsapp}?text=${encodeURIComponent(a.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_0_24px_-6px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <BsWhatsapp className="text-base" aria-hidden />
                    {a.ctaWhatsapp}
                  </a>
                  <a
                    href={profile.cv}
                    download
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.03]"
                  >
                    {a.ctaCv}
                    <LuDownload className="transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                  </a>
                  <a
                    href="#experience"
                    onClick={() => {
                      setActiveSection("experience");
                      setTimeOfLastClick(Date.now());
                    }}
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    {a.ctaExperience}
                    <LuArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Disponibilidade */}
          <Reveal delay={0.05} className={`${cell} md:col-span-2`}>
            <SpotlightCard pop className="h-full" innerClassName="p-6" glow="52 211 153">
              <div className="flex items-center justify-between">
                <LuMapPin className="text-cyan-300" size={20} />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 text-[11px] font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {a.available}
                </span>
              </div>
              <p className="mt-4 text-sm text-zinc-500">{a.basedIn}</p>
              <p className="text-lg font-semibold tracking-tight text-white">{a.location}</p>
              <p className="mt-3 text-sm text-zinc-400">
                {a.workMode} · {a.role}
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Números */}
          <Reveal delay={0.1} className={`${cell} md:col-span-2`}>
            <SpotlightCard pop className="h-full" innerClassName="p-6" glow="34 211 238">
              <ul className="grid h-full grid-cols-3 gap-4 md:grid-cols-1 md:gap-3">
                {t.stats.map((stat) => (
                  <li key={stat.value} className="md:flex md:items-baseline md:gap-3">
                    <p className="text-3xl font-semibold tracking-tight text-gradient md:w-16 md:shrink-0 md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-zinc-500 sm:text-sm md:mt-0">{stat.label}</p>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>

          {/* Formação */}
          <Reveal delay={0.05} className={`${cell} md:col-span-3`}>
            <SpotlightCard pop className="h-full" innerClassName="p-6" glow="52 211 153">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <LuGraduationCap className="text-emerald-300" size={18} />
                {a.educationTitle}
              </div>
              <ol className="mt-5 space-y-5 border-l border-white/10 pl-5">
                {t.education.map((edu) => (
                  <li key={edu.course} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-ink-900"
                    />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-200">
                        {edu.kind}
                      </span>
                      <span className="font-mono text-xs text-zinc-500">{edu.period}</span>
                    </div>
                    <p className="mt-2 font-semibold leading-snug tracking-tight text-white">{edu.course}</p>
                    <p className="text-sm text-zinc-400">{edu.school}</p>
                  </li>
                ))}
              </ol>
            </SpotlightCard>
          </Reveal>

          {/* Atuação atual */}
          <Reveal delay={0.1} className={`${cell} md:col-span-3`}>
            <SpotlightCard pop className="h-full" innerClassName="p-6">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <LuBriefcase className="text-indigo-300" size={18} />
                {a.currentTitle}
              </div>
              <ul className="mt-5 space-y-3">
                {currentRoles.map((exp) => (
                  <li key={exp.id} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                    <p className="font-medium text-white">{exp.company}</p>
                    <p className="text-sm text-zinc-500">{t.experience.items[exp.id].role}</p>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>

          {/* Diferenciais */}
          <Reveal delay={0.05} className={`${cell} md:col-span-6`}>
            <SpotlightCard pop className="h-full" innerClassName="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <LuSparkles className="text-indigo-300" />
                {a.strengthsTitle}
              </div>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {t.strengths.map((item, i) => {
                  const Icon = strengthIcons[i] ?? LuSparkles;
                  return (
                    <li key={item.title}>
                      <span className="inline-flex rounded-lg border border-white/10 bg-white/[0.04] p-2 text-indigo-200">
                        <Icon size={18} aria-hidden />
                      </span>
                      <p className="mt-3 font-semibold tracking-tight text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                    </li>
                  );
                })}
              </ul>
            </SpotlightCard>
          </Reveal>

          {/* Stack principal */}
          <Reveal delay={0.05} className={`${cell} md:col-span-6`}>
            <SpotlightCard pop className="h-full" innerClassName="p-6" glow="52 211 153">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex shrink-0 items-center gap-2 text-sm text-zinc-500">
                  <LuLayers className="text-emerald-300" />
                  {a.stackTitle}
                </div>
                <ul className="flex flex-wrap gap-2 lg:justify-end">
                  {coreStack.map(({ name, icon: Icon, color }) => (
                    <li
                      key={name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 sm:text-sm"
                    >
                      <Icon style={{ color }} aria-hidden />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
