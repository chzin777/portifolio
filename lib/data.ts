import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiLinux,
  SiPm2,
  SiCloudflare,
  SiGnubash,
  SiPython,
  SiWhatsapp,
  SiOracle,
  SiRedis,
} from "react-icons/si";
import { TbDatabaseCog } from "react-icons/tb";

export const links = [
  { name: "Início", hash: "#home" },
  { name: "Sobre", hash: "#about" },
  { name: "Experiência", hash: "#experience" },
  { name: "Projetos", hash: "#projects" },
  { name: "Stack", hash: "#stack" },
  { name: "Contato", hash: "#contact" },
] as const;

export const profile = {
  name: "Christofer Henrique",
  firstName: "Christofer",
  role: "Desenvolvedor Full Stack Pleno",
  roleEn: "Mid-Level Full Stack Developer",
  education: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  school: "UNIP (Universidade Paulista)",
  location: "Goiânia, GO, Brasil",
  email: "hchristofer130@gmail.com",
  phone: "(62) 9 9618-3309",
  phoneHref: "tel:+5562996183309",
  linkedin: "https://www.linkedin.com/in/christofer-henrique-43366725b/",
  github: "https://github.com/chzin777",
  githubUser: "chzin777",
  cv: "/CV.pdf",
  photo: "/eu.jpg",
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  url?: string;
  summary: string;
  highlights: readonly string[];
  tags: readonly string[];
};

export const experiencesData: readonly Experience[] = [
  {
    company: "Óticas Brasil",
    role: "Full Stack Developer",
    period: "Atual",
    current: true,
    summary:
      "Responsável pelo ecossistema digital da rede: do CRM interno ao novo e-commerce, conectando vendas, atendimento e ERP.",
    highlights: [
      "CRM interno com pipeline de vendas, atendimento e IA consultiva",
      "Automações de marketing e campanhas segmentadas",
      "Integração com WhatsApp Cloud API",
      "Integração com o ERP VMSET (Oracle)",
      "Desenvolvimento do novo e-commerce",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Oracle", "Docker", "WhatsApp API"],
  },
  {
    company: "Avodah Optical",
    role: "Full Stack Developer (Contrato)",
    period: "Atual",
    current: true,
    summary:
      "Arquitetura e evolução do Avodah SAC, hub modular de atendimento da distribuidora.",
    highlights: [
      "Hub de atendimento integrado ao WhatsApp",
      "CRM de vendas para revendas e representantes",
      "Ferramentas de marketing e base de conhecimento",
    ],
    tags: ["Next.js", "React", "TypeScript", "WhatsApp"],
  },
  {
    company: "Comply",
    role: "Co-founder",
    period: "Atual",
    current: true,
    url: "https://comply.website",
    summary:
      "Empresa de desenvolvimento de software sob medida, de landing pages de alta conversão a sistemas web complexos.",
    highlights: [
      "Landing pages com foco em conversão e performance",
      "Sistemas web e SaaS sob medida",
      "Infraestrutura, deploy e manutenção para clientes",
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "Linux VPS"],
  },
  {
    company: "Bluetech Window Films",
    role: "Full Stack Developer",
    period: "2025",
    current: false,
    summary:
      "Sistemas corporativos de RH e gestão, do backend à infraestrutura.",
    highlights: [
      "Aplicações React / Next.js",
      "Microsserviço de reconhecimento facial",
      "App mobile de ponto em Flutter",
      "APIs REST na AWS",
    ],
    tags: ["Next.js", "Flutter", "AWS", "PostgreSQL", "Redis"],
  },
  {
    company: "R3 Suprimentos",
    role: "Analista de Sistemas & Full Stack Developer",
    period: "2024",
    current: false,
    summary: "Sistemas web internos e integrações com o ERP.",
    highlights: [
      "Sistemas web internos em TypeScript",
      "Integrações REST com o ERP WinThor",
    ],
    tags: ["TypeScript", "Next.js", "Oracle", "WinThor"],
  },
] as const;

export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string;
  projectUrl?: string;
  featured?: boolean;
};

export const projectsData: readonly Project[] = [
  {
    title: "Valeris People",
    description:
      "Plataforma corporativa de RH e ponto eletrônico: +600 endpoints REST, reconhecimento facial, push e app Flutter multiplataforma (Web, Mobile, Desktop e TV).",
    tags: ["Next.js", "TypeScript", "Flutter", "PostgreSQL", "Redis", "Docker"],
    imageUrl: "/projects/people.webp",
    projectUrl: "https://getpeople.valerisapp.com.br",
    featured: true,
  },
  {
    title: "Easy-NFe",
    description:
      "SaaS multiempresa para emissão de NF-e e NFC-e no navegador, com certificado A1, SEFAZ, DANFE em PDF e cobrança recorrente via Pix, boleto e cartão.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "SEFAZ", "Asaas"],
    imageUrl: "/projects/easynfe.webp",
    projectUrl: "https://www.easynfe.digital",
    featured: true,
  },
  {
    title: "CardaMovie",
    description:
      "Landing page do primeiro cardápio digital em vídeo do Brasil: cada prato ganha um vídeo curto via QR Code. Animações em WebGL e GSAP.",
    tags: ["Next.js", "React 19", "TypeScript", "GSAP", "WebGL"],
    imageUrl: "/projects/cardamovie.webp",
    projectUrl: "https://www.cardamovie.com",
  },
  {
    title: "Hitched",
    description:
      "Plataforma de casamentos com site personalizado, memórias dos convidados via QR code, fundo de lua de mel e pagamento via Stripe.",
    tags: ["React 19", "TypeScript", "FastAPI", "Supabase", "Stripe"],
    imageUrl: "/projects/hitched.webp",
    projectUrl: "https://hitched.digital",
  },
  {
    title: "Prática Soluções Empresariais",
    description:
      "Landing page de geração de leads com calculadoras trabalhistas gratuitas que qualificam o contato e o levam ao WhatsApp.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Motion", "GSAP"],
    imageUrl: "/projects/pratica.webp",
    projectUrl: "https://praticasolucao.com.br",
  },
  {
    title: "Promotion Bot",
    description:
      "Automação que descobre ofertas no Mercado Livre e na Amazon, gera links de afiliado e posta em grupos do WhatsApp, com painel de controle.",
    tags: ["Next.js", "Node.js", "Puppeteer", "whatsapp-web.js", "Docker"],
    imageUrl: "/projects/promotion.webp",
  },
  {
    title: "GN Pré-moldados",
    description:
      "Landing page mobile-first com visualizador 3D interativo das peças, galeria de obras e contato direto via WhatsApp.",
    tags: ["Next.js", "TypeScript", "Three.js", "React Three Fiber"],
    imageUrl: "/projects/gn.webp",
    projectUrl: "https://gn-pre-moldados.vercel.app",
  },
  {
    title: "Dashboard de Transferências",
    description:
      "Monitoramento de transferências entre filiais integrado ao ERP WinThor via Oracle: status, estoque, etiquetas, KPIs e lead times.",
    tags: ["Next.js", "TypeScript", "Oracle", "WinThor"],
    imageUrl: "/projects/dash.webp",
  },
] as const;

export type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

export const techStack: readonly Tech[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
  { name: "Drizzle ORM", icon: TbDatabaseCog, color: "#C5F74F" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Linux VPS", icon: SiLinux, color: "#FCC624" },
  { name: "PM2", icon: SiPm2, color: "#8B5CF6" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
  { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Oracle", icon: SiOracle, color: "#F80000" },
  { name: "Redis", icon: SiRedis, color: "#FF4438" },
  { name: "WhatsApp API", icon: SiWhatsapp, color: "#25D366" },
] as const;

export const stats = [
  { value: "3", label: "frentes ativas hoje" },
  { value: "+600", label: "endpoints REST em um único produto" },
  { value: "2", label: "ERPs integrados (VMSET e WinThor)" },
] as const;
