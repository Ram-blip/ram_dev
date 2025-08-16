"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export function Header() {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    console.log("[v0] Current theme:", theme)
    const newTheme = theme === "dark" ? "light" : "dark"
    console.log("[v0] Setting theme to:", newTheme)
    setTheme(newTheme)
  }

  return (
    <header className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-foreground">
          Ramsundar Konety Govindarajan
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="text-foreground hover:text-muted-foreground transition-colors">
            Blog
          </Link>
          <Button variant="ghost" size="icon" onClick={handleThemeToggle} aria-label="Toggle theme">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
