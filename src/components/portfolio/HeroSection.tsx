import { ArrowRight, MapPin } from "lucide-react";
import { Eyebrow, GlassCard, Reveal, Section } from "./primitives";
import { SocialChips } from "./SocialLinks";
import { profile, stats } from "./data";

export function HeroSection() {
  return (
    <Section id="home" className="pt-10 md:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <Reveal>
          <Eyebrow>Available for select projects</Eyebrow>

          <h1 className="mt-6 text-4xl leading-[1.06] font-semibold tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[3.5rem]">
            <span className="text-cool">{profile.name}</span>
            <span className="block text-slate-500">
              Designer and front-end developer.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-500/60 focus-visible:outline-none"
            >
              View selected work
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass-soft inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:bg-white/75 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-slate-400/50 focus-visible:outline-none"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10">
            <p className="text-xs font-medium tracking-[0.16em] text-slate-500 uppercase">
              Elsewhere
            </p>
            <SocialChips className="mt-3" />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-white/70 via-white/20 to-transparent blur-2xl"
            />
            <GlassCard className="relative overflow-hidden p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-xl font-semibold text-white shadow-[0_14px_30px_-16px_rgba(15,23,42,0.9)]">
                  {profile.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold tracking-tight text-slate-900">
                    {profile.name}
                  </p>
                  <p className="truncate text-sm text-slate-500">
                    {profile.handle}
                  </p>
                </div>
                <span className="ml-auto flex shrink-0 items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-white/80">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Available
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                I work end to end — interface design, front-end build and the
                details that hold the two together.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-soft rounded-xl px-4 py-3"
                  >
                    <p className="text-2xl font-semibold tracking-tight text-slate-900">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/60 pt-5 text-xs text-slate-500">
                <MapPin className="size-3.5 text-slate-400" />
                {profile.location}
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
