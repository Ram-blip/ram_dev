import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "LOCKR",
      subtitle: "Secure One Time Password Sharing APP",
      description:
        "LOCKR is a one-time secret and PDF sharing vault with expirations and view limits. Built with React, Node.js, Express, and PostgreSQL, secrets are encrypted at rest, and decryption keys never persist on the server.",
      image: "/Project1.png",
      githubUrl: "https://github.com/Ram-blip/lockr-backend",
      liveUrl: "https://lockr-frontend.vercel.app/",
    },
    {
      title: "Spot2Tube",
      subtitle: "Spotify-to-YouTube Playlist Transfer Platform",
      description:
        "Spot2Tube is a full-stack playlist migration app built with React, Flask, and PostgreSQL that transfers Spotify playlists to YouTube using OAuth 2.0 and an async worker pipeline for long-running jobs. It uses a multi-signal fuzzy matching engine (RapidFuzz + duration scoring + keyword penalties) to rank YouTube candidates per track and minimize manual cleanup.",
      image: "/Project2.png",
      githubUrl: "https://github.com/Ram-blip/Spot2tube-Backend",
      liveUrl: "https://github.com/Ram-blip/Spot2tube-Backend",
    },
    {
      title: "DuoStream",
      subtitle: "Dual-Presenter Live Streaming Application",
      description:
        "DuoStream is a dual-presenter live streaming app built with React, Node.js, Express, WebSockets, Mediasoup, and WebRTC, using role-based permissions (presenter, participant) to scale past 70 participants with low latency. It implements a Node.js/Express backend with Socket.IO for real-time signaling, Mediasoup server/session management, and RESTful APIs for room creation.",
      image: "/Project3.png",
      githubUrl: "https://github.com/Ram-blip/Live_Streaming_Backend",
      liveUrl: "https://github.com/Ram-blip/Live_Streaming_Backend",
    },
    {
      title: "Minicov",
      subtitle: "Test suite optimization tool",
      description:
        "Built using C and Python 3, leveraging GCC compiler with coverage instrumentation (gcov) for code analysis. Containerized with Docker for reproducible execution across environments.",
      image: "/Project4.png",
      githubUrl:
        "https://github.com/Ram-blip/MiniCov-Optimized-Test-Suite-Generator",
    },
    {
      title: "Pacman AI",
      subtitle: "AI search algorithms in a maze world",
      description:
        "Pacman AI explores classic search in a maze world, finding paths to targets and efficiently collecting food. Implemented BFS, DFS, A*, and Uniform Cost Search to navigate complex layouts and solve Pacman scenarios.",
      image: "/Project5.png",
      githubUrl: "https://github.com/Ram-blip/Pacman-AI",
    },
    {
      title: "Escooter and Student Detection",
      subtitle: "UCR object detection project",
      description:
        "Built a campus class safety project to detect scooters in classrooms and count students to flag potential proxy attendance. Collected and labeled data in Roboflow with polygon annotations, then trained a YOLOv8 model for detection.",
      image: "/Project6.png",
      githubUrl: "https://github.com/Ram-blip/Scooter-Student-Detection",
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
