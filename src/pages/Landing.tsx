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
      <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_-10%,#ffffff_0%,#eaf2fd_36%,#dfeaf9_68%,#e9f2fb_100%)]" />
      <div className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-sky-300/40 blur-[130px]" />
      <div className="absolute top-24 -right-40 size-[30rem] rounded-full bg-indigo-300/35 blur-[130px]" />
      <div className="absolute bottom-[-8rem] left-1/3 size-[28rem] rounded-full bg-teal-200/40 blur-[130px]" />
      <div className="absolute top-1/2 left-1/2 size-[22rem] -translate-x-1/2 rounded-full bg-cyan-200/30 blur-[120px]" />
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(120%_80%_at_50%_0%,black,transparent_85%)]" />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#eaf1fb] text-foreground">
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
