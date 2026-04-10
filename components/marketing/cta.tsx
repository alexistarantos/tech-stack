import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { auth } from "@clerk/nextjs/server"
import { Button } from "@/components/ui/button"

export async function Cta() {
  const { userId } = await auth()
  const isLoggedIn = !!userId

  return (
    <section className="bg-linear-to-br from-primary via-primary/90 to-primary/70">
      <div className="max-w-6xl mx-auto px-4 py-24 flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
          Ready to ship faster?
        </h2>
        <p className="max-w-xl text-lg text-primary-foreground/80">
          Everything you need is already set up. Jump in and start building your product today.
        </p>
        <Button size="lg" variant="secondary" className="gap-2" asChild>
          <Link href={isLoggedIn ? "/dashboard" : "/sign-up"}>
            {isLoggedIn ? "Go to Dashboard" : "Get Started Free"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
