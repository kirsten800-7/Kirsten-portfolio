import { MessageCircle, Quote } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";
import { about, atAGlance } from "./data";

/** One labelled block of Kirsten's own words, with a hairline rule. */
function Prose({
  label,
  paragraphs,
}: {
  label: string;
  paragraphs: string[];
}) {
  return (
    <div>
      <h3 className="flex items-center gap-3 text-xs font-medium tracking-[0.16em] text-white/56 uppercase">
        {label}
        <span aria-hidden className="h-px flex-1 bg-white/10" />
      </h3>
      <div className="mt-5 space-y-5">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[15px] leading-8 text-white/76 sm:text-base sm:leading-8"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export function AboutSection() {
  const [whereImAt, whatIWant, doingAboutIt] = about.sections;

  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        align="center"
        title={
          <>
            Starting from <span className="text-cool">where I am</span>
          </>
        }
        description={about.lead}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <Reveal>
          <GlassCard className="p-7 sm:p-9">
            <div className="flex flex-col gap-10">
              <Prose {...whereImAt} />

              <blockquote className="glass-soft rounded-2xl px-6 py-6">
                <Quote className="size-5 text-white/48" aria-hidden />
                <p className="mt-3 text-xl leading-8 font-medium text-white sm:text-2xl">
                  {about.quote}
                </p>
              </blockquote>

              <Prose {...whatIWant} />
              <Prose {...doingAboutIt} />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="space-y-5">
                  {about.closing.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15px] leading-8 text-white/82 sm:text-base sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <div className="flex flex-col gap-6 self-start lg:sticky lg:top-28">
          <Reveal delay={0.08}>
            <GlassCard className="p-6">
              <p className="text-xs font-medium tracking-[0.16em] text-white/56 uppercase">
                At a glance
              </p>
              <dl className="mt-5 divide-y divide-white/10">
                {atAGlance.map((item) => (
                  <div key={item.label} className="py-3.5 first:pt-0 last:pb-0">
                    <dt className="text-[11px] font-medium tracking-[0.14em] text-white/56 uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-white/92">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.14}>
            <GlassCard className="p-6">
              <p className="text-xs font-medium tracking-[0.16em] text-white/56 uppercase">
                Right now
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                I&apos;m learning front-end development through small projects
                and a lot of repetition. If you have advice, or a resource that
                helped you, I would genuinely like to hear it.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/86 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/50 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
              >
                <MessageCircle className="size-4" />
                Send me a message
              </a>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
