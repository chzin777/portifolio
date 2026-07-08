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
          <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">600+</p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Endpoints REST</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10">
          <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">10+</p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Projetos entregues</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10">
          <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">3+</p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Anos de experiência</p>
        </div>
      </div>

      <div className="text-gray-700 dark:text-white/80 space-y-4 text-sm sm:text-base text-left sm:text-center">
        <p>
          Sou <span className="font-semibold text-gray-900 dark:text-white">Desenvolvedor Full-Stack</span> movido
          por transformar problemas de negócio em software que realmente funciona. Formado em
          Análise e Desenvolvimento de Sistemas pela <span className="font-medium">UNIP</span> e
          cursando pós-graduação em Java pela <span className="font-medium">Faculdade Iguaçu</span>.
        </p>

        <p>
          Hoje, na <span className="font-semibold text-gray-900 dark:text-white">Bluetech Films</span>, lidero
          o desenvolvimento de uma plataforma corporativa de RH e ponto eletrônico, do backend em{" "}
          <span className="font-medium">Next.js com mais de 600 endpoints REST</span> ao{" "}
          <span className="font-medium">app mobile em Flutter</span>. Trabalho de ponta a ponta: modelo bancos{" "}
          <span className="font-medium">PostgreSQL, Oracle e Redis</span>, subo infraestrutura com{" "}
          <span className="font-medium">Docker, Nginx e Cloudflare</span> e conecto tudo com automações em{" "}
          <span className="font-medium">n8n</span>.
        </p>

        <p>
          Entre os projetos que mais me orgulho estão um{" "}
          <span className="italic">microsserviço de reconhecimento facial</span> e um{" "}
          <span className="italic">app de ponto biométrico rodando em produção</span>. Meu foco é{" "}
          <span className="font-semibold text-gray-900 dark:text-white">escalabilidade, código limpo e experiências rápidas e confiáveis</span>.
          Fora do editor, gosto de explorar DevOps, novas ferramentas de IA e tudo que me ajude a entregar mais com menos.
        </p>
      </div>
    </motion.section>
  );
}
