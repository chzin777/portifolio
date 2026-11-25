"use client";

import Image from "next/image";
import clsx from "clsx";
import { LuArrowUpRight } from "react-icons/lu";
import { projectBase, type ProjectBase } from "@/lib/data";
import { useLanguage } from "@/context/language-context";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import Reveal from "./ui/Reveal";

function ProjectCard({ project }: { project: ProjectBase }) {
  const { t } = useLanguage();
  const text = t.projects.items[project.id];
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
            alt={`${t.projects.previewAlt} ${text.title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
            decoding="async"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
          {project.featured && (
            <span className="absolute left-4 top-4 rounded-full border border-indigo-300/30 bg-ink-950/70 px-2.5 py-1 text-[11px] font-medium text-indigo-200 backdrop-blur-md">
              {t.projects.featured}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-white">{text.title}</h3>
            {project.projectUrl && (
              <LuArrowUpRight
                aria-hidden
                className="mt-1 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            )}
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{text.description}</p>
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
      aria-label={`${t.projects.open} ${text.title}`}
      className="block h-full rounded-2xl"
    >
      {content}
    </a>
  );
}

/**
 * Largura de cada card na grade de 6 colunas (desktop), sem deixar buracos:
 * linhas de 2 cards ocupam 3 colunas cada, linhas de 3 ocupam 2.
 * Destaques: 2 grandes + o resto em trios. Demais: trios, e a sobra de 2 vira dupla.
 */
function groupSpans(count: number, extrasFirst: boolean): string[] {
  const spans: string[] = Array.from({ length: count }, () => "lg:col-span-2");
  const remainder = count % 3;
  const extras = remainder === 2 ? ["lg:col-span-3", "lg:col-span-3"] : remainder === 1 ? ["lg:col-span-6"] : [];
  const start = extrasFirst ? 0 : count - extras.length;
  extras.forEach((span, i) => {
    spans[start + i] = span;
  });
  return spans;
}

const featuredProjects = projectBase.filter((p) => p.featured);
const otherProjects = projectBase.filter((p) => !p.featured);
const orderedProjects = [...featuredProjects, ...otherProjects];
const spans = [...groupSpans(featuredProjects.length, true), ...groupSpans(otherProjects.length, false)];

export default function Projects() {
  const { ref } = useSectionInView("projects");
  const { t } = useLanguage();

  return (
    <section ref={ref} id="projects" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {orderedProjects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 3) * 0.06}
              className={spans[index]}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
