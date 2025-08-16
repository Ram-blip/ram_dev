import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "Javascript", "C/C++", "HTML/CSS"],
    },
    {
      category: "Frontend",
      skills: ["ReactJS", "TailwindCSS", "NextJS", "Redux", "TypeScript"],
    },
    {
      category: "Backend",
      skills: ["Django", "PostgreSQL", "NodeJS", "Flask", "REST API", "ExpressJS", "FastAPI", "SQL"],
    },
    {
      category: "Others",
      skills: ["Git", "AWS", "Redis", "Docker", "Linux", "GraphQL"],
    },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-bold text-foreground">Skills</h2>
      </div>
      <div className="md:col-span-3">
        <div className="space-y-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4">
              <div className="w-24 flex-shrink-0">
                <h3 className="font-medium text-foreground">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
