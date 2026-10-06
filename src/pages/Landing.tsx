import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SkillsSection } from "@/components/portfolio/SkillsSection";

/**
 * Fixed dark backdrop built from gradients only — no `filter: blur()` layers,
 * so it paints once and is never re-composited while scrolling.
 */
function AmbientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_50%_-10%,#1c1d21_0%,#121316_45%,#08090b_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(55%_35%_at_50%_0%,rgba(255,255,255,0.07),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(120%_80%_at_50%_0%,black,transparent_85%)]" />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#08090b] text-foreground">
      <AmbientBackdrop />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
