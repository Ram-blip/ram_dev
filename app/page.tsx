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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-16">
          <ProfileSection />
        </div>
        <div className="space-y-16">
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
