import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "GitShare",
      subtitle: "Easily share your private GitHub repositories",
      description: "Built with NextJS, Django, PostgreSQL and self hosted using Docker.",
      image: "/Project1.png",
      backgroundColor: "bg-black",
      githubUrl: "https://github.com",
    },
    {
      title: "SafeStash",
      subtitle: "Encode London Hackathon 2024 Bounty Winner",
      description: "Built with NextJS, Flask, Supbase, utilizing Mobile Money APIs and Stellar's network.",
      image: "/Project2.png",
      backgroundColor: "bg-slate-800",
      githubUrl: "https://github.com",
    },
    {
      title: "TaskFlow",
      subtitle: "AI-powered project management platform",
      description: "Built with React, Node.js, MongoDB, and OpenAI API for intelligent task prioritization.",
      image: "/Project3.png",
      backgroundColor: "bg-blue-600",
      githubUrl: "https://github.com",
    },
    {
      title: "EcoTracker",
      subtitle: "Carbon footprint monitoring mobile app",
      description: "Developed using React Native, Firebase, and Google Maps API with real-time analytics.",
      image: "/Project4.png",
      backgroundColor: "bg-green-600",
      githubUrl: "https://github.com",
    },
    {
      title: "CryptoSentinel",
      subtitle: "Blockchain security analysis tool",
      description: "Built with Python, FastAPI, PostgreSQL, and Web3.py for smart contract vulnerability detection.",
      image: "/Project5.png",
      backgroundColor: "bg-purple-700",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-bold text-foreground">Projects</h2>
      </div>
      <div className="md:col-span-3">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <Link key={index} href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className={`h-32 ${project.backgroundColor} flex items-center justify-center p-3`}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover border-2 border-white rounded"
                />
              </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.subtitle}</p>
                  <p className="text-xs text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
