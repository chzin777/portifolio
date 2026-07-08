"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillGroups } from "@/lib/data";
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

      <div className="flex flex-col gap-8 sm:gap-10">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-white/50">
              {group.category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-800">
              {group.skills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 dark:bg-white/10 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-200 cursor-default hover:scale-105 hover:shadow-md"
                  key={skill}
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
          </div>
        ))}
      </div>
    </section>
  );
}
