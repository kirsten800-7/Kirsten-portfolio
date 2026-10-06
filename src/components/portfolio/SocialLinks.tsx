import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { socialLinks } from "./data";

/** Compact icon-only chips — used in the header, hero and footer. */
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
                "glass-soft flex items-center justify-center rounded-full text-white/70 transition duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none",
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
              className="glass glass-hover group flex items-center gap-3 rounded-2xl px-4 py-3.5 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200",
                  social.cardHover,
                )}
              >
                <Icon className="size-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-white">
                  {social.label}
                </span>
                <span className="block truncate text-xs text-white/56">
                  {social.handle}
                </span>
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-white/48 transition duration-200 group-hover:text-white" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
