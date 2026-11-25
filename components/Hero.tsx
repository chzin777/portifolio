"use client";

import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import type { MouseEvent } from "react";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { profile } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import CopyEmailButton from "./ui/CopyEmailButton";
import HeroOrbit from "./HeroOrbit";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const SPOT = 560;

export default function Hero() {
  const { ref } = useSectionInView("home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useLanguage();

  // Spotlight movido só por transform (camada de GPU), sem repintar a seção a cada frame.
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  // Posição normalizada (-0.5..0.5) para inclinar a cena 3D.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const tiltX = useSpring(px, { stiffness: 60, damping: 18 });
  const tiltY = useSpring(py, { stiffness: 60, damping: 18 });

  function handleMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - SPOT / 2);
    my.set(e.clientY - rect.top - SPOT / 2);
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      id="home"
      onMouseMove={handleMove}
      className="relative flex min-h-[100svh] scroll-mt-24 items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      {/* Fundo: grid estático + spotlight que segue o cursor + aurora (gradientes, sem filtro blur) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <motion.div
          className="absolute left-0 top-0 hidden rounded-full will-change-transform md:block"
          style={{
            x: sx,
            y: sy,
            width: SPOT,
            height: SPOT,
            background: "radial-gradient(circle, rgba(99,102,241,0.18), transparent 65%)",
          }}
        />
        <div className="absolute -left-[15%] top-[-30%] h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.22),transparent_65%)] will-change-transform motion-safe:animate-aurora" />
        <div className="absolute -right-[15%] top-[0%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12),transparent_65%)]" />
        <div className="absolute bottom-[-35%] left-[25%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.1),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-4 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative order-first flex h-[330px] items-center justify-center sm:h-[460px] lg:order-last lg:my-0 lg:h-[560px]"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.58] sm:scale-[0.8] lg:scale-[0.85] xl:scale-100">
          <HeroOrbit pointerX={tiltX} pointerY={tiltY} />
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex w-full flex-col items-center text-center lg:items-start lg:text-left"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5 text-xs font-medium text-emerald-200 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[4.25rem]"
        >
          {profile.name}
          <span className="mt-2 block text-gradient">{t.hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
          <a
            href="#projects"
            onClick={() => {
              setActiveSection("projects");
              setTimeOfLastClick(Date.now());
            }}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.03] active:scale-100 sm:w-auto"
          >
            {t.hero.ctaProjects}
            <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={profile.cv}
            download
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
          >
            {t.hero.ctaCv}
            <LuDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <CopyEmailButton showAddress={false} className="!px-4 !py-2.5" />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
          >
            <BsLinkedin />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
          >
            <BsGithub />
          </a>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
