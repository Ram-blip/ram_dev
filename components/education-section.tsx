import { Card, CardContent } from "@/components/ui/card"

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
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-bold text-foreground">Education</h2>
      </div>
      <div className="md:col-span-3">
        <div className="space-y-6">
          {educationEntries.map((edu, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.institution} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {edu.description && (
                        <li className="flex items-start gap-2">
                          <span className="text-foreground mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0" />
                          {edu.description}
                        </li>
                      )}
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0" />
                        Overall GPA: <span className="font-medium">{edu.grade}</span>
                      </li>
                      {edu.coursework && (
                        <li className="flex items-start gap-2">
                          <span className="text-foreground mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0" />
                          Relevant Coursework: {edu.coursework}
                        </li>
                      )}
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
