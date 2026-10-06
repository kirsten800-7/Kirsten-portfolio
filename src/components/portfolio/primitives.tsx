import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared easing so every reveal on the page settles the same way. */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** The core surface of the theme: a layered, translucent frosted panel. */
export function GlassCard({
  className,
  hover = false,
  ...props
}: ComponentProps<"div"> & { hover?: boolean }) {
  return (
    <div
      className={cn("glass rounded-3xl", hover && "glass-hover", className)}
      {...props}
    />
  );
}

/** Fades + lifts content into view once, the first time it is scrolled to. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Consistent vertical rhythm and anchor offset for each page section. */
export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 px-4 py-16 sm:px-6 md:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/** Small pill used above section titles. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "glass-soft inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] text-slate-600 uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-7 text-slate-600",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
