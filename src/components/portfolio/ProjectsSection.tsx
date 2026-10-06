import { ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";
import { projects } from "./data";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        align="center"
        title={
          <>
            Things I&apos;ve built while{" "}
            <span className="text-cool">learning</span>
          </>
        }
        description="Small builds, each one made to practise something specific. One is live — the rest are still in progress, so there is nothing to click yet."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const isLive = project.href !== "";

          return (
            <Reveal key={project.title} delay={index * 0.05}>
              <GlassCard
                hover
                className="group flex h-full flex-col overflow-hidden"
              >
                <div
                  className={cn(
                    "relative flex h-36 items-center justify-center border-b border-white/10 bg-gradient-to-br",
                    project.accent,
                  )}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]"
                  />
                  <span className="glass-soft relative flex size-14 items-center justify-center rounded-2xl text-white/86 transition duration-200 group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <span className="glass-soft absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium text-white/70">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium tracking-[0.16em] text-white/56 uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="glass-soft rounded-full px-3 py-1 text-xs font-medium text-white/76"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    {isLive ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white/86 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/50 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                      >
                        View project
                        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white/56">
                        <Clock className="size-4" />
                        In progress
                      </span>
                    )}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
