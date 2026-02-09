"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-20 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-4 sm:px-0"
    >
      <SectionHeading>Minhas Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 dark:bg-white/10 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-200 cursor-default hover:scale-105 hover:shadow-md"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
