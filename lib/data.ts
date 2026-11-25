/**
 * Dados que NÃO dependem de idioma: links, contatos, tags, imagens e ícones.
 * Todo texto traduzível fica em lib/i18n (pt.ts e en.ts).
 */
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
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { TbDatabaseCog } from "react-icons/tb";

export const sectionIds = ["home", "about", "experience", "projects", "stack", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];

export const profile = {
  name: "Christofer Henrique",
  firstName: "Christofer",
  email: "hchristofer130@gmail.com",
  phone: "(62) 9 9618-3309",
  phoneHref: "tel:+5562996183309",
  linkedin: "https://www.linkedin.com/in/christofer-henrique-43366725b/",
  github: "https://github.com/chzin777",
  githubUser: "chzin777",
  cv: "/CV.pdf",
  photo: "/eu.jpg",
} as const;

export const experienceIds = ["oticas", "avodah", "comply", "bluetech", "r3"] as const;
export type ExperienceId = (typeof experienceIds)[number];

export type ExperienceBase = {
  id: ExperienceId;
  company: string;
  /** sigla exibida no "logo" do card */
  initials: string;
  /** cor de destaque do card (rgb sem parênteses) */
  accent: string;
  current: boolean;
  url?: string;
  tags: readonly string[];
};

export const experienceBase: readonly ExperienceBase[] = [
  {
    id: "oticas",
    company: "Óticas Brasil",
    initials: "ÓB",
    accent: "129 140 248",
    current: true,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Oracle", "Docker", "WhatsApp API"],
  },
  {
    id: "avodah",
    company: "Avodah Optical",
    initials: "AV",
    accent: "34 211 238",
    current: true,
    tags: ["Next.js", "React", "TypeScript", "WhatsApp"],
  },
  {
    id: "comply",
    company: "Comply",
    initials: "CO",
    accent: "52 211 153",
    current: true,
    url: "https://comply.website",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Linux VPS"],
  },
  {
    id: "bluetech",
    company: "Bluetech Window Films",
    initials: "BT",
    accent: "56 189 248",
    current: false,
    tags: ["Next.js", "Flutter", "AWS", "PostgreSQL", "Redis"],
  },
  {
    id: "r3",
    company: "R3 Suprimentos",
    initials: "R3",
    accent: "251 191 36",
    current: false,
    tags: ["TypeScript", "Next.js", "Oracle", "WinThor"],
  },
] as const;

export const projectIds = [
  "gaia",
  "studiomova",
  "monster",
  "daps",
  "bluetech",
  "people",
  "easynfe",
  "comply",
  "cardamovie",
  "hitched",
  "pratica",
  "integra",
  "pomerode",
] as const;
export type ProjectId = (typeof projectIds)[number];

export type ProjectBase = {
  id: ProjectId;
  tags: readonly string[];
  imageUrl: string;
  projectUrl?: string;
  featured?: boolean;
};

export const projectBase: readonly ProjectBase[] = [
  {
    id: "gaia",
    tags: ["Next.js", "Landing page", "SEO"],
    imageUrl: "/projects/gaia.webp",
    projectUrl: "https://gaia-eletronica.vercel.app",
    featured: true,
  },
  {
    id: "studiomova",
    tags: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    imageUrl: "/projects/studiomova.webp",
    projectUrl: "https://studiomova.comply.website",
    featured: true,
  },
  {
    id: "monster",
    tags: ["React", "Vite", "Landing page"],
    imageUrl: "/projects/monster.webp",
    projectUrl: "https://monster.comply.website",
    featured: true,
  },
  {
    id: "daps",
    tags: ["React", "Vite", "E-commerce"],
    imageUrl: "/projects/daps.webp",
    projectUrl: "https://daps.comply.website",
    featured: true,
  },
  {
    id: "bluetech",
    tags: ["React", "Vite", "GSAP"],
    imageUrl: "/projects/bluetech.webp",
    projectUrl: "https://parceiros.bluetechfilms.com.br",
    featured: true,
  },
  {
    id: "people",
    tags: ["Next.js", "TypeScript", "Flutter", "PostgreSQL", "Redis", "Docker"],
    imageUrl: "/projects/people.webp",
    projectUrl: "https://getpeople.valerisapp.com.br",
  },
  {
    id: "easynfe",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "SEFAZ", "Asaas"],
    imageUrl: "/projects/easynfe.webp",
    projectUrl: "https://www.easynfe.digital",
  },
  {
    id: "comply",
    tags: ["React", "Vite", "Landing page"],
    imageUrl: "/projects/comply.webp",
    projectUrl: "https://comply.website",
  },
  {
    id: "cardamovie",
    tags: ["Next.js", "React 19", "TypeScript", "GSAP", "WebGL"],
    imageUrl: "/projects/cardamovie.webp",
    projectUrl: "https://www.cardamovie.com",
  },
  {
    id: "hitched",
    tags: ["React 19", "TypeScript", "FastAPI", "Supabase", "Stripe"],
    imageUrl: "/projects/hitched.webp",
    projectUrl: "https://hitched.digital",
  },
  {
    id: "pratica",
    tags: ["Next.js", "TypeScript", "Tailwind", "Motion", "GSAP"],
    imageUrl: "/projects/pratica.webp",
    projectUrl: "https://praticasolucao.com.br",
  },
  {
    id: "integra",
    tags: ["Next.js", "TypeScript", "GSAP", "Framer Motion"],
    imageUrl: "/projects/integra.webp",
    projectUrl: "https://integra-puce.vercel.app",
  },
  {
    id: "pomerode",
    tags: ["React", "Vite", "Landing page"],
    imageUrl: "/projects/pomerode.webp",
    projectUrl: "https://pomerode.comply.website",
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
  { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
  { name: "Dart", icon: SiDart, color: "#0EA5E9" },
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
