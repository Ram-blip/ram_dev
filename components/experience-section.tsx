import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "One Community Global",
      period: "May 2025 – Present",
      logo: "/One_Community.png",
      responsibilities: [
        "Developed comprehensive unit tests with Jest and React Testing Library to verify component rendering, props handling, and edge-case behavior in the HGN frontend to boost test coverage and ensure frontend stability.",
        "Contributed to end-to-end development by coordinating with cross-functional teams, implementing robust solutions with React, Node.js, and MongoDB to enhance the experience for 1,000+ users.",
      ],
    },
    {
      title: "Exam Proctor",
      company: "University of California, Riverside",
      period: "Apr 2024 - Mar 2025 · 1 yr",
      logo: "/UCR.png",
      responsibilities: [
        "Monitored and supported large-scale online exams, resolving real-time technical issues for 100+ students weekly to maintain uninterrupted assessment delivery.",
        "Assisted students with login issues and other technical difficulties, ensuring minimal downtime during exams.",
        "Automated exam workflows via Python/Bash scripting, enabling centralized control of 50+ machines (updates, lockdowns) and cutting manual setup time by 40%.",
        "Demonstrated excellent communication skills by addressing student concerns and providing prompt feedback.",
      ],
    },
    {
      title: "Android App Developer Intern",
      company: "Exposys Data Labs",
      period: "Apr 2022 – June 2022",
      logo: "/exposys-data.png",
      responsibilities: [
        "Engineered a real-time chat feature in an Android application using Java, Android Studio, and Firebase, supporting one-on-one messaging, group chats, and media sharing for over 300 active users, ensuring a smooth and reliable user experience.",
        "Designed responsive UI layouts using XML and implemented RecyclerView with the ViewHolder pattern to ensure efficient rendering, reduce memory usage by 30%, and deliver a consistent, user-friendly experience across diverse Android devices.",
        "Optimized Firebase Realtime Database queries, improving retrieval and synchronization speed by 25%, while ensuring secure authentication with Firebase Auth.",
      ],
    },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-bold text-foreground">Experience</h2>
      </div>
      <div className="md:col-span-3">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-foreground mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
