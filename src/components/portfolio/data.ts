import type { ComponentType, SVGProps } from "react";
import {
  Braces,
  CodeXml,
  Layers,
  Palette,
  Server,
  Sparkles,
} from "lucide-react";
import {
  DiscordIcon,
  FacebookIcon,
  GunsIcon,
  InstagramIcon,
  TikTokIcon,
} from "./icons";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const profile = {
  siteName: "Kirsten Portfolio",
  name: "Kirsten",
  handle: "@itsk1rsten",
  role: "Designer and Front-End Developer",
  location: "Remote · Working with clients worldwide",
  tagline:
    "I design and build clean, considered interfaces — websites and digital products that stay legible, load fast and hold up over time.",
  email: "hello@itsk1rsten.com",
  formspreeEndpoint: "https://formspree.io/f/xyegeoqp",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: IconType;
  /** Tint for the icon-only chips. Written as a literal so Tailwind emits it. */
  chipHover: string;
  /** Tint used inside full cards, where the parent link is the `group`. */
  cardHover: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "TikTok",
    handle: "@fisilyo",
    href: "https://www.tiktok.com/@fisilyo?_r=1&_t=ZS-9AKcC9OIaNY",
    icon: TikTokIcon,
    chipHover: "hover:text-slate-900",
    cardHover: "group-hover:text-slate-900",
  },
  {
    label: "Instagram",
    handle: "@azters.gg",
    href: "https://www.instagram.com/azters.gg?stkn=MWl4dnQ4aG1kMHF5aw==",
    icon: InstagramIcon,
    chipHover: "hover:text-slate-900",
    cardHover: "group-hover:text-slate-900",
  },
  {
    label: "Discord",
    handle: "Community server",
    href: "https://discord.gg/hbej3NQusB",
    icon: DiscordIcon,
    chipHover: "hover:text-slate-900",
    cardHover: "group-hover:text-slate-900",
  },
  {
    label: "Facebook",
    handle: "Kirsten",
    href: "https://www.facebook.com/share/1KB3gFQyKW/",
    icon: FacebookIcon,
    chipHover: "hover:text-slate-900",
    cardHover: "group-hover:text-slate-900",
  },
  {
    label: "guns.lol",
    handle: "itsk1rsten",
    href: "https://guns.lol/itsk1rsten",
    icon: GunsIcon,
    chipHover: "hover:text-slate-900",
    cardHover: "group-hover:text-slate-900",
  },
];

export const stats = [
  { value: "5+", label: "Years of practice" },
  { value: "60+", label: "Projects delivered" },
  { value: "25+", label: "Clients and collaborators" },
  { value: "4", label: "Core disciplines" },
];

export interface SkillGroup {
  title: string;
  blurb: string;
  icon: IconType;
  level: number;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Interfaces that stay fast, legible and easy to extend.",
    icon: CodeXml,
    level: 94,
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    title: "Design",
    blurb: "Layout, typography and motion systems built around the product.",
    icon: Palette,
    level: 88,
    items: ["Figma", "Design systems", "Prototyping", "Micro-interactions"],
  },
  {
    title: "Backend",
    blurb: "Data models and APIs that keep the interface honest.",
    icon: Server,
    level: 81,
    items: ["Convex", "Node.js", "REST", "PostgreSQL", "Authentication"],
  },
  {
    title: "Tooling and Craft",
    blurb: "The unglamorous work that keeps delivery predictable.",
    icon: Layers,
    level: 85,
    items: ["Git", "CI/CD", "Vercel", "Performance", "Accessibility"],
  },
];

export const toolbelt = [
  "React",
  "TypeScript",
  "Tailwind",
  "Convex",
  "Framer Motion",
  "Figma",
  "Vite",
  "Node.js",
  "Git",
  "Vercel",
  "Accessibility",
  "Design Systems",
];

export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  icon: IconType;
  accent: string;
  href: string;
}

export const projects: Project[] = [
  {
    title: "Azter Hub",
    category: "Brand and Web",
    year: "2026",
    description:
      "A single, uncluttered link hub that gathers every social profile into one calm landing page.",
    tags: ["React", "Tailwind", "Motion"],
    icon: Sparkles,
    accent: "from-sky-100/80 to-slate-100/50",
    href: "https://guns.lol/itsk1rsten",
  },
  {
    title: "Studio Dashboard",
    category: "Product Interface",
    year: "2025",
    description:
      "An analytics workspace for a small studio: live figures, focused filters and a keyboard-first flow.",
    tags: ["TypeScript", "Convex", "Recharts"],
    icon: Braces,
    accent: "from-slate-200/80 to-slate-100/50",
    href: "#projects",
  },
  {
    title: "Lightbox Portfolio Kit",
    category: "Design System",
    year: "2025",
    description:
      "An open component kit for bright glass surfaces: layered panels, edge highlights and a restrained cool palette.",
    tags: ["Figma", "Design System", "Documentation"],
    icon: Palette,
    accent: "from-indigo-100/70 to-slate-100/50",
    href: "#projects",
  },
  {
    title: "Loopwave",
    category: "Side Project",
    year: "2024",
    description:
      "A small audio-visual experiment where each interaction paints translucent ripples onto a shared canvas.",
    tags: ["Canvas", "Web Audio", "Vite"],
    icon: Layers,
    accent: "from-cyan-100/70 to-slate-100/50",
    href: "#projects",
  },
];
