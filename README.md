# Peak Ascend Hub

Website for Peak Training & Ascent - leadership development and facilitation services.

## Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite** - build tooling
- **Tailwind CSS** - styling
- **shadcn/ui** - component library (Radix UI primitives)
- **React Router** - client-side routing

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
│   └── ui/        # shadcn/ui components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utilities
└── assets/        # Images, fonts
```

## Deployment

Deployed to GitHub Pages via GitHub Actions on push to `main`.

Live site: https://peakfacilitation.github.io/peak-ascend-hub/
