"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import type { CSSProperties } from "react";
import { LuCheck } from "react-icons/lu";
import { profile, techStack } from "@/lib/data";

const techByName = new Map(techStack.map((tech) => [tech.name, tech]));

type Ring = {
  radius: number;
  /** inclinação do anel no plano da tela (graus) */
  roll: number;
  /** profundidade do anel */
  depth: number;
  duration: number;
  reverse?: boolean;
  techs: readonly string[];
};

const TILT = 72;

const rings: readonly Ring[] = [
  { radius: 150, roll: -18, depth: 0, duration: 26, techs: ["Next.js", "React", "TypeScript"] },
  { radius: 200, roll: 38, depth: 30, duration: 34, reverse: true, techs: ["Flutter", "Docker", "PostgreSQL", "WhatsApp API"] },
  { radius: 245, roll: -62, depth: -30, duration: 42, techs: ["Node.js", "Oracle", "Redis", "Prisma", "Cloudflare"] },
];

type Props = {
  /** posição normalizada do mouse no hero, de -0.5 a 0.5 */
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
};

/** Cena 3D em CSS puro: foto no núcleo e anéis orbitais com a stack, inclinando com o mouse. */
export default function HeroOrbit({ pointerX, pointerY }: Props) {
  const rotateY = useTransform(pointerX, (v) => v * 22);
  const rotateX = useTransform(pointerY, (v) => v * -18);
  const cardX = useTransform(pointerX, (v) => v * -30);
  const cardY = useTransform(pointerY, (v) => v * -30);

  return (
    <div aria-hidden className="pointer-events-none relative h-[560px] w-[560px] select-none [perspective:1400px]">
      <motion.div className="preserve-3d absolute inset-0" style={{ rotateX, rotateY }}>
        {/* brilho atrás do núcleo */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.35),rgba(6,182,212,0.12)_45%,transparent_70%)]" />

        {/* anéis */}
        {rings.map((ring) => {
          const style = {
            "--orbit-duration": `${ring.duration}s`,
            width: ring.radius * 2,
            height: ring.radius * 2,
            marginLeft: -ring.radius,
            marginTop: -ring.radius,
          } as CSSProperties;

          return (
            <div
              key={ring.radius}
              className="preserve-3d absolute left-1/2 top-1/2"
              style={{
                ...style,
                transform: `translateZ(${ring.depth}px) rotateZ(${ring.roll}deg) rotateX(${TILT}deg)`,
              }}
            >
              <div
                className={`preserve-3d absolute inset-0 rounded-full border border-white/[0.09] shadow-[0_0_40px_-10px_rgba(129,140,248,0.45)_inset] ${
                  ring.reverse ? "orbit-spin-reverse" : "orbit-spin"
                }`}
                style={{ "--orbit-duration": `${ring.duration}s` } as CSSProperties}
              >
                {ring.techs.map((name, i) => {
                  const tech = techByName.get(name);
                  if (!tech) return null;
                  const Icon = tech.icon;
                  const angle = (360 / ring.techs.length) * i;

                  return (
                    <div
                      key={name}
                      className="preserve-3d absolute left-1/2 top-1/2 h-0 w-0"
                      style={{ transform: `rotate(${angle}deg) translateX(${ring.radius}px) rotate(${-angle}deg)` }}
                    >
                      {/* desfaz o giro do anel */}
                      <div
                        className={`preserve-3d ${ring.reverse ? "orbit-spin" : "orbit-spin-reverse"}`}
                        style={{ "--orbit-duration": `${ring.duration}s` } as CSSProperties}
                      >
                        {/* desfaz a inclinação para o ícone ficar de frente */}
                        <div
                          className="preserve-3d"
                          style={{ transform: `rotateX(${-TILT}deg) rotateZ(${-ring.roll}deg)` }}
                        >
                          <span
                            className="-ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-ink-900/80 text-2xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.8)] backdrop-blur-md"
                            style={{ boxShadow: `0 0 22px -6px ${tech.color}` }}
                          >
                            <Icon style={{ color: tech.color }} />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* núcleo com a foto */}
        <div
          className="preserve-3d absolute left-1/2 top-1/2 h-36 w-36"
          style={{ transform: "translate(-50%, -50%) translateZ(60px)" }}
        >
          <div className="orbit-spin absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#818cf8,#22d3ee,#34d399,#818cf8)] opacity-90 [--orbit-duration:6s]" />
          <div className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#818cf8,#22d3ee,#34d399,#818cf8)] opacity-60 blur-xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-ink-950">
            <Image src={profile.photo} alt="" fill sizes="144px" className="object-cover" priority />
          </div>
        </div>
      </motion.div>

      {/* cards flutuantes com paralaxe */}
      <motion.div
        className="absolute bottom-14 left-0 rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 font-mono text-xs shadow-2xl backdrop-blur-md"
        style={{ x: cardX, y: cardY }}
      >
        <p className="text-zinc-500">
          <span className="text-emerald-400">$</span> git push origin main
        </p>
        <p className="mt-1.5 flex items-center gap-1.5 text-emerald-300">
          <LuCheck aria-hidden /> deploy: production
        </p>
      </motion.div>

      <motion.div
        className="absolute right-0 top-16 rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 font-mono text-xs shadow-2xl backdrop-blur-md"
        style={{ x: cardX, y: cardY }}
      >
        <p className="text-zinc-500">
          <span className="text-indigo-300">const</span> stack = <span className="text-cyan-300">&quot;full&quot;</span>;
        </p>
        <p className="mt-1.5 text-zinc-500">
          <span className="text-indigo-300">await</span> ship<span className="text-zinc-300">()</span>;
        </p>
      </motion.div>
    </div>
  );
}
