"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Entre em contato comigo diretamente pelo email:{" "}
        <a 
          className="underline hover:text-gray-900 dark:hover:text-white font-medium" 
          href="mailto:hchristofer130@gmail.com"
        >
          hchristofer130@gmail.com
        </a>
      </p>

      <p className="text-gray-700 mt-4 dark:text-white/80">
        Também me encontre no{" "}
        <a 
          className="underline hover:text-gray-900 dark:hover:text-white font-medium" 
          href="https://www.linkedin.com/in/christofer-henrique-43366725b/" 
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        ou no{" "}
        <a 
          className="underline hover:text-gray-900 dark:hover:text-white font-medium" 
          href="https://github.com/chzin777" 
          target="_blank"
        >
          GitHub
        </a>.
      </p>
    </motion.section>
  );
}
