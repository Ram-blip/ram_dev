export function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "JavaScript", "C/C++", "HTML/CSS"],
    },
    {
      category: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Django",
        "FastAPI",
        "Flask",
        "PostgreSQL",
        "SQL",
        "REST API",
      ],
    },
    {
      category: "Tools/Cloud",
      skills: ["Git", "Linux", "Docker", "AWS", "Azure", "Redis", "GraphQL"],
    },
  ]

  return (
    <section
      id="skills"
      className="rounded-3xl border border-border/50 bg-card/70 p-6 md:p-10 dark:border-border/60"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)]">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Skills
          </p>
        </div>

        <div className="divide-y divide-border/60">
          {skillCategories.map((category, index) => (
            <div key={index} className="py-3 first:pt-0 last:pb-0">
              <p className="text-sm font-semibold text-foreground">
                {category.category}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
