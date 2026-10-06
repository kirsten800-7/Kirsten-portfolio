import { motion } from "framer-motion";
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
            The tools and disciplines behind{" "}
            <span className="text-cool">the work</span>
          </>
        }
        description="Four areas that cover most of a project, from the first wireframe through to the release that makes it real."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 0.07}>
              <GlassCard hover className="h-full p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/75 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {group.blurb}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>Proficiency</span>
                    <span className="text-slate-700">{group.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/70">
                    <motion.div
                      className="h-full rounded-full bg-slate-800"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${group.level}%` }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="glass-soft rounded-full px-3 py-1.5 text-xs font-medium text-slate-600"
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

      <Reveal delay={0.1}>
        <GlassCard className="mt-6 flex flex-col items-center gap-4 p-6 text-center sm:p-7">
          <Eyebrow>
            <span className="size-1.5 rounded-full bg-slate-400" />
            Also working with
          </Eyebrow>
          <ul className="flex flex-wrap justify-center gap-2">
            {toolbelt.map((tool) => (
              <li
                key={tool}
                className="glass-soft rounded-full px-3.5 py-1.5 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:bg-white/75"
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
