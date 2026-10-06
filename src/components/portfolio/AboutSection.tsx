import { CheckCircle2, Quote } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";
import { profile } from "./data";

const facts = [
  "Self-taught designer who moved into front-end development",
  "Focused on hierarchy, legibility and restraint",
  "Ships in reviewed, incremental releases rather than large launches",
  "Occasionally documents the process on social media",
];

const focus = [
  { label: "Currently", value: "Building focused web products for small teams" },
  { label: "Interested in", value: "Interface design, motion, design systems" },
  { label: "Working style", value: "Short iterations and direct feedback" },
  { label: "Contact", value: profile.email },
];

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title={
          <>
            Design and engineering, held to{" "}
            <span className="text-cool">the same standard</span>
          </>
        }
        description="I take projects end to end: research and layout, interface design, then the front-end build. The goal never changes — work that reads clearly at a glance and stays easy to maintain afterwards."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <GlassCard className="h-full p-7 sm:p-8">
            <Quote className="size-7 text-slate-300" />
            <p className="mt-5 text-lg leading-8 text-slate-700">
              A good interface should feel inevitable. Nothing competes for
              attention, nothing needs explaining, and every element earns its
              place. That is the standard I hold each build to.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-slate-400" />
                  <span className="text-sm leading-6 text-slate-600">
                    {fact}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="h-full p-7 sm:p-8">
            <p className="text-xs font-medium tracking-[0.16em] text-slate-500 uppercase">
              At a glance
            </p>
            <dl className="mt-6 divide-y divide-white/60">
              {focus.map((item) => (
                <div key={item.label} className="py-4 first:pt-0 last:pb-0">
                  <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-slate-800">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
