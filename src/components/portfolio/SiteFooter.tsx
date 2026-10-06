import { ArrowUp, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
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
            <a href="#home" className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/90 to-indigo-500/90 text-lg font-bold text-white shadow-[0_14px_30px_-14px_rgba(49,86,180,0.9),inset_0_1px_0_rgba(255,255,255,0.5)]">
                {profile.name.charAt(0)}
              </span>
              <span className="leading-tight">
                <span className="block text-base font-semibold text-slate-900">
                  {profile.name}
                </span>
                <span className="block text-xs text-slate-500">
                  {profile.role}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">
              Thanks for scrolling all the way down. If something here caught
              your eye, the fastest way to reach me is the contact form — or
              any of the profiles below.
            </p>
            <SocialChips className="mt-6" size="sm" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <nav aria-label="Footer menu">
              <p className="text-xs font-medium tracking-[0.16em] text-slate-500 uppercase">
                Menu
              </p>
              <ul className="mt-4 grid gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={cn(
                        "glass-soft group flex items-center justify-between rounded-full px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-300",
                        "hover:-translate-y-0.5 hover:bg-white/75 hover:text-slate-900",
                      )}
                    >
                      {item.label}
                      <span className="text-xs text-slate-400 transition group-hover:text-slate-600">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-slate-500 uppercase">
                Say hello
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="glass-soft mt-4 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:bg-white/75 hover:text-slate-900"
              >
                <Mail className="size-4" />
                Email me
              </a>
              <a
                href="#home"
                className="glass-soft mt-2 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:bg-white/75 hover:text-slate-900"
              >
                <ArrowUp className="size-4" />
                Back to top
              </a>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/60 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name} ({profile.handle}). All rights reserved.
          </p>
          <p>Designed &amp; built with React, Tailwind CSS and light-mode love.</p>
        </div>
      </GlassCard>
    </footer>
  );
}
