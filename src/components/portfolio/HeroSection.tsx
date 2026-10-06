import { ArrowRight, MapPin } from "lucide-react";
import { Eyebrow, GlassCard, Reveal, Section } from "./primitives";
import { SocialChips } from "./SocialLinks";
import { atAGlance, profile } from "./data";

export function HeroSection() {
  return (
    <Section id="home" className="pt-10 md:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <Reveal>
          <Eyebrow>Learning in public</Eyebrow>

          <h1 className="mt-6 text-4xl leading-[1.06] font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
            <span className="text-cool">{profile.shortName}</span>
            <span className="block text-white/56">
              Learning to build for the web.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-[0_14px_30px_-18px_rgba(0,0,0,1)] transition duration-200 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              See what I&apos;ve built
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass-soft inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white/82 transition duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10">
            <p className="text-xs font-medium tracking-[0.16em] text-white/56 uppercase">
              Elsewhere
            </p>
            <SocialChips className="mt-3" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            {/* Static radial highlight — no blur filter, so it costs nothing to paint. */}
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(255,255,255,0.09),transparent)]"
            />
            <GlassCard className="relative overflow-hidden p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-xl font-bold text-neutral-900 shadow-[0_14px_30px_-16px_rgba(0,0,0,1)]">
                  {profile.shortName.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold tracking-tight text-white">
                    {profile.name}
                  </p>
                  <p className="truncate text-sm text-white/56">
                    {profile.handle}
                  </p>
                </div>
                <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/76 ring-1 ring-white/10">
                  <MapPin className="size-3 text-white/56" />
                  {profile.location}
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/70">
                I work on this a little every day. Some weeks it clicks, some
                weeks it doesn&apos;t, and I keep going anyway.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {atAGlance.map((item) => (
                  <div
                    key={item.label}
                    className="glass-soft rounded-xl px-4 py-3"
                  >
                    <p className="text-[11px] font-medium tracking-[0.14em] text-white/56 uppercase">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/92">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5 text-xs text-white/56">
                Open to feedback, advice and honest questions.
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
