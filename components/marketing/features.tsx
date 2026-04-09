import {
  Zap,
  ShieldCheck,
  Database,
  CreditCard,
  Layers,
  Code2,
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built on Next.js 16 with Turbopack. Instant HMR in dev and optimized production builds out of the box.",
  },
  {
    icon: ShieldCheck,
    title: "Auth Out of the Box",
    description:
      "Clerk integration handles sign-up, sign-in, and session management so you never write auth code again.",
  },
  {
    icon: Database,
    title: "Scalable Database",
    description:
      "MongoDB with Mongoose gives you a flexible, schema-driven data layer that scales alongside your product.",
  },
  {
    icon: CreditCard,
    title: "Payments Ready",
    description:
      "Stripe is pre-wired with webhook handling and subscription tracking. Start charging users on day one.",
  },
  {
    icon: Layers,
    title: "Beautiful UI",
    description:
      "shadcn/ui components in new-york style with Tailwind CSS v4. Fully customizable, no design debt.",
  },
  {
    icon: Code2,
    title: "TypeScript First",
    description:
      "End-to-end type safety across routes, models, and API handlers. Catch bugs before they reach production.",
  },
]

export function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
          Everything you need to ship
        </h2>
        <p className="max-w-xl text-lg text-muted-foreground">
          A production-ready stack that handles the hard parts — so you can
          focus on building your product.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-xl border bg-card p-6 transition-colors hover:bg-accent/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
