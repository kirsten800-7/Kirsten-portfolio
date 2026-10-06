import { CheckCircle2, Quote } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";
import { profile } from "./data";

const facts = [
  "Self-taught designer turned front-end developer",
  "Obsessed with light-mode interfaces and soft depth",
  "Ships small, polished releases instead of big bangs",
  "Also streams builds and edits clips for fun",
];

const focus = [
  { label: "Currently", value: "Building bright, glassy products" },
  { label: "Interested in", value: "Web UI, motion, brand systems" },
  { label: "Working style", value: "Fast iterations, clear feedback" },
  { label: "Say hi at", value: profile.email },
];

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About me"
        title={
          <>
            A designer who codes, a developer who{" "}
            <span className="text-cool">sweats the details</span>
          </>
        }
        description="I started out making posters and edits, fell for interfaces, and never really left. These days I build the whole thing — layout, motion, data — so the result stays coherent from first sketch to final pixel."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <GlassCard className="h-full p-7 sm:p-8">
            <Quote className="size-7 text-sky-400/80" />
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Good interfaces feel like clean glass: you notice what&apos;s
              behind them, never the surface itself. I aim for that — bright,
              calm, and quietly precise, with motion that carries meaning
              instead of noise.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sky-500" />
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
              Quick facts
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
