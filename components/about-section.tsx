

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-bold text-foreground">About</h2>
      </div>
      <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Hi there, I&apos;m Ram — a Software Engineer with a Master&apos;s in Computer Engineering from UC Riverside. I enjoy
          bringing ideas to life through software development and find energy in solving complex problems, especially
          the satisfaction of debugging and fixing my own mistakes. Recently, I built a secure password-sharing platform
          using Next.js, Node.js, Express, and Redis, reflecting my interest in building scalable and reliable systems.
        </p>
        <p>
          Outside of coding, I enjoy reading, long walks, and traveling. I&apos;m currently seeking new grad SDE
          opportunities where I can build scalable solutions and contribute fully to the Product and the team. Feel free
          to reach me at{" "}
          <a href="mailto:rkone003@ucr.edu" className="text-foreground underline hover:no-underline">
            rkone003@ucr.edu
          </a>
          .
        </p>
        <div className="pt-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/resume.pdf" target="_blank">
              View Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
