import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Eyebrow, GlassCard, Reveal, Section } from "./primitives";
import { SocialChips } from "./SocialLinks";
import { profile, stats } from "./data";

export function HeroSection() {
  return (
    <Section id="home" className="pt-10 md:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <Reveal>
          <Eyebrow>
            <Sparkles className="size-3.5 text-sky-500" />
            Available for new work
          </Eyebrow>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.75rem]">
            Hi, I&apos;m <span className="text-cool">{profile.name}</span>
            <span className="block text-slate-500">
              I build bright, glassy web experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-[0_16px_34px_-18px_rgba(15,23,42,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:outline-none"
            >
              View my work
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass-soft inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:bg-white/75 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:outline-none"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10">
            <p className="text-xs font-medium tracking-[0.16em] text-slate-500 uppercase">
              Follow along
            </p>
            <SocialChips className="mt-3" />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-white/70 via-white/20 to-transparent blur-2xl"
            />
            <GlassCard className="relative overflow-hidden p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/90 to-indigo-500/90 text-xl font-bold text-white shadow-[0_14px_30px_-14px_rgba(49,86,180,0.9),inset_0_1px_0_rgba(255,255,255,0.5)]">
                  {profile.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold text-slate-900">
                    {profile.name}
                  </p>
                  <p className="truncate text-sm text-slate-500">
                    {profile.role}
                  </p>
                </div>
                <motion.span
                  className="ml-auto flex items-center gap-2 rounded-full bg-emerald-50/80 px-3 py-1.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200/70"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.6, repeat: Infinity }}
                >
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Open
                </motion.span>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                I care about the small stuff — soft light, honest hierarchy and
                motion that explains instead of decorates.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-soft rounded-2xl px-4 py-3"
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
                <MapPin className="size-3.5 text-sky-500" />
                {profile.location}
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
