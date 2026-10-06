import { ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import { Eyebrow, GlassCard, Reveal, Section } from "./primitives";
import { SocialChips } from "./SocialLinks";
import { atAGlance, profile } from "./data";

/**
 * The hero portrait in a glass ring. If the photo file is missing we show the
 * letterform instead, so the section never renders a broken image icon.
 */
function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <span className="glass flex size-32 items-center justify-center rounded-full p-1.5 shadow-[0_30px_70px_-40px_rgba(0,0,0,1)] sm:size-40 lg:size-44">
      {failed ? (
        <span className="text-4xl font-bold text-white/92">
          {profile.shortName.charAt(0)}
        </span>
      ) : (
        <img
          src={profile.photoUrl}
          alt={profile.photoAlt}
          width={720}
          height={900}
          decoding="async"
          className="size-full rounded-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}

export function HeroSection() {
  return (
    <Section id="home" className="pt-10 md:pt-14">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Learning in public</Eyebrow>
        </Reveal>

        <Reveal delay={0.05} className="mt-7">
          <div className="relative">
            {/* Static radial highlight — gradient only, so it costs nothing to paint. */}
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),transparent)]"
            />
            <Portrait />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-7 text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
            <span className="text-cool">{profile.shortName}</span>
            <span className="block text-white/56">
              Learning to build for the web.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/72">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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

          <div className="mt-10 flex flex-col items-center">
            <p className="text-xs font-medium tracking-[0.16em] text-white/56 uppercase">
              Elsewhere
            </p>
            <SocialChips className="mt-3 justify-center" />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <GlassCard className="mx-auto mt-12 w-full max-w-2xl p-6 text-center sm:mt-14 sm:p-8">
          <p className="text-lg font-semibold tracking-tight text-white">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-white/56">{profile.handle}</p>

          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/76 ring-1 ring-white/10">
            <MapPin className="size-3 text-white/56" />
            {profile.location}
          </span>

          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/70">
            I work on this a little every day. Some weeks it clicks, some weeks
            it doesn&apos;t, and I keep going anyway.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {atAGlance.map((item) => (
              <div
                key={item.label}
                className="glass-soft rounded-xl px-4 py-3 text-center"
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
      </Reveal>
    </Section>
  );
}
