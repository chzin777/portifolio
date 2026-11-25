import type { SiteContent } from "./types";

export const en: SiteContent = {
  htmlLang: "en",
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
  },
  navLabel: "Main navigation",
  languageSwitch: "Change language",
  hero: {
    badge: "Available for new projects",
    titleAccent: "Full Stack Developer.",
    subtitle:
      "Mid-Level Full Stack Developer. I build CRMs, WhatsApp and ERP integrations, e-commerce, web systems and Flutter apps for Android and iOS, from the database to app store releases.",
    ctaProjects: "View projects",
    ctaCv: "Download CV",
  },
  copyEmail: { button: "Copy email", copied: "Email copied!", ariaLabel: "Copy email" },
  about: {
    eyebrow: "About",
    title: "From database to deploy.",
    description:
      "I build products that solve real operational problems: customer service, sales, ERP integrations and automation.",
    greeting: "Hi, I'm",
    tagline: "Mid-Level Full Stack Developer · Next.js, Node.js and PostgreSQL",
    bio1Before: "I currently own the entire digital ecosystem at",
    bio1After:
      ": CRM, marketing automation, WhatsApp Cloud API, integration with the VMSET ERP (Oracle) and the new e-commerce.",
    bio2Before: "In parallel, I'm evolving",
    bio2Middle: "for Avodah Optical and I'm a co-founder of",
    bio2After:
      ", where we build custom software. I like typed code, simple infrastructure and work that actually ships to production.",
    ctaCv: "Download résumé",
    ctaExperience: "See experience",
    ctaWhatsapp: "Message me on WhatsApp",
    whatsappMessage: "Hi Christofer! I saw your portfolio and would like to talk.",
    available: "Open to offers",
    basedIn: "Based in",
    location: "Goiânia, GO, Brazil",
    workMode: "Remote or hybrid",
    role: "Mid-Level Full Stack Developer",
    educationTitle: "Education",
    currentTitle: "Currently",
    strengthsTitle: "Why bring me onto your team",
    stackTitle: "Day-to-day stack",
  },
  stats: [
    { value: "+4", label: "years shipping software to production" },
    { value: "+600", label: "REST endpoints in a single product" },
    { value: "2", label: "ERPs integrated (VMSET and WinThor)" },
  ],
  education: [
    {
      kind: "Postgraduate",
      period: "2025 to 2026",
      course: "Postgraduate Degree in Java Systems Development",
      school: "Faculdade Iguaçu",
    },
    {
      kind: "Degree",
      period: "2023 to 2025",
      course: "Associate Degree in Systems Analysis and Development",
      school: "UNIP (Universidade Paulista)",
    },
  ],
  strengths: [
    {
      title: "End to end",
      text: "Front end, back end, mobile, database and infrastructure. I take a feature from idea to deploy without waiting on another team.",
    },
    {
      title: "Integrations the business relies on",
      text: "WhatsApp Cloud API, Oracle-based ERPs (VMSET and WinThor), payments and Brazilian tax authority (SEFAZ).",
    },
    {
      title: "Real production",
      text: "Systems used every day by sales and support teams, running on Docker and Linux VPS with zero-downtime deploys.",
    },
    {
      title: "Product mindset",
      text: "As a co-founder at Comply, I think about deadlines, cost and client outcomes, not just code.",
    },
  ],
  experience: {
    eyebrow: "Experience",
    title: "Where I've been building.",
    description: "Three active fronts today and a track record that stays close to business operations.",
    items: {
      oticas: {
        role: "Full Stack Developer",
        period: "Current",
        summary: "The chain's entire digital ecosystem: CRM, e-commerce and integrations.",
        highlights: [
          "CRM with AI sales assistant",
          "WhatsApp Cloud API",
          "VMSET ERP (Oracle)",
          "Marketing automation",
          "New e-commerce",
        ],
      },
      avodah: {
        role: "Full Stack Developer (Contract)",
        period: "Current",
        summary: "Architecture of Avodah SAC, the distributor's customer service hub.",
        highlights: ["Customer service hub", "WhatsApp integration", "Sales CRM", "Knowledge base"],
      },
      comply: {
        role: "Co-founder",
        period: "Current",
        summary: "Custom software, from landing pages to complex web systems.",
        highlights: ["High-converting landing pages", "Custom SaaS", "Deploy and infrastructure"],
      },
      bluetech: {
        role: "Full Stack Developer",
        period: "2025",
        summary: "Corporate HR and management systems.",
        highlights: ["React / Next.js", "Facial recognition", "Flutter time-clock app", "REST APIs on AWS"],
      },
      r3: {
        role: "Systems Analyst & Full Stack Developer",
        period: "2024",
        summary: "Internal systems and ERP integrations.",
        highlights: ["Internal web systems", "WinThor ERP integration"],
      },
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Products that are live.",
    description: "SaaS, corporate platforms, automation and high-converting landing pages.",
    featured: "Featured",
    open: "Open",
    previewAlt: "Preview of",
    items: {
      people: {
        title: "Valeris People",
        description:
          "Corporate HR and time-tracking platform: 600+ REST endpoints, facial recognition, push notifications and a cross-platform Flutter app (Web, Mobile, Desktop and TV).",
      },
      easynfe: {
        title: "Easy-NFe",
        description:
          "Multi-company SaaS for issuing Brazilian electronic invoices (NF-e and NFC-e) in the browser, with A1 certificates, SEFAZ, PDF invoices and recurring billing via Pix, boleto and card.",
      },
      cardamovie: {
        title: "CardaMovie",
        description:
          "Landing page for Brazil's first video menu: every dish gets a short video via QR code. WebGL and GSAP animations.",
      },
      hitched: {
        title: "Hitched",
        description:
          "Wedding platform with a custom website, guest memories via QR code, honeymoon fund and Stripe payments.",
      },
      pratica: {
        title: "Prática Soluções Empresariais",
        description:
          "Lead generation landing page with free labor-law calculators that qualify leads and route them to WhatsApp.",
      },
      gaia: {
        title: "Gaia Eletrônica",
        description:
          "Website for a laptop and motherboard repair shop: 3D hardware hero, 4-step process and quotes straight to WhatsApp.",
      },
      studiomova: {
        title: "Studio MOVA",
        description:
          "Landing page for a boutique gym in Brasília, with GSAP scroll animations and trial session booking.",
      },
      monster: {
        title: "Monster Energy (concept)",
        description:
          "Redesign concept for the Monster Energy landing page, with bold typography and the can front and center. Portfolio piece, not official.",
      },
      daps: {
        title: "Daps Energy",
        description:
          "E-commerce landing page for caffeinated mint strips: flavors, how it works, reviews and cart.",
      },
      bluetech: {
        title: "Bluetech Window Films",
        description:
          "Corporate website for a leading window film distributor in southern and southeastern Brazil, with a video mosaic hero and partner channel.",
      },
      comply: {
        title: "Comply",
        description:
          "Website for my custom software company: services, portfolio, blog and English version, with an illustrated animated hero.",
      },
      integra: {
        title: "Íntegra Consultoria",
        description:
          "Marketing consultancy website with manifesto, services, portfolio, pricing and light/dark theme.",
      },
      pomerode: {
        title: "Pomerode Auto Center",
        description:
          "Auto repair shop landing page focused on WhatsApp booking, with services, turnaround times and Google reviews.",
      },
    },
  },
  stack: {
    eyebrow: "Stack",
    title: "Tools I use in production.",
    description:
      "Next.js, React and TypeScript on the front end; Node.js, PostgreSQL and ORMs on the back end; Docker, Linux VPS, PM2 and Cloudflare for infrastructure, plus automation in Bash, Node.js and Python.",
  },
  mobile: {
    eyebrow: "Mobile",
    title: "Android and iOS apps, published to the stores.",
    description:
      "I build Flutter apps with a single codebase for both platforms, from the first prototype to approval on Google Play and the App Store.",
    points: [
      { title: "Cross-platform Flutter", text: "One codebase for Android and iOS with native performance." },
      { title: "Store publishing", text: "Signed builds, store listings and approval on Google Play and the App Store." },
      { title: "Connected to the back end", text: "Same APIs, authentication and push notifications as the web system." },
      { title: "Device features", text: "Camera and facial recognition, like the Bluetech time-clock app." },
    ],
    storesTitle: "Published on",
    available: "Get it on",
  },
  contact: {
    eyebrow: "Contact",
    titleBefore: "Let's build something",
    titleAccent: "that ships to production?",
    description: "Projects, opportunities or a chat about architecture. I reply fast.",
    phone: "Phone",
  },
  footer: "Next.js · TypeScript · Tailwind CSS · Framer Motion",
};
