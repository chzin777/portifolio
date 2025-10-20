"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Sou <span className="font-medium">Analista de Sistemas</span> formado em{" "}
        <span className="font-medium">Análise e Desenvolvimento de Sistemas</span> pela UNIP,
        com experiência sólida em desenvolvimento web e gestão de sistemas.
        Atualmente trabalho na <span className="font-medium">R3 Suprimentos</span>, onde
        desenvolvo landing pages com <span className="font-medium">Next.js, React e TypeScript</span>,
        gerencio plataformas CRM como <span className="font-medium">HubSpot</span> e
        crio automações que otimizam processos empresariais.
      </p>

      <p className="mb-3">
        Minha experiência inclui desenvolvimento de{" "}
        <span className="font-medium">APIs, integrações de sistemas</span> e
        criação de soluções web responsivas. Tenho conhecimentos sólidos em{" "}
        <span className="font-medium">banco de dados, metodologias ágeis</span> e
        ferramentas de infraestrutura. O que mais me motiva é{" "}
        <span className="italic">transformar ideias em soluções tecnológicas</span> que
        realmente fazem a diferença no dia a dia das empresas.
      </p>

      <p>
        Atualmente estou cursando uma{" "}
        <span className="font-medium">pós-graduação em Desenvolvimento Java</span>,{" "}
        aprofundando conhecimentos em{" "}
        <span className="font-medium">Spring Boot, APIs REST e arquitetura de software</span>.
        <span className="italic"> Além da programação</span>, tenho interesse em
        inteligência artificial, automação de processos e sempre busco me manter
        atualizado com as últimas tendências tecnológicas.
      </p>

    </motion.section>
  );
}
