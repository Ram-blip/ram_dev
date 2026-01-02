import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-8 sm:px-6 sm:py-10 md:flex-row md:items-center">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Ramsundar Konety Govindarajan
          </p>
          <p className="text-xs text-muted-foreground">
            (c) 2025. Vibe coding is not real.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/ramskg"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/60 bg-card/70 p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>

          <Link
            href="https://github.com/Ram-blip"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/60 bg-card/70 p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.465-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.625-5.475 5.922.43.372.823 1.103.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>

          <Link
            href="https://x.com/rxmsundar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/60 bg-card/70 p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.162 0H1.838C.823 0 0 .823 0 1.838v20.324C0 23.177.823 24 1.838 24h20.324C23.177 24 24 23.177 24 22.162V1.838C24 .823 23.177 0 22.162 0zM17.152 20.16l-4.42-6.077-4.67 6.077H5.74l6.623-8.606L5.996 3.84h3.037l4.16 5.717 4.39-5.717h2.226l-6.18 7.97 6.683 9.35h-3.163z" />
            </svg>
            <span className="sr-only">X</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
