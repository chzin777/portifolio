"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import ChromaGrid, { ChromaItem } from "./chroma-grid";
import { useSectionInView } from "@/lib/hooks";

// Subtítulo curto + cor de destaque por projeto (não polui os dados).
const meta: Record<string, { subtitle: string; color: string }> = {
  "Valeris People": { subtitle: "RH & Ponto eletrônico • Full-stack", color: "#4F46E5" },
  CardaMovie: { subtitle: "Cardápio digital em vídeo", color: "#F97316" },
  "Easy-NFe": { subtitle: "Emissão de NF-e / NFC-e (SaaS)", color: "#059669" },
  "Dashboard de Transferências": { subtitle: "Monitoramento entre filiais", color: "#2563EB" },
  "GN Pré-moldados": { subtitle: "Landing com visualizador 3D", color: "#0891B2" },
  "Prática Soluções Empresariais": { subtitle: "Landing + calculadoras de leads", color: "#7C3AED" },
  "Promotion Bot": { subtitle: "Afiliados automáticos no WhatsApp", color: "#16A34A" },
  Hitched: { subtitle: "Sites de casamento + memórias por QR", color: "#E11D48" },
  "KARCHER - R3": { subtitle: "Landing de captação de leads", color: "#EAB308" },
  "Landing Page eBook R3": { subtitle: "Landing de eBook + leads", color: "#EC4899" },
  "FG Transportes": { subtitle: "Site institucional", color: "#64748B" },
};

export default function Projects() {
  const { ref } = useSectionInView("Projetos", 0.3);

  const items: ChromaItem[] = projectsData.map((p) => {
    const m = meta[p.title] ?? { subtitle: "", color: "#4F46E5" };
    return {
      image: p.imageUrl,
      title: p.title,
      subtitle: m.subtitle,
      tags: p.tags,
      tall: "tall" in p ? (p as { tall?: boolean }).tall : false,
      borderColor: m.color,
      gradient: `linear-gradient(145deg, ${m.color}, #060606)`,
      url: p.projectUrl && p.projectUrl !== "#" ? p.projectUrl : undefined,
    };
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-20 sm:mb-28 px-4 sm:px-0 w-full max-w-[70rem]"
    >
      <SectionHeading>Meus Projetos</SectionHeading>
      <ChromaGrid items={items} radius={340} />
    </section>
  );
}
