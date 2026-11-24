"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, type Variants } from "framer-motion";
import type { MouseEvent } from "react";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { profile } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import CopyEmailButton from "./ui/CopyEmailButton";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { ref } = useSectionInView("Início");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${sx}% ${sy}%, rgba(99,102,241,0.16), transparent 65%)`;
  const gridMask = useMotionTemplate`radial-gradient(420px circle at ${sx}% ${sy}%, black, transparent 75%)`;

  function handleMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      ref={ref}
      id="home"
      onMouseMove={handleMove}
      className="relative flex min-h-[100svh] scroll-mt-24 items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      {/* Fundo: grid estático + grid iluminado pelo cursor + aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <motion.div className="bg-grid absolute inset-0 opacity-90" style={{ maskImage: gridMask, WebkitMaskImage: gridMask }} />
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
        <div className="absolute -left-[10%] top-[-20%] h-[38rem] w-[38rem] rounded-full bg-indigo-600/20 blur-[120px] motion-safe:animate-aurora" />
        <div className="absolute -right-[10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[120px] motion-safe:animate-aurora [animation-delay:-6s]" />
        <div className="absolute bottom-[-25%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[120px] motion-safe:animate-aurora [animation-delay:-12s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5 text-xs font-medium text-emerald-200 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponível para novos projetos
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {profile.name}
          <span className="mt-2 block text-gradient">Full Stack Developer.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {profile.role}. Construo CRMs, integrações com WhatsApp e ERPs, e-commerce e sistemas web de ponta a ponta,
          do banco de dados ao deploy em produção.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#projects"
            onClick={() => {
              setActiveSection("Projetos");
              setTimeOfLastClick(Date.now());
            }}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.03] active:scale-100 sm:w-auto"
          >
            Ver projetos
            <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={profile.cv}
            download
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
          >
            Baixar CV
            <LuDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
    </section>
  );
}
