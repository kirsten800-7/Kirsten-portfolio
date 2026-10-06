import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";
import { projects } from "./data";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title={
          <>
            A few things I&apos;ve built{" "}
            <span className="text-cool">and actually shipped</span>
          </>
        }
        description="Selected work spanning brand pages, product dashboards and small experiments. Most of it starts as a sketch and ends up as a live link."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.title} delay={index * 0.07}>
              <GlassCard hover className="group flex h-full flex-col overflow-hidden">
                <div
                  className={cn(
                    "relative flex h-36 items-center justify-center bg-gradient-to-br",
                    project.accent,
                  )}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:28px_28px]"
                  />
                  <span className="glass-strong relative flex size-14 items-center justify-center rounded-2xl text-slate-700 transition duration-500 group-hover:scale-105">
                    <Icon className="size-6" />
                  </span>
                  <span className="glass-strong absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium text-slate-600">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium tracking-[0.14em] text-slate-500 uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="glass-soft rounded-full px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      project.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-slate-800 transition hover:text-sky-600"
                  >
                    View project
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
