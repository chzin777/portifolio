"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import clsx from "clsx";
import type { MouseEvent, ReactNode } from "react";
import { SiAndroid, SiApple, SiAppstore, SiFlutter, SiGoogleplay } from "react-icons/si";
import { LuBattery, LuScanFace, LuSignal, LuStar, LuWifi } from "react-icons/lu";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

/* ---------- Celular em CSS 3D ---------- */

type PhoneProps = {
  children: ReactNode;
  className?: string;
  /** rotação base do aparelho (graus) */
  rotate: number;
  floatDelay?: number;
};

function Phone({ children, className, rotate, floatDelay = 0 }: PhoneProps) {
  // a espessura do aparelho vem de sombras empilhadas na direção oposta à rotação
  const dir = rotate > 0 ? -1 : 1;
  const edge = Array.from({ length: 7 }, (_, i) => `${dir * (i + 1)}px ${i + 1}px 0 #1c1c24`).join(", ");

  return (
    <motion.div
      className={clsx("absolute [transform-style:preserve-3d]", className)}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
    >
      <div
        className="relative h-[400px] w-[196px] rounded-[2.4rem] border border-white/15 bg-[#0b0b10] p-[9px] sm:h-[460px] sm:w-[224px]"
        style={{
          transform: `rotateY(${rotate}deg) rotateX(6deg)`,
          boxShadow: `${edge}, 0 40px 80px -20px rgba(0,0,0,0.9)`,
        }}
      >
        {/* tela */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-ink-950">
          {children}
          {/* reflexo do vidro */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.12)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.04)_100%)]"
          />
        </div>
        {/* botões laterais */}
        <span aria-hidden className="absolute -right-[3px] top-24 h-14 w-[3px] rounded-r bg-white/15" />
        <span aria-hidden className="absolute -left-[3px] top-20 h-8 w-[3px] rounded-l bg-white/15" />
        <span aria-hidden className="absolute -left-[3px] top-32 h-12 w-[3px] rounded-l bg-white/15" />
      </div>
    </motion.div>
  );
}

function StatusBar({ notch }: { notch: "island" | "punch" }) {
  return (
    <div className="relative flex items-center justify-between px-5 pt-3 text-[10px] font-semibold text-white/80">
      <span>9:41</span>
      {notch === "island" ? (
        <span aria-hidden className="absolute left-1/2 top-2 h-5 w-16 -translate-x-1/2 rounded-full bg-black" />
      ) : (
        <span aria-hidden className="absolute left-1/2 top-2.5 h-3 w-3 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />
      )}
      <span className="flex items-center gap-1">
        <LuSignal size={10} />
        <LuWifi size={10} />
        <LuBattery size={12} />
      </span>
    </div>
  );
}

const mock = {
  pt: { title: "Registrar ponto", cta: "Bater ponto", app: "Seu App", category: "Produtividade", get: "OBTER" },
  en: { title: "Clock in", cta: "Clock in now", app: "Your App", category: "Productivity", get: "GET" },
} as const;

/* Tela 1 (Android): o app em uso, registro de ponto com reconhecimento facial */
function AndroidScreen() {
  const { locale } = useLanguage();
  const text = mock[locale];
  return (
    <div className="flex h-full flex-col bg-[radial-gradient(circle_at_50%_0%,rgba(84,197,248,0.25),transparent_60%)]">
      <StatusBar notch="punch" />
      <div className="mt-5 px-5">
        <p className="text-[10px] uppercase tracking-widest text-sky-300/80">Flutter app</p>
        <p className="text-base font-semibold text-white">{text.title}</p>
      </div>

      <div className="relative mx-auto mt-5 flex h-28 w-28 shrink-0 items-center justify-center sm:mt-6 sm:h-32 sm:w-32">
        <span className="absolute inset-0 rounded-full border-2 border-dashed border-sky-400/40" />
        <span className="absolute inset-3 rounded-full border border-sky-300/30" />
        <LuScanFace className="text-sky-300" size={48} />
      </div>

      <div className="mx-4 mt-6 space-y-2">
        {["08:02", "12:01", "13:04"].map((time, i) => (
          <div
            key={time}
            className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-2"
          >
            <span className="h-1.5 w-16 rounded-full bg-white/20" />
            <span className={clsx("font-mono text-[10px]", i === 2 ? "text-emerald-300" : "text-white/60")}>
              {time}
            </span>
          </div>
        ))}
      </div>

      <div className="mx-4 mb-5 mt-auto rounded-xl bg-sky-400 py-2.5 text-center text-xs font-semibold text-ink-950">
        {text.cta}
      </div>
    </div>
  );
}

/* Tela 2 (iOS): a ficha do app publicada na loja */
function IosScreen() {
  const { locale } = useLanguage();
  const text = mock[locale];
  return (
    <div className="flex h-full flex-col bg-[radial-gradient(circle_at_50%_0%,rgba(129,140,248,0.25),transparent_60%)]">
      <StatusBar notch="island" />
      <div className="mt-6 flex items-center gap-3 px-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 shadow-lg shadow-indigo-500/30">
          <SiFlutter className="text-white" size={26} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{text.app}</p>
          <p className="text-[10px] text-white/50">{text.category}</p>
          <span className="mt-1 inline-block rounded-full bg-indigo-400 px-3 py-0.5 text-[10px] font-bold text-white">
            {text.get}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1 px-4 text-amber-300">
        {Array.from({ length: 5 }, (_, i) => (
          <LuStar key={i} size={11} className="fill-current" />
        ))}
        <span className="ml-1 text-[10px] text-white/50">4.9</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 px-4">
        {[0, 1].map((i) => (
          <div key={i} className="h-36 rounded-xl border border-white/[0.06] bg-white/[0.04] p-2">
            <div className="h-1.5 w-10 rounded-full bg-white/25" />
            <div className="mt-2 h-14 rounded-lg bg-gradient-to-br from-indigo-400/30 to-sky-400/20" />
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/10" />
            <div className="mt-1 h-1.5 w-2/3 rounded-full bg-white/10" />
          </div>
        ))}
      </div>

      <div className="mx-4 mb-5 mt-auto flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.06] py-2 text-[10px] text-white/70">
        <SiAppstore size={12} /> App Store
      </div>
    </div>
  );
}

/* ---------- Seção ---------- */

const stores = [
  { name: "Google Play", icon: SiGoogleplay, platform: "Android", platformIcon: SiAndroid, color: "#3DDC84" },
  { name: "App Store", icon: SiAppstore, platform: "iOS", platformIcon: SiApple, color: "#0D96F6" },
] as const;

export default function MobileApps() {
  const { t } = useLanguage();
  const m = t.mobile;

  // inclinação do palco acompanhando o mouse (só transform)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section id="mobile" className="scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Texto */}
        <div>
          <SectionHeading eyebrow={m.eyebrow} title={m.title} description={m.description} />

          <ul className="-mt-4 grid gap-4 sm:grid-cols-2">
            {m.points.map((point, i) => (
              <li key={point.title}>
                <Reveal
                  delay={i * 0.05}
                  className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <p className="font-semibold tracking-tight text-white">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{point.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.1} className="mt-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{m.storesTitle}</p>
            <div className="flex flex-wrap gap-3">
              {stores.map(({ name, icon: Icon, platform, platformIcon: PlatformIcon, color }) => (
                <div
                  key={name}
                  className="group flex items-center gap-3 rounded-xl border border-white/15 bg-black px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30"
                >
                  <Icon size={22} style={{ color }} aria-hidden />
                  <div className="leading-tight">
                    <p className="text-[10px] text-zinc-400">{m.available}</p>
                    <p className="text-sm font-semibold text-white">{name}</p>
                  </div>
                  <span className="ml-1 flex items-center gap-1 rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-zinc-400">
                    <PlatformIcon aria-hidden /> {platform}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Palco 3D */}
        <Reveal y={40}>
          <div
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative mx-auto h-[480px] w-full max-w-[460px] [perspective:1400px] sm:h-[540px]"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(84,197,248,0.16),transparent_60%)]" />

            <motion.div className="relative h-full w-full [transform-style:preserve-3d]" style={{ rotateX, rotateY }}>
              <Phone rotate={-22} floatDelay={1.2} className="right-[2%] top-[6%] sm:right-[4%]">
                <IosScreen />
              </Phone>
              <Phone rotate={18} className="left-[2%] top-[10%] sm:left-[4%]">
                <AndroidScreen />
              </Phone>

              {/* selos de plataforma flutuando */}
              <motion.span
                className="absolute bottom-[1%] left-[4%] flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-xl"
                style={{ translateZ: 60 }}
              >
                <SiAndroid className="text-[#3DDC84]" /> Android
              </motion.span>
              <motion.span
                className="absolute right-[6%] top-[2%] flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-xl"
                style={{ translateZ: 60 }}
              >
                <SiApple /> iOS
              </motion.span>
              <motion.span
                className="absolute bottom-[2%] right-[12%] flex items-center gap-2 rounded-full border border-sky-300/20 bg-ink-900/90 px-3 py-1.5 text-xs font-medium text-sky-200 shadow-xl"
                style={{ translateZ: 80 }}
              >
                <SiFlutter className="text-[#54C5F8]" /> Flutter
              </motion.span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
