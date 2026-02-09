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
      className="mb-20 sm:mb-40 max-w-[45rem] text-center leading-7 sm:leading-8 scroll-mt-28 px-4 sm:px-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>

      {/* Key stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
        <div className="p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10">
          <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">100+</p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">API Endpoints</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10">
          <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">3+</p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Anos de Exp.</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10">
          <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Full-Stack</p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Web & Mobile</p>
        </div>
      </div>

      <div className="text-gray-700 dark:text-white/80 space-y-4 text-sm sm:text-base">
        <p>
          Sou <span className="font-medium">Desenvolvedor Full-Stack</span> formado em{" "}
          <span className="font-medium">Análise e Desenvolvimento de Sistemas</span> pela UNIP,
          com sólida experiência em soluções corporativas, automação e integrações.
          Atualmente trabalho na <span className="font-medium">Bluetech Films</span>, onde
          desenvolvo sistemas de RH e gestão com <span className="font-medium">Next.js, React e TypeScript</span>,
          crio dashboards operacionais, sistemas de chat em tempo real e{" "}
          <span className="font-medium">APIs REST com mais de 100 endpoints</span>.
        </p>

        <p>
          Minha experiência inclui{" "}
          <span className="font-medium">infraestrutura containerizada com Docker</span>,
          administração de servidores Linux, gerenciamento de bancos{" "}
          <span className="font-medium">PostgreSQL, Oracle e Redis</span>, e
          implementação de soluções como PgBouncer e MinIO. Destaque para o
          desenvolvimento de um <span className="italic">microsserviço de reconhecimento facial
          multi-linguagem</span> e um <span className="italic">app mobile Flutter para registro
          de ponto com reconhecimento facial</span>.
        </p>

        <p>
          Atualmente estou cursando uma{" "}
          <span className="font-medium">pós-graduação em Desenvolvimento de Sistemas em Java</span>{" "}
          pela Faculdade Iguaçu EAD. Meu foco é em{" "}
          <span className="font-medium">escalabilidade, otimização e lógica de programação impecável</span>.
          <span className="italic"> Além da programação</span>, tenho interesse em
          DevOps, automação de processos e sempre busco me manter
          atualizado com as últimas tendências tecnológicas.
        </p>
      </div>
    </motion.section>
  );
}
