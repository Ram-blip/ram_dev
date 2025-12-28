import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "LOCKR",
      subtitle: "Secure One Time Password Sharing APP",
      description:
        "LOCKR is a one-time secret and PDF sharing vault with expirations and view limits. Secrets are encrypted at rest, and decryption keys never persist on the server.",
      image: "/Project1.png",
      githubUrl: "https://github.com/Ram-blip/lockr-backend",
      liveUrl: "https://lockr-frontend.vercel.app/",
    },
    {
      title: "SafeStash",
      subtitle: "Encode London Hackathon 2024 Bounty Winner",
      description:
        "SafeStash is a hackathon-winning app for secure mobile money management using Stellar’s blockchain. Built with NextJS, Flask, and Supabase, it integrates Mobile Money APIs for seamless transactions.",
      image: "/Project2.png",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/safestash",
    },
    {
      title: "TaskFlow",
      subtitle: "AI-powered project management platform",
      description:
        "TaskFlow is an AI-driven project management tool that intelligently prioritizes and organizes tasks. Built using React, Node.js, MongoDB, and OpenAI API for smart and efficient workflow handling.",
      image: "/Project3.png",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/taskflow",
    },
    {
      title: "EcoTracker",
      subtitle: "Carbon footprint monitoring mobile app",
      description:
        "EcoTracker is a mobile app to track and analyze your carbon footprint in real time. Developed with React Native, Firebase, and Google Maps API for live environmental insights.",
      image: "/Project4.png",
      githubUrl: "https://github.com",
    },
    {
      title: "CryptoSentinel",
      subtitle: "Blockchain security analysis tool",
      description:
        "CryptoSentinel is a blockchain security tool for analyzing and detecting smart contract vulnerabilities. Built with Python, FastAPI, PostgreSQL, and Web3.py for fast, secure contract auditing.",
      image: "/Project5.png",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <section
      id="projects"
      className="rounded-3xl border border-border/50 bg-card/70 p-6 md:p-10 dark:border-border/60"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Projects
          </p>
        </div>

        <div className="divide-y divide-border/60">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="rounded-none border-0 bg-transparent shadow-none"
            >
              <CardContent className="flex flex-col gap-3 px-0 py-3 md:flex-row md:items-center md:gap-5">
                <div className="flex flex-1 flex-col gap-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {project.subtitle}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 md:justify-end">
                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live
                      </Link>
                    </Button>
                  )}
                  <Button asChild size="sm" variant="secondary">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
