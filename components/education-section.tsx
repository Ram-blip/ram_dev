import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function EducationSection() {
  const educationEntries = [
    {
      institution: "University of California, Riverside",
      degree: "Master of Science - MS, Computer Engineering",
      period: "Sep 2023 - Mar 2025",
      grade: "3.85/4",
      logo: "/UCR.png",
      description:
        "One of my aims during my UG was to do a masters in the USA. I especially enjoyed courses like Advanced Operating Systems, Advanced Software Testing & Analysis, and Database Management Systems, which deepened my skills in scalable system design, software reliability, and efficient data handling.",
    },
    {
      institution: "Anna University (Easwari Engineering College)",
      degree: "Bachelor's degree, Computer Science",
      period: "Aug 2019 - Jun 2023",
      grade: "8.92/10",
      logo: "/Anna_University.png",
      coursework:
        "Data Structures and Algorithms, Database Management Systems, Software Engineering, Problem-solving through Python programming, Application development laboratory, Design and analysis of Algorithms, Operating Systems, Computer Architecture.",
    },
  ]

  return (
    <section
      id="education"
      className="rounded-3xl border border-border/50 bg-card/70 p-4 sm:p-5 md:p-7 dark:border-border/60"
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)]">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Education
          </p>
        </div>

        <div className="divide-y divide-border/60">
          {educationEntries.map((edu, index) => (
            <Card
              key={index}
              className="rounded-none border-0 bg-transparent shadow-none"
            >
              <CardContent className="flex flex-col gap-2 px-0 py-2 md:flex-row md:items-start md:gap-3">
                <div className="flex items-center gap-2 md:w-44">
                  <Image
                    src={edu.logo || "/placeholder.svg"}
                    alt={`${edu.institution} logo`}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-muted-foreground">{edu.period}</p>
                  </div>
                </div>

                <div className="flex-1 space-y-1">
                  <p className="text-sm font-semibold text-foreground">
                    {edu.degree}
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                    {index === 0 && (
                      <li>
                        Overall GPA:{" "}
                        <span className="font-medium text-foreground">
                          {edu.grade}
                        </span>
                      </li>
                    )}
                    {edu.description && (
                      <li>{edu.description}</li>
                    )}
                    {index !== 0 && (
                      <li>
                        Overall GPA:{" "}
                        <span className="font-medium text-foreground">
                          {edu.grade}
                        </span>
                      </li>
                    )}
                    {edu.coursework && (
                      <li>Relevant Coursework: {edu.coursework}</li>
                    )}
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
