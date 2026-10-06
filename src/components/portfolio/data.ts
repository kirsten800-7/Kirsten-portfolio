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
  name: "K1rsten",
  handle: "@itsk1rsten",
  role: "Creative Developer & Digital Designer",
  location: "Available worldwide · Remote",
  tagline:
    "I design and build bright, fast, detail-obsessed digital experiences — interfaces, brands and little corners of the internet that feel good to use.",
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
    chipHover: "hover:text-pink-600",
    cardHover: "group-hover:text-pink-600",
  },
  {
    label: "Discord",
    handle: "Join the server",
    href: "https://discord.gg/hbej3NQusB",
    icon: DiscordIcon,
    chipHover: "hover:text-indigo-600",
    cardHover: "group-hover:text-indigo-600",
  },
  {
    label: "Facebook",
    handle: "Azter",
    href: "https://www.facebook.com/share/1KB3gFQyKW/",
    icon: FacebookIcon,
    chipHover: "hover:text-blue-600",
    cardHover: "group-hover:text-blue-600",
  },
  {
    label: "guns.lol",
    handle: "itsk1rsten",
    href: "https://guns.lol/itsk1rsten",
    icon: GunsIcon,
    chipHover: "hover:text-teal-600",
    cardHover: "group-hover:text-teal-600",
  },
];

export const stats = [
  { value: "5+", label: "Years creating" },
  { value: "60+", label: "Projects shipped" },
  { value: "25+", label: "Happy clients" },
  { value: "100%", label: "Light-mode loyal" },
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
    blurb: "Interfaces that feel instant and stay readable as they grow.",
    icon: CodeXml,
    level: 94,
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    title: "Design",
    blurb: "Layout, hierarchy and motion systems built around the product.",
    icon: Palette,
    level: 88,
    items: ["Figma", "Design systems", "Prototyping", "Micro-interactions"],
  },
  {
    title: "Backend",
    blurb: "Data models and APIs that keep the interface honest.",
    icon: Server,
    level: 81,
    items: ["Convex", "Node.js", "REST", "PostgreSQL", "Auth flows"],
  },
  {
    title: "Craft & Tooling",
    blurb: "The unglamorous work that makes shipping feel calm.",
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
    category: "Brand & Web",
    year: "2026",
    description:
      "A frosted-glass link hub that pulls every social profile into one calm, one-screen landing page.",
    tags: ["React", "Tailwind", "Motion"],
    icon: Sparkles,
    accent: "from-sky-300/60 to-indigo-300/50",
    href: "https://guns.lol/itsk1rsten",
  },
  {
    title: "Studio Dashboard",
    category: "Product UI",
    year: "2025",
    description:
      "Analytics workspace for a small creative studio — live charts, granular filters and a keyboard-first flow.",
    tags: ["TypeScript", "Convex", "Recharts"],
    icon: Braces,
    accent: "from-teal-200/60 to-sky-300/50",
    href: "#projects",
  },
  {
    title: "Lightbox Portfolio Kit",
    category: "Design System",
    year: "2025",
    description:
      "An open component kit for bright glassmorphism: layered panels, edge highlights and restrained cool color.",
    tags: ["Figma", "Design System", "Docs"],
    icon: Palette,
    accent: "from-indigo-200/60 to-cyan-200/50",
    href: "#projects",
  },
  {
    title: "Loopwave",
    category: "Side project",
    year: "2024",
    description:
      "A tiny audio-visual toy where every click paints translucent ripples in real time on a shared canvas.",
    tags: ["Canvas", "Web Audio", "Vite"],
    icon: Layers,
    accent: "from-cyan-200/60 to-blue-300/50",
    href: "#projects",
  },
];
