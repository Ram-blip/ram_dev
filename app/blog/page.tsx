import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PenTool, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.16),transparent_70%)] blur-3xl" />

        <Header />

        <main className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-24 pt-12">
          <section className="rounded-3xl border border-border/60 bg-[linear-gradient(140deg,rgba(15,23,42,0.08),transparent_60%),linear-gradient(320deg,rgba(56,189,248,0.12),transparent_45%)] p-8 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-card/80">
              <PenTool className="h-6 w-6 text-muted-foreground" />
            </div>

            <h1 className="text-3xl font-semibold text-foreground">
              Blog coming soon
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              I&apos;m building a space to share software development lessons,
              detailed case studies, and project insights.
            </p>

            <div className="mx-auto mt-8 grid max-w-sm gap-3 text-left">
              {[
                "Technical tutorials",
                "Project breakdowns",
                "Development experiences",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/70 px-4 py-3 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
