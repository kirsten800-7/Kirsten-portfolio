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
  name: "Kirsten Morante",
  shortName: "Kirsten",
  handle: "@itsk1rsten",
  role: "Learning front-end development",
  location: "Philippines",
  tagline:
    "I am starting from where I am right now \u2014 learning to build for the web, one small step at a time, and not planning to give up on it.",
  email: "hello@itsk1rsten.com",
  formspreeEndpoint: "https://formspree.io/f/xyegeoqp",
  /** Hero portrait — swap the file (or this path) for a real photo. */
  photoUrl: "/kirsten.png",
  photoAlt: "Portrait of Kirsten Morante",
  /** Square PNG mark shown in the header, footer and icon. */
  logoUrl: "/logo.png",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * Kirsten's own words, kept close to how she wrote them — grammar, spelling,
 * capitalisation and punctuation tidied, nothing about the meaning changed.
 * Apostrophes use \u2019 so they stay typographic whatever the file encoding.
 */
export const about = {
  lead: "My name is Kirsten Morante, and I live in the Philippines.",
  sections: [
    {
      label: "Where I\u2019m at",
      paragraphs: [
        "I\u2019m just a normal person who has a lot of dreams, but I also have a lot of things I struggle with. I can be pretty lazy sometimes, and I know I\u2019m not always motivated to do what I\u2019m supposed to do. Studying is especially hard for me. I\u2019m a slow learner, so there are times when I don\u2019t understand something right away and need someone to explain it to me more than once.",
        "Sometimes it honestly gets frustrating. I see other people learning things faster than me, and I start wondering why I can\u2019t do the same. There are moments when I feel like I\u2019m not smart enough, or that I\u2019m just not good at anything. I\u2019ve doubted myself a lot because of that.",
      ],
    },
    {
      label: "What I want",
      paragraphs: [
        "I want to become successful. I want to make a lot of money and eventually become wealthy. Not just because I want expensive things, but because I want to have a better life and be able to help my family.",
        "I want to reach a point where I don\u2019t have to constantly worry about money.",
        "I know I\u2019m not going to magically become successful overnight. I still have a lot to learn, and honestly, I don\u2019t even know exactly how I\u2019m going to get there yet. But I want to figure it out.",
      ],
    },
    {
      label: "What I\u2019m doing about it",
      paragraphs: [
        "I want to become better at learning, improve my skills, become more disciplined, and stop letting laziness hold me back.",
        "I know I\u2019ll probably fail sometimes, make stupid mistakes, and have days where I don\u2019t feel like doing anything. That\u2019s just part of being human.",
        "I might be a slow learner, but I don\u2019t want that to be an excuse to give up. If something takes me longer to understand, then I\u2019ll just have to take my time and keep trying.",
      ],
    },
  ],
  quote: "But deep down, I still have goals.",
  closing: [
    "I\u2019m starting from where I am right now. I don\u2019t have everything figured out, and I\u2019m definitely not perfect. But I have a dream, and I want to see how far I can actually go.",
    "Maybe someday, I\u2019ll look back at this version of myself and be proud that I didn\u2019t give up.",
  ],
};

/** Facts about where Kirsten is right now — no invented achievements. */
export const atAGlance = [
  { label: "Based in", value: "Philippines" },
  { label: "Right now", value: "Learning front-end development" },
  { label: "Working on", value: "Discipline and consistency" },
  { label: "Long-term goal", value: "A better life for my family" },
];

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
    chipHover: "hover:text-white",
    cardHover: "group-hover:text-white",
  },
  {
    label: "Instagram",
    handle: "@azters.gg",
    href: "https://www.instagram.com/azters.gg?stkn=MWl4dnQ4aG1kMHF5aw==",
    icon: InstagramIcon,
    chipHover: "hover:text-white",
    cardHover: "group-hover:text-white",
  },
  {
    label: "Discord",
    handle: "Community server",
    href: "https://discord.gg/hbej3NQusB",
    icon: DiscordIcon,
    chipHover: "hover:text-white",
    cardHover: "group-hover:text-white",
  },
  {
    label: "Facebook",
    handle: "Kirsten",
    href: "https://www.facebook.com/share/1KB3gFQyKW/",
    icon: FacebookIcon,
    chipHover: "hover:text-white",
    cardHover: "group-hover:text-white",
  },
  {
    label: "guns.lol",
    handle: "itsk1rsten",
    href: "https://guns.lol/itsk1rsten",
    icon: GunsIcon,
    chipHover: "hover:text-white",
    cardHover: "group-hover:text-white",
  },
];

export interface SkillGroup {
  title: string;
  blurb: string;
  icon: IconType;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Learning how pages are put together, piece by piece.",
    icon: CodeXml,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Design",
    blurb: "Figuring out what makes a layout clear and easy to read.",
    icon: Palette,
    items: ["Figma", "Layout", "Typography", "Colour and contrast"],
  },
  {
    title: "Backend Basics",
    blurb: "The parts I'm slowest at, and want to understand properly.",
    icon: Server,
    items: ["Node.js", "Databases", "APIs", "Authentication"],
  },
  {
    title: "Habits and Craft",
    blurb: "The everyday things that decide whether I improve or stall.",
    icon: Layers,
    items: ["Consistency", "Note-taking", "Git", "Asking for help"],
  },
];

export const toolbelt = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Figma",
  "Git",
  "Node.js",
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
  /** Empty string means the build is not public yet. */
  href: string;
}

export const projects: Project[] = [
  {
    title: "Azter Hub",
    category: "Personal Project",
    year: "2026",
    description:
      "A single, uncluttered link hub that gathers every social profile into one calm landing page.",
    tags: ["Layout", "Tailwind", "Motion"],
    icon: Sparkles,
    accent: "from-white/12 to-white/[0.03]",
    href: "https://guns.lol/itsk1rsten",
  },
  {
    title: "Studio Dashboard",
    category: "Practice Build",
    year: "2025",
    description:
      "A dashboard I built to practise data-heavy screens: figures, filters and a keyboard-first flow.",
    tags: ["React", "Charts", "State"],
    icon: Braces,
    accent: "from-white/10 to-white/[0.02]",
    href: "",
  },
  {
    title: "Lightbox Portfolio Kit",
    category: "Design System",
    year: "2025",
    description:
      "A set of components for dark glass surfaces: layered panels, edge highlights and a monochrome palette.",
    tags: ["Figma", "Components", "Documentation"],
    icon: Palette,
    accent: "from-white/14 to-white/[0.03]",
    href: "",
  },
  {
    title: "Loopwave",
    category: "Side Project",
    year: "2024",
    description:
      "A small audio-visual experiment where each interaction paints translucent ripples onto a canvas.",
    tags: ["Canvas", "Web Audio", "Vite"],
    icon: Layers,
    accent: "from-white/10 to-white/[0.02]",
    href: "",
  },
];
