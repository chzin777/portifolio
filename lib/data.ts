import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import spring from "@/public/spring.png";
import sangwa from "@/public/sangwa.png";
import streetbridge from "@/public/streetbridge.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Auxiliar de TI e Desenvolvedor de Sistemas",
    location: "R3 Suprimentos – Goiânia, GO",
    description:
      "Gestão completa do HubSpot (Marketing, Vendas e Base de Clientes) | Desenvolvimento de landing pages responsivas (HTML, CSS, JS, Bootstrap, NextJS) | Integração de formulários com HubSpot e redirecionamento automatizado para WhatsApp | Criação de sistema de devolução de Notas Fiscais (NF) | Uso avançado do sistema WinThor para gestão e solução de problemas com NF | Participação ativa em projetos de marketplace e gestão temporária da plataforma | Criação de automações e fluxogramas de sistemas | Suporte com hardware, impressoras e infraestrutura | Elaboração de prompts para aplicações com Inteligência Artificial",
    icon: React.createElement(FaReact),
    date: "2024 - Atual",
  },
  {
    title: "Ensino Superior Tecnológico em Análise e Desenvolvimento de Sistemas",
    location: "UNIP - Goiânia, GO",
    description:
      "Eu me formei em Análise e Desenvolvimento de Sistemas na UNIP, onde aprendi a respeito de sistemas ERP, CRM, API e Programação.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Técnico em Montagem e Manutenção de Computadores e Eletrônicos",
    location: "Infratech – Goiânia, GO",
    description:
      "Suporte técnico a usuários internos e externos | Diagnóstico e reparo de hardware e software | Manutenção de computadores e redes",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;


export const projectsData = [
  {
    title: "KARCHER - R3",
    description:
      "Um site focado na coleta de Leads e redirecionamento de clientes para Whatsapp. Garantindo alimentação da base de contatos e alta probabilidade de venda.",
    tags: ["React", "Next.js", "Tailwind", "Framer",],
    imageUrl: spring,
  },
  {
    title: "FG TRANSPORTES",
    description:
      "Uma Landing Page de uma transportadora para coleta de Leads e apresentação da empresa.",
    tags: ["HTML", "CSS", "JS", "Bootstrap",],
    imageUrl: sangwa,
  },
  {
    title: "HOMEPAGE R3",
    description:
      "Uma HomePage para padronizar os navegadores da empresa, sempre que o usuário abre o MicrosoftEdge a página inicial do mesmo é essa.",
    tags: ["HTML", "CSS", "JS", "Bootstrap",],
    imageUrl: streetbridge,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "MySQL",
  "C",
  "C#",
  "UX/UI Design",
  "Suporte ao Usuário",
  "Projeção de Sistemas",
  "Microsoft Active Directory",
  "Zabbix",
  "Grafana",
  "Lógica",
  "Hardware",
] as const;