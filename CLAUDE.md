# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Next.js with Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

Add shadcn/ui components:
```bash
npx shadcn@latest add <component-name>
```

## Architecture

Next.js 16 App Router with three route groups:

- `(marketing)/` — Public landing page
- `(auth)/` — Clerk sign-in/sign-up pages (`[[...sign-in]]`, `[[...sign-up]]` catch-all routes)
- `(dashboard)/` — Protected area with `SidebarProvider` + `AppSidebar` + `Header` layout

**Marketing components** (`components/marketing/`):
- `navbar.tsx` — Sticky top nav with blur effect; auth-aware (shows Dashboard + UserButton when signed in)
- `hero.tsx` — Hero section with badge, headline, CTA buttons, AvatarGroup trust indicator, and floating product screenshots (CSS `animate-float` keyframes in `globals.css`)
- `features.tsx` — 3-column responsive feature grid (6 cards: icon + title + description)
- `cta.tsx` — Full-width gradient CTA section; auth-aware button (sign-up or dashboard)
- `footer.tsx` — 3-column footer: brand, nav links, social icons + contact email

**Marketing layout** (`app/(marketing)/layout.tsx`) and **auth layout** (`app/(auth)/layout.tsx`) both wrap content with `<Navbar>` + `<Footer>`.

**API routes:**
- `app/api/users/route.ts` — GET/POST user (upsert by Clerk ID)
- `app/api/stripe/webhooks/route.ts` — Handles `customer.subscription.*` events

**Key libraries:**
- Auth: Clerk (`@clerk/nextjs`) — use `auth()` / `currentUser()` server-side, `useUser()` client-side
- Database: MongoDB + Mongoose — connection cached in `lib/db.ts`
- Payments: Stripe — client in `lib/stripe.ts`, user subscription stored in `models/user.ts`
- UI: shadcn/ui (new-york style) + Tailwind CSS v4
- Icons: Lucide React

**User model** (`models/user.ts`) links Clerk's `clerkId` to MongoDB and stores `stripeCustomerId` + `subscriptionStatus`.

## Code Conventions

From `.cursor/rules.md`:

- **Files/dirs:** kebab-case. **Components:** PascalCase. **Functions/vars:** camelCase.
- **Booleans** must start with `is`/`has`/`should`.
- Prefer Server Components by default; use `"use client"` only when strictly necessary (interactivity, browser APIs).
- Avoid `useEffect`/`useState` unless required.
- Tailwind CSS only — no additional UI libraries unless explicitly requested (shadcn/ui is already in use).
- Functional/declarative patterns; avoid classes and unnecessary abstractions.

## Environment Variables

Required in `.env.local`:

```env
MONGODB_URI=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```
