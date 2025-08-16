import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "GitShare",
      subtitle: "Easily share your private GitHub repositories",
      description:
        "Built with NextJS, Django, PostgreSQL and self hosted using Docker.",
      image: "/Project1.png",
      githubUrl: "https://github.com",
    },
    {
      title: "SafeStash",
      subtitle: "Encode London Hackathon 2024 Bounty Winner",
      description:
        "Built with NextJS, Flask, Supbase, utilizing Mobile Money APIs and Stellar's network.",
      image: "/Project2.png",
      githubUrl: "https://github.com",
    },
    {
      title: "TaskFlow",
      subtitle: "AI-powered project management platform",
      description:
        "Built with React, Node.js, MongoDB, and OpenAI API for intelligent task prioritization.",
      image: "/Project3.png",
      githubUrl: "https://github.com",
    },
    {
      title: "EcoTracker",
      subtitle: "Carbon footprint monitoring mobile app",
      description:
        "Developed using React Native, Firebase, and Google Maps API with real-time analytics.",
      image: "/Project4.png",
      githubUrl: "https://github.com",
    },
    {
      title: "CryptoSentinel",
      subtitle: "Blockchain security analysis tool",
      description:
        "Built with Python, FastAPI, PostgreSQL, and Web3.py for smart contract vulnerability detection.",
      image: "/Project5.png",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {/* Left column title */}
      <div className="md:col-span-1">
        <h2 className="text-lg font-bold text-foreground">Projects</h2>
      </div>

      {/* Right column stacked cards */}
      <div className="md:col-span-3">
        <div className="space-y-2">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label={`${project.title} repository`}
            >
              <Card className="overflow-hidden rounded-md border border-border/50 bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                {/* Even smaller image height */}
                <div className="w-full flex items-center justify-center bg-card/40">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="block w-full max-h-20 md:max-h-24 object-contain"
                  />
                </div>

                <CardContent className="px-3 pt-1 pb-2">
                  {/* Title – Subtitle inline */}
                  <h3 className="font-semibold text-lg text-foreground">
                    {project.title}
                    <span className="ml-2 text-base font-normal text-muted-foreground">
                      – {project.subtitle}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mt-1 text-sm text-muted-foreground leading-snug">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
