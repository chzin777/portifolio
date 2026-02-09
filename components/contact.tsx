"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsEnvelope, BsTelephone, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full sm:w-[min(100%,38rem)] text-center px-4 sm:px-0"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contato</SectionHeading>

      <p className="text-sm sm:text-base text-gray-600 dark:text-white/70 -mt-4 mb-8">
        Tem um projeto em mente ou quer trocar uma ideia? Ficarei feliz em conversar!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
        <a
          href="mailto:hchristofer130@gmail.com"
          className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 group hover-glow"
        >
          <div className="p-2.5 rounded-lg bg-white dark:bg-white/10 shadow-sm group-hover:shadow-md transition-shadow">
            <BsEnvelope className="text-gray-700 dark:text-gray-300" />
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90 break-all">hchristofer130@gmail.com</p>
          </div>
        </a>

        <a
          href="tel:+5562996183309"
          className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 group hover-glow"
        >
          <div className="p-2.5 rounded-lg bg-white dark:bg-white/10 shadow-sm group-hover:shadow-md transition-shadow">
            <BsTelephone className="text-gray-700 dark:text-gray-300" />
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 dark:text-gray-400">Telefone</p>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">(62) 9 9618-3309</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/christofer-henrique-43366725b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 group hover-glow"
        >
          <div className="p-2.5 rounded-lg bg-white dark:bg-white/10 shadow-sm group-hover:shadow-md transition-shadow">
            <BsLinkedin className="text-gray-700 dark:text-gray-300" />
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 dark:text-gray-400">LinkedIn</p>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">Christofer Henrique</p>
          </div>
        </a>

        <a
          href="https://github.com/chzin777"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 group hover-glow"
        >
          <div className="p-2.5 rounded-lg bg-white dark:bg-white/10 shadow-sm group-hover:shadow-md transition-shadow">
            <BsGithub className="text-gray-700 dark:text-gray-300" />
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 dark:text-gray-400">GitHub</p>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">chzin777</p>
          </div>
        </a>
      </div>
    </motion.section>
  );
}
