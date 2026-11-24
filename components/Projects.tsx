"use client";

import Image from "next/image";
import clsx from "clsx";
import { LuArrowUpRight } from "react-icons/lu";
import { projectsData, type Project } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import Reveal from "./ui/Reveal";

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <SpotlightCard className="h-full">
      <div className="flex h-full flex-col">
        <div
          className={clsx(
            "relative overflow-hidden border-b border-white/10 bg-ink-850",
            project.featured ? "aspect-[16/9]" : "aspect-[16/10]"
          )}
        >
          <Image
            src={project.imageUrl}
            alt={`Prévia do projeto ${project.title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
          {project.featured && (
            <span className="absolute left-4 top-4 rounded-full border border-indigo-300/30 bg-ink-950/70 px-2.5 py-1 text-[11px] font-medium text-indigo-200 backdrop-blur-md">
              Destaque
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-white">{project.title}</h3>
            {project.projectUrl && (
              <LuArrowUpRight
                aria-hidden
                className="mt-1 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            )}
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-zinc-400">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SpotlightCard>
  );

  if (!project.projectUrl) return content;

  return (
    <a
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${project.title}`}
      className="block h-full rounded-2xl"
    >
      {content}
    </a>
  );
}

export default function Projects() {
  const { ref } = useSectionInView("Projetos");

  return (
    <section ref={ref} id="projects" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projetos"
          title="Produtos que estão no ar."
          description="SaaS, plataformas corporativas, automações e landing pages de alta conversão."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {projectsData.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 3) * 0.06}
              className={project.featured ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
