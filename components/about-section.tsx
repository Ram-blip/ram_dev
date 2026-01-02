

export function AboutSection() {
  return (
    <section
      id="about"
      className="rounded-3xl border border-border/50 bg-card/70 p-5 sm:p-6 md:p-10 dark:border-border/60"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)]">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            About
          </p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            I’m Ram — a software engineer who got pulled into tech the same way a lot of us got pulled into games: curiosity first, obsession second. It started back in the GTA: Vice City days, when I wasn’t just playing, I was wondering how the world on the screen even worked. That curiosity quietly turned into building things: HTML, CSS, JavaScript… then bigger projects, real systems, real users, real bugs.
          </p>
          <p>
            I like building systems that scale. I also like debugging. Not the pain. The payoff. I find the root cause and fix it cleanly. Lately I’ve been diving into distributed systems. I recently read{" "}
            <em>The Google File System</em>. It reminded me that failures are normal.
          </p>
          <p>
            When I’m not coding, I’m either gaming or learning something technical. Bikes, cars, and audio gear keep my attention. That includes headphones, amps, and DACs. I prefer specs over hype. Power, impedance, and clean output matter. </p>
            <p>
              Want to build something real? I’m open to early-career SDE roles. Feel free to reach me at{" "}
            <a
              href="mailto:ramsundar.konety@gmail.com"
              className="text-foreground underline hover:no-underline"
            >
              ramsundar.konety@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
