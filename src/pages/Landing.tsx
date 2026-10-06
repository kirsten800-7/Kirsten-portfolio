import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SkillsSection } from "@/components/portfolio/SkillsSection";

/** Fixed, clipped backdrop so the frost has something bright to blur. */
function AmbientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_50%_-10%,#ffffff_0%,#f5f7fb_42%,#eef1f7_74%,#f3f5f9_100%)]" />
      <div className="absolute -top-40 -left-24 size-[36rem] rounded-full bg-sky-200/35 blur-[150px]" />
      <div className="absolute top-1/4 -right-40 size-[32rem] rounded-full bg-indigo-200/30 blur-[150px]" />
      <div className="absolute bottom-[-10rem] left-1/4 size-[30rem] rounded-full bg-slate-200/50 blur-[150px]" />
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(100,116,139,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.09)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(120%_80%_at_50%_0%,black,transparent_85%)]" />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#f4f6fa] text-foreground">
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
