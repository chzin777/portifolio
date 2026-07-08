"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import SplitText from "./SplitText";


export default function Intro() {
  const { ref } = useSectionInView("Início", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] px-4 sm:px-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/eu.jpg"
              alt="Christofer Henrique"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-gray-800"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Status badge */}
      <motion.div
        className="flex items-center justify-center mt-4 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Disponível para oportunidades
        </span>
      </motion.div>

      <div className="mt-4 px-2 sm:px-4 flex justify-center">
        <SplitText
          text="Olá! Eu sou o Christofer 👋"
          tag="h1"
          className="text-2xl sm:text-4xl md:text-5xl font-bold !leading-[1.25] tracking-tight"
          delay={55}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          textAlign="center"
        />
      </div>

      <motion.p
        className="mb-8 sm:mb-10 mt-5 px-2 sm:px-4 text-base sm:text-lg md:text-xl font-medium !leading-[1.6] text-gray-700 dark:text-white/80 max-w-[46rem] mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <span className="font-bold gradient-text">Desenvolvedor Full-Stack</span>{" "}
        que constrói sistemas corporativos de ponta a ponta, de{" "}
        <span className="font-semibold text-gray-900 dark:text-white">APIs REST escaláveis</span>{" "}
        e{" "}
        <span className="font-semibold text-gray-900 dark:text-white">infraestrutura DevOps</span>{" "}
        a{" "}
        <span className="italic">apps mobile e automações inteligentes</span>. Transformo
        processos complexos em produtos{" "}
        <span className="underline decoration-gray-400 dark:decoration-gray-500 underline-offset-4">rápidos, confiáveis e fáceis de usar</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 px-4 text-base sm:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-6 sm:px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all duration-300 w-full sm:w-auto justify-center shadow-lg shadow-gray-900/20 dark:shadow-none"
          onClick={() => {
            setActiveSection("Contato");
            setTimeOfLastClick(Date.now());
          }}
        >
          Me contate aqui{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>

        <a
          className="group bg-white px-6 sm:px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 cursor-pointer borderBlack dark:bg-white/10 w-full sm:w-auto justify-center hover:shadow-lg"
          href="/CV.pdf"
          download
        >
          Baixar CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-transform duration-300" />
        </a>

        <div className="flex items-center gap-3 sm:gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-300 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white hover:shadow-lg"
            href="https://www.linkedin.com/in/christofer-henrique-43366725b/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all duration-300 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white hover:shadow-lg"
            href="https://github.com/chzin777"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
