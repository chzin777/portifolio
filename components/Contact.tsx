"use client";

import { BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import type { IconType } from "react-icons";
import { profile } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SpotlightCard from "./ui/SpotlightCard";
import CopyEmailButton from "./ui/CopyEmailButton";
import Reveal from "./ui/Reveal";

type ContactLink = { label: string; value: string; href: string; icon: IconType; external: boolean };

const contactLinks: readonly ContactLink[] = [
  { label: "LinkedIn", value: profile.name, href: profile.linkedin, icon: BsLinkedin, external: true },
  { label: "GitHub", value: profile.githubUser, href: profile.github, icon: BsGithub, external: true },
  { label: "Telefone", value: profile.phone, href: profile.phoneHref, icon: BsTelephone, external: false },
];

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <section ref={ref} id="contact" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SpotlightCard lift={false} innerClassName="px-6 py-12 sm:px-12 sm:py-16">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[80px]" />
            <div className="relative text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-300/80">Contato</p>
              <h2 className="mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Vamos construir algo <span className="text-gradient">que vai para produção?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-zinc-400">
                Projetos, oportunidades ou uma conversa sobre arquitetura — respondo rápido.
              </p>

              <div className="mt-8 flex justify-center">
                <CopyEmailButton />
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-3">
                {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group/link flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <span className="rounded-lg bg-white/[0.06] p-2.5 text-zinc-300">
                        <Icon aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-zinc-500">{label}</span>
                        <span className="block truncate text-sm font-medium text-zinc-100">{value}</span>
                      </span>
                      <LuArrowUpRight
                        aria-hidden
                        className="shrink-0 text-zinc-600 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-white"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
