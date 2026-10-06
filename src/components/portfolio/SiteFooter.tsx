import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { GlassCard } from "./primitives";
import { SocialChips } from "./SocialLinks";
import { navItems, profile } from "./data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pt-8 pb-10 sm:px-6">
      <GlassCard className="mx-auto w-full max-w-6xl p-7 sm:p-9">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <a
              href="#home"
              className="flex items-center gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              <LogoMark size={44} />
              <span className="leading-tight">
                <span className="block text-base font-semibold tracking-tight text-white">
                  {profile.siteName}
                </span>
                <span className="block text-xs text-white/56">
                  {profile.role}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
              The personal site of {profile.name} — learning front-end
              development from the {profile.location}. Progress, projects and
              contact details, all in one place.
            </p>
            <SocialChips className="mt-6" size="sm" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <nav aria-label="Footer menu">
              <p className="text-xs font-medium tracking-[0.16em] text-white/56 uppercase">
                Menu
              </p>
              <ul className="mt-4 grid gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="glass-soft group flex items-center justify-between rounded-full px-4 py-2.5 text-sm font-medium text-white/82 transition duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                    >
                      {item.label}
                      <ArrowUpRight className="size-3.5 text-white/48 transition duration-200 group-hover:text-white" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-white/56 uppercase">
                Contact
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="glass-soft mt-4 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white/82 transition duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
              >
                <Mail className="size-4" />
                Email me
              </a>
              <a
                href="#home"
                className="glass-soft mt-2 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white/82 transition duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
              >
                <ArrowUp className="size-4" />
                Back to top
              </a>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/56 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.siteName} — {profile.name} ({profile.handle}). All
            rights reserved.
          </p>
          <p>Designed and built while learning, with React and Tailwind CSS.</p>
        </div>
      </GlassCard>
    </footer>
  );
}
