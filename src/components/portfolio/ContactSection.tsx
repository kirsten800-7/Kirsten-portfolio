import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";
import { SocialCards } from "./SocialLinks";
import { profile } from "./data";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "h-11 rounded-xl border-white/[0.12] bg-white/[0.04] text-white shadow-none placeholder:text-white/56 focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const payload = (await response.json().catch(() => null)) as {
        errors?: { message?: string }[];
      } | null;
      setError(
        payload?.errors?.[0]?.message ??
          "Something went wrong sending your message. Please try again.",
      );
      setStatus("error");
    } catch {
      setError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        align="center"
        title={
          <>
            Get in touch — <span className="text-cool">I read everything</span>
          </>
        }
        description="Feedback, advice, a question, or just a hello. The form goes straight to my inbox, and I reply within a couple of days."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <GlassCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-white/76">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClasses}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-white/76">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClasses}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="subject" className="text-white/76">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className={fieldClasses}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message" className="text-white/76">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className={cn(fieldClasses, "h-auto min-h-32 py-3")}
                />
              </div>

              {/* Formspree honeypot — hidden from humans, catches bots. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <input
                type="hidden"
                name="_subject"
                value="New message from Kirsten Portfolio"
              />

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-[0_14px_30px_-18px_rgba(0,0,0,1)] transition duration-200 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {status === "success" ? (
                  <p
                    role="status"
                    className="glass-soft flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-white/92"
                  >
                    <CheckCircle2 className="size-4" />
                    Message received — I&apos;ll be in touch shortly.
                  </p>
                ) : null}

                {status === "error" && error ? (
                  <p
                    role="alert"
                    className="glass-soft flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-white/92"
                  >
                    <AlertCircle className="size-4" />
                    {error}
                  </p>
                ) : null}
              </div>
            </form>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-6">
            <GlassCard className="p-6 sm:p-7">
              <p className="text-xs font-medium tracking-[0.16em] text-white/56 uppercase">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-5 flex items-center gap-3 rounded-2xl bg-white/[0.05] p-4 transition duration-200 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <Mail className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-white">
                    {profile.email}
                  </span>
                  <span className="block text-xs text-white/56">
                    Best for direct messages
                  </span>
                </span>
              </a>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Prefer social platforms? I&apos;m most active on Discord and
                Instagram, and the links below go straight to my profiles.
              </p>
            </GlassCard>

            <div>
              <p className="mb-3 px-1 text-xs font-medium tracking-[0.16em] text-white/56 uppercase">
                Elsewhere
              </p>
              <SocialCards />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
