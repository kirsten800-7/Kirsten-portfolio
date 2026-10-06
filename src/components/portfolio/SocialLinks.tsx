import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { socialLinks } from "./data";

/** Compact icon-only chips — used in the header and footer. */
export function SocialChips({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={`${social.label} · ${social.handle}`}
              className={cn(
                "glass-soft flex items-center justify-center rounded-full text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/75 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                social.chipHover,
                size === "sm" ? "size-9" : "size-10",
              )}
            >
              <Icon className={size === "sm" ? "size-4" : "size-[18px]"} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Full-width cards with the platform name and handle. */
export function SocialCards({ className }: { className?: string }) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover group flex items-center gap-3 rounded-2xl px-4 py-3.5"
            >
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/70 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition duration-300 group-hover:scale-105",
                  social.cardHover,
                )}
              >
                <Icon className="size-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-slate-800">
                  {social.label}
                </span>
                <span className="block truncate text-xs text-slate-500">
                  {social.handle}
                </span>
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-700" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
