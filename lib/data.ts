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
    title: "Desenvolvedor Full-Stack",
    location: "Bluetech Films – Goiânia, GO",
    description:
      "Desenvolvimento de sistemas corporativos de RH e gestão com Next.js, React e TypeScript | Dashboards operacionais e chat em tempo real | Infraestrutura containerizada com Docker | Tunelamento Cloudflare para acesso seguro | Administração de servidores Linux e bancos PostgreSQL, Oracle e Redis | APIs REST com mais de 100 endpoints | PgBouncer para pool de conexões e MinIO para armazenamento | Microsserviço de reconhecimento facial multi-linguagem | App mobile Flutter para registro de ponto com reconhecimento facial | Automação com n8n | Estruturação e otimização de bancos de dados",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - Atual",
  },
  {
    title: "Trainee e Analista de Sistemas",
    location: "R3 Suprimentos – Goiânia, GO",
    description:
      "Desenvolvimento e manutenção de sistemas internos em TypeScript | Integração com ERP WinThor via APIs para automação de processos | Automações e integrações entre plataformas de vendas e marketing | Suporte técnico N1, N2 e N3 para usuários e sistemas corporativos | Monitoramento de servidores e suporte em infraestrutura de TI",
    icon: React.createElement(CgWorkAlt),
    date: "Out 2024 - Dez 2024",
  },
  {
    title: "Técnico em Montagem e Manutenção de Computadores",
    location: "Infratech – Goiânia, GO",
    description:
      "Diagnóstico e resolução de problemas em estações de trabalho e redes | Montagem, configuração e manutenção preventiva de equipamentos",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Jun 2024",
  },
  {
    title: "Pós-Graduação em Desenvolvimento de Sistemas em JAVA",
    location: "Faculdade Iguaçu EAD",
    description:
      "Especialização em desenvolvimento com linguagem Java, incluindo frameworks, arquitetura de software, desenvolvimento web com Spring Boot, APIs REST e boas práticas de programação orientada a objetos.",
    icon: React.createElement(LuGraduationCap),
    date: "2025 - 2026",
  },
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    location: "UNIP – Universidade Paulista, Goiânia, GO",
    description:
      "Formação completa em desenvolvimento de sistemas, incluindo programação, banco de dados, engenharia de software, sistemas ERP/CRM, APIs e metodologias ágeis. Desenvolvimento de projetos práticos e sistemas web.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
] as const;


export const projectsData = [
  {
    title: "Valeris People",
    description:
      "Projeto principal e mais robusto: plataforma corporativa de RH e ponto eletrônico. Backend Next.js com +600 endpoints REST (PostgreSQL, Redis, MinIO, reconhecimento facial e push) e frontend Flutter multiplataforma (Web, Mobile, Desktop e TV) com marcações de ponto, banco de horas, escalas, férias, admissão digital e relatórios.",
    tags: ["Next.js", "TypeScript", "Flutter", "PostgreSQL", "Redis", "Docker"],
    imageUrl: "/people.png",
    tall: true,
    projectUrl: "https://getpeople.valerisapp.com.br",
  },
  {
    title: "CardaMovie",
    description:
      "Landing page do CardaMovie, o primeiro cardápio digital em vídeo do Brasil, onde cada prato ganha um vídeo curto acessível por QR Code na mesa. Animações ricas em WebGL e GSAP para converter restaurantes em clientes do SaaS.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind", "GSAP", "WebGL"],
    imageUrl: "/cardamovie.png",
    tall: true,
    projectUrl: "https://www.cardamovie.com",
  },
  {
    title: "Easy-NFe",
    description:
      "Plataforma SaaS multiempresa para emissão e gestão de NF-e e NFC-e direto do navegador, com assinatura digital A1, integração com a SEFAZ, geração de DANFE em PDF e cobrança de assinaturas via Pix, boleto e cartão recorrente.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "SEFAZ", "Asaas"],
    imageUrl: "/easynfe.png",
    tall: true,
    projectUrl: "https://www.easynfe.digital",
  },
  {
    title: "Dashboard de Transferências",
    description:
      "Dashboard web para monitorar transferências de mercadorias entre filiais, integrado ao ERP Winthor via Oracle. Acompanhamento de status, estoque, etiquetas, KPIs e lead times em tempo real.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Oracle", "Winthor ERP"],
    imageUrl: "/dash.png",
    tall: true,
    projectUrl: "#",
  },
  {
    title: "GN Pré-moldados",
    description:
      "Landing page mobile-first para empresa de pré-moldados de concreto, com visualizador 3D interativo das peças, galeria de obras, depoimentos e contato direto via WhatsApp. SEO completo e hero animado em WebGL.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Three.js", "React Three Fiber"],
    imageUrl: "/gn.png",
    tall: true,
    projectUrl: "https://gn-pre-moldados.vercel.app",
  },
  {
    title: "Prática Soluções Empresariais",
    description:
      "Landing page de geração de leads para escritório de soluções empresariais (departamento pessoal, SST, folha e certificado digital), com calculadoras trabalhistas gratuitas que capturam contatos e os conduzem ao WhatsApp já qualificados.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind", "Motion", "GSAP"],
    imageUrl: "/pratica.png",
    tall: true,
    projectUrl: "https://praticasolucao.com.br",
  },
  {
    title: "Promotion Bot",
    description:
      "Automação que descobre produtos no Mercado Livre e na Amazon, gera links de afiliado e posta sozinha em grupos do WhatsApp em intervalos programados. Painel web em Next.js para configurar plataformas, horários e intervalos de envio.",
    tags: ["Next.js", "TypeScript", "Node.js", "whatsapp-web.js", "Puppeteer", "Docker"],
    imageUrl: "/promotion.png",
    tall: true,
    projectUrl: "#",
  },
  {
    title: "Hitched",
    description:
      "Plataforma para casamentos que gera sites personalizados e coleta memórias dos convidados via QR code, permitindo enviar mensagens, fotos e vídeos sem app ou login. Inclui dashboard do casal, fundo de lua de mel e publicação do site com pagamento via Stripe.",
    tags: ["React 19", "TypeScript", "FastAPI", "Supabase", "Tailwind", "Stripe"],
    imageUrl: "/hitched.png",
    tall: true,
    projectUrl: "https://hitched.digital",
  },
  {
    title: "KARCHER - R3",
    description:
      "Landing page exclusiva para captação de leads, com animações Framer Motion, Next.js, responsiva e design premium. Armazenamento seguro dos dados dos leads.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    imageUrl: "https://i.postimg.cc/CMvrd7y1/imagem-2025-07-18-152840104.png",
    projectUrl: "https://karcher-r3.com.br",
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
    title: "FG Transportes",
    description:
      "Site institucional para empresa de transportes, focado em diferenciais, contato e coleta de leads.",
    tags: ["HTML", "CSS", "Bootstrap"],
    imageUrl: "https://i.postimg.cc/zBrV1TDS/imagem-2025-07-18-150841699.png",
    projectUrl: "https://chzin777.github.io/fg-transportes/",
  },
] as const;

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Flutter",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Java",
      "APIs REST/GraphQL",
      "Reconhecimento Facial",
    ],
  },
  {
    category: "Banco de Dados",
    skills: ["PostgreSQL", "Oracle", "Redis", "MinIO", "PgBouncer"],
  },
  {
    category: "DevOps & Infraestrutura",
    skills: [
      "Docker",
      "Linux (Ubuntu/Debian)",
      "Nginx",
      "Cloudflare Tunnels",
      "SSH",
      "DevOps",
    ],
  },
  {
    category: "Ferramentas & Automação",
    skills: [
      "Git",
      "n8n",
      "WinThor",
      "Appsmith",
      "Kanban",
      "Automação de Processos",
      "VS Code",
    ],
  },
] as const;