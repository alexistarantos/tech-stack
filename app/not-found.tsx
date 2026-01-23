import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center gap-6">
        {/* Main 404 Card */}
        <div className="relative flex flex-col items-center justify-center rounded-lg bg-muted p-20 sm:p-24 md:p-32 min-w-[320px] sm:min-w-[400px]">
          {/* Grid Pattern Background */}
          <div 
            className="absolute inset-0 rounded-lg"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <h1 className="text-8xl font-bold tracking-tight text-foreground sm:text-9xl md:text-[10rem]">
              404
            </h1>
            <p className="text-base font-normal text-foreground sm:text-lg">
              Page Not Found
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <Button
          variant="outline"
          className="gap-2 border-border bg-background hover:bg-accent hover:text-accent-foreground"
          asChild
        >
          <Link href="/">
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
