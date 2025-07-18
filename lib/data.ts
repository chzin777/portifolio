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
      "Landing page exclusiva para captação de leads, com animações Framer Motion, Next.js, responsiva e design premium. Armazenamento seguro dos dados dos leads.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    imageUrl: "https://i.postimg.cc/CMvrd7y1/imagem-2025-07-18-152840104.png",
    projectUrl: "https://karcher-r3.com.br",
  },
  {
    title: "Workshop Hotelaria R3",
    description:
      "Landing page de inscrição em workshop, com integração N8N + HubSpot, envio automático de leads e redirecionamento para WhatsApp.",
    tags: ["Next.js", "TypeScript", "Tailwind", "N8N", "HubSpot"],
    imageUrl: "https://i.postimg.cc/SNSqbD6x/Screenshot-2025-07-18-18-24-37.png",
    projectUrl: "https://workshop-iota-gilt.vercel.app",
  },
  {
    title: "Landing Page eBook R3",
    description:
      "Landing page em Next.js para coleta de leads e entrega automática de eBook. Totalmente responsiva e integrada com sistemas de marketing.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Leads", "eBook"],
    imageUrl: "https://i.postimg.cc/hGqSJcFK/imagem-2025-07-18-151044390.png",
    projectUrl: "https://ebook-pearl-alpha.vercel.app",
  },
  {
    title: "Formulário de Parcerias R3",
    description:
      "Formulário completo em Next.js + TypeScript com integração ao banco de dados Supabase. Coleta, validação e armazenamento seguro dos dados dos parceiros.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    imageUrl: "https://i.postimg.cc/bwSxyHPK/Screenshot-2025-07-18-18-18-36.png",
    projectUrl: "https://parceiros-r3.vercel.app",
  },
  {
    title: "Central de Downloads R3",
    description:
      "Central de downloads para softwares, drivers e links úteis da empresa. Interface moderna, organizada e responsiva para facilitar o dia a dia dos colaboradores.",
    tags: ["HTML", "CSS"],
    imageUrl: "https://i.postimg.cc/pTwkvGhc/Screenshot-2025-07-18-18-05-01.png",
    projectUrl: "#", // Coloque aqui o link do projeto se/quando houver!
  },
  {
    title: "Homepage R3",
    description:
      "Página inicial personalizada para navegadores dos computadores da empresa, com links rápidos e design institucional.",
    tags: ["HTML", "CSS"],
    imageUrl: "https://i.postimg.cc/Y0FhCTBh/Screenshot-2025-07-18-18-01-22.png",
    projectUrl: "#",
  },
  {
    title: "FAQ R3 Suprimentos",
    description:
      "Site institucional FAQ em HTML e CSS para auxiliar colaboradores sobre os sistemas e processos internos da empresa.",
    tags: ["HTML", "CSS"],
    imageUrl: "https://i.postimg.cc/Y9kJ7C5m/Screenshot-2025-07-18-17-57-48.png",
    projectUrl: "#",
  },
  {
    title: "FG Transportes",
    description:
      "Site institucional para empresa de transportes, focado em diferenciais, contato e coleta de leads.",
    tags: ["HTML", "CSS", "Bootstrap"],
    imageUrl: "https://i.postimg.cc/zBrV1TDS/imagem-2025-07-18-150841699.png",
    projectUrl: "https://chzin777.github.io/fg-transportes/",
  },
  {
    title: "Portfólio Christofer Henrique",
    description:
      "Meu portfólio profissional, com timeline, projetos, skills, contato e visual moderno. Desenvolvido 100% em Next.js.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: "https://i.postimg.cc/SQtVmK8Y/Screenshot-2025-07-18-18-31-29.png",
    projectUrl: "https://portifolio-henna-nu-19.vercel.app",
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