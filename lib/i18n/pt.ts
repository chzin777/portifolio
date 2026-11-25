import type { SiteContent } from "./types";

export const pt: SiteContent = {
  htmlLang: "pt-BR",
  nav: {
    home: "Início",
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    stack: "Stack",
    contact: "Contato",
  },
  navLabel: "Navegação principal",
  languageSwitch: "Mudar idioma",
  hero: {
    badge: "Disponível para novos projetos",
    titleAccent: "Full Stack Developer.",
    subtitle:
      "Desenvolvedor Full Stack Pleno. Construo CRMs, integrações com WhatsApp e ERPs, e-commerce, sistemas web e apps Android e iOS em Flutter, do banco de dados à publicação nas lojas.",
    ctaProjects: "Ver projetos",
    ctaCv: "Baixar CV",
  },
  copyEmail: { button: "Copiar e-mail", copied: "E-mail copiado!", ariaLabel: "Copiar e-mail" },
  about: {
    eyebrow: "Sobre",
    title: "Do banco de dados ao deploy.",
    description:
      "Desenvolvo produtos que resolvem problemas reais de operação: atendimento, vendas, integração com ERPs e automações.",
    greeting: "Olá, eu sou o",
    tagline: "Desenvolvedor Full Stack Pleno · Next.js, Node.js e PostgreSQL",
    bio1Before: "Hoje cuido de todo o ecossistema digital da",
    bio1After:
      ": CRM, automações de marketing, WhatsApp Cloud API, integração com o ERP VMSET (Oracle) e o novo e-commerce.",
    bio2Before: "Em paralelo, evoluo o",
    bio2Middle: "para a Avodah Optical e sou co-fundador da",
    bio2After:
      ", onde construímos software sob medida. Gosto de código tipado, infraestrutura simples e entregas que chegam em produção.",
    ctaCv: "Baixar currículo",
    ctaExperience: "Ver experiência",
    available: "Aberto a propostas",
    basedIn: "Baseado em",
    location: "Goiânia, GO, Brasil",
    workMode: "Remoto ou híbrido",
    role: "Desenvolvedor Full Stack Pleno",
    educationTitle: "Formação",
    currentTitle: "Atuação atual",
    strengthsTitle: "Por que me chamar para o time",
    stackTitle: "Stack do dia a dia",
  },
  stats: [
    { value: "+4", label: "anos entregando software em produção" },
    { value: "+600", label: "endpoints REST em um único produto" },
    { value: "2", label: "ERPs integrados (VMSET e WinThor)" },
  ],
  education: [
    {
      kind: "Pós-graduação",
      period: "2025 a 2026",
      course: "Pós-graduação em Desenvolvimento de Sistemas em Java",
      school: "Faculdade Iguaçu",
    },
    {
      kind: "Graduação",
      period: "2023 a 2025",
      course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      school: "UNIP (Universidade Paulista)",
    },
  ],
  strengths: [
    {
      title: "Ponta a ponta",
      text: "Front, back, mobile, banco e infraestrutura. Levo a feature da ideia ao deploy sem depender de outra equipe.",
    },
    {
      title: "Integrações que o negócio usa",
      text: "WhatsApp Cloud API, ERPs em Oracle (VMSET e WinThor), pagamentos e SEFAZ.",
    },
    {
      title: "Produção de verdade",
      text: "Sistemas usados todo dia por vendas e atendimento, com Docker, VPS Linux e deploy sem downtime.",
    },
    {
      title: "Visão de produto",
      text: "Como co-founder da Comply, penso em prazo, custo e resultado para o cliente, não só em código.",
    },
  ],
  experience: {
    eyebrow: "Experiência",
    title: "Onde venho construindo.",
    description: "Três frentes ativas hoje e uma trajetória sempre perto da operação do negócio.",
    items: {
      oticas: {
        role: "Full Stack Developer",
        period: "Atual",
        summary: "Todo o ecossistema digital da rede: CRM, e-commerce e integrações.",
        highlights: [
          "CRM com IA consultiva",
          "WhatsApp Cloud API",
          "ERP VMSET (Oracle)",
          "Automação de marketing",
          "Novo e-commerce",
        ],
      },
      avodah: {
        role: "Full Stack Developer (Contrato)",
        period: "Atual",
        summary: "Arquitetura do Avodah SAC, hub de atendimento da distribuidora.",
        highlights: ["Hub de atendimento", "Integração com WhatsApp", "CRM de vendas", "Base de conhecimento"],
      },
      comply: {
        role: "Co-founder",
        period: "Atual",
        summary: "Software sob medida, de landing pages a sistemas web complexos.",
        highlights: ["Landing pages de conversão", "SaaS sob medida", "Deploy e infraestrutura"],
      },
      bluetech: {
        role: "Full Stack Developer",
        period: "2025",
        summary: "Sistemas corporativos de RH e gestão.",
        highlights: ["React / Next.js", "Reconhecimento facial", "App de ponto em Flutter", "APIs REST na AWS"],
      },
      r3: {
        role: "Analista de Sistemas & Full Stack Developer",
        period: "2024",
        summary: "Sistemas internos e integrações com ERP.",
        highlights: ["Sistemas web internos", "Integração ERP WinThor"],
      },
    },
  },
  projects: {
    eyebrow: "Projetos",
    title: "Produtos que estão no ar.",
    description: "SaaS, plataformas corporativas, automações e landing pages de alta conversão.",
    featured: "Destaque",
    open: "Abrir",
    previewAlt: "Prévia do projeto",
    items: {
      people: {
        title: "Valeris People",
        description:
          "Plataforma corporativa de RH e ponto eletrônico: +600 endpoints REST, reconhecimento facial, push e app Flutter multiplataforma (Web, Mobile, Desktop e TV).",
      },
      easynfe: {
        title: "Easy-NFe",
        description:
          "SaaS multiempresa para emissão de NF-e e NFC-e no navegador, com certificado A1, SEFAZ, DANFE em PDF e cobrança recorrente via Pix, boleto e cartão.",
      },
      cardamovie: {
        title: "CardaMovie",
        description:
          "Landing page do primeiro cardápio digital em vídeo do Brasil: cada prato ganha um vídeo curto via QR Code. Animações em WebGL e GSAP.",
      },
      hitched: {
        title: "Hitched",
        description:
          "Plataforma de casamentos com site personalizado, memórias dos convidados via QR code, fundo de lua de mel e pagamento via Stripe.",
      },
      pratica: {
        title: "Prática Soluções Empresariais",
        description:
          "Landing page de geração de leads com calculadoras trabalhistas gratuitas que qualificam o contato e o levam ao WhatsApp.",
      },
      gaia: {
        title: "Gaia Eletrônica",
        description:
          "Site para assistência técnica de notebooks e placas: hero 3D com componentes de hardware, processo em 4 passos e orçamento direto no WhatsApp.",
      },
      studiomova: {
        title: "Studio MOVA",
        description:
          "Landing page de academia boutique em Brasília, com animações de scroll em GSAP e agendamento de aula avaliativa.",
      },
      monster: {
        title: "Monster Energy (conceito)",
        description:
          "Conceito de redesign da landing page da Monster Energy, com tipografia expressiva e lata em destaque. Peça de portfólio, não oficial.",
      },
      daps: {
        title: "Daps Energy",
        description:
          "Landing page de e-commerce para tiras de menta com cafeína: sabores, como funciona, avaliações e carrinho.",
      },
      bluetech: {
        title: "Bluetech Window Films",
        description:
          "Site institucional da principal distribuidora de películas do Sul, Sudeste e DF, com mosaico de vídeo no hero e canal de parceiros.",
      },
      comply: {
        title: "Comply",
        description:
          "Site da minha empresa de software sob medida: serviços, portfólio, blog e versão em inglês, com hero ilustrado e animado.",
      },
      integra: {
        title: "Íntegra Consultoria",
        description:
          "Site de consultoria de marketing com manifesto, serviços, portfólio, planos e tema claro/escuro.",
      },
      pomerode: {
        title: "Pomerode Auto Center",
        description:
          "Landing page de oficina mecânica focada em agendamento pelo WhatsApp, com serviços, prazos e avaliações do Google.",
      },
    },
  },
  stack: {
    eyebrow: "Stack",
    title: "Ferramentas que uso em produção.",
    description:
      "Next.js, React e TypeScript no front; Node.js, PostgreSQL e ORMs no back; Docker, Linux VPS, PM2 e Cloudflare na infra, com automações em Bash, Node.js e Python.",
  },
  mobile: {
    eyebrow: "Mobile",
    title: "Apps para Android e iOS, publicados nas lojas.",
    description:
      "Desenvolvo apps em Flutter com um único código para as duas plataformas, do primeiro protótipo à aprovação na Google Play e na App Store.",
    points: [
      { title: "Flutter multiplataforma", text: "Um código para Android e iOS, com performance nativa." },
      { title: "Publicação nas lojas", text: "Build assinado, fichas e aprovação na Google Play e na App Store." },
      { title: "Integrado ao back-end", text: "Mesmas APIs, autenticação e notificações push do sistema web." },
      { title: "Recursos do aparelho", text: "Câmera e reconhecimento facial, como no app de ponto da Bluetech." },
    ],
    storesTitle: "Publicação em",
    available: "Disponível na",
  },
  contact: {
    eyebrow: "Contato",
    titleBefore: "Vamos construir algo",
    titleAccent: "que vai para produção?",
    description: "Projetos, oportunidades ou uma conversa sobre arquitetura. Respondo rápido.",
    phone: "Telefone",
  },
  footer: "Next.js · TypeScript · Tailwind CSS · Framer Motion",
};
