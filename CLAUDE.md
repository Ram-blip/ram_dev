# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Architecture

This is a Next.js 15 portfolio website using:
- **App Router** structure with TypeScript
- **shadcn/ui** components (configured in `components.json`)
- **Tailwind CSS v4** for styling
- **next-themes** for dark/light mode switching
- **Lucide React** for icons

### Project Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with theme provider and custom font (Satoshi)
  - `page.tsx` - Homepage with portfolio sections
- `components/` - Portfolio section components and reusable UI
  - `ui/` - shadcn/ui components (Button, Card, Badge, etc.)
  - Portfolio sections: header, profile, about, projects, experience, education, skills, footer
- `lib/utils.ts` - Utility functions (`cn` for className merging)

### Component Patterns

- Uses shadcn/ui design system with class-variance-authority for variants
- Components import from `@/` aliases (configured in tsconfig.json)
- Theme switching implemented via next-themes with system preference support
- All components follow TypeScript strict mode conventions

### Styling

- Tailwind CSS with CSS variables for theming
- Global styles in `app/globals.css`
- Component variants managed through `cva()` from class-variance-authority
- Dark/light mode classes applied automatically via ThemeProvider