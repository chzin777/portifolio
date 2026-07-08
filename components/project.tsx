"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string;
  projectUrl: string;
  tall?: boolean;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  tall = false,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const hasLink = projectUrl && projectUrl !== "#";
  const Wrapper = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? { href: projectUrl, target: "_blank", rel: "noopener noreferrer" }
    : {};

  const linkIndicator = hasLink && (
    <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-md">
      <BsArrowUpRight className="text-gray-700 dark:text-gray-300 text-sm" />
    </div>
  );

  const header = (
    <>
      <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-white/70">
        {description}
      </p>
      <ul className="flex flex-wrap mt-3 gap-1.5 sm:gap-2">
        {tags.map((tag, index) => (
          <li
            className="bg-gray-800 px-2.5 sm:px-3 py-1 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider text-white/90 rounded-full dark:bg-white/15 dark:text-white/80"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  // Layout vertical: mostra o print de página inteira quase por completo.
  if (tall) {
    return (
      <motion.div
        ref={ref}
        style={{ scale: scaleProgess, opacity: opacityProgess }}
        className="group mb-5 sm:mb-8 last:mb-0"
      >
        <Wrapper {...wrapperProps}>
          <section className="bg-gray-100 max-w-[42rem] mx-auto border border-black/5 rounded-xl overflow-hidden relative hover:bg-gray-200/80 transition-all duration-300 dark:text-white dark:bg-white/10 dark:hover:bg-white/[0.15] hover-glow cursor-pointer">
            {linkIndicator}
            <div className="pt-5 pb-4 px-5 sm:pt-8 sm:px-8">{header}</div>
            <div className="max-h-[34rem] overflow-hidden border-t border-black/5 dark:border-white/10">
              {/* Print completo, largura total, sem distorção (imagens são unoptimized) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto object-top block transition-transform duration-500 group-hover:-translate-y-[calc(100%-34rem)]"
              />
            </div>
          </section>
        </Wrapper>
      </motion.div>
    );
  }

  // Layout horizontal padrão (thumbnail lateral). min-h evita cortar textos longos.
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-5 sm:mb-8 last:mb-0"
    >
      <Wrapper {...wrapperProps}>
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-xl overflow-hidden sm:pr-8 relative sm:min-h-[20rem] hover:bg-gray-200/80 transition-all duration-300 sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/[0.15] hover-glow cursor-pointer">
          {linkIndicator}

          <div className="pt-4 pb-5 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:pb-10 sm:max-w-[50%] flex flex-col sm:group-even:ml-[18rem]">
            {header}
          </div>

          {/* Mobile: imagem abaixo do texto */}
          <Image
            src={imageUrl}
            alt={title}
            width={452}
            height={300}
            quality={95}
            className="sm:hidden w-full h-56 object-cover object-top rounded-b-xl"
          />

          {/* Desktop: imagem em posição absoluta */}
          <Image
            src={imageUrl}
            alt={title}
            width={452}
            height={300}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[16rem] object-cover object-top rounded-t-lg shadow-2xl
          transition-all duration-300
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </Wrapper>
    </motion.div>
  );
}
