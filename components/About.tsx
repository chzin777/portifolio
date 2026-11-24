"use client";

import Image from "next/image";
import { LuGraduationCap, LuMapPin, LuSparkles, LuLayers } from "react-icons/lu";
import { experiencesData, profile, stats, techStack } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import Reveal from "./ui/Reveal";

const currentRoles = experiencesData.filter((exp) => exp.current);
const coreStack = techStack.slice(0, 8);

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <section ref={ref} id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Sobre"
          title="Do banco de dados ao deploy."
          description="Desenvolvo produtos que resolvem problemas reais de operação: atendimento, vendas, integração com ERPs e automações."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-auto">
          {/* Bio */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <SpotlightCard className="h-full" innerClassName="p-6 sm:p-8">
              <div className="flex h-full flex-col gap-6 sm:flex-row sm:items-start">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-28 sm:w-28">
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    sizes="112px"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 text-zinc-400">
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Olá, eu sou o {profile.firstName}.
                  </h3>
                  <p className="leading-relaxed">
                    Sou <span className="text-zinc-100">{profile.role}</span> e hoje cuido de todo o ecossistema digital
                    da <span className="text-zinc-100">Óticas Brasil</span>: CRM, automações de marketing, WhatsApp Cloud
                    API, integração com o ERP VMSET (Oracle) e o novo e-commerce.
                  </p>
                  <p className="leading-relaxed">
                    Em paralelo, evoluo o <span className="text-zinc-100">Avodah SAC</span> para a Avodah Optical e sou
                    co-fundador da <span className="text-zinc-100">Comply</span>, onde construímos software sob medida.
                    Gosto de código tipado, infraestrutura simples e entregas que chegam em produção.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Localização + cargo */}
          <Reveal delay={0.05} className="md:col-span-2">
            <SpotlightCard className="h-full" innerClassName="p-6" glow="34 211 238">
              <LuMapPin className="text-cyan-300" size={20} />
              <p className="mt-4 text-sm text-zinc-500">Baseado em</p>
              <p className="text-lg font-semibold tracking-tight text-white">{profile.location}</p>
              <p className="mt-3 text-sm text-zinc-400">Remoto ou híbrido · {profile.roleEn}</p>
            </SpotlightCard>
          </Reveal>

          {/* Formação */}
          <Reveal delay={0.1} className="md:col-span-2">
            <SpotlightCard className="h-full" innerClassName="p-6" glow="52 211 153">
              <LuGraduationCap className="text-emerald-300" size={22} />
              <p className="mt-4 text-sm text-zinc-500">Formação</p>
              <p className="text-lg font-semibold leading-snug tracking-tight text-white">{profile.education}</p>
              <p className="mt-2 text-sm text-zinc-400">{profile.school}</p>
            </SpotlightCard>
          </Reveal>

          {/* Atuação atual */}
          <Reveal delay={0.05} className="md:col-span-3">
            <SpotlightCard className="h-full" innerClassName="p-6">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <LuSparkles className="text-indigo-300" />
                Atuação atual
              </div>
              <ul className="mt-4 space-y-3">
                {currentRoles.map((exp) => (
                  <li key={exp.company} className="flex items-center justify-between gap-3">
                    <span className="font-medium text-white">{exp.company}</span>
                    <span className="truncate text-right text-sm text-zinc-500">{exp.role}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>

          {/* Números */}
          <Reveal delay={0.1} className="md:col-span-3">
            <SpotlightCard className="h-full" innerClassName="p-6" glow="34 211 238">
              <div className="grid h-full grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col justify-start">
                    <p className="text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">{stat.value}</p>
                    <p className="mt-1 text-xs leading-snug text-zinc-500 sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Stack principal */}
          <Reveal delay={0.05} className="md:col-span-6">
            <SpotlightCard className="h-full" innerClassName="p-6" glow="52 211 153" lift={false}>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <LuLayers className="text-emerald-300" />
                  Stack do dia a dia
                </div>
                <ul className="flex flex-wrap gap-2">
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
