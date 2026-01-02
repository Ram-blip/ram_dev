import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

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
    <section
      id="experience"
      className="rounded-3xl border border-border/50 bg-card/70 p-5 sm:p-6 md:p-10 dark:border-border/60"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)]">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Experience
          </p>
        </div>

        <div className="divide-y divide-border/60">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="rounded-none border-0 bg-transparent shadow-none"
            >
              <CardContent className="flex flex-col gap-3 px-0 py-4 md:flex-row md:items-start md:gap-5">
                <div className="flex items-center gap-3 md:w-44">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {exp.company}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    {exp.title}
                  </p>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
