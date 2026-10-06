import { AnimatePresence, motion } from "framer-motion";
import { Home, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navItems, profile } from "./data";
import { SocialChips } from "./SocialLinks";

/** Highlights the nav item for the section currently filling the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string>(navItems[0].href);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function Monogram() {
  return (
    <span className="relative flex size-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/90 to-indigo-500/90 text-base font-bold text-white shadow-[0_8px_20px_-8px_rgba(49,86,180,0.8),inset_0_1px_0_rgba(255,255,255,0.5)]">
      {profile.name.charAt(0)}
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  // Close the mobile panel if the viewport grows into the desktop layout.
  useEffect(() => {
    if (!open) return;
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => media.matches && setOpen(false);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div className="glass-strong mx-auto flex w-full max-w-6xl items-center justify-between gap-3 rounded-2xl px-3 py-2.5 sm:px-4">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 rounded-xl pr-2 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <Monogram />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold tracking-tight text-slate-900">
              {profile.siteName}
            </span>
            <span className="block text-xs text-slate-500">{profile.role}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition duration-300 focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:outline-none",
                  isActive
                    ? "bg-white/80 text-slate-900 shadow-[0_6px_16px_-10px_rgba(30,64,120,0.7),inset_0_1px_0_rgba(255,255,255,0.95)]"
                    : "text-slate-600 hover:bg-white/50 hover:text-slate-900",
                )}
              >
                {item.label === "Home" ? <Home className="size-3.5" /> : null}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_24px_-12px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:outline-none sm:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="glass-soft flex size-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-white/75 focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:outline-none lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong mx-auto mt-3 w-full max-w-6xl origin-top overflow-hidden rounded-2xl p-4 lg:hidden"
          >
            <nav className="grid gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:outline-none",
                    active === item.href
                      ? "bg-white/80 text-slate-900"
                      : "text-slate-600 hover:bg-white/55 hover:text-slate-900",
                  )}
                >
                  {item.label}
                  <span className="text-xs text-slate-400">
                    {item.href.replace("#", "")}
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-4 border-t border-white/60 pt-4">
              <p className="mb-3 text-xs font-medium tracking-[0.16em] text-slate-500 uppercase">
                Elsewhere
              </p>
              <SocialChips size="sm" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
