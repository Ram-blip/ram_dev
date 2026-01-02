import { Header } from "@/components/header"
import { ProfileSection } from "@/components/profile-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.16),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_70%)] blur-3xl" />

        <Header />
        <main className="relative mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
          <div className="space-y-10 sm:space-y-12">
            <ProfileSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
