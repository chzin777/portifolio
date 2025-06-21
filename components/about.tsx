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
        Desde que comecei meus estudos em{" "}
        <span className="font-medium">Análise e Desenvolvimento de Sistemas</span>,
        me apaixonei por tecnologia e desenvolvimento de software.
        Tenho aprimorado minhas habilidades através de diversos cursos, incluindo{" "}
        <span className="font-medium">FreeCodeCamp</span> e projetos práticos.
        O que mais me motiva na programação é o{" "}
        <span className="italic">desafio de resolver problemas</span>.
        Eu <span className="underline">gosto</span> da satisfação de encontrar soluções elegantes para desafios complexos.
        Minha stack principal inclui{" "}
        <span className="font-medium">React, Next.js e Node.js</span>,
        e também trabalho bem com TypeScript, Prisma e outras ferramentas modernas.
        Estou sempre aberto a aprender novas tecnologias e atualmente busco uma vaga de{" "}
        <span className="font-medium">Analista de Sistemas</span>.
      </p>

      <p>
        <span className="italic">Quando não estou codando</span>, gosto de jogar videogames, acompanhar tendências tecnológicas e explorar música criando minhas próprias faixas.
      </p>

    </motion.section>
  );
}
