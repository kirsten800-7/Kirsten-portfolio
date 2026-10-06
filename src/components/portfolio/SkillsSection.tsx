import { Eyebrow, GlassCard, Reveal, Section, SectionHeading } from "./primitives";
import { skillGroups, toolbelt } from "./data";

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        align="center"
        title={
          <>
            What I&apos;m learning, and what is{" "}
            <span className="text-cool">still hard</span>
          </>
        }
        description="Four areas I'm working through. I'm not going to pretend I've mastered any of them — this is honestly where I am."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 0.05}>
              <GlassCard hover className="h-full p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-white/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      {group.blurb}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="glass-soft rounded-full px-3 py-1.5 text-xs font-medium text-white/76"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.08}>
        <GlassCard className="mt-6 flex flex-col items-center gap-4 p-6 text-center sm:p-7">
          <Eyebrow>
            <span className="size-1.5 rounded-full bg-white/50" />
            Also getting familiar with
          </Eyebrow>
          <ul className="flex flex-wrap justify-center gap-2">
            {toolbelt.map((tool) => (
              <li
                key={tool}
                className="glass-soft rounded-full px-3.5 py-1.5 text-sm font-medium text-white/82 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                {tool}
              </li>
            ))}
          </ul>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
