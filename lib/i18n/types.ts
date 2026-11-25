import type { ExperienceId, ProjectId, SectionId } from "@/lib/data";

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

type Heading = { eyebrow: string; title: string; description: string };

export type ExperienceText = {
  role: string;
  period: string;
  summary: string;
  highlights: readonly string[];
};

export type SiteContent = {
  htmlLang: string;
  nav: Record<SectionId, string>;
  navLabel: string;
  languageSwitch: string;
  hero: {
    badge: string;
    titleAccent: string;
    subtitle: string;
    ctaProjects: string;
    ctaCv: string;
  };
  copyEmail: { button: string; copied: string; ariaLabel: string };
  about: Heading & {
    greeting: string;
    tagline: string;
    bio1Before: string;
    bio1After: string;
    bio2Before: string;
    bio2Middle: string;
    bio2After: string;
    ctaCv: string;
    ctaExperience: string;
    available: string;
    basedIn: string;
    location: string;
    workMode: string;
    role: string;
    educationTitle: string;
    currentTitle: string;
    strengthsTitle: string;
    stackTitle: string;
  };
  stats: readonly { value: string; label: string }[];
  education: readonly { kind: string; period: string; course: string; school: string }[];
  strengths: readonly { title: string; text: string }[];
  experience: Heading & { items: Record<ExperienceId, ExperienceText> };
  projects: Heading & {
    featured: string;
    open: string;
    previewAlt: string;
    items: Record<ProjectId, { title: string; description: string }>;
  };
  stack: Heading;
  mobile: Heading & {
    points: readonly { title: string; text: string }[];
    storesTitle: string;
    available: string;
  };
  contact: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    description: string;
    phone: string;
  };
  footer: string;
};
